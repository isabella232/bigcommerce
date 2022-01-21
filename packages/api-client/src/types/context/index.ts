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
  devtoolsAppClientId: string;
  devtoolsAppSecret: string;
  callback: string;
  responseType: string;
  storeHash: string;
  storeUrl: string;
  accessToken: string;
  headers: { 'Accept-Encoding': string };
  apiVersion: string;
  guestToken?: string;
}

/**
 * Settings provided in the `middleware.config.js` file.
 */
export interface MiddlewareSettingsConfig {
  sdkSettings: MiddlewareSDKSettingsConfig;
  jwtTokenExpirationDays: number;
  secureCookies: boolean;
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
 * All available API clients.
 */
export type BigCommerceClients = {
  v2: NodeBigcommerceSDK,
  v3: NodeBigcommerceSDK
}

/**
 * Runtime integration context, which includes API client instance, settings, and endpoints that will be passed via middleware server.
 **/
export type BigcommerceIntegrationContext = IntegrationContext<
  BigCommerceClients,
  MiddlewareSettingsConfig,
  ContextualizedEndpoints
>;

/**
 * Global context of the application which includes runtime integration context.
 **/
export interface Context {
  $bigcommerce: BigcommerceIntegrationContext;
}
