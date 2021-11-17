import {
  useProductFactory
} from '@vue-storefront/core';
import type { Product, GetProductsParameters as SearchParams } from '@vue-storefront/bigcommerce-api';
import { params } from './params';

export const useProduct = useProductFactory<Product[], SearchParams>(params);
