/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as Rivet from "../../../../..";
/**
 * Methods to verify a captcha
 */
export interface Config {
    hcaptcha?: Rivet.captcha.ConfigHcaptcha;
    turnstile?: Rivet.captcha.ConfigTurnstile;
}
