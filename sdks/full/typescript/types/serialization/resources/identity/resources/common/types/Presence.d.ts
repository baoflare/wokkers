/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../..";
import * as Rivet from "../../../../../../api";
import * as core from "../../../../../../core";
export declare const Presence: core.serialization.ObjectSchema<serializers.identity.Presence.Raw, Rivet.identity.Presence>;
export declare namespace Presence {
    interface Raw {
        update_ts: serializers.Timestamp.Raw;
        status: serializers.identity.Status.Raw;
        game_activity?: serializers.identity.GameActivity.Raw | null;
    }
}
