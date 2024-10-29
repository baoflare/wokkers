/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../index";
import * as Rivet from "../../../../../../api/index";
import * as core from "../../../../../../core";
export declare const GroupBankSource: core.serialization.ObjectSchema<serializers.cloud.GroupBankSource.Raw, Rivet.cloud.GroupBankSource>;
export declare namespace GroupBankSource {
    interface Raw {
        account_number: string;
        routing_number: string;
    }
}
