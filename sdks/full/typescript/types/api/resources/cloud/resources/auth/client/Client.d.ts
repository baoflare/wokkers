/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Rivet from "../../../../../index";
export declare namespace Auth {
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
export declare class Auth {
    protected readonly _options: Auth.Options;
    constructor(_options?: Auth.Options);
    /**
     * Returns information about the current authenticated agent.
     *
     * @param {Auth.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Rivet.InternalError}
     * @throws {@link Rivet.RateLimitError}
     * @throws {@link Rivet.ForbiddenError}
     * @throws {@link Rivet.UnauthorizedError}
     * @throws {@link Rivet.NotFoundError}
     * @throws {@link Rivet.BadRequestError}
     *
     * @example
     *     await client.cloud.auth.inspect()
     */
    inspect(requestOptions?: Auth.RequestOptions): Promise<Rivet.cloud.InspectResponse>;
    protected _getAuthorizationHeader(): Promise<string | undefined>;
}
