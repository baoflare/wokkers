/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../..";
import * as Rivet from "../../../../../../../../api";
import * as core from "../../../../../../../../core";

export const CustomDisplayName: core.serialization.ObjectSchema<
    serializers.cloud.version.identity.CustomDisplayName.Raw,
    Rivet.cloud.version.identity.CustomDisplayName
> = core.serialization.object({
    displayName: core.serialization.property(
        "display_name",
        core.serialization.lazy(async () => (await import("../../../../../../..")).DisplayName)
    ),
});

export declare namespace CustomDisplayName {
    interface Raw {
        display_name: serializers.DisplayName.Raw;
    }
}
