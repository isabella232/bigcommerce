import { IntegrationContext } from '@vue-storefront/core';
import { NodeBigcommerceSDK } from '../nodeBigcommerceSDK';
import { Endpoints } from '../endpoints';

/**
 * SDK Settings provided in the `middleware.config.js` file.
 */
export interface MiddlewareSDKSettingsConfig {
  logLevel: string;
  clientId: string;
  secret: string;
  callback: string;
  responseType: string;
  storeHash: string;
  accessToken: string;
  headers: { 'Accept-Encoding': string };
  apiVersion: string;
}

/**
 * Settings provided in the `middleware.config.js` file.
 */
export interface MiddlewareSettingsConfig {
  sdkSettings: MiddlewareSDKSettingsConfig;
  secureCookies: boolean;
  currency: string;
  lang: string;
  mediaHost: string;
}

/**
 * All available API Endpoints without first argument - `context`, because this prop is set automatically.
 */
export type ContextualizedEndpoints = {
  [T in keyof Endpoints]: Endpoints[T] extends (
    x: any,
    ...args: infer P
  ) => infer R
    ? (...args: P) => R
    : never;
};

/**
 * Runtime integration context, which includes API client instance, settings, and endpoints that will be passed via middleware server.
 **/
export type BigcommerceIntegrationContext = IntegrationContext<
  NodeBigcommerceSDK,
  MiddlewareSettingsConfig,
  ContextualizedEndpoints
>;

/**
 * Global context of the application which includes runtime integration context.
 **/
export interface Context {
  $bigcommerce: BigcommerceIntegrationContext;
}
