import { AppliedCoupon, AppliedDiscount } from '../';

/**
 * Product option model.
 */
interface ProductOption {
  /**
   * The product option name. For example, Color or Size
   */
  name?: string;
  /**
   * The product option identifier.
   */
  nameId?: number;
  /**
   * The product option value. For example, Red or Medium
   */
  value?: string;
  /**
   * The product option value identifier.
   */
  valueId?: number;
}

/**
 * Base model of cart item.
 */
export interface CartItemBase {
  /**
   * The line-item ID.
   */
  id?: string;
  /**
   * The id of the variant. Required in the /PUT or /POST if the product has variants.
   */
  variant_id: number;
  /**
   * The id of the product. Required in a /POST request.
   */
  product_id: number;
  /**
   * Bundled items will have their parent's item Id.
   */
  parent_id?: number | null;
  /**
   * SKU of the variant.
   */
  sku?: string;
  /**
   * The item's product name.
   */
  name?: string;
  /**
   * The product URL.
   */
  url?: string;
  /**
   * Quantity of this item in the cart.
   */
  quantity: number;
  /**
   * Whether the item is taxable.
   */
  taxable?: boolean;
  /**
   * Image of the product or variant.
   */
  image_url?: string;
  /**
   * Discounts applied on the item
   */
  discounts?: Array<AppliedDiscount>;
  /**
   * Coupons applied on the item
   */
  coupons?: Array<AppliedCoupon>;
  /**
   * The total value of all discounts applied to this item. This includes coupons and cart level discounts
   */
  discount_amount?: number;
  /**
   * The total value of all coupons applied to this item.
   */
  coupon_amount?: number;
  /**
   * Item's list price, as quoted by the manufacturer/distributor. Optional price override.
   */
  list_price?: number;
  /**
   * Item's price after all discounts are applied. (The final price before tax calculation.)
   */
  sale_price?: number;
  /**
   * Item's list price multiplied by the quantity.
   */
  extended_list_price?: number;
  /**
   * Item's sale price multiplied by the quantity.
   */
  extended_sale_price?: number;
  /**
   * The list of selected options for this product.
   */
  options?: Array<ProductOption>;
}
