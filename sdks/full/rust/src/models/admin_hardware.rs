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
pub struct AdminHardware {
    #[serde(rename = "provider_hardware")]
    pub provider_hardware: String,
}

impl AdminHardware {
    pub fn new(provider_hardware: String) -> AdminHardware {
        AdminHardware {
            provider_hardware,
        }
    }
}


