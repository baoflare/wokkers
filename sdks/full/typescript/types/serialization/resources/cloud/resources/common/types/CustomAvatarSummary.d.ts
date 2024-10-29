/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../index";
import * as Rivet from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { common } from "../../../../index";
export declare const CustomAvatarSummary: core.serialization.ObjectSchema<serializers.cloud.CustomAvatarSummary.Raw, Rivet.cloud.CustomAvatarSummary>;
export declare namespace CustomAvatarSummary {
    interface Raw {
        upload_id: string;
        display_name: common.DisplayName.Raw;
        create_ts: common.Timestamp.Raw;
        url?: string | null;
        content_length: number;
        complete: boolean;
    }
}
