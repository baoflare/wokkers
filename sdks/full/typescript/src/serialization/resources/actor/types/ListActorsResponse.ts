/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Rivet from "../../../../api/index";
import * as core from "../../../../core";
import { Actor as actor_common$$actor } from "../resources/common/types/Actor";
import { actor } from "../../index";

export const ListActorsResponse: core.serialization.ObjectSchema<
    serializers.actor.ListActorsResponse.Raw,
    Rivet.actor.ListActorsResponse
> = core.serialization.object({
    actors: core.serialization.list(actor_common$$actor),
});

export declare namespace ListActorsResponse {
    interface Raw {
        actors: actor.Actor.Raw[];
    }
}
