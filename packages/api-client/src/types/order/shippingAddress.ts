export type ShippingAddress = {
  /**
   * ID of this shipping address.
   */
  id?: number;
  /**
   * ID of the order.
   */
  order_id?: number;
  /**
   * The total number of items in the order.
   */
  items_total?: number;
  /**
   * The number of items that have been shipped.
   */
  items_shipped?: number;
  /**
   * The base value of the order’s items. (Float, Float-As-String, Integer)
   */
  base_cost?: string;
  /**
   * The value of the order’s items, excluding tax. (Float, Float-As-String, Integer)
   */
  cost_ex_tax?: string;
  /**
   * The value of the order’s items, including tax. (Float, Float-As-String, Integer)
   */
  cost_inc_tax?: string;
  /**
   * The tax amount on the order. (Float, Float-As-String, Integer)
   */
  cost_tax?: string;
  /**
   * The ID of the tax class applied to the product. (NOTE: Value ignored if automatic tax is enabled.)
   */
  cost_tax_class_id?: number;
  /**
   * The base handling charge. (Float, Float-As-String, Integer)
   */
  base_handling_cost?: string;
  /**
   * The handling charge, excluding tax. (Float, Float-As-String, Integer)
   */
  handling_cost_ex_tax?: string;
  /**
   * The handling charge, including tax. (Float, Float-As-String, Integer)
   */
  handling_cost_inc_tax?: string;
  handling_cost_tax?: string;
  /**
   * Numeric ID of the shipping zone.
   */
  shipping_zone_id?: number;
  /**
   * Name of the shipping zone.
   */
  shipping_zone_name?: string;
  form_fields?: Array<Record<string, unknown>>;
  shipping_quotes?: Record<string, unknown>;
  first_name?: string;
  last_name?: string;
  company?: string;
  /**
   * Street address (first line).
   */
  street_1?: string;
  /**
   * Street address (second line).
   */
  street_2?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
  /**
   * 2-letter ISO Alpha-2 code for the country.
   */
  country_iso2?: string;
  /**
   * Recipient’s telephone number.
   */
  phone?: string;
  /**
   * Recipient’s email address.
   */
  email?: string;
  /**
   * Text code identifying the BigCommerce shipping module selected by the customer.
   */
  shipping_method?: string;
};
