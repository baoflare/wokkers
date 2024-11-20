/*
 * Rivet API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 *
 * Generated by: https://openapi-generator.tech
 */

/// CloudVersionConfig : Cloud configuration for a given version.

#[derive(Clone, Debug, PartialEq, Default, Serialize, Deserialize)]
pub struct CloudVersionConfig {
	#[serde(rename = "cdn", skip_serializing_if = "Option::is_none")]
	pub cdn: Option<Box<crate::models::CloudVersionCdnConfig>>,
	#[serde(rename = "engine", skip_serializing_if = "Option::is_none")]
	pub engine: Option<Box<crate::models::CloudVersionEngineConfig>>,
	#[serde(rename = "identity", skip_serializing_if = "Option::is_none")]
	pub identity: Option<Box<crate::models::CloudVersionIdentityConfig>>,
	/// KV configuration for a given version.
	#[serde(rename = "kv", skip_serializing_if = "Option::is_none")]
	pub kv: Option<serde_json::Value>,
	#[serde(rename = "matchmaker", skip_serializing_if = "Option::is_none")]
	pub matchmaker: Option<Box<crate::models::CloudVersionMatchmakerConfig>>,
	#[serde(rename = "scripts", skip_serializing_if = "Option::is_none")]
	pub scripts: Option<::std::collections::HashMap<String, String>>,
}

impl CloudVersionConfig {
	/// Cloud configuration for a given version.
	pub fn new() -> CloudVersionConfig {
		CloudVersionConfig {
			cdn: None,
			engine: None,
			identity: None,
			kv: None,
			matchmaker: None,
			scripts: None,
		}
	}
}
