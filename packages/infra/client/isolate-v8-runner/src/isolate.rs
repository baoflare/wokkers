use std::{
	fs::File,
	io::{BufReader, Write},
	net::Ipv4Addr,
	os::fd::FromRawFd,
	path::{Path, PathBuf},
	rc::Rc,
	result::Result::{Err, Ok},
	sync::{mpsc as smpsc, Arc},
	thread::JoinHandle,
};

use actor_kv::ActorKv;
use anyhow::*;
use deno_core::{
	error::JsError, unsync::MaskFutureAsSend, v8::CreateParams, ModuleSpecifier, StaticModuleLoader,
};
use deno_runtime::{
	deno_fs::InMemoryFs,
	deno_io::{Stdio, StdioPipe},
	deno_permissions::{
		self, NetListenDescriptor, Permissions, PermissionsContainer, UnaryPermission,
	},
	permissions::RuntimePermissionDescriptorParser,
	worker::{MainWorker, MainWorkerTerminateHandle, WorkerOptions, WorkerServiceOptions},
};
use nix::{libc, unistd::pipe};
use pegboard::protocol;
use pegboard_config::isolate_runner as config;
use tokio::{fs, sync::mpsc};
use uuid::Uuid;

use crate::{ext, log_shipper, utils};

pub fn run(
	config: config::Config,
	actor_id: Uuid,
	owner_tx: mpsc::Sender<protocol::ActorOwner>,
	terminate_tx: mpsc::Sender<MainWorkerTerminateHandle>,
) -> Result<()> {
	let actor_path = config.actors_path.join(actor_id.to_string());

	// Write PID to file
	std::fs::write(
		actor_path.join("pid"),
		std::process::id().to_string().as_bytes(),
	)?;

	// Read config
	let config_data = std::fs::read_to_string(actor_path.join("config.json"))
		.context("Failed to read config file")?;
	let actor_config = serde_json::from_str::<config::actor::Config>(&config_data)
		.context("Failed to parse config file")?;

	owner_tx.try_send(actor_config.owner.clone())?;

	let (shutdown_tx, shutdown_rx) = smpsc::sync_channel(1);

	// Start log shipper
	let (msg_tx, log_shipper_thread) =
		if let Some(vector_socket_addr) = &actor_config.vector_socket_addr {
			let (msg_tx, msg_rx) = smpsc::sync_channel::<log_shipper::ReceivedMessage>(
				log_shipper::MAX_BUFFER_BYTES / log_shipper::MAX_LINE_BYTES,
			);
			let log_shipper = log_shipper::LogShipper {
				actor_id,
				shutdown_rx,
				msg_rx,
				vector_socket_addr: vector_socket_addr.clone(),
				owner: actor_config.owner.clone(),
			};
			let log_shipper_thread = log_shipper.spawn();

			(Some(msg_tx), Some(log_shipper_thread))
		} else {
			(None, None)
		};

	// Run the isolate
	let exit_code = match create_and_run_current_thread(run_inner(
		config,
		actor_path.clone(),
		actor_id,
		terminate_tx,
		msg_tx.clone(),
		actor_config,
	))? {
		Result::Ok(exit_code) => exit_code,
		Err(err) => {
			tracing::error!(?actor_id, "Run isolate failed: {err:?}");
			log_shipper::send_message(
				actor_id,
				&msg_tx,
				None,
				log_shipper::StreamType::StdErr,
				"Fatal error. Aborting.".into(),
			);

			1
		}
	};

	// Shutdown all threads
	match shutdown_tx.send(()) {
		Result::Ok(_) => {
			tracing::info!(?actor_id, "Sent shutdown signal");
		}
		Err(err) => {
			tracing::error!(?actor_id, "Failed to send shutdown signal: {err:?}");
		}
	}

	// Wait for log shipper to finish
	drop(msg_tx);
	if let Some(log_shipper_thread) = log_shipper_thread {
		match log_shipper_thread.join() {
			Result::Ok(_) => {}
			Err(err) => {
				tracing::error!(?actor_id, "Log shipper failed: {err:?}")
			}
		}
	}

	// Write exit code
	std::fs::write(
		actor_path.join("exit-code"),
		exit_code.to_string().as_bytes(),
	)?;

	Ok(())
}

