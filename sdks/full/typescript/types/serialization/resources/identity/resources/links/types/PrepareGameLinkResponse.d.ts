/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../index";
import * as Rivet from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { common } from "../../../../index";
export declare const PrepareGameLinkResponse: core.serialization.ObjectSchema<serializers.identity.PrepareGameLinkResponse.Raw, Rivet.identity.PrepareGameLinkResponse>;
export declare namespace PrepareGameLinkResponse {
    interface Raw {
        identity_link_token: string;
        identity_link_url: string;
        expire_ts: common.Timestamp.Raw;
    }
}
