/* tslint:disable */
/* eslint-disable */
/**
 * Catalog
 * Manage products, brands and categories. To learn more about catalog resources see [Catalog Overview](https://developer.bigcommerce.com/api-docs/catalog/products-overview).  - [Authentication](#authentication) - [Differentiating Variants and Modifiers](#differentiating-variants-and-modifiers) - [Available Endpoints](#available-endpoints) - [Resources](#resources)  ## Authentication Requests can be authenticated by sending an `access_token` via `X-Auth-Token` HTTP header:  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Accept: application/json X-Auth-Token: {access_token} ```  |Header|Parameter|Description| |-|-|-| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  ### OAuth Scopes | UI Name  | Permission | Parameter                     | |----------|------------|-------------------------------| | Products | modify     | `store_v2_products`           | | Products | read-only  | `store_v2_products_read_only` |  For more information on OAuth Scopes, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Differentiating Variants and Modifiers [Variants](https://support.bigcommerce.com/s/article/Product-Options-v3#variations) represent a physical product made up of [Product Option](https://support.bigcommerce.com/s/article/Product-Options-v3) choices, i.e. a large blue t-shirt. Each variant can have a unique SKU.  Modifiers represent a choice a customer makes about a product that doesn\'t represent a physical item, i.e. text to be printed on a t-shirt. Assigning a SKU to a modifier will turn it into a variant.  See [Variant Options](https://developer.bigcommerce.com/api-docs/catalog/products-overview#variant-options) and [Modifier Options](https://developer.bigcommerce.com/api-docs/catalog/products-overview#modifier-options) for more information.  ## Available Endpoints | Resource / Endpoint                     | Description                                                             | |-----------------------------------------|-------------------------------------------------------------------------| | Brand Images                            | Create and manage brand images                                          | | Brand Metafields                        | Create and manage brand metafields                                      | | Brands                                  | Create and manage brands                                                | | Catalog                                 | Create and manage store categories, products, and brands                | | Categories                              | Create and manage categorties                                           | | Category Images                         | Create and manage category images                                       | | Category Metafields                     | Create and manage category metafields                                   | | Product Bulk Pricing Rules              | Create and manage product bulk pricing rules                            | | Product Complex Rules                   | Create and manage product complex rules                                 | | Product Custom Fields                   | Create and manage product custom fields                                 | | Product Images                          | Create and manage product images                                        | | Product Metafields                      | Create and manage product meta fields                                   | | Product Modifier Images                 | Create and manage product modifer images                                | | Product Modifier Values                 | Create and manage product modifier values                               | | Product Modifiers                       | Create and manage product midifiers                                     | | Product Reviews                         | Create and manage product reviews                                       | | Product Variant Option Values           | Create and manage product variant option values                         | | Product Variant Options                 | Create and manage product variant options                               | | Product Variants                        | Create and manage product variants                                      | | Product Videos                          | Create and manage product videos                                        | | Products                                | Create and manage products                                              | | ProductVariant Metafields               | Create and manage product meta flields                                  | | Variants                                | Get and update all variants                                             |  ## Resources  ### Webhooks * [Products](/api-docs/store-management/webhooks/events#products) * [Categories](/api-docs/store-management/webhooks/events#category) * [SKU](/api-docs/store-management/webhooks/events#sku)
 *
 * The version of the OpenAPI document: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    BulkPricingRuleFull,
    BulkPricingRuleFullFromJSON,
    BulkPricingRuleFullFromJSONTyped,
    BulkPricingRuleFullToJSON,
    CustomUrlFull,
    CustomUrlFullFromJSON,
    CustomUrlFullFromJSONTyped,
    CustomUrlFullToJSON,
    ProductBase,
    ProductBaseFromJSON,
    ProductBaseFromJSONTyped,
    ProductBaseToJSON,
    ProductCustomFieldPut,
    ProductCustomFieldPutFromJSON,
    ProductCustomFieldPutFromJSONTyped,
    ProductCustomFieldPutToJSON,
    ProductFullAllOf,
    ProductFullAllOfFromJSON,
    ProductFullAllOfFromJSONTyped,
    ProductFullAllOfToJSON,
    ProductImageFull,
    ProductImageFullFromJSON,
    ProductImageFullFromJSONTyped,
    ProductImageFullToJSON,
    ProductModifierFull,
    ProductModifierFullFromJSON,
    ProductModifierFullFromJSONTyped,
    ProductModifierFullToJSON,
    ProductOptionBase,
    ProductOptionBaseFromJSON,
    ProductOptionBaseFromJSONTyped,
    ProductOptionBaseToJSON,
    ProductVariantFull,
    ProductVariantFullFromJSON,
    ProductVariantFullFromJSONTyped,
    ProductVariantFullToJSON,
    ProductVideoFull,
    ProductVideoFullFromJSON,
    ProductVideoFullFromJSONTyped,
    ProductVideoFullToJSON,
} from './';

/**
 * 
 * @export
 * @interface ProductFull
 */
