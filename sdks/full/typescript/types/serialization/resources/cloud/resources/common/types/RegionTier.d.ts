/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../index";
import * as Rivet from "../../../../../../api/index";
import * as core from "../../../../../../core";
export declare const RegionTier: core.serialization.ObjectSchema<serializers.cloud.RegionTier.Raw, Rivet.cloud.RegionTier>;
export declare namespace RegionTier {
    interface Raw {
        tier_name_id: string;
        rivet_cores_numerator: number;
        rivet_cores_denominator: number;
        cpu: number;
        memory: number;
        disk: number;
        bandwidth: number;
        price_per_second: number;
    }
}
