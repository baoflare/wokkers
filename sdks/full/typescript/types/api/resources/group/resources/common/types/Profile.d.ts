/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as Rivet from "../../../../..";
/**
 * A list of group profiles.
 */
export interface Profile {
    groupId: string;
    displayName: Rivet.DisplayName;
    /** The URL of this group's avatar image. */
    avatarUrl?: string;
    external: Rivet.group.ExternalLinks;
    /** Whether or not this group is a developer. */
    isDeveloper?: boolean;
    /** Detailed information about a profile. */
    bio: string;
    /** Whether or not the current identity is a member of this group. */
    isCurrentIdentityMember?: boolean;
    publicity: Rivet.group.Publicity;
    /** Unsigned 32 bit integer. */
    memberCount?: number;
    /** A list of group members. */
    members: Rivet.group.Member[];
    /** A list of group join requests. */
    joinRequests: Rivet.group.JoinRequest[];
    /** Whether or not the current identity is currently requesting to join this group. */
    isCurrentIdentityRequestingJoin?: boolean;
    ownerIdentityId: string;
}