pub async fn run_inner(
	config: config::Config,
	actor_path: PathBuf,
	actor_id: Uuid,
	terminate_tx: mpsc::Sender<MainWorkerTerminateHandle>,
	msg_tx: Option<smpsc::SyncSender<log_shipper::ReceivedMessage>>,
	actor_config: config::actor::Config,
) -> Result<i32> {
	tracing::info!(?actor_id, "starting isolate");

	// Init KV store (create or open)
	let mut kv = ActorKv::new(utils::fdb_handle(&config)?, actor_config.owner.clone());
	kv.init().await?;

	tracing::info!(?actor_id, "isolate kv initialized");

	// Should match the path from `Actor::download_image` in manager/src/actor/setup.rs
	let entrypoint = actor_path.join("js-bundle").join("index.js");

	// Load index.js
	let script_content = match fs::read_to_string(&entrypoint).await {
		Ok(script_content) => script_content,
		Err(err) => {
			tracing::error!(?err, "Failed to load {}", entrypoint.display());

			log_shipper::send_message(
				actor_id,
				&msg_tx,
				None,
				log_shipper::StreamType::StdErr,
				"Failed to load /index.js".into(),
			);

			return Ok(1);
		}
	};

	// Load script into a static module loader. No dynamic scripts can be loaded this way.
	let main_module = ModuleSpecifier::from_file_path(Path::new("/index.js"))
		.map_err(|_| anyhow!("invalid file name"))?;
	let loader = StaticModuleLoader::new([(main_module.clone(), script_content)]);

	// TODO(RVT-4192): Replace with a custom fs that only reads from js-bundle
	let fs = Arc::new(InMemoryFs::default());

	// Build permissions
	let permission_desc_parser = Arc::new(RuntimePermissionDescriptorParser::new(fs.clone()));
	let mut permissions = Permissions::none_without_prompt();

	// Outbound traffic
	permissions.net = UnaryPermission::allow_all();
	// Sockets
	let loopback = Ipv4Addr::new(0, 0, 0, 0);
	permissions.net_listen = Permissions::new_unary::<NetListenDescriptor>(
		Some(
			actor_config
				.ports
				.iter()
				.map(|port| {
					NetListenDescriptor::from_ipv4(
						loopback,
						Some(port.target),
						match port.protocol {
							protocol::TransportProtocol::Tcp => deno_permissions::Protocol::Tcp,
							protocol::TransportProtocol::Udp => deno_permissions::Protocol::Udp,
						},
					)
				})
				.collect(),
		),
		None,
		false,
	)?;
	// We use a custom in-memory env
	permissions.env = UnaryPermission::allow_all();

	// Create pipes
	let (stdout_read_fd, stdout_write_fd) = pipe()?;
	let (stderr_read_fd, stderr_write_fd) = pipe()?;

	// SAFETY: These are created by pipes
	let stdout_reader = unsafe { std::fs::File::from_raw_fd(stdout_read_fd) };
	let stdout_writer = unsafe { std::fs::File::from_raw_fd(stdout_write_fd) };
	let stderr_reader = unsafe { std::fs::File::from_raw_fd(stderr_read_fd) };
	let stderr_writer = unsafe { std::fs::File::from_raw_fd(stderr_write_fd) };
	let mut stderr_writer2 = stderr_writer.try_clone()?;

	let isolate_stdout = BufReader::new(stdout_reader);
	let isolate_stderr = BufReader::new(stderr_reader);

	// Ship stdout & stderr logs
	let stdout_handle = log_shipper::ship_logs(
		actor_id,
		msg_tx.clone(),
		log_shipper::StreamType::StdOut,
		isolate_stdout,
	);
	let stderr_handle = log_shipper::ship_logs(
		actor_id,
		msg_tx.clone(),
		log_shipper::StreamType::StdErr,
		isolate_stderr,
	);

	// Build worker. If this errors its likely a problem with the runtime and not user input
	let mut worker = MainWorker::try_bootstrap_from_options(
		main_module.clone(),
		WorkerServiceOptions {
			module_loader: Rc::new(loader),
			permissions: PermissionsContainer::new(permission_desc_parser, permissions),
			blob_store: Default::default(),
			broadcast_channel: Default::default(),
			feature_checker: Default::default(),
			node_services: Default::default(),
			npm_process_state_provider: Default::default(),
			root_cert_store_provider: Default::default(),
			shared_array_buffer_store: Default::default(),
			compiled_wasm_module_store: Default::default(),
			v8_code_cache: Default::default(),
			fs,
		},
		WorkerOptions {
			extensions: vec![
				ext::kv::rivet_kv::init_ops_and_esm(kv),
				ext::runtime::rivet_runtime::init_ops_and_esm(),
			],
			// Configure memory limits
			create_params: {
				fn floor_align(value: usize, alignment: usize) -> usize {
					value & !(alignment - 1)
				}

				// Memory must be aligned with PAGESIZE
				let page_size = unsafe { libc::sysconf(libc::_SC_PAGESIZE) }.try_into()?;
				let mem = floor_align(actor_config.resources.memory.try_into()?, page_size);
				let mem_max = floor_align(actor_config.resources.memory_max.try_into()?, page_size);

				Some(CreateParams::default().heap_limits(mem, mem_max))
			},
			stdio: Stdio {
				// TODO: Make this read from /dev/null instead
				stdin: StdioPipe::inherit(),
				stdout: StdioPipe::file(stdout_writer),
				stderr: StdioPipe::file(stderr_writer),
			},
			env: actor_config.env,
			..Default::default()
		},
	)?;

	// Send terminate handle to watcher task
	terminate_tx.send(worker.terminate_handle().clone()).await?;
	drop(terminate_tx);

	// First step preloads the module. This can throw a JS error from certain syntax.
	match worker.preload_main_module(&main_module).await {
		Ok(module_id) => {
			tracing::info!(?actor_id, "Isolate ready");

			// Second step evaluates the module and possibly runs it. Sometimes the event loop continues
			// running and sometimes it doesn't
			let res = worker.evaluate_module(module_id).await;

			if worker.is_terminated() {
				tracing::info!(?actor_id, "Isolate terminated");
			} else {
				if let Err(err) = res {
					tracing::info!(?actor_id, "Isolate execution failed");

					runtime_error(&mut stderr_writer2, &mut worker, err)?;
				}

				// Third step continues running the event loop until stopped. We do this even after an error
				// in case a beforeunload event handler was registered.
				loop {
					let res = worker.run_event_loop(Default::default()).await;

					if worker.is_terminated() {
						tracing::info!(?actor_id, "Isolate terminated");
						break;
					}

					if let Err(err) = res {
						tracing::info!(?actor_id, "Isolate execution failed");

						runtime_error(&mut stderr_writer2, &mut worker, err)?;
					}

					// We dispatch the beforeunload event then run the event loop again
					match worker.dispatch_beforeunload_event() {
						Ok(web_continue) => {
							if !web_continue {
								break;
							}
						}
						Err(err) => {
							tracing::info!(?actor_id, "Dispatch beforeunload event failed");

							runtime_error(&mut stderr_writer2, &mut worker, err)?;

							break;
						}
					}
				}
			}
		}
		Err(err) => {
			tracing::info!(?actor_id, "Isolate preload failed");

			match err.downcast::<JsError>() {
				// JS error
				Ok(err) => runtime_error(&mut stderr_writer2, &mut worker, err.into())?,
				Err(err) => {
					// Also JS error
					if deno_core::error::get_custom_error_class(&err).is_some() {
						runtime_error(&mut stderr_writer2, &mut worker, err)?;
					}
					// Fatal error
					else {
						return Err(err);
					}
				}
			}
		}
	}

	// For good measure
	worker.v8_isolate().terminate_execution();

	tracing::info!(?actor_id, "Isolate complete");

	let exit_code = worker.exit_code();

	// Drop worker and writer so the stdout and stderr pipes close
	drop(worker);

	wait_logs_complete(actor_id, stderr_writer2, stdout_handle, stderr_handle)?;

	Ok(exit_code)
}

