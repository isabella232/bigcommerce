import { IntegrationContext } from '@vue-storefront/core';
import { ContextualizedEndpoints } from '@vue-storefront/bigcommerce-api';
import { AxiosInstance } from 'axios';
import { NuxtAppOptions } from '@nuxt/types';

export * from './useWishlist';
export * from './useGuestWishlist';
export * from './useReview';
export * from './useUser';
export * from './useUserOrder';
export * from './useUserOrderProducts';
export * from './useUserOrderByCart';
export * from './useCategory';

/**
 * Contains configuration for [axios client](https://github.com/axios/axios).
 */
interface AxiosClientConfig {
  /**
   * Base API address.
   */
  baseURL: string;

  /**
   * Headers for axios client.
   */
  headers: any;
}

/**
 * Configuration for `$vsf` context.
 */
interface ContextConfig {
  /**
   * Api Client.
   */
  axios: AxiosClientConfig;

  /**
   * App Config.
   */
  app: NuxtAppOptions;
}

/**
 * Runtime integration context, which includes API client instance, settings, and endpoints that will be passed via middleware server.
 **/
export type BigcommerceIntegrationContext = IntegrationContext<
  AxiosInstance,
  ContextConfig,
  ContextualizedEndpoints
>;

/**
 * $vsf Context.
 */
export interface Context {
  /**
   * BigCommerce integration context.
   */
  $bigcommerce: BigcommerceIntegrationContext;
  /**
   * Other context properties.
   */
  [key: string]: any;
}
