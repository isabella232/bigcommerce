/**
 * Product variant option value model.
 */
export interface ProductVariantOptionValue {
  /**
   * The name of the option.
   */
  option_display_name?: string;
  /**
   * The label of the option value.
   */
  label?: string;
  /**
   * `option_value` ID.
   */
  id?: number;
  /**
   * `option` ID.
   */
  option_id?: number;
}

/**
 * Product variant model.
 */
export interface ProductVariant {
  /**
   * The cost price of the variant. Not affected by Price List prices.
   */
  cost_price?: number | null;
  /**
   * This variant's base price on the storefront. If a Price List ID is used, the Price List value will be used. If a Price List ID is not used, and this value is `null`, the product's default price (set in the Product resource's `price` field) will be used as the base price.
   */
  price?: number | null;
  /**
   * This variant's sale price on the storefront. If a Price List ID is used, the Price List value will be used. If a Price List ID is not used, and this value is null, the product's sale price (set in the Product resource's `price` field) will be used as the sale price.
   */
  sale_price?: number | null;
  /**
   * This variant's retail price on the storefront. If a Price List ID is used, the Price List value will be used. If a Price List ID is not used, and this value is null, the product's retail price (set in the Product resource's `price` field) will be used as the retail price.
   */
  retail_price?: number | null;
  /**
   * This variant's base weight on the storefront. If this value is null, the product's default weight (set in the Product resource's weight field) will be used as the base weight.
   */
  weight?: number | null;
  /**
   * Width of the variant, which can be used when calculating shipping costs. If this value is `null`, the product's default width (set in the Product resource's `width` field) will be used as the base width.
   */
  width?: number | null;
  /**
   * Height of the variant, which can be used when calculating shipping costs. If this value is `null`, the product's default height (set in the Product resource's `height` field) will be used as the base height.
   */
  height?: number | null;
  /**
   * Depth of the variant, which can be used when calculating shipping costs. If this value is `null`, the product's default depth (set in the Product resource's `depth` field) will be used as the base depth.
   */
  depth?: number | null;
  /**
   * Flag used to indicate whether the variant has free shipping. If `true`, the shipping cost for the variant will be zero.
   */
  is_free_shipping?: boolean;
  /**
   * A fixed shipping cost for the variant. If defined, this value will be used during checkout instead of normal shipping-cost calculation.
   */
  fixed_cost_shipping_price?: number | null;
  /**
   * If `true`, this variant will not be purchasable on the storefront.
   */
  purchasing_disabled?: boolean;
  /**
   * If `purchasing_disabled` is `true`, this message should show on the storefront when the variant is selected.
   */
  purchasing_disabled_message?: string;
  /**
   * The UPC code used in feeds for shopping comparison sites and external channel integrations.
   */
  upc?: string | null;
  /**
   * Inventory level for the variant, which is used when the product's inventory_tracking is set to `variant`.
   */
  inventory_level?: number | null;
  /**
   * When the variant hits this inventory level, it is considered low stock.
   */
  inventory_warning_level?: number | null;
  /**
   * Identifies where in a warehouse the variant is located.
   */
  bin_picking_number?: string | null;
  /**
   * The Manufacturer Part Number (MPN) for the variant.
   */
  mpn?: string;
  /**
   * URL of the uploaded image for the variant.
   */
  image_url?: string;
  /**
   * ID of the variant
   */
  id?: number;
  /**
   * ID of the product
   */
  productId?: number;
  /**
   * User defined product variant code/stock keeping unit (SKU).
   */
  sku?: string;
  /**
   * Read-only reference to v2 API's SKU ID. Null if it is a base variant.
   */
  sku_id?: number | null;
  /**
   * Array of option and option values IDs that make up this variant. Will be empty if the variant is the product's base variant.
   */
  option_values?: ProductVariantOptionValue[];
  /**
   * The price of the variant as seen on the storefront. This price takes into account `sale_price` and any price adjustment rules that are applicable to this variant.
   */
  calculated_price?: number;
  /**
   * Product variant calculated weight.
   */
  calculated_weight?: number;
}
