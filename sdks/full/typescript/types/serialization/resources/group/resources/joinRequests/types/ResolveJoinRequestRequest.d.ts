/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../index";
import * as Rivet from "../../../../../../api/index";
import * as core from "../../../../../../core";
export declare const ResolveJoinRequestRequest: core.serialization.ObjectSchema<serializers.group.ResolveJoinRequestRequest.Raw, Rivet.group.ResolveJoinRequestRequest>;
export declare namespace ResolveJoinRequestRequest {
    interface Raw {
        resolution?: boolean | null;
    }
}
