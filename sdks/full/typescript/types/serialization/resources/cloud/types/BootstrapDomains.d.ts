/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as Rivet from "../../../../api/index";
import * as core from "../../../../core";
export declare const BootstrapDomains: core.serialization.ObjectSchema<serializers.cloud.BootstrapDomains.Raw, Rivet.cloud.BootstrapDomains>;
export declare namespace BootstrapDomains {
    interface Raw {
        cdn?: string | null;
        job?: string | null;
        opengb?: string | null;
    }
}
