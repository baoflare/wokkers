/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../../..";
import * as Rivet from "../../../../../../../../api";
import * as core from "../../../../../../../../core";
export declare const GetGameNamespaceVersionHistoryResponse: core.serialization.ObjectSchema<serializers.cloud.games.namespaces.GetGameNamespaceVersionHistoryResponse.Raw, Rivet.cloud.games.namespaces.GetGameNamespaceVersionHistoryResponse>;
export declare namespace GetGameNamespaceVersionHistoryResponse {
    interface Raw {
        versions: serializers.cloud.NamespaceVersion.Raw[];
    }
}
