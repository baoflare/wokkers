/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as Rivet from "../../../../../../../..";
export interface GetLobbyLogsRequest {
    stream: Rivet.cloud.games.LogStream;
    /**
     * A query parameter denoting the requests watch index.
     */
    watchIndex?: string;
}
