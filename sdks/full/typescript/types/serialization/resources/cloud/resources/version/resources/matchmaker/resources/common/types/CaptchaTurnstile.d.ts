/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../../../../..";
import * as Rivet from "../../../../../../../../../../api";
import * as core from "../../../../../../../../../../core";
export declare const CaptchaTurnstile: core.serialization.ObjectSchema<serializers.cloud.version.matchmaker.CaptchaTurnstile.Raw, Rivet.cloud.version.matchmaker.CaptchaTurnstile>;
export declare namespace CaptchaTurnstile {
    interface Raw {
        site_key: string;
        secret_key: string;
    }
}
