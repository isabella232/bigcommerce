import { useUserOrderFactory } from '@vue-storefront/core';
import type {
  GetOrdersParameters as SearchParams
} from '@vue-storefront/bigcommerce-api';
import { params } from './params';
import { OrderResults } from '..';

export const useUserOrder = useUserOrderFactory<
  OrderResults,
  SearchParams
>(params);
