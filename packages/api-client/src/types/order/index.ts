export * from './parameters';
export * from './responses';
export * from './item';
export * from './shippingAddress';

/**
 * Possible values of order payment statuses.
 */
export enum OrderPaymentStatus {
  /**
   * Authorized status.
   */
  Authorized = 'authorized',
  /**
   * Captured status.
   */
  Captured = 'captured',
  /**
   * Capture pending status.
   */
  CapturePending = 'capture pending',
  /**
   * Declined status.
   */
  Declined = 'declined',
  /**
   * Held for review status.
   */
  HeldForReview = 'held for review',
  /**
   * Paid status.
   */
  Paid = 'paid',
  /**
   * Partially refunded status.
   */
  PartiallyRefunded = 'partially refunded',
  /**
   * Pending status.
   */
  Pending = 'pending',
  /**
   * Refunded status.
   */
  Refunded = 'refunded',
  /**
   * Void status.
   */
  Void = 'void',
  /**
   * Void pending status.
   */
  VoidPending = 'void pending'
}

/**
 * Possible values of order payment methods.
 */
export enum OrderPaymentMethod {
  /**
   * Credit card method.
   */
  CreditCard = 'Credit Card',
  /**
   * Cash method.
   */
  Cash = 'Cash',
  /**
   * Test payment gateway method.
   */
  TestPaymentGateway = 'Test Payment Gateway',
  /**
   * Manual method.
   */
  Manual = 'Manual'
}

/**
 * Possible values of order tax provider ids.
 */
export enum OrderTaxProviderId {
  /**
   * Basic tax provider.
   */
  BasicTaxProvider = 'BasicTaxProvider',
  /**
   * Ava tax provider.
   */
  AvaTaxProvider = 'AvaTaxProvider',
  /**
   * Empty.
   */
  Empty = ''
}

/**
 * Order object returned in responses.
 */