fn runtime_error(stderr_writer: &mut File, worker: &mut MainWorker, err: Error) -> Result<()> {
	// Write final error to stderr
	stderr_writer.write_all(err.to_string().as_bytes())?;

	// Update error code if not already errored
	if worker.exit_code() == 0 {
		worker.set_exit_code(1);
	}

	Ok(())
}

/// Waits for logs to be written and log shipper threads to complete.
fn wait_logs_complete(
	actor_id: Uuid,
	mut stderr_writer2: File,
	stdout_handle: JoinHandle<()>,
	stderr_handle: JoinHandle<()>,
) -> Result<()> {
	stderr_writer2.flush()?;
	drop(stderr_writer2);

	// Wait for threads to finish
	match stdout_handle.join() {
		Result::Ok(_) => {}
		Err(err) => {
			tracing::error!(?actor_id, "stdout thread panicked: {err:?}");
		}
	}
	match stderr_handle.join() {
		Result::Ok(_) => {}
		Err(err) => {
			tracing::error!(?actor_id, "stderr thread panicked: {err:?}");
		}
	}

	Ok(())
}

// Copied from deno-runtime tokio_util.rs
fn create_basic_runtime() -> Result<tokio::runtime::Runtime> {
	let event_interval = 61;
	let global_queue_interval = 31;
	let max_io_events_per_tick = 1024;

	tokio::runtime::Builder::new_current_thread()
		.enable_io()
		.enable_time()
		.event_interval(event_interval)
		.global_queue_interval(global_queue_interval)
		.max_io_events_per_tick(max_io_events_per_tick)
		// This limits the number of threads for blocking operations (like for
		// synchronous fs ops) or CPU bound tasks like when we run dprint in
		// parallel for deno fmt.
		// The default value is 512, which is an unhelpfully large thread pool. We
		// don't ever want to have more than a couple dozen threads.
		.max_blocking_threads(32)
		.build()
		.map_err(Into::into)
}

// Copied from deno-runtime tokio_util.rs
#[inline(always)]
fn create_and_run_current_thread<F, R>(future: F) -> Result<R>
where
	F: std::future::Future<Output = R> + 'static,
	R: Send + 'static,
{
	let rt = create_basic_runtime()?;

	// Since this is the main future, we want to box it in debug mode because it tends to be fairly
	// large and the compiler won't optimize repeated copies. We also make this runtime factory
	// function #[inline(always)] to avoid holding the unboxed, unused future on the stack.

	#[cfg(debug_assertions)]
	// SAFETY: this is guaranteed to be running on a current-thread executor
	let future = Box::pin(unsafe { MaskFutureAsSend::new(future) });

	#[cfg(not(debug_assertions))]
	// SAFETY: this is guaranteed to be running on a current-thread executor
	let future = unsafe { MaskFutureAsSend::new(future) };

	let join_handle = rt.spawn(future);

	let r = rt.block_on(join_handle)?.into_inner();
	// Forcefully shutdown the runtime - we're done executing JS code at this
	// point, but there might be outstanding blocking tasks that were created and
	// latered "unrefed". They won't terminate on their own, so we're forcing
	// termination of Tokio runtime at this point.
	rt.shutdown_background();

	Ok(r)
}
