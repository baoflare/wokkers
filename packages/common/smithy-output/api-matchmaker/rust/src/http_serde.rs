// Code generated by software.amazon.smithy.rust.codegen.smithy-rs. DO NOT EDIT.
pub fn add_headers_find_lobby(
	input: &crate::input::FindLobbyInput,
	mut builder: http::request::Builder,
) -> std::result::Result<http::request::Builder, aws_smithy_http::operation::BuildError> {
	if let Some(inner_1) = &input.origin {
		let formatted_2 = AsRef::<str>::as_ref(inner_1);
		if !formatted_2.is_empty() {
			let header_value = formatted_2;
			let header_value =
				http::header::HeaderValue::try_from(header_value).map_err(|err| {
					aws_smithy_http::operation::BuildError::InvalidField {
						field: "origin",
						details: format!(
							"`{}` cannot be used as a header value: {}",
							&header_value, err
						),
					}
				})?;
			builder = builder.header("origin", header_value);
		}
	}
	if let Some(inner_3) = &input.bypass_token {
		let formatted_4 = AsRef::<str>::as_ref(inner_3);
		if !formatted_4.is_empty() {
			let header_value = formatted_4;
			let header_value =
				http::header::HeaderValue::try_from(header_value).map_err(|err| {
					aws_smithy_http::operation::BuildError::InvalidField {
						field: "bypass_token",
						details: format!(
							"`{}` cannot be used as a header value: {}",
							&"*** Sensitive Data Redacted ***", err
						),
					}
				})?;
			builder = builder.header("x-bypass-token", header_value);
		}
	}
	Ok(builder)
}
