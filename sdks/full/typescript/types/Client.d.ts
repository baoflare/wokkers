/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as environments from "./environments";
import * as core from "./core";
import { Actor } from "./api/resources/actor/client/Client";
import { Admin } from "./api/resources/admin/client/Client";
import { Cloud } from "./api/resources/cloud/client/Client";
import { Group } from "./api/resources/group/client/Client";
import { Identity } from "./api/resources/identity/client/Client";
import { Kv } from "./api/resources/kv/client/Client";
import { Provision } from "./api/resources/provision/client/Client";
import { Servers } from "./api/resources/servers/client/Client";
import { Auth } from "./api/resources/auth/client/Client";
import { Games } from "./api/resources/games/client/Client";
import { Job } from "./api/resources/job/client/Client";
import { Matchmaker } from "./api/resources/matchmaker/client/Client";
import { Portal } from "./api/resources/portal/client/Client";
export declare namespace RivetClient {
    interface Options {
        environment?: core.Supplier<environments.RivetEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        fetcher?: core.FetchFunction;
    }
    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}
export declare class RivetClient {
    protected readonly _options: RivetClient.Options;
    constructor(_options?: RivetClient.Options);
    protected _actor: Actor | undefined;
    get actor(): Actor;
    protected _admin: Admin | undefined;
    get admin(): Admin;
    protected _cloud: Cloud | undefined;
    get cloud(): Cloud;
    protected _group: Group | undefined;
    get group(): Group;
    protected _identity: Identity | undefined;
    get identity(): Identity;
    protected _kv: Kv | undefined;
    get kv(): Kv;
    protected _provision: Provision | undefined;
    get provision(): Provision;
    protected _servers: Servers | undefined;
    get servers(): Servers;
    protected _auth: Auth | undefined;
    get auth(): Auth;
    protected _games: Games | undefined;
    get games(): Games;
    protected _job: Job | undefined;
    get job(): Job;
    protected _matchmaker: Matchmaker | undefined;
    get matchmaker(): Matchmaker;
    protected _portal: Portal | undefined;
    get portal(): Portal;
}
