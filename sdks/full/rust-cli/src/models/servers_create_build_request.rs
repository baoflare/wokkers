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
pub struct ServersCreateBuildRequest {
    #[serde(rename = "compression", skip_serializing_if = "Option::is_none")]
    pub compression: Option<crate::models::ServersBuildCompression>,
    #[serde(rename = "image_file")]
    pub image_file: Box<crate::models::UploadPrepareFile>,
    /// A tag given to the game build.
    #[serde(rename = "image_tag")]
    pub image_tag: String,
    #[serde(rename = "kind", skip_serializing_if = "Option::is_none")]
    pub kind: Option<crate::models::ServersBuildKind>,
    #[serde(rename = "multipart_upload", skip_serializing_if = "Option::is_none")]
    pub multipart_upload: Option<bool>,
    #[serde(rename = "name")]
    pub name: String,
    #[serde(rename = "tags", deserialize_with = "Option::deserialize")]
    pub tags: Option<serde_json::Value>,
}

impl ServersCreateBuildRequest {
    pub fn new(image_file: crate::models::UploadPrepareFile, image_tag: String, name: String, tags: Option<serde_json::Value>) -> ServersCreateBuildRequest {
        ServersCreateBuildRequest {
            compression: None,
            image_file: Box::new(image_file),
            image_tag,
            kind: None,
            multipart_upload: None,
            name,
            tags,
        }
    }
}


