/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as Rivet from "../../../../../index";
/**
 * A port configuration used to create development tokens.
 */
export interface MatchmakerDevelopmentPort {
    port?: number;
    portRange?: Rivet.cloud.version.matchmaker.PortRange;
    protocol: Rivet.cloud.version.matchmaker.PortProtocol;
}
