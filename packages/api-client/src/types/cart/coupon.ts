/**
 * The coupon code
 */
export interface CouponCode {
  /**
   * Coupon Id
   */
  id?: number;
  /**
   * The coupon code. Required in a /POST request.
   */
  code?: string;
  /**
   * Name given to the coupon in the Control Panel
   */
  name?: string;
  /**
   * The discount type.
   *
   * - type 0: per_item_discount
   * - type 1: percentage_discount
   * - type 2: per_total_discount
   * - type 3: shipping_discount
   * - type 4: free_shipping
   */
  discount_type?: number;
  /**
   * The amount of the discount based on the coupon. For example, 3 percent off will show a 3.
   */
  discount_amount?: number;
  /**
   * Returns 0 if a expiration date is not set
   */
  expires_date?: number;
  /**
   * Total discount amount off cart
   */
  total_discount?: number;
}
