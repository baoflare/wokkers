/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Rivet from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";
import { Games } from "../resources/games/client/Client";
import { Auth } from "../resources/auth/client/Client";
import { Devices } from "../resources/devices/client/Client";
import { Groups } from "../resources/groups/client/Client";
import { Logs } from "../resources/logs/client/Client";
import { Tiers } from "../resources/tiers/client/Client";
import { Uploads } from "../resources/uploads/client/Client";

export declare namespace Cloud {
    interface Options {
        environment?: core.Supplier<environments.RivetEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        /** Override the X-API-Version header */
        xApiVersion?: "25.1.0-rc.1";
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
        /** Override the X-API-Version header */
        xApiVersion?: "25.1.0-rc.1";
    }
}

export class Cloud {
    constructor(protected readonly _options: Cloud.Options = {}) {}

    /**
     * Returns the basic information required to use the cloud APIs.
     *
     * @param {Cloud.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Rivet.InternalError}
     * @throws {@link Rivet.RateLimitError}
     * @throws {@link Rivet.ForbiddenError}
     * @throws {@link Rivet.UnauthorizedError}
     * @throws {@link Rivet.NotFoundError}
     * @throws {@link Rivet.BadRequestError}
     *
     * @example
     *     await client.cloud.bootstrap()
     */
    public async bootstrap(requestOptions?: Cloud.RequestOptions): Promise<Rivet.cloud.BootstrapResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.RivetEnvironment.Production,
                "/cloud/bootstrap"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-API-Version": requestOptions?.xApiVersion ?? this._options?.xApiVersion ?? "25.1.0-rc.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 180000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.cloud.BootstrapResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 500:
                    throw new Rivet.InternalError(
                        serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 429:
                    throw new Rivet.RateLimitError(
                        serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 403:
                    throw new Rivet.ForbiddenError(
                        serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 408:
                    throw new Rivet.UnauthorizedError(
                        serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new Rivet.NotFoundError(
                        serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 400:
                    throw new Rivet.BadRequestError(
                        serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.RivetError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.RivetError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.RivetTimeoutError("Timeout exceeded when calling GET /cloud/bootstrap.");
            case "unknown":
                throw new errors.RivetError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected _games: Games | undefined;

    public get games(): Games {
        return (this._games ??= new Games(this._options));
    }

    protected _auth: Auth | undefined;

    public get auth(): Auth {
        return (this._auth ??= new Auth(this._options));
    }

    protected _devices: Devices | undefined;

    public get devices(): Devices {
        return (this._devices ??= new Devices(this._options));
    }

    protected _groups: Groups | undefined;

    public get groups(): Groups {
        return (this._groups ??= new Groups(this._options));
    }

    protected _logs: Logs | undefined;

    public get logs(): Logs {
        return (this._logs ??= new Logs(this._options));
    }

    protected _tiers: Tiers | undefined;

    public get tiers(): Tiers {
        return (this._tiers ??= new Tiers(this._options));
    }

    protected _uploads: Uploads | undefined;

    public get uploads(): Uploads {
        return (this._uploads ??= new Uploads(this._options));
    }

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
