/*
 * Rivet API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 *
 * Generated by: https://openapi-generator.tech
 */

/// CloudVersionMatchmakerLobbyGroupRuntime : **Deprecated: use GameMode instead** A union representing the runtime a game mode runs on.

#[derive(Clone, Debug, PartialEq, Default, Serialize, Deserialize)]
pub struct CloudVersionMatchmakerLobbyGroupRuntime {
	#[serde(rename = "docker", skip_serializing_if = "Option::is_none")]
	pub docker: Option<Box<crate::models::CloudVersionMatchmakerLobbyGroupRuntimeDocker>>,
}

impl CloudVersionMatchmakerLobbyGroupRuntime {
	/// **Deprecated: use GameMode instead** A union representing the runtime a game mode runs on.
	pub fn new() -> CloudVersionMatchmakerLobbyGroupRuntime {
		CloudVersionMatchmakerLobbyGroupRuntime { docker: None }
	}
}
