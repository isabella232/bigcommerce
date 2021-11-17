import { Product, GetProductsParameters as SearchParams } from '@vue-storefront/bigcommerce-api';
import { UseProductFactoryParams } from '@vue-storefront/core';
import type {
  Context
} from '../../types';

export const productsSearch: UseProductFactoryParams<Product[], SearchParams>['productsSearch'] = async (
  context: Context,
  params
) => {
  const { data } = await context.$bigcommerce.api.getProducts(
    params
  );
  return data;
};
