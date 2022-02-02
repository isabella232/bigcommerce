import { Ref, computed } from '@vue/composition-api';
import { sharedRef, Logger, generateContext } from '@vue-storefront/core';
import {
  GetOrderProductsParameters,
  OrderProductResponse
} from '@vue-storefront/bigcommerce-api';
import { params } from './params';
import {
  Context,
  UseUserOrderProductsResponse,
  UseUserOrderProductsErrors
} from '..';

/**
 * Managing product data for fulfilled and active user orders.
 */
export const useUserOrderProducts = (
  id: string
): UseUserOrderProductsResponse => {
  const products: Ref<OrderProductResponse> = sharedRef(
    [],
    `useUserOrderProducts-products-${id}`
  );
  const loading: Ref<boolean> = sharedRef(
    false,
    `useUserOrderProducts-loading-${id}`
  );
  const error: Ref<UseUserOrderProductsErrors> = sharedRef(
    {
      load: null
    },
    `useUserOrderProducts-error-${id}`
  );
  const context = generateContext(params) as Context;

  const load = async (
    loadParams: GetOrderProductsParameters
  ): Promise<void> => {
    Logger.debug(`useUserOrderProducts/${id}/load`, loadParams);

    try {
      loading.value = true;
      products.value = await params.loadUserOrderProducts(context, loadParams);
      error.value.load = null;
    } catch (err) {
      error.value.load = err;
      Logger.error(`useUserOrderProducts/${id}/load`, err);
    } finally {
      loading.value = false;
    }
  };

  return {
    products: computed(() => products.value),
    loading: computed(() => loading.value),
    error: computed(() => error.value),
    load
  };
};
