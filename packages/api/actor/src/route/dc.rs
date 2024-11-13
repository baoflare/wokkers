use api_helper::{anchor::WatchIndexQuery, ctx::Ctx};
use rivet_api::models;
use rivet_operation::prelude::*;

use crate::{
	auth::{Auth, CheckOutput},
	utils::build_global_query_compat,
};

use super::GlobalQuery;

// MARK: GET /datacenters
pub async fn list(
	ctx: Ctx<Auth>,
	_watch_index: WatchIndexQuery,
	query: GlobalQuery,
) -> GlobalResult<models::ActorListDatacentersResponse> {
	let CheckOutput { game_id, .. } = ctx.auth().check(ctx.op_ctx(), &query, false).await?;

	let cluster_res = ctx
		.op(cluster::ops::get_for_game::Input {
			game_ids: vec![game_id],
		})
		.await?;
	let cluster_id = unwrap!(cluster_res.games.first()).cluster_id;

	let cluster_dcs_res = ctx
		.op(cluster::ops::datacenter::list::Input {
			cluster_ids: vec![cluster_id],
		})
		.await?;
	let cluster_dcs = unwrap!(cluster_dcs_res.clusters.first())
		.datacenter_ids
		.clone();

	let mut dcs_res = ctx
		.op(cluster::ops::datacenter::get::Input {
			datacenter_ids: cluster_dcs,
		})
		.await?;
	dcs_res.datacenters.sort_by_key(|x| x.name_id.clone());

	let datacenters = dcs_res
		.datacenters
		.into_iter()
		.map(|dc| models::ActorDatacenter {
			id: dc.datacenter_id,
			slug: dc.name_id,
			name: dc.display_name,
		})
		.collect::<Vec<_>>();

	Ok(models::ActorListDatacentersResponse { datacenters })
}

pub async fn list_deprecated(
	ctx: Ctx<Auth>,
	game_id: Uuid,
	env_id: Uuid,
	watch_index: WatchIndexQuery,
) -> GlobalResult<models::ActorListDatacentersResponse> {
	let global = build_global_query_compat(&ctx, game_id, env_id).await?;
	list(ctx, watch_index, global).await
}
