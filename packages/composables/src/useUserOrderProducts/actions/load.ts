import {
  GetOrderProductsParameters,
  OrderProductResponse
} from '@vue-storefront/bigcommerce-api';
import { Context } from '../../types';

export const loadUserOrderProducts = async (
  context: Context,
  params: GetOrderProductsParameters
): Promise<OrderProductResponse> => {
  const { orderId } = params;

  if (!orderId || typeof orderId !== 'number')
    throw Error(
      `OrderId with value: ${orderId} is not valid. Use number value.`
    );

  return await context.$bigcommerce.api.getOrderProducts(params);
};
