/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../..";
import * as Rivet from "../../../../../../api";
import * as core from "../../../../../../core";
export declare const GameActivity: core.serialization.ObjectSchema<serializers.identity.GameActivity.Raw, Rivet.identity.GameActivity>;
export declare namespace GameActivity {
    interface Raw {
        game: serializers.game.Handle.Raw;
        message: string;
        public_metadata?: unknown | null;
        mutual_metadata?: unknown | null;
    }
}
