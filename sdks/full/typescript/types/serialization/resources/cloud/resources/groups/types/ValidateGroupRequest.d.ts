/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../index";
import * as Rivet from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { common } from "../../../../index";
export declare const ValidateGroupRequest: core.serialization.ObjectSchema<serializers.cloud.ValidateGroupRequest.Raw, Rivet.cloud.ValidateGroupRequest>;
export declare namespace ValidateGroupRequest {
    interface Raw {
        display_name: common.DisplayName.Raw;
    }
}