export interface ProductFull {
    /**
     * The product name.
     * @type {string}
     * @memberof ProductFull
     */
    name: string;
    /**
     * The product type. One of: `physical` - a physical stock unit, `digital` - a digital download.
     * @type {string}
     * @memberof ProductFull
     */
    type: ProductFullTypeEnum;
    /**
     * User defined product code/stock keeping unit (SKU).
     * @type {string}
     * @memberof ProductFull
     */
    sku?: string;
    /**
     * The product description, which can include HTML formatting.
     * @type {string}
     * @memberof ProductFull
     */
    description?: string;
    /**
     * Weight of the product, which can be used when calculating shipping costs. This is based on the unit set on the store
     * @type {number}
     * @memberof ProductFull
     */
    weight: number;
    /**
     * Width of the product, which can be used when calculating shipping costs.
     * @type {number}
     * @memberof ProductFull
     */
    width?: number;
    /**
     * Depth of the product, which can be used when calculating shipping costs.
     * @type {number}
     * @memberof ProductFull
     */
    depth?: number;
    /**
     * Height of the product, which can be used when calculating shipping costs.
     * @type {number}
     * @memberof ProductFull
     */
    height?: number;
    /**
     * The price of the product. The price should include or exclude tax, based on the store settings.
     * @type {number}
     * @memberof ProductFull
     */
    price: number;
    /**
     * The cost price of the product. Stored for reference only; it is not used or displayed anywhere on the store.
     * @type {number}
     * @memberof ProductFull
     */
    costPrice?: number;
    /**
     * The retail cost of the product. If entered, the retail cost price will be shown on the product page.
     * @type {number}
     * @memberof ProductFull
     */
    retailPrice?: number;
    /**
     * If entered, the sale price will be used instead of value in the price field when calculating the product's cost.
     * @type {number}
     * @memberof ProductFull
     */
    salePrice?: number;
    /**
     * Minimum Advertised Price.
     * @type {number}
     * @memberof ProductFull
     */
    mapPrice?: number;
    /**
     * The ID of the tax class applied to the product. (NOTE: Value ignored if automatic tax is enabled.)
     * @type {number}
     * @memberof ProductFull
     */
    taxClassId?: number;
    /**
     * Accepts AvaTax System Tax Codes, which identify products and services that fall into special sales-tax categories. By using these codes, merchants who subscribe to BigCommerce's Avalara Premium integration can calculate sales taxes more accurately. Stores without Avalara Premium will ignore the code when calculating sales tax. Do not pass more than one code. The codes are case-sensitive. For details, please see Avalara's documentation.
     * @type {string}
     * @memberof ProductFull
     */
    productTaxCode?: string;
    /**
     * An array of IDs for the categories to which this product belongs. When updating a product, if an array of categories is supplied, all product categories will be overwritten. Does not accept more than 1,000 ID values.
     * @type {Array<number>}
     * @memberof ProductFull
     */
    categories?: Array<number>;
    /**
     * A product can be added to an existing brand during a product /PUT or /POST.
     * @type {number}
     * @memberof ProductFull
     */
    brandId?: number;
    /**
     * Current inventory level of the product. Simple inventory tracking must be enabled (See the `inventory_tracking` field) for this to take any effect.
     * @type {number}
     * @memberof ProductFull
     */
    inventoryLevel?: number;
    /**
     * Inventory warning level for the product. When the product's inventory level drops below the warning level, the store owner will be informed. Simple inventory tracking must be enabled (see the `inventory_tracking` field) for this to take any effect.
     * @type {number}
     * @memberof ProductFull
     */
    inventoryWarningLevel?: number;
    /**
     * The type of inventory tracking for the product. Values are: `none` - inventory levels will not be tracked; `product` - inventory levels will be tracked using the `inventory_level` and `inventory_warning_level` fields; `variant` - inventory levels will be tracked based on variants, which maintain their own warning levels and inventory levels.
     * @type {string}
     * @memberof ProductFull
     */
    inventoryTracking?: ProductFullInventoryTrackingEnum;
    /**
     * A fixed shipping cost for the product. If defined, this value will be used during checkout instead of normal shipping-cost calculation.
     * @type {number}
     * @memberof ProductFull
     */
    fixedCostShippingPrice?: number;
    /**
     * Flag used to indicate whether the product has free shipping. If `true`, the shipping cost for the product will be zero.
     * @type {boolean}
     * @memberof ProductFull
     */
    isFreeShipping?: boolean;
    /**
     * Flag to determine whether the product should be displayed to customers browsing the store. If `true`, the product will be displayed. If `false`, the product will be hidden from view.
     * @type {boolean}
     * @memberof ProductFull
     */
    isVisible?: boolean;
    /**
     * Flag to determine whether the product should be included in the `featured products` panel when viewing the store.
     * @type {boolean}
     * @memberof ProductFull
     */
    isFeatured?: boolean;
    /**
     * An array of IDs for the related products.
     * @type {Array<number>}
     * @memberof ProductFull
     */
    relatedProducts?: Array<number>;
    /**
     * Warranty information displayed on the product page. Can include HTML formatting.
     * @type {string}
     * @memberof ProductFull
     */
    warranty?: string;
    /**
     * The BIN picking number for the product.
     * @type {string}
     * @memberof ProductFull
     */
    binPickingNumber?: string;
    /**
     * The layout template file used to render this product category. This field is writable only for stores with a Blueprint theme applied.
     * @type {string}
     * @memberof ProductFull
     */
    layoutFile?: string;
    /**
     * The product UPC code, which is used in feeds for shopping comparison sites and external channel integrations.
     * @type {string}
     * @memberof ProductFull
     */
    upc?: string;
    /**
     * A comma-separated list of keywords that can be used to locate the product when searching the store.
     * @type {string}
     * @memberof ProductFull
     */
    searchKeywords?: string;
    /**
     * Availability of the product. (Corresponds to the product's [Purchasability](https://support.bigcommerce.com/s/article/Adding-Products-v3?language=en_US#sections) section in the control panel.) Supported values: `available` - the product is available for purchase; `disabled` - the product is listed on the storefront, but cannot be purchased; `preorder` - the product is listed for pre-orders.
     * @type {string}
     * @memberof ProductFull
     */
    availability?: ProductFullAvailabilityEnum;
    /**
     * Availability text displayed on the checkout page, under the product title. Tells the customer how long it will normally take to ship this product, such as: 'Usually ships in 24 hours.'
     * @type {string}
     * @memberof ProductFull
     */
    availabilityDescription?: string;
    /**
     * Type of gift-wrapping options. Values: `any` - allow any gift-wrapping options in the store; `none` - disallow gift-wrapping on the product; `list` – provide a list of IDs in the `gift_wrapping_options_list` field.
     * @type {string}
     * @memberof ProductFull
     */
    giftWrappingOptionsType?: ProductFullGiftWrappingOptionsTypeEnum;
    /**
     * A list of gift-wrapping option IDs.
     * @type {Array<number>}
     * @memberof ProductFull
     */
    giftWrappingOptionsList?: Array<number>;
    /**
     * Priority to give this product when included in product lists on category pages and in search results. Lower integers will place the product closer to the top of the results.
     * @type {number}
     * @memberof ProductFull
     */
    sortOrder?: number;
    /**
     * The product condition. Will be shown on the product page if the `is_condition_shown` field's value is `true`. Possible values: `New`, `Used`, `Refurbished`.
     * @type {string}
     * @memberof ProductFull
     */
    condition?: ProductFullConditionEnum;
    /**
     * Flag used to determine whether the product condition is shown to the customer on the product page.
     * @type {boolean}
     * @memberof ProductFull
     */
    isConditionShown?: boolean;
    /**
     * The minimum quantity an order must contain, to be eligible to purchase this product.
     * @type {number}
     * @memberof ProductFull
     */
    orderQuantityMinimum?: number;
    /**
     * The maximum quantity an order can contain when purchasing the product.
     * @type {number}
     * @memberof ProductFull
     */
    orderQuantityMaximum?: number;
    /**
     * Custom title for the product page. If not defined, the product name will be used as the meta title.
     * @type {string}
     * @memberof ProductFull
     */
    pageTitle?: string;
    /**
     * Custom meta keywords for the product page. If not defined, the store's default keywords will be used.
     * @type {Array<string>}
     * @memberof ProductFull
     */
    metaKeywords?: Array<string>;
    /**
     * Custom meta description for the product page. If not defined, the store's default meta description will be used.
     * @type {string}
     * @memberof ProductFull
     */
    metaDescription?: string;
    /**
     * The number of times the product has been viewed.
     * @type {number}
     * @memberof ProductFull
     */
    viewCount?: number;
    /**
     * Pre-order release date. See the `availability` field for details on setting a product's availability to accept pre-orders.
     * @type {Date}
     * @memberof ProductFull
     */
    preorderReleaseDate?: Date | null;
    /**
     * Custom expected-date message to display on the product page. If undefined, the message defaults to the storewide setting. Can contain the `%%DATE%%` placeholder, which will be substituted for the release date.
     * @type {string}
     * @memberof ProductFull
     */
    preorderMessage?: string;
    /**
     * If set to true then on the preorder release date the preorder status will automatically be removed.
     * If set to false, then on the release date the preorder status **will not** be removed. It will need to be changed manually either in the
     * control panel or using the API. Using the API set `availability` to `available`.
     * @type {boolean}
     * @memberof ProductFull
     */
    isPreorderOnly?: boolean;
    /**
     * False by default, indicating that this product's price should be shown on the product page. If set to `true`, the price is hidden. (NOTE: To successfully set `is_price_hidden` to `true`, the `availability` value must be `disabled`.)
     * @type {boolean}
     * @memberof ProductFull
     */
    isPriceHidden?: boolean;
    /**
     * By default, an empty string. If `is_price_hidden` is `true`, the value of `price_hidden_label` is displayed instead of the price. (NOTE: To successfully set a non-empty string value with `is_price_hidden` set to `true`, the `availability` value must be `disabled`.)
     * @type {string}
     * @memberof ProductFull
     */
    priceHiddenLabel?: string;
    /**
     * 
     * @type {CustomUrlFull}
     * @memberof ProductFull
     */
    customUrl?: CustomUrlFull;
    /**
     * Type of product, defaults to `product`.
     * @type {string}
     * @memberof ProductFull
     */
    openGraphType?: ProductFullOpenGraphTypeEnum;
    /**
     * Title of the product, if not specified the product name will be used instead.
     * @type {string}
     * @memberof ProductFull
     */
    openGraphTitle?: string;
    /**
     * Description to use for the product, if not specified then the meta_description will be used instead.
     * @type {string}
     * @memberof ProductFull
     */
    openGraphDescription?: string;
    /**
     * Flag to determine if product description or open graph description is used.
     * @type {boolean}
     * @memberof ProductFull
     */
    openGraphUseMetaDescription?: boolean;
    /**
     * Flag to determine if product name or open graph name is used.
     * @type {boolean}
     * @memberof ProductFull
     */
    openGraphUseProductName?: boolean;
    /**
     * Flag to determine if product image or open graph image is used.
     * @type {boolean}
     * @memberof ProductFull
     */
    openGraphUseImage?: boolean;
    /**
     * The brand can be created during a product PUT or POST request. If the brand already exists then the product will be added. If not the brand will be created and the product added. If using `brand_name` it performs a fuzzy match and adds the brand. eg. "Common Good" and "Common good" are the same. Brand name does not return as part of a product response. Only the `brand_id`.
     * @type {string}
     * @memberof ProductFull
     */
    brandNameOrBrandId?: string;
    /**
     * Global Trade Item Number
     * @type {string}
     * @memberof ProductFull
     */
    gtin?: string;
    /**
     * Manufacturer Part Number
     * @type {string}
     * @memberof ProductFull
     */
    mpn?: string;
    /**
     * The total rating for the product.
     * @type {number}
     * @memberof ProductFull
     */
    reviewsRatingSum?: number;
    /**
     * The number of times the product has been rated.
     * @type {number}
     * @memberof ProductFull
     */
    reviewsCount?: number;
    /**
     * The total quantity of this product sold.
     * @type {number}
     * @memberof ProductFull
     */
    totalSold?: number;
    /**
     * 
     * @type {Array<ProductCustomFieldPut>}
     * @memberof ProductFull
     */
    customFields?: Array<ProductCustomFieldPut>;
    /**
     * 
     * @type {Array<BulkPricingRuleFull>}
     * @memberof ProductFull
     */
    bulkPricingRules?: Array<BulkPricingRuleFull>;
    /**
     * 
     * @type {Array<ProductImageFull>}
     * @memberof ProductFull
     */
    images?: Array<ProductImageFull>;
    /**
     * 
     * @type {Array<ProductVideoFull>}
     * @memberof ProductFull
     */
    videos?: Array<ProductVideoFull>;
    /**
     * The date on which the product was created.
     * @type {Date}
     * @memberof ProductFull
     */
    dateCreated?: Date;
    /**
     * The date on which the product was modified.
     * @type {Date}
     * @memberof ProductFull
     */
    dateModified?: Date;
    /**
     * ID of the product. Read Only.
     * @type {number}
     * @memberof ProductFull
     */
    id?: number;
    /**
     * The unique identifier of the base variant associated with a simple product. This value is `null` for complex products.
     * @type {number}
     * @memberof ProductFull
     */
    baseVariantId?: number;
    /**
     * The price of the product as seen on the storefront. It will be equal to the `sale_price`, if set, and the `price` if there is not a `sale_price`.
     * @type {number}
     * @memberof ProductFull
     */
    calculatedPrice?: number;
    /**
     * 
     * @type {Array<ProductOptionBase>}
     * @memberof ProductFull
     */
    options?: Array<ProductOptionBase>;
    /**
     * 
     * @type {Array<ProductModifierFull>}
     * @memberof ProductFull
     */
    modifiers?: Array<ProductModifierFull>;
    /**
     * Indicates that the product is in an Option Set (legacy V2 concept).
     * @type {number}
     * @memberof ProductFull
     */
    optionSetId?: number;
    /**
     * Legacy template setting which controls if the option set shows up to the side of or below the product image and description.
     * @type {string}
     * @memberof ProductFull
     */
    optionSetDisplay?: string;
    /**
     * 
     * @type {Array<ProductVariantFull>}
     * @memberof ProductFull
     */
    variants?: Array<ProductVariantFull>;
}

