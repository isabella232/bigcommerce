import { Ref, computed } from '@vue/composition-api';
import { sharedRef, Logger, generateContext } from '@vue-storefront/core';
import {
  GetOrderByCartParameters,
  OrderByCartResponse
} from '@vue-storefront/bigcommerce-api';
import { params } from './params';
import {
  Context,
  UseUserOrderByCartErrors,
  UseUserOrderByCartResponse
} from '..';

/**
 * Managing shipping data for fulfilled and active user orders.
 */
export const useUserOrderByCart = (id: string): UseUserOrderByCartResponse => {
  const order: Ref<OrderByCartResponse> = sharedRef(
    null,
    `useUserByCart-order-${id}`
  );
  const loading: Ref<boolean> = sharedRef(false, `order-loading-${id}`);
  const error: Ref<UseUserOrderByCartErrors> = sharedRef(
    {
      load: null
    },
    `useUserByCart-error-${id}`
  );
  const context = generateContext(params) as Context;

  const load = async (loadParams: GetOrderByCartParameters): Promise<void> => {
    Logger.debug(`useUserByCart/${id}/load`, loadParams);

    try {
      loading.value = true;
      order.value = await params.loadUserOrderByCart(context, loadParams);
      error.value.load = null;
    } catch (err) {
      error.value.load = err;
      Logger.error(`useUserByCart/${id}/load`, err);
    } finally {
      loading.value = false;
    }
  };

  return {
    order: computed(() => order.value),
    loading: computed(() => loading.value),
    error: computed(() => error.value),
    load
  };
};
