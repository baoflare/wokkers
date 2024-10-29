/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../index";
import * as Rivet from "../../../../../../api/index";
import * as core from "../../../../../../core";
export declare const GetTlsResponse: core.serialization.ObjectSchema<serializers.provision.datacenters.GetTlsResponse.Raw, Rivet.provision.datacenters.GetTlsResponse>;
export declare namespace GetTlsResponse {
    interface Raw {
        job_cert_pem: string;
        job_private_key_pem: string;
    }
}
