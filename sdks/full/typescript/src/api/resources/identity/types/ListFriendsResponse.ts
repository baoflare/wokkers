/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Rivet from "../../..";

export interface ListFriendsResponse {
    identities: Rivet.identity.Handle[];
    anchor?: string;
    watch: Rivet.WatchResponse;
}
