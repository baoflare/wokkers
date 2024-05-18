/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../../..";
import * as Rivet from "../../../../../../../../api";
import * as core from "../../../../../../../../core";
export declare const ValidateGameNamespaceRequest: core.serialization.ObjectSchema<serializers.cloud.games.namespaces.ValidateGameNamespaceRequest.Raw, Rivet.cloud.games.namespaces.ValidateGameNamespaceRequest>;
export declare namespace ValidateGameNamespaceRequest {
    interface Raw {
        display_name: serializers.DisplayName.Raw;
        name_id: string;
    }
}
