/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../../../../../index";
import * as Rivet from "../../../../../../../../../../api/index";
import * as core from "../../../../../../../../../../core";
import { cloud } from "../../../../../../../../index";
export declare const LobbyGroupRuntimeDocker: core.serialization.ObjectSchema<serializers.cloud.version.matchmaker.LobbyGroupRuntimeDocker.Raw, Rivet.cloud.version.matchmaker.LobbyGroupRuntimeDocker>;
export declare namespace LobbyGroupRuntimeDocker {
    interface Raw {
        build_id?: string | null;
        args: string[];
        env_vars: cloud.version.matchmaker.LobbyGroupRuntimeDockerEnvVar.Raw[];
        network_mode?: cloud.version.matchmaker.NetworkMode.Raw | null;
        ports: cloud.version.matchmaker.LobbyGroupRuntimeDockerPort.Raw[];
    }
}
