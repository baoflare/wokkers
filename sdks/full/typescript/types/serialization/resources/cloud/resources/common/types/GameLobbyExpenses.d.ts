/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../index";
import * as Rivet from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { game, cloud } from "../../../../index";
export declare const GameLobbyExpenses: core.serialization.ObjectSchema<serializers.cloud.GameLobbyExpenses.Raw, Rivet.cloud.GameLobbyExpenses>;
export declare namespace GameLobbyExpenses {
    interface Raw {
        game: game.Handle.Raw;
        namespaces: cloud.NamespaceSummary.Raw[];
        expenses: cloud.RegionTierExpenses.Raw[];
    }
}
