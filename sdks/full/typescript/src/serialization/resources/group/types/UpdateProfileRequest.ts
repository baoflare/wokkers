/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Rivet from "../../../../api";
import * as core from "../../../../core";

export const UpdateProfileRequest: core.serialization.ObjectSchema<
    serializers.group.UpdateProfileRequest.Raw,
    Rivet.group.UpdateProfileRequest
> = core.serialization.object({
    displayName: core.serialization.property(
        "display_name",
        core.serialization.lazy(async () => (await import("../../..")).DisplayName).optional()
    ),
    bio: core.serialization.string().optional(),
    publicity: core.serialization.lazy(async () => (await import("../../..")).group.Publicity).optional(),
});

export declare namespace UpdateProfileRequest {
    interface Raw {
        display_name?: serializers.DisplayName.Raw | null;
        bio?: string | null;
        publicity?: serializers.group.Publicity.Raw | null;
    }
}
