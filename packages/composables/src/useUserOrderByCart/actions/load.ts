import {
  GetOrderByCartParameters,
  OrderByCartResponse
} from '@vue-storefront/bigcommerce-api';
import { Context } from '../../types';

export const loadUserOrderByCart = async (
  context: Context,
  params: GetOrderByCartParameters
): Promise<OrderByCartResponse> => {
  const { cartId } = params;

  if (!cartId || typeof cartId !== 'string')
    throw Error(`CartId with value: ${cartId} is not valid. Use string value.`);

  return await context.$bigcommerce.api.getOrderByCart(params);
};
