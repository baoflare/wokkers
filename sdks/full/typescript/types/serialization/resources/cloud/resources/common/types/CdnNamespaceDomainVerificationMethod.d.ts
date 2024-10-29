/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../index";
import * as Rivet from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { common, cloud } from "../../../../index";
export declare const CdnNamespaceDomainVerificationMethod: core.serialization.ObjectSchema<serializers.cloud.CdnNamespaceDomainVerificationMethod.Raw, Rivet.cloud.CdnNamespaceDomainVerificationMethod>;
export declare namespace CdnNamespaceDomainVerificationMethod {
    interface Raw {
        invalid?: common.EmptyObject.Raw | null;
        http?: cloud.CdnNamespaceDomainVerificationMethodHttp.Raw | null;
    }
}
