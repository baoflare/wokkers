/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as Rivet from "../../../../api";
import * as core from "../../../../core";
export declare const BootstrapOrigins: core.serialization.ObjectSchema<serializers.cloud.BootstrapOrigins.Raw, Rivet.cloud.BootstrapOrigins>;
export declare namespace BootstrapOrigins {
    interface Raw {
        hub: string;
    }
}
