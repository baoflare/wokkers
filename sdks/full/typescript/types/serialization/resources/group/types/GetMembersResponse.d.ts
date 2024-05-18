/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as Rivet from "../../../../api";
import * as core from "../../../../core";
export declare const GetMembersResponse: core.serialization.ObjectSchema<serializers.group.GetMembersResponse.Raw, Rivet.group.GetMembersResponse>;
export declare namespace GetMembersResponse {
    interface Raw {
        members: serializers.group.Member.Raw[];
        anchor?: string | null;
        watch: serializers.WatchResponse.Raw;
    }
}
