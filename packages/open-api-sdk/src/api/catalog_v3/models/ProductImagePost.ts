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
    ProductImageBase,
    ProductImageBaseFromJSON,
    ProductImageBaseFromJSONTyped,
    ProductImageBaseToJSON,
    ProductImagePostAllOf,
    ProductImagePostAllOfFromJSON,
    ProductImagePostAllOfFromJSONTyped,
    ProductImagePostAllOfToJSON,
} from './';

/**
 * The model for a POST to create an image on a product.
 * @export
 * @interface ProductImagePost
 */
export interface ProductImagePost {
    /**
     * The unique numeric ID of the image; increments sequentially.
     * @type {number}
     * @memberof ProductImagePost
     */
    id?: number;
    /**
     * The unique numeric identifier for the product with which the image is associated.
     * @type {number}
     * @memberof ProductImagePost
     */
    productId?: number;
    /**
     * Must be sent as a multipart/form-data field in the request body.
     * @type {string}
     * @memberof ProductImagePost
     */
    imageFile?: string;
    /**
     * The zoom URL for this image. By default, this is used as the zoom image on product pages when zoom images are enabled.
     * @type {string}
     * @memberof ProductImagePost
     */
    urlZoom?: string;
    /**
     * The standard URL for this image. By default, this is used for product-page images.
     * @type {string}
     * @memberof ProductImagePost
     */
    urlStandard?: string;
    /**
     * The thumbnail URL for this image. By default, this is the image size used on the category page and in side panels.
     * @type {string}
     * @memberof ProductImagePost
     */
    urlThumbnail?: string;
    /**
     * The tiny URL for this image. By default, this is the image size used for thumbnails beneath the product image on a product page.
     * @type {string}
     * @memberof ProductImagePost
     */
    urlTiny?: string;
    /**
     * The date on which the product image was modified.
     * @type {Date}
     * @memberof ProductImagePost
     */
    dateModified?: Date;
    /**
     * Flag for identifying whether the image is used as the product's thumbnail.
     * @type {boolean}
     * @memberof ProductImagePost
     */
    isThumbnail?: boolean;
    /**
     * The order in which the image will be displayed on the product page. Higher integers give the image a lower priority. When updating, if the image is given a lower priority, all images with a `sort_order` the same as or greater than the image's new `sort_order` value will have their `sort_order`s reordered.
     * @type {number}
     * @memberof ProductImagePost
     */
    sortOrder?: number;
    /**
     * The description for the image.
     * @type {string}
     * @memberof ProductImagePost
     */
    description?: string;
    /**
     * Must be a fully qualified URL path, including protocol. Limit of 8MB per file.
     * @type {string}
     * @memberof ProductImagePost
     */
    imageUrl?: string;
}

export function ProductImagePostFromJSON(json: any): ProductImagePost {
    return ProductImagePostFromJSONTyped(json, false);
}

export function ProductImagePostFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductImagePost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'productId': !exists(json, 'product_id') ? undefined : json['product_id'],
        'imageFile': !exists(json, 'image_file') ? undefined : json['image_file'],
        'urlZoom': !exists(json, 'url_zoom') ? undefined : json['url_zoom'],
        'urlStandard': !exists(json, 'url_standard') ? undefined : json['url_standard'],
        'urlThumbnail': !exists(json, 'url_thumbnail') ? undefined : json['url_thumbnail'],
        'urlTiny': !exists(json, 'url_tiny') ? undefined : json['url_tiny'],
        'dateModified': !exists(json, 'date_modified') ? undefined : (new Date(json['date_modified'])),
        'isThumbnail': !exists(json, 'is_thumbnail') ? undefined : json['is_thumbnail'],
        'sortOrder': !exists(json, 'sort_order') ? undefined : json['sort_order'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'imageUrl': !exists(json, 'image_url') ? undefined : json['image_url'],
    };
}

export function ProductImagePostToJSON(value?: ProductImagePost | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'product_id': value.productId,
        'image_file': value.imageFile,
        'url_zoom': value.urlZoom,
        'url_standard': value.urlStandard,
        'url_thumbnail': value.urlThumbnail,
        'url_tiny': value.urlTiny,
        'date_modified': value.dateModified === undefined ? undefined : (value.dateModified.toISOString()),
        'is_thumbnail': value.isThumbnail,
        'sort_order': value.sortOrder,
        'description': value.description,
        'image_url': value.imageUrl,
    };
}


