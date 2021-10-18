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
    AdjustersFull,
    AdjustersFullFromJSON,
    AdjustersFullFromJSONTyped,
    AdjustersFullToJSON,
    ProductModifierOptionValueBase,
    ProductModifierOptionValueBaseFromJSON,
    ProductModifierOptionValueBaseFromJSONTyped,
    ProductModifierOptionValueBaseToJSON,
    ProductModifierOptionValueFullAllOf,
    ProductModifierOptionValueFullAllOfFromJSON,
    ProductModifierOptionValueFullAllOfFromJSONTyped,
    ProductModifierOptionValueFullAllOfToJSON,
} from './';

/**
 * Product Modifer `option_value`.
 * @export
 * @interface ProductModifierOptionValueFull
 */
export interface ProductModifierOptionValueFull {
    /**
     * The flag for preselecting a value as the default on the storefront. This field is not supported for swatch options/modifiers.
     * @type {boolean}
     * @memberof ProductModifierOptionValueFull
     */
    isDefault?: boolean;
    /**
     * The text display identifying the value on the storefront. Required in a /POST.
     * @type {string}
     * @memberof ProductModifierOptionValueFull
     */
    label: string;
    /**
     * The order in which the value will be displayed on the product page. Required in a /POST.
     * @type {number}
     * @memberof ProductModifierOptionValueFull
     */
    sortOrder: number;
    /**
     * 
     * @type {AdjustersFull}
     * @memberof ProductModifierOptionValueFull
     */
    adjusters?: AdjustersFull;
    /**
     * The unique numeric ID of the value; increments sequentially.
     * @type {number}
     * @memberof ProductModifierOptionValueFull
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductModifierOptionValueFull
     */
    optionId?: number;
}

export function ProductModifierOptionValueFullFromJSON(json: any): ProductModifierOptionValueFull {
    return ProductModifierOptionValueFullFromJSONTyped(json, false);
}

export function ProductModifierOptionValueFullFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductModifierOptionValueFull {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isDefault': !exists(json, 'is_default') ? undefined : json['is_default'],
        'label': json['label'],
        'sortOrder': json['sort_order'],
        'adjusters': !exists(json, 'adjusters') ? undefined : AdjustersFullFromJSON(json['adjusters']),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'optionId': !exists(json, 'option_id') ? undefined : json['option_id'],
    };
}

export function ProductModifierOptionValueFullToJSON(value?: ProductModifierOptionValueFull | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'is_default': value.isDefault,
        'label': value.label,
        'sort_order': value.sortOrder,
        'adjusters': AdjustersFullToJSON(value.adjusters),
        'id': value.id,
        'option_id': value.optionId,
    };
}


