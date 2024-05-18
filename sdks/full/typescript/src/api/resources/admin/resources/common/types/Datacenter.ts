/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Rivet from "../../../../..";

export interface Datacenter {
    datacenterId: string;
    clusterId: string;
    nameId: string;
    displayName: string;
    provider: Rivet.admin.Provider;
    providerDatacenterId: string;
    providerApiToken?: string;
    pools: Rivet.admin.Pool[];
    buildDeliveryMethod: Rivet.admin.BuildDeliveryMethod;
}
