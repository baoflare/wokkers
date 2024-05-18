/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Rivet from "../../../../../../api";
import * as core from "../../../../../../core";

export const Profile: core.serialization.ObjectSchema<serializers.group.Profile.Raw, Rivet.group.Profile> =
    core.serialization.object({
        groupId: core.serialization.property("group_id", core.serialization.string()),
        displayName: core.serialization.property(
            "display_name",
            core.serialization.lazy(async () => (await import("../../../../..")).DisplayName)
        ),
        avatarUrl: core.serialization.property("avatar_url", core.serialization.string().optional()),
        external: core.serialization.lazyObject(async () => (await import("../../../../..")).group.ExternalLinks),
        isDeveloper: core.serialization.property("is_developer", core.serialization.boolean().optional()),
        bio: core.serialization.string(),
        isCurrentIdentityMember: core.serialization.property(
            "is_current_identity_member",
            core.serialization.boolean().optional()
        ),
        publicity: core.serialization.lazy(async () => (await import("../../../../..")).group.Publicity),
        memberCount: core.serialization.property("member_count", core.serialization.number().optional()),
        members: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../../../..")).group.Member)
        ),
        joinRequests: core.serialization.property(
            "join_requests",
            core.serialization.list(
                core.serialization.lazyObject(async () => (await import("../../../../..")).group.JoinRequest)
            )
        ),
        isCurrentIdentityRequestingJoin: core.serialization.property(
            "is_current_identity_requesting_join",
            core.serialization.boolean().optional()
        ),
        ownerIdentityId: core.serialization.property("owner_identity_id", core.serialization.string()),
    });

export declare namespace Profile {
    interface Raw {
        group_id: string;
        display_name: serializers.DisplayName.Raw;
        avatar_url?: string | null;
        external: serializers.group.ExternalLinks.Raw;
        is_developer?: boolean | null;
        bio: string;
        is_current_identity_member?: boolean | null;
        publicity: serializers.group.Publicity.Raw;
        member_count?: number | null;
        members: serializers.group.Member.Raw[];
        join_requests: serializers.group.JoinRequest.Raw[];
        is_current_identity_requesting_join?: boolean | null;
        owner_identity_id: string;
    }
}
