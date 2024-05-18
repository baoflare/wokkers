/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../..";
import * as Rivet from "../../../../../../api";
import * as core from "../../../../../../core";
export declare const Summary: core.serialization.ObjectSchema<serializers.game.Summary.Raw, Rivet.game.Summary>;
export declare namespace Summary {
    interface Raw {
        game_id: string;
        name_id: serializers.Identifier.Raw;
        display_name: serializers.DisplayName.Raw;
        logo_url?: string | null;
        banner_url?: string | null;
        url: string;
        developer: serializers.group.Handle.Raw;
        total_player_count: number;
    }
}
