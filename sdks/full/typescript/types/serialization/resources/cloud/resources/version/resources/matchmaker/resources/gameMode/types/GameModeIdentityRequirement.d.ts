/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../../../../..";
import * as Rivet from "../../../../../../../../../../api";
import * as core from "../../../../../../../../../../core";
export declare const GameModeIdentityRequirement: core.serialization.Schema<serializers.cloud.version.matchmaker.GameModeIdentityRequirement.Raw, Rivet.cloud.version.matchmaker.GameModeIdentityRequirement>;
export declare namespace GameModeIdentityRequirement {
    type Raw = "none" | "guest" | "registered";
}
