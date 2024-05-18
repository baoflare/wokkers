/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../..";
import * as Rivet from "../../../../../../api";
import * as core from "../../../../../../core";
export declare const FindLobbyResponse: core.serialization.ObjectSchema<serializers.matchmaker.FindLobbyResponse.Raw, Rivet.matchmaker.FindLobbyResponse>;
export declare namespace FindLobbyResponse {
    interface Raw {
        lobby: serializers.matchmaker.JoinLobby.Raw;
        ports: Record<string, serializers.matchmaker.JoinPort.Raw>;
        player: serializers.matchmaker.JoinPlayer.Raw;
    }
}
