/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as Rivet from "../../../../api";
import * as core from "../../../../core";
export declare const BootstrapResponse: core.serialization.ObjectSchema<serializers.cloud.BootstrapResponse.Raw, Rivet.cloud.BootstrapResponse>;
export declare namespace BootstrapResponse {
    interface Raw {
        cluster: serializers.cloud.BootstrapCluster.Raw;
        access: serializers.cloud.BootstrapAccess.Raw;
        domains?: serializers.cloud.BootstrapDomains.Raw | null;
        origins: serializers.cloud.BootstrapOrigins.Raw;
        captcha: serializers.cloud.BootstrapCaptcha.Raw;
        login_methods: serializers.cloud.BootstrapLoginMethods.Raw;
    }
}
