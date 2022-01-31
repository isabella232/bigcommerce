import { Image } from './image';
import { ProductOption } from './option';
import { ProductVariant } from './variant';

/**
 * Possible values of product invetory types.
 */
export enum InventoryType {
  /**
   * None inventory type.
   */
  none = 'none',
  /**
   * Product inventory type.
   */
  product = 'product',
  /**
   * Variant inventory type.
   */
  variant = 'variant'
}

/**
 * Product model.
 */
export interface Product {
  /**
   * Availability of the product. (Corresponds to the product's [Purchasability](https://support.bigcommerce.com/s/article/Adding-Products-v3?language=en_US#sections) section in the control panel.) Supported values: `available` - the product is available for purchase; `disabled` - the product is listed on the storefront, but cannot be purchased; `preorder` - the product is listed for pre-orders.
   */
  availability?: 'available' | 'disabled' | 'preorder';
  /**
   * Availability text displayed on the checkout page, under the product title. Tells the customer how long it will normally take to ship this product, such as: 'Usually ships in 24 hours.'
   */
  availability_description?: string;
  /**
   * The unique identifier of the base variant associated with a simple product. This value is `null` for complex products.
   */
  base_variant_id?: number | null;
  /**
   * The BIN picking number for the product.
   */
  bin_picking_number?: string;
  /**
   * A product can be added to an existing brand during a product /PUT or /POST.
   */
  brand_id?: number;
  /**
   * The price of the product as seen on the storefront. It will be equal to the `sale_price`, if set, and the `price` if there is not a `sale_price`.
   */
  calculated_price?: number;
  /**
   * An array of IDs for the categories to which this product belongs. When updating a product, if an array of categories is supplied, all product categories will be overwritten. Does not accept more than 1,000 ID values.
   */
  categories?: number[];
  /**
   * The product condition. Will be shown on the product page if the `is_condition_shown` field's value is `true`. Possible values: `New`, `Used`, `Refurbished`.
   */
  condition?: 'New' | 'Used' | 'Refurbished';
  /**
   * The cost price of the product.
   */
  cost_price?: number;
  /**
   * Product custom URL.
   */
  custom_url: {
    /**
     * Returns `true` if the URL has been changed from its default state (the auto-assigned URL that BigCommerce provides).
     */
    is_customized?: boolean;
    /**
     * Product URL on the storefront.
     */
    url?: string;
  };
  /**
   * The date on which the product was created.
   */
  date_created?: string;
  /**
   * The date on which the product was modified.
   */
  date_modified?: string;
  /**
   * Depth of the product, which can be used when calculating shipping costs.
   */
  depth?: number;
  /**
   * The product description, which can include HTML formatting.
   */
  description?: string;
  /**
   * A fixed shipping cost for the product. If defined, this value will be used during checkout instead of normal shipping-cost calculation.
   */
  fixed_cost_shipping_price?: number;
  /**
   * A list of gift-wrapping option IDs.
   */
  gift_wrapping_options_list?: number[];
  /**
   * Type of gift-wrapping options. Values: `any` - allow any gift-wrapping options in the store; `none` - disallow gift-wrapping on the product; `list` – provide a list of IDs in the `gift_wrapping_options_list` field.
   */
  gift_wrapping_options_type?: 'any' | 'none' | 'list';
  /**
   * Global Trade Item Number
   */
  gtin?: string;
  /**
   * Height of the product, which can be used when calculating shipping costs.
   */
  height?: number;
  /**
   * ID of the product. Read Only.
   */
  id?: number;
  /**
   * Product images.
   */
  images?: Image[];
  /**
   * Current inventory level of the product. Simple inventory tracking must be enabled (See the `inventory_tracking` field) for this to take any effect.
   */
  inventory_level?: number;
  /**
   * The type of inventory tracking for the product. Values are: `none` - inventory levels will not be tracked; `product` - inventory levels will be tracked using the `inventory_level` and `inventory_warning_level` fields; `variant` - inventory levels will be tracked based on variants, which maintain their own warning levels and inventory levels.
   */
  inventory_tracking?: InventoryType;
  /**
   * Inventory warning level for the product. When the product's inventory level drops below the warning level, the store owner will be informed. Simple inventory tracking must be enabled (see the `inventory_tracking` field) for this to take any effect.
   */
  inventory_warning_level?: number;
  /**
   * Flag used to determine whether the product condition is shown to the customer on the product page.
   */
  is_condition_shown?: boolean;
  /**
   * Flag to determine whether the product should be included in the `featured products` panel when viewing the store.
   */
  is_featured?: boolean;
  /**
   * Flag used to indicate whether the product has free shipping. If `true`, the shipping cost for the product will be zero.
   */
  is_free_shipping?: boolean;
  /**
   * If set to true then on the preorder release date the preorder status will automatically be removed.
   * If set to false, then on the release date the preorder status **will not** be removed. It will need to be changed manually either in the
   * control panel or using the API. Using the API set `availability` to `available`.
   */
  is_preorder_only?: boolean;
  /**
   * False by default, indicating that this product's price should be shown on the product page. If set to `true`, the price is hidden. (NOTE: To successfully set `is_price_hidden` to `true`, the `availability` value must be `disabled`.)
   */
  is_price_hidden?: boolean;
  /**
   * Flag to determine whether the product should be displayed to customers browsing the store. If `true`, the product will be displayed. If `false`, the product will be hidden from view.
   */
  is_visible?: boolean;
  /**
   * The layout template file used to render this product category. This field is writable only for stores with a Blueprint theme applied.
   */
  layout_file?: string;
  /**
   * Minimum Advertised Price.
   */
  map_price?: number;
  /**
   * Custom meta description for the product page. If not defined, the store's default meta description will be used.
   */
  meta_description?: string;
  /**
   * Custom meta keywords for the product page. If not defined, the store's default keywords will be used.
   */
  meta_keywords?: string[];
  /**
   * Manufacturer Part Number
   */
  mpn?: string;
  /**
   * The product name.
   */
  name: string;
  /**
   * Description to use for the product, if not specified then the meta_description will be used instead.
   */
  open_graph_description?: string;
  /**
   * Title of the product, if not specified the product name will be used instead.
   */
  open_graph_title?: string;
  /**
   * Type of product, defaults to `product`.
   */
  open_graph_type?:
    | 'product'
    | 'album'
    | 'book'
    | 'drink'
    | 'food'
    | 'game'
    | 'movie'
    | 'song'
    | 'tv_show';
  /**
   * Flag to determine if product image or open graph image is used.
   */
  open_graph_use_image?: boolean;
  /**
   * Flag to determine if product description or open graph description is used.
   */
  open_graph_use_meta_description?: boolean;
  /**
   * Flag to determine if product name or open graph name is used.
   */
  open_graph_use_product_name?: boolean;
  /**
   * Legacy template setting which controls if the option set shows up to the side of or below the product image and description.
   */
  option_set_display?: string;
  /**
   * Indicates that the product is in an Option Set (legacy V2 concept).
   */
  option_set_id?: number | null;
  /**
   * The maximum quantity an order can contain when purchasing the product.
   */
  order_quantity_maximum?: number;
  /**
   * The minimum quantity an order must contain, to be eligible to purchase this product.
   */
  order_quantity_minimum?: number;
  /**
   * Product options.
   */
  options?: ProductOption[];
  /**
   * Custom title for the product page. If not defined, the product name will be used as the meta title.
   */
  page_title?: string;
  /**
   * Custom expected-date message to display on the product page. If undefined, the message defaults to the storewide setting. Can contain the `%%DATE%%` placeholder, which will be substituted for the release date.
   */
  preorder_message?: string;
  /**
   * Pre-order release date. See the `availability` field for details on setting a product's availability to accept pre-orders.
   */
  preorder_release_date?: string | null;
  /**
   * The price of the product. The price should include or exclude tax, based on the store settings.
   */
  price: number;
  /**
   * By default, an empty string. If `is_price_hidden` is `true`, the value of `price_hidden_label` is displayed instead of the price. (NOTE: To successfully set a non-empty string value with `is_price_hidden` set to `true`, the `availability` value must be `disabled`.)
   */
  price_hidden_label?: string;
  /**
   * Accepts AvaTax System Tax Codes, which identify products and services that fall into special sales-tax categories. By using these codes, merchants who subscribe to BigCommerce's Avalara Premium integration can calculate sales taxes more accurately. Stores without Avalara Premium will ignore the code when calculating sales tax. Do not pass more than one code. The codes are case-sensitive. For details, please see Avalara's documentation.
   */
  product_tax_code?: string;
  /**
   * An array of IDs for the related products.
   */
  related_products?: number[];
  /**
   * The retail cost of the product.
   */
  retail_price?: number;
  /**
   * The number of times the product has been rated.
   */
  reviews_count?: number;
  /**
   * The total rating for the product.
   */
  reviews_rating_sum?: number;
  /**
   * If entered, the sale price will be used instead of value in the price field when calculating the product's cost.
   */
  sale_price?: number;
  /**
   * A comma-separated list of keywords that can be used to locate the product when searching the store.
   */
  search_keywords?: string;
  /**
   * User defined product code/stock keeping unit (SKU).
   */
  sku?: string;
  /**
   * Priority to give this product when included in product lists on category pages and in search results. Lower integers will place the product closer to the top of the results.
   */
  sort_order?: number;
  /**
   * The ID of the tax class applied to the product. (NOTE: Value ignored if automatic tax is enabled.)
   */
  tax_class_id?: number;
  /**
   * The total quantity of this product sold.
   */
  total_sold?: number;
  /**
   * The product type. One of: `physical` - a physical stock unit, `digital` - a digital download.
   */
  type: 'physical' | 'digital';
  /**
   * The product UPC code, which is used in feeds for shopping comparison sites and external channel integrations.
   */
  upc?: string;
  /**
   * Product variants.
   */
  variants?: ProductVariant[];
  /**
   * The number of times the product has been viewed.
   */
  view_count?: number;
  /**
   * Warranty information displayed on the product page. Can include HTML formatting.
   */
  warranty?: string;
  /**
   * Weight of the product, which can be used when calculating shipping costs. This is based on the unit set on the store
   */
  weight?: number;
  /**
   * Width of the product, which can be used when calculating shipping costs.
   */
  width?: number;
}

export * from './parameters';
export * from './responses';
export * from './variant';
