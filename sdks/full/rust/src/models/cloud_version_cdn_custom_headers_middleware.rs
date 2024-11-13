/*
 * Rivet API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 *
 * Generated by: https://openapi-generator.tech
 */

#[derive(Clone, Debug, PartialEq, Default, Serialize, Deserialize)]
pub struct CloudVersionCdnCustomHeadersMiddleware {
	#[serde(rename = "headers")]
	pub headers: Vec<crate::models::CloudVersionCdnHeader>,
}

impl CloudVersionCdnCustomHeadersMiddleware {
	pub fn new(
		headers: Vec<crate::models::CloudVersionCdnHeader>,
	) -> CloudVersionCdnCustomHeadersMiddleware {
		CloudVersionCdnCustomHeadersMiddleware { headers }
	}
}
