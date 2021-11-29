import queryString from 'query-string';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';
import {
  BigcommerceIntegrationContext,
  CreateCartResponse,
  CreateCartParameters
} from '../../../types';

export async function createCart(
  context: BigcommerceIntegrationContext,
  params: CreateCartParameters
): Promise<CreateCartResponse> {
  const { data, include } = params;

  return await context.client.post(
    queryString.stringifyUrl({
      url: BigCommerceEndpoints.cart(),
      query: include ? { include } : undefined
    }),
    data
  );
}

export default createCart;
