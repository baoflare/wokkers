/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as Rivet from "../../../../..";
export interface GetGameLinkResponse {
    status: Rivet.identity.GameLinkStatus;
    game: Rivet.game.Handle;
    currentIdentity: Rivet.identity.Handle;
    newIdentity?: Rivet.identity.GetGameLinkNewIdentity;
    watch: Rivet.WatchResponse;
}