export interface Order {
  /**
   * Read-only. The ID of the order.
   */
  id?: number;
  /**
   * A read-only value representing the last modification of the order. Do not attempt to modify or set this value in a POST or PUT operation. RFC-2822
   */
  date_modified?: string;
  /**
   * A read-only value representing the date of shipment. Do not attempt to modify or set this value in a POST or PUT operation. RFC-2822
   */
  date_shipped?: string;
  /**
   * The cart ID from which this order originated, if applicable. Correlates with the Cart API. This is a READ-ONLY field; do not set or modify its value in a POST or PUT request.
   */
  cart_id?: string;
  /**
   * The status will include one of the (string, optiona) - values defined under Order Statuses. This value is read-only. Do not attempt to modify or set this value in a POST or PUT operation.
   */
  status?: string;
  /**
   * A read-only value. Do not attempt to set or modify this value in a POST or PUT operation. (Float, Float-As-String, Integer)
   */
  subtotal_tax?: string;
  /**
   * A read-only value. Do not attempt to modify or set this value in a POST or PUT operation. (Float, Float-As-String, Integer)
   */
  shipping_cost_tax?: string;
  /**
   * Shipping-cost tax class. A read-only value. Do not attempt to modify or set this value in a POST or PUT operation. (NOTE: Value ignored if automatic tax is enabled on the store.)
   */
  shipping_cost_tax_class_id?: number;
  /**
   * A read-only value. Do not attempt to modify or set this value in a POST or PUT operation. (Float, Float-As-String, Integer)
   */
  handling_cost_tax?: string;
  /**
   * A read-only value. Do not attempt to set or modify this value in a POST or PUT operation. (NOTE: Value ignored if automatic tax is enabled on the store.)
   */
  handling_cost_tax_class_id?: number;
  /**
   * A read-only value. Do not attempt to modify or set this value in a POST or PUT operation. (Float, Float-As-String, Integer)
   */
  wrapping_cost_tax?: string;
  /**
   * A read-only value. Do not attempt to set or modify this value in a POST or PUT operation. (NOTE: Value ignored if automatic tax is enabled on the store.)
   */
  wrapping_cost_tax_class_id?: number;
  /**
   * A read-only value. Do not attempt to set or modify this value in a POST or PUT operation.
   */
  payment_status?: OrderPaymentStatus;
  /**
   * Represents the store credit that the shopper has redeemed on this individual order. This is a read-only value. Do not pass in a POST or PUT. (Float, Float-As-String, Integer)
   */
  store_credit_amount?: string;
  /**
   * A read-only value. Do not pass in a POST or PUT. (Float, Float-As-String, Integer)
   */
  gift_certificate_amount?: string;
  /**
   * The display currency ID. May be different from transactional currency. A read-only value. Do not pass in a POST or PUT.
   */
  currency_id?: number;
  /**
   * The currency code of the display currency used to present prices on the storefront. A read-only value. Do not pass in a POST or PUT.
   */
  currencyCode?: string;
  /**
   * The exchange rate between the store's default currency and the display currency. A read-only value. Do not pass in a POST or PUT. (Float, Float-As-String, Integer)
   */
  currency_exchange_rate?: string;
  /**
   * The transactional currency ID. A read-only value. Do not pass in a POST or PUT.
   */
  default_currency_id?: number;
  /**
   * A read-only value. Do not pass in a POST or PUT. (Float, Float-As-String, Integer)
   */
  coupon_discount?: string;
  /**
   * The number of shipping addresses associated with this transaction. A read-only value. Do not pass in a POST or PUT.
   */
  shipping_address_count?: number;
  /**
   * Indicates whether the shopper has selected an opt-in check box (on the checkout page) to receive emails. A read-only value. Do not pass in a POST or PUT.
   */
  is_email_opt_in?: boolean;
  /**
   * Orders submitted via the store's website will include a `www` value. Orders submitted via the API will be set to `external`. A read-only value. Do not pass in a POST or PUT.
   */
  order_source?: string;
  /**
   * Order products.
   */
  products?: {
    /**
     * URL of the products for api requests
     */
    url: string;
    /**
     * Resource of the products.
     */
    resource: string;
  };
  /**
   * Order shipping addresses.
   */
  shipping_addresses?: {
    /**
     * URL of the shipping address for api requests.
     */
    url: string;
    /**
     * Resource of the shipping addresses.
     */
    resource: string;
  };
  /**
   * Order coupons.
   */
  coupons?: {
    /**
     * URL of the coupons for api requests.
     */
    url: string;
    /**
     * Resource of the coupons.
     */
    resource: string;
  };
  /**
   * The status ID of the order.
   */
  status_id?: number;
  /**
   * The value of the base handling cost. (Float, Float-As-String, Integer)
   */
  base_handling_cost?: string;
  /**
   * The value of the base shipping cost. (Float, Float-As-String, Integer)
   */
  base_shipping_cost?: string;
  /**
   * The value of the base wrapping cost. (Float, Float-As-String, Integer)
   */
  base_wrapping_cost?: string | number;
  /**
   * Order billing address.
   */
  billing_address?: Record<string, any>;
  /**
   * Shows where the order originated. The channel_id will default to 1.
   */
  channel_id?: number;
  /**
   * Order customer ID.
   */
  customer_id?: number;
  /**
   * Message that the customer entered (number, optional) -o the `Order Comments` box during checkout.
   */
  customer_message?: string;
  /**
   * The date the order was created, formatted in the RFC-2822 standard. You set this attribute on Order creation (POST) to support the migration of historical orders. If you do not provide a value, then it will default to the current date/time. e.g., `Tue, 20 Nov 2012 00:00:00 +0000`
   */
  date_created?: string;
  /**
   * The currency code of the transactional currency the shopper pays in; writeable when multi-currency is enabled.
   */
  default_currency_code?: string;
  /**
   * Amount of discount for this transaction. (Float, Float-As-String, Integer)
   */
  discount_amount?: string;
  /**
   * If the order was placed through eBay, the eBay order number will be included. Otherwise, the value will be `0`.
   */
  ebay_order_id?: string;
  /**
   * ID of the order in another system. For example, the Amazon Order ID if this is an Amazon order.This field can be updated in a /POST, but using a /PUT to update the order will return a 400 error. The field 'external_id' cannot be written to. Please remove it from your request before trying again. It can not be overwritten once set.
   */
  external_id?: string | null;
  /**
   * This value identifies an external system that generated the order and submitted it to BigCommerce via the Orders API.
   * * When supplying the value, we recommend combining the type of system and vendor, e.g., ERP (Acumatica) or POS (Square).
   * * If you are migrating historical orders processed on another eCommerce platform to BigCommerce, supply the following code as the value: M-MIG. This code will exclude historical orders from the store’s GMV/order count, which factors into pricing.
   * * If you do not provide a value, then it will default to null.
   */
  external_source?: string | null;
  /**
   * The full name of the country where the customer made the purchase, based on the IP.
   */
  geoip_country?: string;
  /**
   * The country where the customer made the purchase, in ISO2 format, based on the IP.
   */
  geoip_country_iso2?: string;
  /**
   * The value of the handling cost, excluding tax. (Float, Float-As-String, Integer)
   */
  handling_cost_ex_tax?: string;
  /**
   * The value of the handling cost, including tax. (Float, Float-As-String, Integer)
   */
  handling_cost_inc_tax?: string;
  /**
   * IPv4 Address of the customer, if known.
   *
   * Note: You can set either `ip_address` or `ip_address_v6`. Setting the `ip_address` value will reset the `ip_address_v6` value and vice versa.
   */
  ip_address?: string;
  /**
   * IPv6 Address of the customer, if known.
   *
   * Note: You can set either `ip_address` or `ip_address_v6`. Setting the `ip_address_v6` value will reset the `ip_address` value and vice versa.
   */
  ip_address_v6?: string;
  /**
   * Indicates whether the order was deleted (archived). Set to to true, to archive an order.
   */
  is_deleted?: boolean;
  /**
   * The number of items that have been shipped.
   */
  items_shipped?: number;
  /**
   * The total number of items in the order.
   */
  items_total?: number;
  /**
   * Whether this is an order for digital products.
   */
  order_is_digital?: boolean;
  /**
   * The payment method for this order. Can be one of the following: `Manual`, `Credit Card`, `cash`, `Test Payment Gateway`, etc.
   */
  payment_method?: OrderPaymentMethod;
  /**
   * The external Transaction ID/Payment ID within this order's payment provider (if a payment provider was used).
   */
  payment_provider_id?: any | null;
  /**
   * The amount refunded from this transaction. (Float, Float-As-String, Integer)
   */
  refunded_amount?: string;
  /**
   * The value of shipping cost, excluding tax. (Float, Float-As-String, Integer)
   */
  shipping_cost_ex_tax?: string;
  /**
   * The value of shipping cost, including tax. (Float, Float-As-String, Integer)
   */
  shipping_cost_inc_tax?: string;
  /**
   * Any additional notes for staff.
   */
  staff_notes?: string;
  /**
   * Override value for subtotal excluding tax. If specified, the field `subtotal_inc_tax` is also required. (Float, Float-As-String, Integer)
   */
  subtotal_ex_tax?: string;
  /**
   * Override value for subtotal including tax. If specified, the field `subtotal_ex_tax` is also required. (Float, Float-As-String, Integer)
   */
  subtotal_inc_tax?: string;
  /**
   * BasicTaxProvider - Tax is set to manual.
   *
   * AvaTaxProvider - This is for when the tax provider has been set to automatic and the order was NOT created by the API. Used for Avalara.
   *
   * "" (blank) - When the tax provider is unknown. This includes legacy orders and orders previously created via API.
   * This can be set when creating an order using a POST.
   */
  tax_provider_id?: OrderTaxProviderId;
  /**
   * The customer's locale
   */
  customer_locale?: string;
  /**
   * Override value for the total, excluding tax. If specified, the field `total_inc_tax` is also required. (Float, Float-As-String, Integer)
   */
  total_ex_tax?: string;
  /**
   * Override value for the total, including tax. If specified, the field `total_ex_tax` is also required. (Float, Float-As-String, Integer)
   */
  total_inc_tax?: string;
  /**
   * The value of the wrapping cost, excluding tax. (Float, Float-As-String, Integer)
   */
  wrapping_cost_ex_tax?: string;
  /**
   * The value of the wrapping cost, including tax. (Float, Float-As-String, Integer)
   */
  wrapping_cost_inc_tax?: string;
}
