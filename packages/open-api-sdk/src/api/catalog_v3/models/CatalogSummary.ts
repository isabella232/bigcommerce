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
/**
 * Catalog Summary object describes a lightweight summary of the catalog.
 * @export
 * @interface CatalogSummary
 */
export interface CatalogSummary {
    /**
     * A count of all inventory items in the catalog.
     * @type {number}
     * @memberof CatalogSummary
     */
    inventoryCount?: number;
    /**
     * Total value of store's inventory.
     * @type {number}
     * @memberof CatalogSummary
     */
    inventoryValue?: number;
    /**
     * ID of the category containing the most products.
     * @type {number}
     * @memberof CatalogSummary
     */
    primaryCategoryId?: number;
    /**
     * Name of the category containing the most products.
     * @type {string}
     * @memberof CatalogSummary
     */
    primaryCategoryName?: string;
    /**
     * Total number of variants
     * @type {number}
     * @memberof CatalogSummary
     */
    variantCount?: number;
    /**
     * Highest priced variant
     * @type {number}
     * @memberof CatalogSummary
     */
    highestVariantPrice?: number;
    /**
     * Average price of all variants
     * @type {number}
     * @memberof CatalogSummary
     */
    averageVariantPrice?: number;
    /**
     * Lowest priced variant in the store
     * @type {string}
     * @memberof CatalogSummary
     */
    lowestVariantPrice?: string;
    /**
     * 
     * @type {string}
     * @memberof CatalogSummary
     */
    oldestVariantDate?: string;
    /**
     * 
     * @type {string}
     * @memberof CatalogSummary
     */
    newestVariantDate?: string;
}

export function CatalogSummaryFromJSON(json: any): CatalogSummary {
    return CatalogSummaryFromJSONTyped(json, false);
}

export function CatalogSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogSummary {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'inventoryCount': !exists(json, 'inventory_count') ? undefined : json['inventory_count'],
        'inventoryValue': !exists(json, 'inventory_value') ? undefined : json['inventory_value'],
        'primaryCategoryId': !exists(json, 'primary_category_id') ? undefined : json['primary_category_id'],
        'primaryCategoryName': !exists(json, 'primary_category_name') ? undefined : json['primary_category_name'],
        'variantCount': !exists(json, 'variant_count') ? undefined : json['variant_count'],
        'highestVariantPrice': !exists(json, 'highest_variant_price') ? undefined : json['highest_variant_price'],
        'averageVariantPrice': !exists(json, 'average_variant_price') ? undefined : json['average_variant_price'],
        'lowestVariantPrice': !exists(json, 'lowest_variant_price') ? undefined : json['lowest_variant_price'],
        'oldestVariantDate': !exists(json, 'oldest_variant_date') ? undefined : json['oldest_variant_date'],
        'newestVariantDate': !exists(json, 'newest_variant_date') ? undefined : json['newest_variant_date'],
    };
}

export function CatalogSummaryToJSON(value?: CatalogSummary | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'inventory_count': value.inventoryCount,
        'inventory_value': value.inventoryValue,
        'primary_category_id': value.primaryCategoryId,
        'primary_category_name': value.primaryCategoryName,
        'variant_count': value.variantCount,
        'highest_variant_price': value.highestVariantPrice,
        'average_variant_price': value.averageVariantPrice,
        'lowest_variant_price': value.lowestVariantPrice,
        'oldest_variant_date': value.oldestVariantDate,
        'newest_variant_date': value.newestVariantDate,
    };
}


