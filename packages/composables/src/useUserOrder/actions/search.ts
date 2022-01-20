import { UseUserOrderFactoryParams } from '@vue-storefront/core';
import {
  Order,
  GetOrdersParameters as SearchParams
} from '@vue-storefront/bigcommerce-api';
import { Context, OrderResults } from '../../types';

export const searchOrders: UseUserOrderFactoryParams<
  OrderResults,
  SearchParams
>['searchOrders'] = async (context: Context, params) => {
  const channelIds =
    context.$bigcommerce?.config?.app?.$config?.theme?.channelIds;
  const channelId =
    Array.isArray(channelIds) && channelIds.length ? channelIds[0] : null;

  const orders = await context.$bigcommerce.api.getOrders({
    ...params,
    ...(channelId ? { channel_id: channelId } : {})
  });

  return {
    results: (orders ?? []) as Order[],
    total: orders?.length ?? 0
  };
};
