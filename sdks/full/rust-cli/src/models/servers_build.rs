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
pub struct ServersBuild {
    /// RFC3339 timestamp
    #[serde(rename = "completed_at", skip_serializing_if = "Option::is_none")]
    pub completed_at: Option<String>,
    /// Unsigned 64 bit integer.
    #[serde(rename = "content_length")]
    pub content_length: i64,
    /// RFC3339 timestamp
    #[serde(rename = "created_at")]
    pub created_at: String,
    #[serde(rename = "id")]
    pub id: uuid::Uuid,
    #[serde(rename = "name")]
    pub name: String,
    /// Tags of this build
    #[serde(rename = "tags")]
    pub tags: ::std::collections::HashMap<String, String>,
    #[serde(rename = "upload")]
    pub upload: uuid::Uuid,
}

impl ServersBuild {
    pub fn new(content_length: i64, created_at: String, id: uuid::Uuid, name: String, tags: ::std::collections::HashMap<String, String>, upload: uuid::Uuid) -> ServersBuild {
        ServersBuild {
            completed_at: None,
            content_length,
            created_at,
            id,
            name,
            tags,
            upload,
        }
    }
}


