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
    ProductVariantOptionValueBase,
    ProductVariantOptionValueBaseFromJSON,
    ProductVariantOptionValueBaseFromJSONTyped,
    ProductVariantOptionValueBaseToJSON,
    ProductVariantOptionValueFullAllOf,
    ProductVariantOptionValueFullAllOfFromJSON,
    ProductVariantOptionValueFullAllOfFromJSONTyped,
    ProductVariantOptionValueFullAllOfToJSON,
} from './';

/**
 * 
 * @export
 * @interface ProductVariantOptionValueFull
 */
export interface ProductVariantOptionValueFull {
    /**
     * The name of the option.
     * @type {string}
     * @memberof ProductVariantOptionValueFull
     */
    optionDisplayName?: string;
    /**
     * The label of the option value.
     * @type {string}
     * @memberof ProductVariantOptionValueFull
     */
    label?: string;
    /**
     * `option_value` ID.
     * @type {number}
     * @memberof ProductVariantOptionValueFull
     */
    id?: number;
    /**
     * `option` ID.
     * @type {number}
     * @memberof ProductVariantOptionValueFull
     */
    optionId?: number;
}

export function ProductVariantOptionValueFullFromJSON(json: any): ProductVariantOptionValueFull {
    return ProductVariantOptionValueFullFromJSONTyped(json, false);
}

export function ProductVariantOptionValueFullFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductVariantOptionValueFull {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'optionDisplayName': !exists(json, 'option_display_name') ? undefined : json['option_display_name'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'optionId': !exists(json, 'option_id') ? undefined : json['option_id'],
    };
}

export function ProductVariantOptionValueFullToJSON(value?: ProductVariantOptionValueFull | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'option_display_name': value.optionDisplayName,
        'label': value.label,
        'id': value.id,
        'option_id': value.optionId,
    };
}


