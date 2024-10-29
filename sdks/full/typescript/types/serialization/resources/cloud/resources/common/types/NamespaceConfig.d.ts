/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../index";
import * as Rivet from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { cloud } from "../../../../index";
export declare const NamespaceConfig: core.serialization.ObjectSchema<serializers.cloud.NamespaceConfig.Raw, Rivet.cloud.NamespaceConfig>;
export declare namespace NamespaceConfig {
    interface Raw {
        cdn: cloud.CdnNamespaceConfig.Raw;
        matchmaker: cloud.MatchmakerNamespaceConfig.Raw;
        kv: cloud.KvNamespaceConfig.Raw;
        identity: cloud.IdentityNamespaceConfig.Raw;
    }
}
