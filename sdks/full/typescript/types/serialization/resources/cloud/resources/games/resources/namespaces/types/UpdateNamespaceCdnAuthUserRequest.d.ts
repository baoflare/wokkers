/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../../..";
import * as Rivet from "../../../../../../../../api";
import * as core from "../../../../../../../../core";
export declare const UpdateNamespaceCdnAuthUserRequest: core.serialization.ObjectSchema<serializers.cloud.games.namespaces.UpdateNamespaceCdnAuthUserRequest.Raw, Rivet.cloud.games.namespaces.UpdateNamespaceCdnAuthUserRequest>;
export declare namespace UpdateNamespaceCdnAuthUserRequest {
    interface Raw {
        user: string;
        password: string;
    }
}
