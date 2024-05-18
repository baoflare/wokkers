/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Rivet from "../../../../../../api";
import * as core from "../../../../../../core";

export const GameBannerUploadPrepareResponse: core.serialization.ObjectSchema<
    serializers.cloud.games.GameBannerUploadPrepareResponse.Raw,
    Rivet.cloud.games.GameBannerUploadPrepareResponse
> = core.serialization.object({
    uploadId: core.serialization.property("upload_id", core.serialization.string()),
    presignedRequest: core.serialization.property(
        "presigned_request",
        core.serialization.lazyObject(async () => (await import("../../../../..")).upload.PresignedRequest)
    ),
});

export declare namespace GameBannerUploadPrepareResponse {
    interface Raw {
        upload_id: string;
        presigned_request: serializers.upload.PresignedRequest.Raw;
    }
}
