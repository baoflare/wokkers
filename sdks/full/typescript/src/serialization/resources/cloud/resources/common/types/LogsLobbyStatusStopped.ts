/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Rivet from "../../../../../../api";
import * as core from "../../../../../../core";

export const LogsLobbyStatusStopped: core.serialization.ObjectSchema<
    serializers.cloud.LogsLobbyStatusStopped.Raw,
    Rivet.cloud.LogsLobbyStatusStopped
> = core.serialization.object({
    stopTs: core.serialization.property(
        "stop_ts",
        core.serialization.lazy(async () => (await import("../../../../..")).Timestamp)
    ),
    failed: core.serialization.boolean(),
    exitCode: core.serialization.property("exit_code", core.serialization.number()),
});

export declare namespace LogsLobbyStatusStopped {
    interface Raw {
        stop_ts: serializers.Timestamp.Raw;
        failed: boolean;
        exit_code: number;
    }
}
