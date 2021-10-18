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
    ProductVariantBase,
    ProductVariantBaseFromJSON,
    ProductVariantBaseFromJSONTyped,
    ProductVariantBaseToJSON,
    ProductVariantPutAllOf,
    ProductVariantPutAllOfFromJSON,
    ProductVariantPutAllOfFromJSONTyped,
    ProductVariantPutAllOfToJSON,
} from './';

/**
 * The model for a PUT to update variants on a product.
 * @export
 * @interface ProductVariantPut
 */
export interface ProductVariantPut {
    /**
     * The cost price of the variant. Not affected by Price List prices.
     * @type {number}
     * @memberof ProductVariantPut
     */
    costPrice?: number | null;
    /**
     * This variant's base price on the storefront. If a Price List ID is used, the Price List value will be used. If a Price List ID is not used, and this value is `null`, the product's default price (set in the Product resource's `price` field) will be used as the base price.
     * @type {number}
     * @memberof ProductVariantPut
     */
    price?: number | null;
    /**
     * This variant's sale price on the storefront. If a Price List ID is used, the Price List value will be used. If a Price List ID is not used, and this value is null, the product's sale price (set in the Product resource's `price` field) will be used as the sale price.
     * @type {number}
     * @memberof ProductVariantPut
     */
    salePrice?: number | null;
    /**
     * This variant's retail price on the storefront. If a Price List ID is used, the Price List value will be used. If a Price List ID is not used, and this value is null, the product's retail price (set in the Product resource's `price` field) will be used as the retail price.
     * @type {number}
     * @memberof ProductVariantPut
     */
    retailPrice?: number | null;
    /**
     * This variant's base weight on the storefront. If this value is null, the product's default weight (set in the Product resource's weight field) will be used as the base weight.
     * @type {number}
     * @memberof ProductVariantPut
     */
    weight?: number | null;
    /**
     * Width of the variant, which can be used when calculating shipping costs. If this value is `null`, the product's default width (set in the Product resource's `width` field) will be used as the base width.
     * @type {number}
     * @memberof ProductVariantPut
     */
    width?: number | null;
    /**
     * Height of the variant, which can be used when calculating shipping costs. If this value is `null`, the product's default height (set in the Product resource's `height` field) will be used as the base height.
     * @type {number}
     * @memberof ProductVariantPut
     */
    height?: number | null;
    /**
     * Depth of the variant, which can be used when calculating shipping costs. If this value is `null`, the product's default depth (set in the Product resource's `depth` field) will be used as the base depth.
     * @type {number}
     * @memberof ProductVariantPut
     */
    depth?: number | null;
    /**
     * Flag used to indicate whether the variant has free shipping. If `true`, the shipping cost for the variant will be zero.
     * @type {boolean}
     * @memberof ProductVariantPut
     */
    isFreeShipping?: boolean;
    /**
     * A fixed shipping cost for the variant. If defined, this value will be used during checkout instead of normal shipping-cost calculation.
     * @type {number}
     * @memberof ProductVariantPut
     */
    fixedCostShippingPrice?: number | null;
    /**
     * If `true`, this variant will not be purchasable on the storefront.
     * @type {boolean}
     * @memberof ProductVariantPut
     */
    purchasingDisabled?: boolean;
    /**
     * If `purchasing_disabled` is `true`, this message should show on the storefront when the variant is selected.
     * @type {string}
     * @memberof ProductVariantPut
     */
    purchasingDisabledMessage?: string;
    /**
     * The UPC code used in feeds for shopping comparison sites and external channel integrations.
     * @type {string}
     * @memberof ProductVariantPut
     */
    upc?: string | null;
    /**
     * Inventory level for the variant, which is used when the product's inventory_tracking is set to `variant`.
     * @type {number}
     * @memberof ProductVariantPut
     */
    inventoryLevel?: number | null;
    /**
     * When the variant hits this inventory level, it is considered low stock.
     * @type {number}
     * @memberof ProductVariantPut
     */
    inventoryWarningLevel?: number | null;
    /**
     * Identifies where in a warehouse the variant is located.
     * @type {string}
     * @memberof ProductVariantPut
     */
    binPickingNumber?: string | null;
    /**
     * The Manufacturer Part Number (MPN) for the variant.
     * @type {string}
     * @memberof ProductVariantPut
     */
    mpn?: string;
    /**
     * 
     * @type {number}
     * @memberof ProductVariantPut
     */
    productId?: number;
    /**
     * 
     * @type {string}
     * @memberof ProductVariantPut
     */
    sku?: string;
}

export function ProductVariantPutFromJSON(json: any): ProductVariantPut {
    return ProductVariantPutFromJSONTyped(json, false);
}

export function ProductVariantPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductVariantPut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'costPrice': !exists(json, 'cost_price') ? undefined : json['cost_price'],
        'price': !exists(json, 'price') ? undefined : json['price'],
        'salePrice': !exists(json, 'sale_price') ? undefined : json['sale_price'],
        'retailPrice': !exists(json, 'retail_price') ? undefined : json['retail_price'],
        'weight': !exists(json, 'weight') ? undefined : json['weight'],
        'width': !exists(json, 'width') ? undefined : json['width'],
        'height': !exists(json, 'height') ? undefined : json['height'],
        'depth': !exists(json, 'depth') ? undefined : json['depth'],
        'isFreeShipping': !exists(json, 'is_free_shipping') ? undefined : json['is_free_shipping'],
        'fixedCostShippingPrice': !exists(json, 'fixed_cost_shipping_price') ? undefined : json['fixed_cost_shipping_price'],
        'purchasingDisabled': !exists(json, 'purchasing_disabled') ? undefined : json['purchasing_disabled'],
        'purchasingDisabledMessage': !exists(json, 'purchasing_disabled_message') ? undefined : json['purchasing_disabled_message'],
        'upc': !exists(json, 'upc') ? undefined : json['upc'],
        'inventoryLevel': !exists(json, 'inventory_level') ? undefined : json['inventory_level'],
        'inventoryWarningLevel': !exists(json, 'inventory_warning_level') ? undefined : json['inventory_warning_level'],
        'binPickingNumber': !exists(json, 'bin_picking_number') ? undefined : json['bin_picking_number'],
        'mpn': !exists(json, 'mpn') ? undefined : json['mpn'],
        'productId': !exists(json, 'product_id') ? undefined : json['product_id'],
        'sku': !exists(json, 'sku') ? undefined : json['sku'],
    };
}

export function ProductVariantPutToJSON(value?: ProductVariantPut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cost_price': value.costPrice,
        'price': value.price,
        'sale_price': value.salePrice,
        'retail_price': value.retailPrice,
        'weight': value.weight,
        'width': value.width,
        'height': value.height,
        'depth': value.depth,
        'is_free_shipping': value.isFreeShipping,
        'fixed_cost_shipping_price': value.fixedCostShippingPrice,
        'purchasing_disabled': value.purchasingDisabled,
        'purchasing_disabled_message': value.purchasingDisabledMessage,
        'upc': value.upc,
        'inventory_level': value.inventoryLevel,
        'inventory_warning_level': value.inventoryWarningLevel,
        'bin_picking_number': value.binPickingNumber,
        'mpn': value.mpn,
        'product_id': value.productId,
        'sku': value.sku,
    };
}