/**
* @export
* @enum {string}
*/
export enum ProductFullTypeEnum {
    Physical = 'physical',
    Digital = 'digital'
}/**
* @export
* @enum {string}
*/
export enum ProductFullInventoryTrackingEnum {
    None = 'none',
    Product = 'product',
    Variant = 'variant'
}/**
* @export
* @enum {string}
*/
export enum ProductFullAvailabilityEnum {
    Available = 'available',
    Disabled = 'disabled',
    Preorder = 'preorder'
}/**
* @export
* @enum {string}
*/
export enum ProductFullGiftWrappingOptionsTypeEnum {
    Any = 'any',
    None = 'none',
    List = 'list'
}/**
* @export
* @enum {string}
*/
export enum ProductFullConditionEnum {
    New = 'New',
    Used = 'Used',
    Refurbished = 'Refurbished'
}/**
* @export
* @enum {string}
*/
export enum ProductFullOpenGraphTypeEnum {
    Product = 'product',
    Album = 'album',
    Book = 'book',
    Drink = 'drink',
    Food = 'food',
    Game = 'game',
    Movie = 'movie',
    Song = 'song',
    TvShow = 'tv_show'
}

export function ProductFullFromJSON(json: any): ProductFull {
    return ProductFullFromJSONTyped(json, false);
}

