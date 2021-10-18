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
} from './';

/**
 * 
 * @export
 * @interface ProductFullAllOf
 */
export interface ProductFullAllOf {
    /**
     * The date on which the product was created.
     * @type {Date}
     * @memberof ProductFullAllOf
     */
    dateCreated?: Date;
    /**
     * The date on which the product was modified.
     * @type {Date}
     * @memberof ProductFullAllOf
     */
    dateModified?: Date;
    /**
     * ID of the product. Read Only.
     * @type {number}
     * @memberof ProductFullAllOf
     */
    id?: number;
    /**
     * The unique identifier of the base variant associated with a simple product. This value is `null` for complex products.
     * @type {number}
     * @memberof ProductFullAllOf
     */
    baseVariantId?: number;
    /**
     * The price of the product as seen on the storefront. It will be equal to the `sale_price`, if set, and the `price` if there is not a `sale_price`.
     * @type {number}
     * @memberof ProductFullAllOf
     */
    calculatedPrice?: number;
    /**
     * 
     * @type {Array<ProductOptionBase>}
     * @memberof ProductFullAllOf
     */
    options?: Array<ProductOptionBase>;
    /**
     * 
     * @type {Array<ProductModifierFull>}
     * @memberof ProductFullAllOf
     */
    modifiers?: Array<ProductModifierFull>;
    /**
     * Minimum Advertised Price.
     * @type {number}
     * @memberof ProductFullAllOf
     */
    mapPrice?: number;
    /**
     * Indicates that the product is in an Option Set (legacy V2 concept).
     * @type {number}
     * @memberof ProductFullAllOf
     */
    optionSetId?: number;
    /**
     * Legacy template setting which controls if the option set shows up to the side of or below the product image and description.
     * @type {string}
     * @memberof ProductFullAllOf
     */
    optionSetDisplay?: string;
    /**
     * 
     * @type {Array<ProductVariantFull>}
     * @memberof ProductFullAllOf
     */
    variants?: Array<ProductVariantFull>;
}

export function ProductFullAllOfFromJSON(json: any): ProductFullAllOf {
    return ProductFullAllOfFromJSONTyped(json, false);
}

export function ProductFullAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductFullAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dateCreated': !exists(json, 'date_created') ? undefined : (new Date(json['date_created'])),
        'dateModified': !exists(json, 'date_modified') ? undefined : (new Date(json['date_modified'])),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'baseVariantId': !exists(json, 'base_variant_id') ? undefined : json['base_variant_id'],
        'calculatedPrice': !exists(json, 'calculated_price') ? undefined : json['calculated_price'],
        'options': !exists(json, 'options') ? undefined : ((json['options'] as Array<any>).map(ProductOptionBaseFromJSON)),
        'modifiers': !exists(json, 'modifiers') ? undefined : ((json['modifiers'] as Array<any>).map(ProductModifierFullFromJSON)),
        'mapPrice': !exists(json, 'map_price') ? undefined : json['map_price'],
        'optionSetId': !exists(json, 'option_set_id') ? undefined : json['option_set_id'],
        'optionSetDisplay': !exists(json, 'option_set_display') ? undefined : json['option_set_display'],
        'variants': !exists(json, 'variants') ? undefined : ((json['variants'] as Array<any>).map(ProductVariantFullFromJSON)),
    };
}

export function ProductFullAllOfToJSON(value?: ProductFullAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'date_created': value.dateCreated === undefined ? undefined : (value.dateCreated.toISOString()),
        'date_modified': value.dateModified === undefined ? undefined : (value.dateModified.toISOString()),
        'id': value.id,
        'base_variant_id': value.baseVariantId,
        'calculated_price': value.calculatedPrice,
        'options': value.options === undefined ? undefined : ((value.options as Array<any>).map(ProductOptionBaseToJSON)),
        'modifiers': value.modifiers === undefined ? undefined : ((value.modifiers as Array<any>).map(ProductModifierFullToJSON)),
        'map_price': value.mapPrice,
        'option_set_id': value.optionSetId,
        'option_set_display': value.optionSetDisplay,
        'variants': value.variants === undefined ? undefined : ((value.variants as Array<any>).map(ProductVariantFullToJSON)),
    };
}


