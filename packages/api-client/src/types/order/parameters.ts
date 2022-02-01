/**
 * Necessary and optional parameters to get orders.
 */
export interface GetOrdersParameters {
  /**
   * The minimum order ID.
   */
  min_id?: number;
  /**
   * The maximum order ID.
   */
  max_id?: number;
  /**
   * The minimum order total in float format. eg. 12.50
   */
  min_total?: number;
  /**
   * The maximum order total in float format. eg. 12.50
   */
  max_total?: number;
  /**
   * Customer ID
   */
  customer_id?: number;
  /**
   * The email of the customer.
   */
  email?: string;
  /**
   * The staus ID of the order. You can get the status id from the /orders endpoints.
   */
  status_id?: number;
  /**
   * The cart ID of the order.
   */
  cart_id?: string;
  /**
   * The payment method used on the order.
   */
  payment_method?: string;
  /**
   * Minimum date the order was created in RFC-2822 or ISO-8601.
   * RFC-2822: Thu, 20 Apr 2017 11:32:00 -0400
   * ISO-8601: 2017-04-20T11:32:00.000-04:00
   */
  min_date_created?: string;
  /**
   * Maximum date the order was created in RFC-2822 or ISO-8601.
   * RFC-2822: Thu, 20 Apr 2017 11:32:00 -0400
   * ISO-8601: 2017-04-20T11:32:00.000-04:00
   */
  max_date_created?: string;
  /**
   * Minimum date the order was modified in RFC-2822 or ISO-8601.
   * RFC-2822: Thu, 20 Apr 2017 11:32:00 -0400
   * ISO-8601: 2017-04-20T11:32:00.000-04:00
   */
  min_date_modified?: string;
  /**
   * Maximum date the order was modified in RFC-2822 or ISO-8601.
   * RFC-2822: Thu, 20 Apr 2017 11:32:00 -0400
   * ISO-8601: 2017-04-20T11:32:00.000-04:00
   */
  max_date_modified?: string;
  /**
   * The page to return in the response.
   */
  page?: number;
  /**
   * Number of results to return.
   */
  limit?: number;
  /**
   * Field and direction to sort orders. To specify the direction, add :asc or :desc to the end of the query parameter. E.g. sort=date_created:desc.
   */
  sort?: string;
  /**
   * If the order was deleted or archived.
   */
  is_deleted?: boolean;
  /**
   * The Channel ID of the Order.
   */
  channel_id?: number;
}

/**
 * Necessary and optional parameters to get order products.
 */
export interface GetOrderProductsParameters {
  /**
   * ID of the order.
   */
  orderId: number;
  /**
   * The page to return in the response.
   */
  page?: number;
  /**
   * Number of results to return.
   */
  limit?: number;
}

/**
 * Definition of get order shipping addresses request parameters
 */
export type GetOrderShippingAddressesParameters = GetOrderProductsParameters;

/**
 * Definition of get order by cart request parameters
 */
export interface GetOrderByCartParameters {
  /**
   * The cart ID of the order.
   */
  cartId: string;
}
