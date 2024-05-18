/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Rivet from "../../../../../../api";
import * as core from "../../../../../../core";

export const LeaderboardCategory: core.serialization.ObjectSchema<
    serializers.game.LeaderboardCategory.Raw,
    Rivet.game.LeaderboardCategory
> = core.serialization.object({
    displayName: core.serialization.property(
        "display_name",
        core.serialization.lazy(async () => (await import("../../../../..")).DisplayName)
    ),
});

export declare namespace LeaderboardCategory {
    interface Raw {
        display_name: serializers.DisplayName.Raw;
    }
}
