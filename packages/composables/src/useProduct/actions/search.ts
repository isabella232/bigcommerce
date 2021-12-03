import { ProductsResponse, GetProductsParameters as SearchParams } from '@vue-storefront/bigcommerce-api';
import { UseProductFactoryParams } from '@vue-storefront/core';
import type {
  Context
} from '../../types';

export const productsSearch: UseProductFactoryParams<ProductsResponse, SearchParams>['productsSearch'] = async (
  context: Context,
  params: SearchParams
) : Promise<ProductsResponse> => {
  const response = await context.$bigcommerce.api.getProducts(
    params
  );
  return response;
};
