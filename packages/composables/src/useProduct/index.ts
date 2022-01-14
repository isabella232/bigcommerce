import {
  useProductFactory
} from '@vue-storefront/core';
import type { ProductsResponse, GetProductsParameters as SearchParams } from '@vue-storefront/bigcommerce-api';
import { params } from './params';

export const useProduct = useProductFactory<ProductsResponse, SearchParams>(params);