export function ProductFullFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductFull {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'type': json['type'],
        'sku': !exists(json, 'sku') ? undefined : json['sku'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'weight': json['weight'],
        'width': !exists(json, 'width') ? undefined : json['width'],
        'depth': !exists(json, 'depth') ? undefined : json['depth'],
        'height': !exists(json, 'height') ? undefined : json['height'],
        'price': json['price'],
        'costPrice': !exists(json, 'cost_price') ? undefined : json['cost_price'],
        'retailPrice': !exists(json, 'retail_price') ? undefined : json['retail_price'],
        'salePrice': !exists(json, 'sale_price') ? undefined : json['sale_price'],
        'mapPrice': !exists(json, 'map_price') ? undefined : json['map_price'],
        'taxClassId': !exists(json, 'tax_class_id') ? undefined : json['tax_class_id'],
        'productTaxCode': !exists(json, 'product_tax_code') ? undefined : json['product_tax_code'],
        'categories': !exists(json, 'categories') ? undefined : json['categories'],
        'brandId': !exists(json, 'brand_id') ? undefined : json['brand_id'],
        'inventoryLevel': !exists(json, 'inventory_level') ? undefined : json['inventory_level'],
        'inventoryWarningLevel': !exists(json, 'inventory_warning_level') ? undefined : json['inventory_warning_level'],
        'inventoryTracking': !exists(json, 'inventory_tracking') ? undefined : json['inventory_tracking'],
        'fixedCostShippingPrice': !exists(json, 'fixed_cost_shipping_price') ? undefined : json['fixed_cost_shipping_price'],
        'isFreeShipping': !exists(json, 'is_free_shipping') ? undefined : json['is_free_shipping'],
        'isVisible': !exists(json, 'is_visible') ? undefined : json['is_visible'],
        'isFeatured': !exists(json, 'is_featured') ? undefined : json['is_featured'],
        'relatedProducts': !exists(json, 'related_products') ? undefined : json['related_products'],
        'warranty': !exists(json, 'warranty') ? undefined : json['warranty'],
        'binPickingNumber': !exists(json, 'bin_picking_number') ? undefined : json['bin_picking_number'],
        'layoutFile': !exists(json, 'layout_file') ? undefined : json['layout_file'],
        'upc': !exists(json, 'upc') ? undefined : json['upc'],
        'searchKeywords': !exists(json, 'search_keywords') ? undefined : json['search_keywords'],
        'availability': !exists(json, 'availability') ? undefined : json['availability'],
        'availabilityDescription': !exists(json, 'availability_description') ? undefined : json['availability_description'],
        'giftWrappingOptionsType': !exists(json, 'gift_wrapping_options_type') ? undefined : json['gift_wrapping_options_type'],
        'giftWrappingOptionsList': !exists(json, 'gift_wrapping_options_list') ? undefined : json['gift_wrapping_options_list'],
        'sortOrder': !exists(json, 'sort_order') ? undefined : json['sort_order'],
        'condition': !exists(json, 'condition') ? undefined : json['condition'],
        'isConditionShown': !exists(json, 'is_condition_shown') ? undefined : json['is_condition_shown'],
        'orderQuantityMinimum': !exists(json, 'order_quantity_minimum') ? undefined : json['order_quantity_minimum'],
        'orderQuantityMaximum': !exists(json, 'order_quantity_maximum') ? undefined : json['order_quantity_maximum'],
        'pageTitle': !exists(json, 'page_title') ? undefined : json['page_title'],
        'metaKeywords': !exists(json, 'meta_keywords') ? undefined : json['meta_keywords'],
        'metaDescription': !exists(json, 'meta_description') ? undefined : json['meta_description'],
        'viewCount': !exists(json, 'view_count') ? undefined : json['view_count'],
        'preorderReleaseDate': !exists(json, 'preorder_release_date') ? undefined : (json['preorder_release_date'] === null ? null : new Date(json['preorder_release_date'])),
        'preorderMessage': !exists(json, 'preorder_message') ? undefined : json['preorder_message'],
        'isPreorderOnly': !exists(json, 'is_preorder_only') ? undefined : json['is_preorder_only'],
        'isPriceHidden': !exists(json, 'is_price_hidden') ? undefined : json['is_price_hidden'],
        'priceHiddenLabel': !exists(json, 'price_hidden_label') ? undefined : json['price_hidden_label'],
        'customUrl': !exists(json, 'custom_url') ? undefined : CustomUrlFullFromJSON(json['custom_url']),
        'openGraphType': !exists(json, 'open_graph_type') ? undefined : json['open_graph_type'],
        'openGraphTitle': !exists(json, 'open_graph_title') ? undefined : json['open_graph_title'],
        'openGraphDescription': !exists(json, 'open_graph_description') ? undefined : json['open_graph_description'],
        'openGraphUseMetaDescription': !exists(json, 'open_graph_use_meta_description') ? undefined : json['open_graph_use_meta_description'],
        'openGraphUseProductName': !exists(json, 'open_graph_use_product_name') ? undefined : json['open_graph_use_product_name'],
        'openGraphUseImage': !exists(json, 'open_graph_use_image') ? undefined : json['open_graph_use_image'],
        'brandNameOrBrandId': !exists(json, 'brand_name or brand_id') ? undefined : json['brand_name or brand_id'],
        'gtin': !exists(json, 'gtin') ? undefined : json['gtin'],
        'mpn': !exists(json, 'mpn') ? undefined : json['mpn'],
        'reviewsRatingSum': !exists(json, 'reviews_rating_sum') ? undefined : json['reviews_rating_sum'],
        'reviewsCount': !exists(json, 'reviews_count') ? undefined : json['reviews_count'],
        'totalSold': !exists(json, 'total_sold') ? undefined : json['total_sold'],
        'customFields': !exists(json, 'custom_fields') ? undefined : ((json['custom_fields'] as Array<any>).map(ProductCustomFieldPutFromJSON)),
        'bulkPricingRules': !exists(json, 'bulk_pricing_rules') ? undefined : ((json['bulk_pricing_rules'] as Array<any>).map(BulkPricingRuleFullFromJSON)),
        'images': !exists(json, 'images') ? undefined : ((json['images'] as Array<any>).map(ProductImageFullFromJSON)),
        'videos': !exists(json, 'videos') ? undefined : ((json['videos'] as Array<any>).map(ProductVideoFullFromJSON)),
        'dateCreated': !exists(json, 'date_created') ? undefined : (new Date(json['date_created'])),
        'dateModified': !exists(json, 'date_modified') ? undefined : (new Date(json['date_modified'])),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'baseVariantId': !exists(json, 'base_variant_id') ? undefined : json['base_variant_id'],
        'calculatedPrice': !exists(json, 'calculated_price') ? undefined : json['calculated_price'],
        'options': !exists(json, 'options') ? undefined : ((json['options'] as Array<any>).map(ProductOptionBaseFromJSON)),
        'modifiers': !exists(json, 'modifiers') ? undefined : ((json['modifiers'] as Array<any>).map(ProductModifierFullFromJSON)),
        'optionSetId': !exists(json, 'option_set_id') ? undefined : json['option_set_id'],
        'optionSetDisplay': !exists(json, 'option_set_display') ? undefined : json['option_set_display'],
        'variants': !exists(json, 'variants') ? undefined : ((json['variants'] as Array<any>).map(ProductVariantFullFromJSON)),
    };
}

