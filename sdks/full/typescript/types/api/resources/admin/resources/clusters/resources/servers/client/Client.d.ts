/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as environments from "../../../../../../../../environments";
import * as core from "../../../../../../../../core";
import * as Rivet from "../../../../../../../index";
export declare namespace Servers {
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
export declare class Servers {
    protected readonly _options: Servers.Options;
    constructor(_options?: Servers.Options);
    /**
     * @param {string} clusterId
     * @param {Rivet.admin.clusters.ListServersRequest} request
     * @param {Servers.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Rivet.InternalError}
     * @throws {@link Rivet.RateLimitError}
     * @throws {@link Rivet.ForbiddenError}
     * @throws {@link Rivet.UnauthorizedError}
     * @throws {@link Rivet.NotFoundError}
     * @throws {@link Rivet.BadRequestError}
     *
     * @example
     *     await client.admin.clusters.servers.list("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", {
     *         serverId: "string",
     *         datacenter: "string",
     *         pool: Rivet.admin.clusters.PoolType.Job,
     *         publicIp: "string"
     *     })
     */
    list(clusterId: string, request?: Rivet.admin.clusters.ListServersRequest, requestOptions?: Servers.RequestOptions): Promise<Rivet.admin.clusters.ListServersResponse>;
    /**
     * @param {string} clusterId
     * @param {Rivet.admin.clusters.TaintServersRequest} request
     * @param {Servers.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Rivet.InternalError}
     * @throws {@link Rivet.RateLimitError}
     * @throws {@link Rivet.ForbiddenError}
     * @throws {@link Rivet.UnauthorizedError}
     * @throws {@link Rivet.NotFoundError}
     * @throws {@link Rivet.BadRequestError}
     *
     * @example
     *     await client.admin.clusters.servers.taint("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", {
     *         serverId: "string",
     *         datacenter: "string",
     *         pool: Rivet.admin.clusters.PoolType.Job,
     *         publicIp: "string"
     *     })
     */
    taint(clusterId: string, request?: Rivet.admin.clusters.TaintServersRequest, requestOptions?: Servers.RequestOptions): Promise<void>;
    /**
     * @param {string} clusterId
     * @param {Rivet.admin.clusters.DestroyServersRequest} request
     * @param {Servers.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Rivet.InternalError}
     * @throws {@link Rivet.RateLimitError}
     * @throws {@link Rivet.ForbiddenError}
     * @throws {@link Rivet.UnauthorizedError}
     * @throws {@link Rivet.NotFoundError}
     * @throws {@link Rivet.BadRequestError}
     *
     * @example
     *     await client.admin.clusters.servers.destroy("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", {
     *         serverId: "string",
     *         datacenter: "string",
     *         pool: Rivet.admin.clusters.PoolType.Job,
     *         publicIp: "string"
     *     })
     */
    destroy(clusterId: string, request?: Rivet.admin.clusters.DestroyServersRequest, requestOptions?: Servers.RequestOptions): Promise<void>;
    /**
     * @param {string} clusterId
     * @param {Rivet.admin.clusters.ListLostServersRequest} request
     * @param {Servers.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Rivet.InternalError}
     * @throws {@link Rivet.RateLimitError}
     * @throws {@link Rivet.ForbiddenError}
     * @throws {@link Rivet.UnauthorizedError}
     * @throws {@link Rivet.NotFoundError}
     * @throws {@link Rivet.BadRequestError}
     *
     * @example
     *     await client.admin.clusters.servers.listLost("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", {
     *         serverId: "string",
     *         datacenter: "string",
     *         pool: Rivet.admin.clusters.PoolType.Job,
     *         publicIp: "string"
     *     })
     */
    listLost(clusterId: string, request?: Rivet.admin.clusters.ListLostServersRequest, requestOptions?: Servers.RequestOptions): Promise<Rivet.admin.clusters.ListServersResponse>;
    /**
     * @param {string} clusterId
     * @param {Rivet.admin.clusters.PruneServersRequest} request
     * @param {Servers.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Rivet.InternalError}
     * @throws {@link Rivet.RateLimitError}
     * @throws {@link Rivet.ForbiddenError}
     * @throws {@link Rivet.UnauthorizedError}
     * @throws {@link Rivet.NotFoundError}
     * @throws {@link Rivet.BadRequestError}
     *
     * @example
     *     await client.admin.clusters.servers.prune("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", {
     *         serverId: "string",
     *         datacenter: "string",
     *         pool: Rivet.admin.clusters.PoolType.Job,
     *         publicIp: "string"
     *     })
     */
    prune(clusterId: string, request?: Rivet.admin.clusters.PruneServersRequest, requestOptions?: Servers.RequestOptions): Promise<void>;
    protected _getAuthorizationHeader(): Promise<string | undefined>;
}
