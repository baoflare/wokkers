/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../../../index";
import * as Rivet from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
export declare const StartEmailVerificationResponse: core.serialization.ObjectSchema<serializers.auth.identity.StartEmailVerificationResponse.Raw, Rivet.auth.identity.StartEmailVerificationResponse>;
export declare namespace StartEmailVerificationResponse {
    interface Raw {
        verification_id: string;
    }
}
