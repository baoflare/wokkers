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
pub struct AdminClustersCreateResponse {
    #[serde(rename = "cluster_id")]
    pub cluster_id: uuid::Uuid,
}

impl AdminClustersCreateResponse {
    pub fn new(cluster_id: uuid::Uuid) -> AdminClustersCreateResponse {
        AdminClustersCreateResponse {
            cluster_id,
        }
    }
}


