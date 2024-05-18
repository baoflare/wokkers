/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as Rivet from "../../../../..";
/**
 * A service performance summary.
 */
export interface SvcPerf {
    /** The name of the service. */
    svcName: string;
    ts: Rivet.Timestamp;
    /** Unsigned 64 bit integer. */
    duration: number;
    reqId?: string;
    /** A list of performance spans. */
    spans: Rivet.cloud.LogsPerfSpan[];
    /** A list of performance marks. */
    marks: Rivet.cloud.LogsPerfMark[];
}
