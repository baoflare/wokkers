/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../..";
import * as Rivet from "../../../../../../api";
import * as core from "../../../../../../core";
export declare const Datacenter: core.serialization.ObjectSchema<serializers.admin.Datacenter.Raw, Rivet.admin.Datacenter>;
export declare namespace Datacenter {
    interface Raw {
        datacenter_id: string;
        cluster_id: string;
        name_id: string;
        display_name: string;
        provider: serializers.admin.Provider.Raw;
        provider_datacenter_id: string;
        provider_api_token?: string | null;
        pools: serializers.admin.Pool.Raw[];
        build_delivery_method: serializers.admin.BuildDeliveryMethod.Raw;
    }
}
