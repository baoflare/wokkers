/*
 * Rivet API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 * Generated by: https://openapi-generator.tech
 */

/// ChatSendMessageBody : Data to send in a chat message.



#[derive(Clone, Debug, PartialEq, Default, Serialize, Deserialize)]
pub struct ChatSendMessageBody {
    #[serde(rename = "text", skip_serializing_if = "Option::is_none")]
    pub text: Option<Box<crate::models::ChatSendMessageBodyText>>,
}

impl ChatSendMessageBody {
    /// Data to send in a chat message.
    pub fn new() -> ChatSendMessageBody {
        ChatSendMessageBody {
            text: None,
        }
    }
}


