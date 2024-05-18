/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../..";
import * as Rivet from "../../../../../../api";
import * as core from "../../../../../../core";
export declare const LinkedAccount: core.serialization.ObjectSchema<serializers.identity.LinkedAccount.Raw, Rivet.identity.LinkedAccount>;
export declare namespace LinkedAccount {
    interface Raw {
        email?: serializers.identity.EmailLinkedAccount.Raw | null;
        access_token?: serializers.identity.AccessTokenLinkedAccount.Raw | null;
    }
}
