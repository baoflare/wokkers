/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../..";
import * as Rivet from "../../../../../../api";
import * as core from "../../../../../../core";
export declare const CompleteGameLinkRequest: core.serialization.ObjectSchema<serializers.identity.CompleteGameLinkRequest.Raw, Rivet.identity.CompleteGameLinkRequest>;
export declare namespace CompleteGameLinkRequest {
    interface Raw {
        identity_link_token: serializers.Jwt.Raw;
    }
}
