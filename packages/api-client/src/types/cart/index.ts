import { CouponCode } from './coupon';
import { CustomItem } from './customItem';
import { GiftCertificate } from './giftCertificate';

export * from './parameters';
export * from './responses';

type AppliedDiscount = {
  /**
   * ID of the applied discount.
   */
  id?: number;
  /**
   * The discounted amount.
   */
  discountedAmount?: number;
};

type AppliedCoupon = {
  coupons?: CouponCode[];
};

/**
 * A cart contains a collection of items, prices, discounts, etc.. It does not contain customer-related data.
 */
export type Cart = {
  /**
   * Cart ID, provided after creating a cart with a POST.
   */
  id?: string;
  /**
   * Bundled items will have their parent's item Id.
   */
  parent_id?: string;
  /**
   * ID of the customer to which the cart belongs.
   */
  customer_id?: number;
  /**
   * The cart's email. This is the same email that is used in the billing address
   */
  email?: string;
  /**
   * This will always be the same between cart and checkout.
   */
  currency?: {
    /**
     * The [transactional currency](https://developer.bigcommerce.com/api-docs/multi-currency/guide/introduction#multi-currency-definitions) code for the cart as a [ISO-4217](https://www.iso.org/iso-4217-currency-codes.html) formatted string.
     */
    code?: string;
  };
  tax_included?: boolean;
  /**
   * Sum of cart line-item amounts before cart-level discounts, coupons, or taxes.
   */
  base_amount?: number;
  /**
   * Discounted amount.
   */
  discount_amount?: number;
  /**
   * Sum of cart line-item amounts minus cart-level discounts and coupons. This amount includes taxes (where applicable).
   */
  cart_amount?: number;
  coupons?: Array<AppliedCoupon>;
  discounts?: Array<AppliedDiscount>;
  lineItems?: {
    physical_items: Record<string, unknown>[];
    digital_items: Record<string, unknown>[];
    gift_certificates: GiftCertificate[];
    custom_items: CustomItem &
      {
        /**
         * Item’s list price multiplied by quantity.
         */
        extended_list_price: number;
      }[];
  };
  /**
   * Time when the cart was created.
   */
  created_time?: string;
  /**
   * Time when the cart was last updated.
   */
  updated_time?: string;
  /**
   * If no channel is specified, defaults to 1.
   */
  channel_id?: number;
  /**
   * Locale of the cart.
   */
  locale?: string;
};
