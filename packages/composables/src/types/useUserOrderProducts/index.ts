import { ComputedRef } from '@vue/composition-api';
import {
  GetOrderProductsParameters,
  OrderProductResponse
} from '@vue-storefront/bigcommerce-api';

/**
 * `useUserOrderProducts` composable errors.
 */
export interface UseUserOrderProductsErrors {
  /**
   * Errors occurred during `load` action.
   */
  load: Error;
}

/**
 * Return value of useUserOrderProducts composable.
 */
export interface UseUserOrderProductsResponse {
  /**
   * Collection of order products.
   */
  products: ComputedRef<OrderProductResponse>;

  /**
   * Flag is set to true, if an API request is in progress.
   */
  loading: ComputedRef<boolean>;

  /**
   * Contains error if occures.
   */
  error: ComputedRef<UseUserOrderProductsErrors>;

  /**
   * Function for loading order products. Result is stored in products property.
   */
  load: (searchParams: GetOrderProductsParameters) => Promise<void>;
}
