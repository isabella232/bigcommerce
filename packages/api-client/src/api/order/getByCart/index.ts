import { Endpoints, Order } from '../../../types';
import { getOrderProducts } from '../getProducts';
import { getOrderShippingAddresses } from '../getShippingAddresses';
import BigCommerceEndpoints from '../../../helpers/endpointPaths';
import { stringifyUrl } from 'query-string';

export const getOrderByCart: Endpoints['getOrderByCart'] = async (
  context,
  params
) => {
  const orders: Order[] = await context.client.v2.get(
    stringifyUrl({
      url: BigCommerceEndpoints.orders,
      query: {
        cart_id: params.cartId
      }
    })
  );

  if (orders?.length) {
    const order = orders[0];

    const products = await getOrderProducts(context, { orderId: order.id });
    const shippingAddresses = await getOrderShippingAddresses(context, {
      orderId: order.id
    });

    return {
      ...order,
      products,
      shipping_addresses: shippingAddresses
    };
  }

  throw new Error('No order found');
};
