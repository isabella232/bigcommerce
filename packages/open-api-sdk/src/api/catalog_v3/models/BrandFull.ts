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
    CustomUrlFull,
    CustomUrlFullFromJSON,
    CustomUrlFullFromJSONTyped,
    CustomUrlFullToJSON,
} from './';

/**
 * Common Brand properties.
 * @export
 * @interface BrandFull
 */
export interface BrandFull {
    /**
     * Unique ID of the *Brand*. Read-Only.
     * @type {number}
     * @memberof BrandFull
     */
    id?: number;
    /**
     * The name of the brand. Must be unique.
     * Required in POST.
     * @type {string}
     * @memberof BrandFull
     */
    name: string;
    /**
     * The title shown in the browser while viewing the brand.
     * @type {string}
     * @memberof BrandFull
     */
    pageTitle?: string;
    /**
     * Comma-separated list of meta keywords to include in the HTML.
     * @type {Array<string>}
     * @memberof BrandFull
     */
    metaKeywords?: Array<string>;
    /**
     * A meta description to include.
     * @type {string}
     * @memberof BrandFull
     */
    metaDescription?: string;
    /**
     * A comma-separated list of keywords that can be used to locate this brand.
     * @type {string}
     * @memberof BrandFull
     */
    searchKeywords?: string;
    /**
     * Image URL used for this category on the storefront. Images can be uploaded via form file post to `/brands/{brandId}/image`, or by providing a publicly accessible URL in this field.
     * @type {string}
     * @memberof BrandFull
     */
    imageUrl?: string;
    /**
     * 
     * @type {CustomUrlFull}
     * @memberof BrandFull
     */
    customUrl?: CustomUrlFull;
}

export function BrandFullFromJSON(json: any): BrandFull {
    return BrandFullFromJSONTyped(json, false);
}

export function BrandFullFromJSONTyped(json: any, ignoreDiscriminator: boolean): BrandFull {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': json['name'],
        'pageTitle': !exists(json, 'page_title') ? undefined : json['page_title'],
        'metaKeywords': !exists(json, 'meta_keywords') ? undefined : json['meta_keywords'],
        'metaDescription': !exists(json, 'meta_description') ? undefined : json['meta_description'],
        'searchKeywords': !exists(json, 'search_keywords') ? undefined : json['search_keywords'],
        'imageUrl': !exists(json, 'image_url') ? undefined : json['image_url'],
        'customUrl': !exists(json, 'custom_url') ? undefined : CustomUrlFullFromJSON(json['custom_url']),
    };
}

export function BrandFullToJSON(value?: BrandFull | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'page_title': value.pageTitle,
        'meta_keywords': value.metaKeywords,
        'meta_description': value.metaDescription,
        'search_keywords': value.searchKeywords,
        'image_url': value.imageUrl,
        'custom_url': CustomUrlFullToJSON(value.customUrl),
    };
}


