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
pub struct AdminDatacenter {
    #[serde(rename = "build_delivery_method")]
    pub build_delivery_method: crate::models::AdminBuildDeliveryMethod,
    #[serde(rename = "cluster_id")]
    pub cluster_id: uuid::Uuid,
    #[serde(rename = "datacenter_id")]
    pub datacenter_id: uuid::Uuid,
    #[serde(rename = "display_name")]
    pub display_name: String,
    #[serde(rename = "name_id")]
    pub name_id: String,
    #[serde(rename = "pools")]
    pub pools: Vec<crate::models::AdminPool>,
    #[serde(rename = "provider")]
    pub provider: crate::models::AdminProvider,
    #[serde(rename = "provider_api_token", skip_serializing_if = "Option::is_none")]
    pub provider_api_token: Option<String>,
    #[serde(rename = "provider_datacenter_id")]
    pub provider_datacenter_id: String,
}

impl AdminDatacenter {
    pub fn new(build_delivery_method: crate::models::AdminBuildDeliveryMethod, cluster_id: uuid::Uuid, datacenter_id: uuid::Uuid, display_name: String, name_id: String, pools: Vec<crate::models::AdminPool>, provider: crate::models::AdminProvider, provider_datacenter_id: String) -> AdminDatacenter {
        AdminDatacenter {
            build_delivery_method,
            cluster_id,
            datacenter_id,
            display_name,
            name_id,
            pools,
            provider,
            provider_api_token: None,
            provider_datacenter_id,
        }
    }
}


