import { CouponCode } from './coupon';
import { CustomItem } from './customItem';
import { GiftCertificate } from './giftCertificate';
import { DigitalCartItem, PhysicalCartItem } from '.';

export * from './parameters';
export * from './responses';
export * from './item';

/**
 * Discount model.
 */
export interface AppliedDiscount {
  /**
   * ID of the applied discount.
   */
  id?: number;
  /**
   * The discounted amount.
   */
  discounted_amount?: number;
}

/**
 * Coupon applied in cart.
 */
export interface AppliedCoupon {
  coupons?: {
    coupon_code: CouponCode;
  };
}

/**
 * Currency of the cart.
 */
export interface CartCurrency {
  /**
   * The [transactional currency](https://developer.bigcommerce.com/api-docs/multi-currency/guide/introduction#multi-currency-definitions) code for the cart as a [ISO-4217](https://www.iso.org/iso-4217-currency-codes.html) formatted string.
   */
  code?: string;
}

/**
 * Custom item extended with list price.
 */
export interface CustomItemExtended extends CustomItem {
  /**
   * Item’s list price multiplied by quantity.
   */
  extended_list_price: number;
}

/**
 * Cart line items.
 */
export interface LineItems {
  /**
   * Physical items.
   */
  physical_items: PhysicalCartItem[];
  /**
   * Digital items.
   */
  digital_items: DigitalCartItem[];
  /**
   * Gift certificates.
   */
  gift_certificates: GiftCertificate[];
  /**
   * Custom items.
   */
  custom_items: CustomItemExtended[];
}

export interface RedirectUrls {
  /**
   * Cart URL.
   */
  cart_url: string;
  /**
   * Checkout URL.
   */
  checkout_url: string;
  /**
   * Embedded checkout URL.
   */
  embedded_checkout_url: string;
}

/**
 * A cart contains a collection of items, prices, discounts, etc...
 * It does not contain customer-related data.
 */
export interface Cart {
  /**
   * Cart ID.
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
   * The cart's email. This is the same email that is used in the billing address.
   */
  email?: string;
  /**
   * This will always be the same between cart and checkout.
   */
  currency?: CartCurrency;
  /**
   * Information if tax is included.
   */
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
  /**
   * Coupon applied in cart.
   */
  coupons?: Array<AppliedCoupon>;
  /**
   * Discounts applied in cart.
   */
  discounts?: Array<AppliedDiscount>;
  /**
   * Cart line items.
   */
  line_items?: LineItems;
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
  /**
   * Redirect URLs for checkout.
   */
  redirect_urls?: RedirectUrls;
}
