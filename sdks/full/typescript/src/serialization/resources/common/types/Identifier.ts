/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Rivet from "../../../../api";
import * as core from "../../../../core";

export const Identifier: core.serialization.Schema<serializers.Identifier.Raw, Rivet.Identifier> =
    core.serialization.string();

export declare namespace Identifier {
    type Raw = string;
}
