/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as Rivet from "../../../../..";
/**
 * An identity handle.
 */
export interface Handle {
    identityId: string;
    displayName: Rivet.DisplayName;
    accountNumber: Rivet.AccountNumber;
    /** The URL of this identity's avatar image. */
    avatarUrl: string;
    presence?: Rivet.identity.Presence;
    /** Whether or not this identity is registered with a linked account. */
    isRegistered: boolean;
    external: Rivet.identity.ExternalLinks;
}
