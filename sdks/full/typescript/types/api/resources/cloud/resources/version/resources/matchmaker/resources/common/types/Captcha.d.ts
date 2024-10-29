/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as Rivet from "../../../../../../../../../index";
/**
 * Matchmaker captcha configuration.
 */
export interface Captcha {
    /** Denotes how many requests a connection can make before it is required to reverify a captcha. */
    requestsBeforeReverify: number;
    /** Denotes how long a connection can continue to reconnect without having to reverify a captcha (in milliseconds). */
    verificationTtl: number;
    hcaptcha?: Rivet.cloud.version.matchmaker.CaptchaHcaptcha;
    turnstile?: Rivet.cloud.version.matchmaker.CaptchaTurnstile;
}
