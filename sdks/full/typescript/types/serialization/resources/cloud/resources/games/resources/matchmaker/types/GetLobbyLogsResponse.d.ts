/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../../../index";
import * as Rivet from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { common } from "../../../../../../index";
export declare const GetLobbyLogsResponse: core.serialization.ObjectSchema<serializers.cloud.games.GetLobbyLogsResponse.Raw, Rivet.cloud.games.GetLobbyLogsResponse>;
export declare namespace GetLobbyLogsResponse {
    interface Raw {
        lines: string[];
        timestamps: string[];
        watch: common.WatchResponse.Raw;
    }
}