export function ProductFullToJSON(value?: ProductFull | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'type': value.type,
        'sku': value.sku,
        'description': value.description,
        'weight': value.weight,
        'width': value.width,
        'depth': value.depth,
        'height': value.height,
        'price': value.price,
        'cost_price': value.costPrice,
        'retail_price': value.retailPrice,
        'sale_price': value.salePrice,
        'map_price': value.mapPrice,
        'tax_class_id': value.taxClassId,
        'product_tax_code': value.productTaxCode,
        'categories': value.categories,
        'brand_id': value.brandId,
        'inventory_level': value.inventoryLevel,
        'inventory_warning_level': value.inventoryWarningLevel,
        'inventory_tracking': value.inventoryTracking,
        'fixed_cost_shipping_price': value.fixedCostShippingPrice,
        'is_free_shipping': value.isFreeShipping,
        'is_visible': value.isVisible,
        'is_featured': value.isFeatured,
        'related_products': value.relatedProducts,
        'warranty': value.warranty,
        'bin_picking_number': value.binPickingNumber,
        'layout_file': value.layoutFile,
        'upc': value.upc,
        'search_keywords': value.searchKeywords,
        'availability': value.availability,
        'availability_description': value.availabilityDescription,
        'gift_wrapping_options_type': value.giftWrappingOptionsType,
        'gift_wrapping_options_list': value.giftWrappingOptionsList,
        'sort_order': value.sortOrder,
        'condition': value.condition,
        'is_condition_shown': value.isConditionShown,
        'order_quantity_minimum': value.orderQuantityMinimum,
        'order_quantity_maximum': value.orderQuantityMaximum,
        'page_title': value.pageTitle,
        'meta_keywords': value.metaKeywords,
        'meta_description': value.metaDescription,
        'view_count': value.viewCount,
        'preorder_release_date': value.preorderReleaseDate === undefined ? undefined : (value.preorderReleaseDate === null ? null : value.preorderReleaseDate.toISOString()),
        'preorder_message': value.preorderMessage,
        'is_preorder_only': value.isPreorderOnly,
        'is_price_hidden': value.isPriceHidden,
        'price_hidden_label': value.priceHiddenLabel,
        'custom_url': CustomUrlFullToJSON(value.customUrl),
        'open_graph_type': value.openGraphType,
        'open_graph_title': value.openGraphTitle,
        'open_graph_description': value.openGraphDescription,
        'open_graph_use_meta_description': value.openGraphUseMetaDescription,
        'open_graph_use_product_name': value.openGraphUseProductName,
        'open_graph_use_image': value.openGraphUseImage,
        'brand_name or brand_id': value.brandNameOrBrandId,
        'gtin': value.gtin,
        'mpn': value.mpn,
        'reviews_rating_sum': value.reviewsRatingSum,
        'reviews_count': value.reviewsCount,
        'total_sold': value.totalSold,
        'custom_fields': value.customFields === undefined ? undefined : ((value.customFields as Array<any>).map(ProductCustomFieldPutToJSON)),
        'bulk_pricing_rules': value.bulkPricingRules === undefined ? undefined : ((value.bulkPricingRules as Array<any>).map(BulkPricingRuleFullToJSON)),
        'images': value.images === undefined ? undefined : ((value.images as Array<any>).map(ProductImageFullToJSON)),
        'videos': value.videos === undefined ? undefined : ((value.videos as Array<any>).map(ProductVideoFullToJSON)),
        'date_created': value.dateCreated === undefined ? undefined : (value.dateCreated.toISOString()),
        'date_modified': value.dateModified === undefined ? undefined : (value.dateModified.toISOString()),
        'id': value.id,
        'base_variant_id': value.baseVariantId,
        'calculated_price': value.calculatedPrice,
        'options': value.options === undefined ? undefined : ((value.options as Array<any>).map(ProductOptionBaseToJSON)),
        'modifiers': value.modifiers === undefined ? undefined : ((value.modifiers as Array<any>).map(ProductModifierFullToJSON)),
        'option_set_id': value.optionSetId,
        'option_set_display': value.optionSetDisplay,
        'variants': value.variants === undefined ? undefined : ((value.variants as Array<any>).map(ProductVariantFullToJSON)),
    };
}


