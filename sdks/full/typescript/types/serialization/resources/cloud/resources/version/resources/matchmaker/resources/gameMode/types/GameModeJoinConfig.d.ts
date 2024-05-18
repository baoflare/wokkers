/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../../../../..";
import * as Rivet from "../../../../../../../../../../api";
import * as core from "../../../../../../../../../../core";
export declare const GameModeJoinConfig: core.serialization.ObjectSchema<serializers.cloud.version.matchmaker.GameModeJoinConfig.Raw, Rivet.cloud.version.matchmaker.GameModeJoinConfig>;
export declare namespace GameModeJoinConfig {
    interface Raw {
        enabled: boolean;
        identity_requirement?: serializers.cloud.version.matchmaker.GameModeIdentityRequirement.Raw | null;
        verification?: serializers.cloud.version.matchmaker.GameModeVerificationConfig.Raw | null;
    }
}
