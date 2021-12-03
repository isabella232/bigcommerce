import { UseProductFactoryParams } from '@vue-storefront/core';
import type { ProductsResponse, GetProductsParameters as SearchParams } from '@vue-storefront/bigcommerce-api';
import { productsSearch } from './actions';

export const params: UseProductFactoryParams<ProductsResponse, SearchParams> = {
  productsSearch
};
