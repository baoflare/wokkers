/*
 * Rivet API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 *
 * Generated by: https://openapi-generator.tech
 */

/// CloudBootstrapOrigins : Origins used to build URLs from

#[derive(Clone, Debug, PartialEq, Default, Serialize, Deserialize)]
pub struct CloudBootstrapOrigins {
	#[serde(rename = "hub")]
	pub hub: String,
}

impl CloudBootstrapOrigins {
	/// Origins used to build URLs from
	pub fn new(hub: String) -> CloudBootstrapOrigins {
		CloudBootstrapOrigins { hub }
	}
}
