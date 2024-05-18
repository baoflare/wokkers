/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as Rivet from "../../../../api";
import * as core from "../../../../core";
export declare const PrepareAvatarUploadRequest: core.serialization.ObjectSchema<serializers.group.PrepareAvatarUploadRequest.Raw, Rivet.group.PrepareAvatarUploadRequest>;
export declare namespace PrepareAvatarUploadRequest {
    interface Raw {
        path: string;
        mime?: string | null;
        content_length: number;
    }
}
