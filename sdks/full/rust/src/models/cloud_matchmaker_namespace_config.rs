/*
 * Rivet API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 *
 * Generated by: https://openapi-generator.tech
 */

/// CloudMatchmakerNamespaceConfig : Matchmaker configuration for a given namespace.

#[derive(Clone, Debug, PartialEq, Default, Serialize, Deserialize)]
pub struct CloudMatchmakerNamespaceConfig {
	/// Unsigned 32 bit integer.
	#[serde(rename = "lobby_count_max")]
	pub lobby_count_max: i32,
	/// Unsigned 32 bit integer.
	#[serde(rename = "max_players_per_client")]
	pub max_players_per_client: i32,
	/// Unsigned 32 bit integer.
	#[serde(rename = "max_players_per_client_hosting")]
	pub max_players_per_client_hosting: i32,
	/// Unsigned 32 bit integer.
	#[serde(rename = "max_players_per_client_proxy")]
	pub max_players_per_client_proxy: i32,
	/// Unsigned 32 bit integer.
	#[serde(rename = "max_players_per_client_tor")]
	pub max_players_per_client_tor: i32,
	/// Unsigned 32 bit integer.
	#[serde(rename = "max_players_per_client_vpn")]
	pub max_players_per_client_vpn: i32,
}

impl CloudMatchmakerNamespaceConfig {
	/// Matchmaker configuration for a given namespace.
	pub fn new(
		lobby_count_max: i32,
		max_players_per_client: i32,
		max_players_per_client_hosting: i32,
		max_players_per_client_proxy: i32,
		max_players_per_client_tor: i32,
		max_players_per_client_vpn: i32,
	) -> CloudMatchmakerNamespaceConfig {
		CloudMatchmakerNamespaceConfig {
			lobby_count_max,
			max_players_per_client,
			max_players_per_client_hosting,
			max_players_per_client_proxy,
			max_players_per_client_tor,
			max_players_per_client_vpn,
		}
	}
}
