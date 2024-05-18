/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Rivet from "../../../../../../api";
import * as core from "../../../../../../core";

export const Profile: core.serialization.ObjectSchema<serializers.game.Profile.Raw, Rivet.game.Profile> =
    core.serialization.object({
        gameId: core.serialization.property("game_id", core.serialization.string()),
        nameId: core.serialization.property("name_id", core.serialization.string()),
        displayName: core.serialization.property(
            "display_name",
            core.serialization.lazy(async () => (await import("../../../../..")).DisplayName)
        ),
        logoUrl: core.serialization.property("logo_url", core.serialization.string().optional()),
        bannerUrl: core.serialization.property("banner_url", core.serialization.string().optional()),
        url: core.serialization.string(),
        developer: core.serialization.lazyObject(async () => (await import("../../../../..")).group.Summary),
        tags: core.serialization.list(core.serialization.string()),
        description: core.serialization.string(),
        platforms: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../../../..")).game.PlatformLink)
        ),
        recommendedGroups: core.serialization.property(
            "recommended_groups",
            core.serialization.list(
                core.serialization.lazyObject(async () => (await import("../../../../..")).group.Summary)
            )
        ),
        identityLeaderboardCategories: core.serialization.property(
            "identity_leaderboard_categories",
            core.serialization.list(
                core.serialization.lazyObject(async () => (await import("../../../../..")).game.LeaderboardCategory)
            )
        ),
        groupLeaderboardCategories: core.serialization.property(
            "group_leaderboard_categories",
            core.serialization.list(
                core.serialization.lazyObject(async () => (await import("../../../../..")).game.LeaderboardCategory)
            )
        ),
    });

export declare namespace Profile {
    interface Raw {
        game_id: string;
        name_id: string;
        display_name: serializers.DisplayName.Raw;
        logo_url?: string | null;
        banner_url?: string | null;
        url: string;
        developer: serializers.group.Summary.Raw;
        tags: string[];
        description: string;
        platforms: serializers.game.PlatformLink.Raw[];
        recommended_groups: serializers.group.Summary.Raw[];
        identity_leaderboard_categories: serializers.game.LeaderboardCategory.Raw[];
        group_leaderboard_categories: serializers.game.LeaderboardCategory.Raw[];
    }
}
