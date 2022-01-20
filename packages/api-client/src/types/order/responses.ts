import { OrderItem } from '.';
import { Order } from '../../';

/**
 * Definition of the response to the orders request.
 */
export type OrdersResponse = Order[] | null;

/**
 * Definition of the response to the order products request.
 */
export type OrderProductResponse = OrderItem[];
