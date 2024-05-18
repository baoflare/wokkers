/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Rivet from "../../../../../../api";
import * as core from "../../../../../../core";

export const StatConfig: core.serialization.ObjectSchema<serializers.game.StatConfig.Raw, Rivet.game.StatConfig> =
    core.serialization.object({
        recordId: core.serialization.property("record_id", core.serialization.string()),
        iconId: core.serialization.property("icon_id", core.serialization.string()),
        format: core.serialization.lazy(async () => (await import("../../../../..")).game.StatFormatMethod),
        aggregation: core.serialization.lazy(async () => (await import("../../../../..")).game.StatAggregationMethod),
        sorting: core.serialization.lazy(async () => (await import("../../../../..")).game.StatSortingMethod),
        priority: core.serialization.number(),
        displayName: core.serialization.property(
            "display_name",
            core.serialization.lazy(async () => (await import("../../../../..")).DisplayName)
        ),
        postfixSingular: core.serialization.property("postfix_singular", core.serialization.string().optional()),
        postfixPlural: core.serialization.property("postfix_plural", core.serialization.string().optional()),
        prefixSingular: core.serialization.property("prefix_singular", core.serialization.string().optional()),
        prefixPlural: core.serialization.property("prefix_plural", core.serialization.string().optional()),
    });

export declare namespace StatConfig {
    interface Raw {
        record_id: string;
        icon_id: string;
        format: serializers.game.StatFormatMethod.Raw;
        aggregation: serializers.game.StatAggregationMethod.Raw;
        sorting: serializers.game.StatSortingMethod.Raw;
        priority: number;
        display_name: serializers.DisplayName.Raw;
        postfix_singular?: string | null;
        postfix_plural?: string | null;
        prefix_singular?: string | null;
        prefix_plural?: string | null;
    }
}
