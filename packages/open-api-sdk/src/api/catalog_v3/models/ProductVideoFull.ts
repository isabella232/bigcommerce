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
    ProductVideoBase,
    ProductVideoBaseFromJSON,
    ProductVideoBaseFromJSONTyped,
    ProductVideoBaseToJSON,
    ProductVideoFullAllOf,
    ProductVideoFullAllOfFromJSON,
    ProductVideoFullAllOfFromJSONTyped,
    ProductVideoFullAllOfToJSON,
} from './';

/**
 * A product video model.
 * @export
 * @interface ProductVideoFull
 */
export interface ProductVideoFull {
    /**
     * The title for the video. If left blank, this will be filled in according to data on a host site.
     * @type {string}
     * @memberof ProductVideoFull
     */
    title?: string;
    /**
     * The description for the video. If left blank, this will be filled in according to data on a host site.
     * @type {string}
     * @memberof ProductVideoFull
     */
    description?: string;
    /**
     * The order in which the video will be displayed on the product page. Higher integers give the video a lower priority. When updating, if the video is given a lower priority, all videos with a `sort_order` the same as or greater than the video's new `sort_order` value will have their `sort_order`s reordered.
     * @type {number}
     * @memberof ProductVideoFull
     */
    sortOrder?: number;
    /**
     * The video type (a short name of a host site).
     * @type {string}
     * @memberof ProductVideoFull
     */
    type?: ProductVideoFullTypeEnum;
    /**
     * The ID of the video on a host site.
     * @type {string}
     * @memberof ProductVideoFull
     */
    videoId?: string;
    /**
     * The unique numeric ID of the product video; increments sequentially.
     * @type {number}
     * @memberof ProductVideoFull
     */
    id?: number;
    /**
     * The unique numeric identifier for the product with which the image is associated.
     * @type {number}
     * @memberof ProductVideoFull
     */
    productId?: number;
    /**
     * Length of the video. This will be filled in according to data on a host site.
     * @type {string}
     * @memberof ProductVideoFull
     */
    length?: string;
}

/**
* @export
* @enum {string}
*/
export enum ProductVideoFullTypeEnum {
    Youtube = 'youtube'
}

export function ProductVideoFullFromJSON(json: any): ProductVideoFull {
    return ProductVideoFullFromJSONTyped(json, false);
}

export function ProductVideoFullFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductVideoFull {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': !exists(json, 'title') ? undefined : json['title'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'sortOrder': !exists(json, 'sort_order') ? undefined : json['sort_order'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'videoId': !exists(json, 'video_id') ? undefined : json['video_id'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'productId': !exists(json, 'product_id') ? undefined : json['product_id'],
        'length': !exists(json, 'length') ? undefined : json['length'],
    };
}

export function ProductVideoFullToJSON(value?: ProductVideoFull | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'description': value.description,
        'sort_order': value.sortOrder,
        'type': value.type,
        'video_id': value.videoId,
        'id': value.id,
        'product_id': value.productId,
        'length': value.length,
    };
}


