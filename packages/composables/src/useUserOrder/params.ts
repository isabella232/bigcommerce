import {
  UseUserOrderFactoryParams
} from '@vue-storefront/core';
import type { GetOrdersParameters as SearchParams } from '@vue-storefront/bigcommerce-api';
import { searchOrders } from './actions';
import { OrderResults } from '..';

export const params: UseUserOrderFactoryParams<OrderResults, SearchParams> = {
  searchOrders
};
