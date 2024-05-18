/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Rivet from "../../../../../../api";
import * as core from "../../../../../../core";

export const CreateGameRequest: core.serialization.ObjectSchema<
    serializers.cloud.games.CreateGameRequest.Raw,
    Rivet.cloud.games.CreateGameRequest
> = core.serialization.object({
    nameId: core.serialization.property(
        "name_id",
        core.serialization.lazy(async () => (await import("../../../../..")).Identifier).optional()
    ),
    displayName: core.serialization.property(
        "display_name",
        core.serialization.lazy(async () => (await import("../../../../..")).DisplayName)
    ),
    developerGroupId: core.serialization.property("developer_group_id", core.serialization.string()),
});

export declare namespace CreateGameRequest {
    interface Raw {
        name_id?: serializers.Identifier.Raw | null;
        display_name: serializers.DisplayName.Raw;
        developer_group_id: string;
    }
}
