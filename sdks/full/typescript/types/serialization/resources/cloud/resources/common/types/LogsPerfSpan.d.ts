/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../..";
import * as Rivet from "../../../../../../api";
import * as core from "../../../../../../core";
export declare const LogsPerfSpan: core.serialization.ObjectSchema<serializers.cloud.LogsPerfSpan.Raw, Rivet.cloud.LogsPerfSpan>;
export declare namespace LogsPerfSpan {
    interface Raw {
        label: string;
        start_ts: serializers.Timestamp.Raw;
        finish_ts?: serializers.Timestamp.Raw | null;
        req_id?: string | null;
    }
}
