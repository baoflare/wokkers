use api_helper::define_router;
use hyper::{Body, Request, Response};
use rivet_api::models;
use uuid::Uuid;

pub mod clusters;
pub mod login;

pub async fn handle(
	shared_client: chirp_client::SharedClientHandle,
	pools: rivet_pools::Pools,
	cache: rivet_cache::Cache,
	ray_id: uuid::Uuid,
	request: Request<Body>,
) -> Result<Response<Body>, http::Error> {
	let response = Response::builder();

	// Handle route
	Router::handle(shared_client, pools, cache, ray_id, request, response).await
}

define_router! {
	routes: {
		"login": {
			POST: login::login(
				body: models::AdminLoginRequest,
			),
		},

		"clusters": {
			GET: clusters::list(),
			POST: clusters::create(
				body: models::AdminClustersCreateRequest,
			),
		},

		"clusters" / "server_ips": {
			GET: clusters::server_ips(
				query: clusters::ServerIpsQuery,
			),
		},

		"clusters" / Uuid / "datacenters": {
			GET: clusters::datacenters::list(),
			POST: clusters::datacenters::create(
				body: models::AdminClustersDatacentersCreateRequest,
			),
		},

		"clusters" / Uuid / "datacenters" / Uuid / "taint": {
			GET: clusters::datacenters::taint(),
		},
	},
}
