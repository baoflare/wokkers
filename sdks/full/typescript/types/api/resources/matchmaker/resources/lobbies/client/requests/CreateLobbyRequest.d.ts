/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as Rivet from "../../../../../..";
export interface CreateLobbyRequest {
    gameMode: string;
    region?: string;
    publicity?: Rivet.matchmaker.CustomLobbyPublicity;
    tags?: Record<string, string>;
    maxPlayers?: number;
    lobbyConfig?: unknown;
    captcha?: Rivet.captcha.Config;
    verificationData?: unknown;
}
