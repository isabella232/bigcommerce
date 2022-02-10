import { IntegrationContext } from '@vue-storefront/core';
import { NodeBigcommerceSDK } from '../nodeBigcommerceSDK';
import { Endpoints } from '../endpoints';

/**
 * SDK Settings provided in the `middleware.config.js` file.
 */
export interface MiddlewareSDKSettingsConfig {
  /**
   * BigCommerce log level.
   * Example: 'info'.
   */
  logLevel: string;
  /**
   * BigCommerce client id.
   */
  clientId: string;
  /**
   * BigCommerce secret.
   */
  secret: string;
  /**
   * BigCommerce devtools app client id.
   */
  devtoolsAppClientId: string;
  /**
   * BigCommerce devtools app secret.
   */
  devtoolsAppSecret: string;
  /**
   * BigCommerce callback URL.
   */
  callback: string;
  /**
   * BigCommerce response type.
   */
  responseType: string;
  /**
   * BigCommerce store hash.
   */
  storeHash: string;
  /**
   * BigCommerce store URL.
   */
  storeUrl: string;
  /**
   * BigCommerce address URL.
   */
  accessToken: string;
  /**
   * BigCommerce request headers.
   */
  headers: { 'Accept-Encoding': string };
  /**
   * BigCommerce guest token.
   */
  guestToken?: string;
  /**
   * BigCommerce api version.
   */
  apiVersion: 'v2' | 'v3'
}

/**
 * Settings provided in the `middleware.config.js` file.
 */
export interface MiddlewareSettingsConfig {
  /**
   * BigCommerce SDK settings.
   */
  sdkSettings: MiddlewareSDKSettingsConfig;
  /**
   * JWT token expiration days.
   */
  jwtTokenExpirationDays: number;
  /**
   * indicates usage of secure cookies.
   */
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
export interface BigCommerceClients {
  /**
   * BigCommerce API v2 client.
   */
  v2: NodeBigcommerceSDK,
  /**
   * BigCommerce API v3 client.
   */
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
  /**
   * BigCommerce integration context.
   */
  $bigcommerce: BigcommerceIntegrationContext;
}
