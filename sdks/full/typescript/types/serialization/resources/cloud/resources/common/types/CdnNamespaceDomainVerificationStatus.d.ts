/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../..";
import * as Rivet from "../../../../../../api";
import * as core from "../../../../../../core";
export declare const CdnNamespaceDomainVerificationStatus: core.serialization.Schema<serializers.cloud.CdnNamespaceDomainVerificationStatus.Raw, Rivet.cloud.CdnNamespaceDomainVerificationStatus>;
export declare namespace CdnNamespaceDomainVerificationStatus {
    type Raw = "active" | "pending" | "failed";
}
