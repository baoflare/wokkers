/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as Rivet from "../../../../api/index";
import * as core from "../../../../core";
import { group } from "../../index";
export declare const GetSummaryResponse: core.serialization.ObjectSchema<serializers.group.GetSummaryResponse.Raw, Rivet.group.GetSummaryResponse>;
export declare namespace GetSummaryResponse {
    interface Raw {
        group: group.Summary.Raw;
    }
}
