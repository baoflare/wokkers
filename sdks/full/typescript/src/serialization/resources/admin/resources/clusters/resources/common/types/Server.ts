/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as Rivet from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { PoolType as admin_clusters_common$$poolType } from "./PoolType";
import { admin } from "../../../../../../index";

export const Server: core.serialization.ObjectSchema<
    serializers.admin.clusters.Server.Raw,
    Rivet.admin.clusters.Server
> = core.serialization.object({
    serverId: core.serialization.property("server_id", core.serialization.string()),
    datacenterId: core.serialization.property("datacenter_id", core.serialization.string()),
    poolType: core.serialization.property("pool_type", admin_clusters_common$$poolType),
    publicIp: core.serialization.property("public_ip", core.serialization.string().optional()),
});

export declare namespace Server {
    interface Raw {
        server_id: string;
        datacenter_id: string;
        pool_type: admin.clusters.PoolType.Raw;
        public_ip?: string | null;
    }
}
