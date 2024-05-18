/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as Rivet from "../../..";
export interface GetBansResponse {
    /** A list of banned group members. */
    bannedIdentities: Rivet.group.BannedIdentity[];
    /** The pagination anchor. */
    anchor?: string;
    watch: Rivet.WatchResponse;
}
