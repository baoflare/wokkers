/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as Rivet from "../../../../..";
export interface CreateLobbyResponse {
    lobby: Rivet.matchmaker.JoinLobby;
    ports: Record<string, Rivet.matchmaker.JoinPort>;
    player: Rivet.matchmaker.JoinPlayer;
}
