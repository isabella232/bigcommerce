import queryString from 'query-string';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';
import {
  BigcommerceIntegrationContext,
  AddLineItemsParameters,
  AddLineItemsResponse
} from '../../../types';

export async function addCartItems(
  context: BigcommerceIntegrationContext,
  params: AddLineItemsParameters
): Promise<AddLineItemsResponse> {
  const { cartId, data, include } = params;

  return await context.client.post(
    queryString.stringifyUrl({
      url: BigCommerceEndpoints.cartItems(cartId),
      query: include ? { include } : undefined
    }),
    data
  );
}

export default addCartItems;
