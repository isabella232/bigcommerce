import queryString from 'query-string';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';
import {
  BigcommerceIntegrationContext,
  GetProductsParameters,
  ProductsResponse
} from '../../../types';

export async function getProducts(
  context: BigcommerceIntegrationContext,
  params: GetProductsParameters
): Promise<ProductsResponse> {
  if (params.include && !params.include.includes('images')) {
    params.include = params.include.concat(',images');
  } else if (!params.include) {
    params.include = 'images';
  }

  return await context.client.get(
    queryString.stringifyUrl({
      url: BigCommerceEndpoints.products,
      query: params
    })
  );
}

export default getProducts;
