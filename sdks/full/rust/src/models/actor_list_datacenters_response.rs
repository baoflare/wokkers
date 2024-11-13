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
pub struct ActorListDatacentersResponse {
	#[serde(rename = "datacenters")]
	pub datacenters: Vec<crate::models::ActorDatacenter>,
}

impl ActorListDatacentersResponse {
	pub fn new(datacenters: Vec<crate::models::ActorDatacenter>) -> ActorListDatacentersResponse {
		ActorListDatacentersResponse { datacenters }
	}
}
