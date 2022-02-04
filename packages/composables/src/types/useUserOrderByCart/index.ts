import { ComputedRef } from '@vue/composition-api';
import {
  GetOrderByCartParameters,
  OrderByCartResponse
} from '@vue-storefront/bigcommerce-api';

/**
 * `useUserOrderByCart` composable errors.
 */
export interface UseUserOrderByCartErrors {
  /**
   * Errors occurred during `load` action.
   */
  load: Error;
}

/**
 * Return value of `useUserOrderByCart` composable.
 */
export interface UseUserOrderByCartResponse {
  /**
   * Data of an order.
   */
  order: ComputedRef<OrderByCartResponse>;

  /**
   * Flag is set to true, if an API request is in progress.
   */
  loading: ComputedRef<boolean>;

  /**
   * Contains error if occures.
   */
  error: ComputedRef<UseUserOrderByCartErrors>;

  /**
   * Function for loading order data. Result is stored in order property.
   */
  load: (searchParams: GetOrderByCartParameters) => Promise<void>;
}
