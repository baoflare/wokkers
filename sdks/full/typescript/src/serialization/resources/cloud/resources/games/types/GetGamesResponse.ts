/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Rivet from "../../../../../../api";
import * as core from "../../../../../../core";

export const GetGamesResponse: core.serialization.ObjectSchema<
    serializers.cloud.games.GetGamesResponse.Raw,
    Rivet.cloud.games.GetGamesResponse
> = core.serialization.object({
    games: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../../../..")).game.Summary)
    ),
    groups: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../../../..")).group.Summary)
    ),
    watch: core.serialization.lazyObject(async () => (await import("../../../../..")).WatchResponse),
});

export declare namespace GetGamesResponse {
    interface Raw {
        games: serializers.game.Summary.Raw[];
        groups: serializers.group.Summary.Raw[];
        watch: serializers.WatchResponse.Raw;
    }
}
