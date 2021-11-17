import { IntegrationContext } from '@vue-storefront/core';
import { ContextualizedEndpoints } from '@vue-storefront/bigcommerce-api';
import { AxiosInstance } from 'axios';

export * from './useReview';
export * from './useUser';

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
  $bigcommerce: BigcommerceIntegrationContext;
  [key: string]: any;
}

// TODO types
export type TODO = any;

export type UseBillingAddParams = TODO;

export type UseCategorySearchParams = TODO;

export type UseSearchParams = TODO;

export type UseReviewAddParams = TODO;

export type UseShippingAddParams = TODO;

export type useUserOrderSearchParams = TODO;
