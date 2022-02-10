import { useUserOrderFactory } from '@vue-storefront/core';
import type {
  GetOrdersParameters as SearchParams
} from '@vue-storefront/bigcommerce-api';
import { params } from './params';
import { OrderResults } from '..';

/**
 * Managing past and active user orders.
 */
export const useUserOrder = useUserOrderFactory<
  OrderResults,
  SearchParams
>(params);
