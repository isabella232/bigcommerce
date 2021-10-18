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
    ProductOptionBase,
    ProductOptionBaseFromJSON,
    ProductOptionBaseFromJSONTyped,
    ProductOptionBaseToJSON,
    ProductOptionConfigFull,
    ProductOptionConfigFullFromJSON,
    ProductOptionConfigFullFromJSONTyped,
    ProductOptionConfigFullToJSON,
    ProductOptionFullAllOf,
    ProductOptionFullAllOfFromJSON,
    ProductOptionFullAllOfFromJSONTyped,
    ProductOptionFullAllOfToJSON,
    ProductOptionOptionValueFull,
    ProductOptionOptionValueFullFromJSON,
    ProductOptionOptionValueFullFromJSONTyped,
    ProductOptionOptionValueFullToJSON,
} from './';

/**
 * 
 * @export
 * @interface ProductOptionFull
 */
export interface ProductOptionFull {
    /**
     * The unique numerical ID of the option, increments sequentially.
     * @type {number}
     * @memberof ProductOptionFull
     */
    id?: number | null;
    /**
     * The unique numerical ID of the product to which the option belongs.
     * @type {number}
     * @memberof ProductOptionFull
     */
    productId?: number;
    /**
     * The name of the option shown on the storefront.
     * @type {string}
     * @memberof ProductOptionFull
     */
    displayName?: string;
    /**
     * The type of option, which determines how it will display on the storefront. Acceptable values: `radio_buttons`, `rectangles`, `dropdown`, `product_list`, `product_list_with_images`, `swatch`. For reference, the former v2 API values are: RB = radio_buttons, RT = rectangles, S = dropdown, P = product_list, PI = product_list_with_images, CS = swatch.
     * @type {string}
     * @memberof ProductOptionFull
     */
    type?: ProductOptionFullTypeEnum;
    /**
     * 
     * @type {ProductOptionConfigFull}
     * @memberof ProductOptionFull
     */
    config?: ProductOptionConfigFull;
    /**
     * Order in which the option is displayed on the storefront. 
     * @type {number}
     * @memberof ProductOptionFull
     */
    sortOrder?: number;
    /**
     * 
     * @type {ProductOptionOptionValueFull}
     * @memberof ProductOptionFull
     */
    optionValues?: ProductOptionOptionValueFull;
    /**
     * The unique option name, auto-generated from the display name, a timestamp, and the product ID.
     * @type {string}
     * @memberof ProductOptionFull
     */
    name?: string;
}

/**
* @export
* @enum {string}
*/
export enum ProductOptionFullTypeEnum {
    RadioButtons = 'radio_buttons',
    Rectangles = 'rectangles',
    Dropdown = 'dropdown',
    ProductList = 'product_list',
    ProductListWithImages = 'product_list_with_images',
    Swatch = 'swatch'
}

export function ProductOptionFullFromJSON(json: any): ProductOptionFull {
    return ProductOptionFullFromJSONTyped(json, false);
}

export function ProductOptionFullFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductOptionFull {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'productId': !exists(json, 'product_id') ? undefined : json['product_id'],
        'displayName': !exists(json, 'display_name') ? undefined : json['display_name'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'config': !exists(json, 'config') ? undefined : ProductOptionConfigFullFromJSON(json['config']),
        'sortOrder': !exists(json, 'sort_order') ? undefined : json['sort_order'],
        'optionValues': !exists(json, 'option_values') ? undefined : ProductOptionOptionValueFullFromJSON(json['option_values']),
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function ProductOptionFullToJSON(value?: ProductOptionFull | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'product_id': value.productId,
        'display_name': value.displayName,
        'type': value.type,
        'config': ProductOptionConfigFullToJSON(value.config),
        'sort_order': value.sortOrder,
        'option_values': ProductOptionOptionValueFullToJSON(value.optionValues),
        'name': value.name,
    };
}


