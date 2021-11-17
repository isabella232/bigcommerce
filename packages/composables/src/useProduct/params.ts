import { UseProductFactoryParams } from '@vue-storefront/core';
import type { Product, GetProductsParameters as SearchParams } from '@vue-storefront/bigcommerce-api';
import { productsSearch } from './actions';

export const params: UseProductFactoryParams<Product[], SearchParams> = {
  productsSearch
};
