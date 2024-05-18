/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../../..";
import * as Rivet from "../../../../../../../../api";
import * as core from "../../../../../../../../core";
export declare const CreateGameBuildResponse: core.serialization.ObjectSchema<serializers.cloud.games.CreateGameBuildResponse.Raw, Rivet.cloud.games.CreateGameBuildResponse>;
export declare namespace CreateGameBuildResponse {
    interface Raw {
        build_id: string;
        upload_id: string;
        image_presigned_request?: serializers.upload.PresignedRequest.Raw | null;
        image_presigned_requests?: serializers.upload.PresignedRequest.Raw[] | null;
    }
}
