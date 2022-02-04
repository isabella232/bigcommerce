import { OrderItem, ShippingAddress } from '.';
import { Order } from '../../';

/**
 * Response of the order requests.
 */
export type OrdersResponse = Order[] | null;

/**
 * Response of the order products request.
 */
export type OrderProductResponse = OrderItem[];

/**
 * Definition of the response to the order shipping addresses request.
 */
export type OrderShippingAddressesResponse = ShippingAddress[];

export type OrderByCartResponse = Omit<
  Order,
  'products' | 'shipping_addresses'
> & {
  products: OrderProductResponse;
  shipping_addresses: OrderShippingAddressesResponse;
};
