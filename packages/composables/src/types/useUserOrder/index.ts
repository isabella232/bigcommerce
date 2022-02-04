import { Order } from '@vue-storefront/bigcommerce-api';

/**
 * Orders collection.
 */
export interface OrderResults {
  /**
   * Colletion of orders.
   */
  results: Order[];
  /**
   * Total amount of orders.
   */
  total: number;
}
