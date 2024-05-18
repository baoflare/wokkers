/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Range of ports that can be connected to.
 * If configured, `network_mode` must equal `host`.
 * Port ranges may overlap between containers, it is the responsibility of the developer to ensure ports are available before using.
 * Read more about host networking [here](https://rivet.gg/docs/dynamic-servers/concepts/host-bridge-networking).
 * Only available on Rivet Open Source & Enterprise.
 *
 * ### Related
 *
 * - cloud.version.matchmaker.PortProtocol
 * - cloud.version.matchmaker.ProxyKind
 */
export interface PortRange {
    /** Unsigned 32 bit integer. */
    min: number;
    /** Unsigned 32 bit integer. */
    max: number;
}
