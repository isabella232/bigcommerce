import {
  useProductFactory
} from '@vue-storefront/core';
import type { ProductsResponse, GetProductsParameters as SearchParams } from '@vue-storefront/bigcommerce-api';
import { params } from './params';

/**
 * Managing a single product with variants (or a list).
 */
export const useProduct = useProductFactory<ProductsResponse, SearchParams>(params);
