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
    MetafieldBase,
    MetafieldBaseFromJSON,
    MetafieldBaseFromJSONTyped,
    MetafieldBaseToJSON,
} from './';

/**
 * 
 * @export
 * @interface MetafieldPost
 */
export interface MetafieldPost {
    /**
     * Unique ID of the *Metafield*. Read-Only.
     * @type {number}
     * @memberof MetafieldPost
     */
    id?: number;
    /**
     * Determines the visibility and writeability of the field by other API consumers.
     * 
     * |Value|Description
     * |-|-|
     * |`app_only`|Private to the app that owns the field|
     * |`read`|Visible to other API consumers|
     * |`write`|Open for reading and writing by other API consumers|
     * |`read_and_sf_access`|Visible to other API consumers, including on storefront|
     * |`write_and_sf_access`|Open for reading and writing by other API consumers, including on storefront|
     * @type {string}
     * @memberof MetafieldPost
     */
    permissionSet: MetafieldPostPermissionSetEnum;
    /**
     * Namespace for the metafield, for organizational purposes. This is set set by the developer. Required for POST.
     * @type {string}
     * @memberof MetafieldPost
     */
    namespace: string;
    /**
     * The name of the field, for example: `location_id`, `color`. Required for POST.
     * @type {string}
     * @memberof MetafieldPost
     */
    key: string;
    /**
     * The value of the field, for example: `1`, `blue`. Required for POST.
     * @type {string}
     * @memberof MetafieldPost
     */
    value: string;
    /**
     * Description for the metafields.
     * @type {string}
     * @memberof MetafieldPost
     */
    description?: string;
    /**
     * The type of resource with which the metafield is associated.
     * @type {string}
     * @memberof MetafieldPost
     */
    resourceType?: MetafieldPostResourceTypeEnum;
    /**
     * The ID for the resource with which the metafield is associated.
     * @type {number}
     * @memberof MetafieldPost
     */
    resourceId?: number;
    /**
     * Date and time of the metafield's creation. Read-Only.
     * @type {Date}
     * @memberof MetafieldPost
     */
    dateCreated?: Date;
    /**
     * Date and time when the metafield was last updated. Read-Only.
     * @type {Date}
     * @memberof MetafieldPost
     */
    dateModified?: Date;
}

/**
* @export
* @enum {string}
*/
export enum MetafieldPostPermissionSetEnum {
    AppOnly = 'app_only',
    Read = 'read',
    Write = 'write',
    ReadAndSfAccess = 'read_and_sf_access',
    WriteAndSfAccess = 'write_and_sf_access'
}/**
* @export
* @enum {string}
*/
export enum MetafieldPostResourceTypeEnum {
    Category = 'category',
    Brand = 'brand',
    Product = 'product',
    Variant = 'variant'
}

export function MetafieldPostFromJSON(json: any): MetafieldPost {
    return MetafieldPostFromJSONTyped(json, false);
}

export function MetafieldPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetafieldPost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'permissionSet': json['permission_set'],
        'namespace': json['namespace'],
        'key': json['key'],
        'value': json['value'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'resourceType': !exists(json, 'resource_type') ? undefined : json['resource_type'],
        'resourceId': !exists(json, 'resource_id') ? undefined : json['resource_id'],
        'dateCreated': !exists(json, 'date_created') ? undefined : (new Date(json['date_created'])),
        'dateModified': !exists(json, 'date_modified') ? undefined : (new Date(json['date_modified'])),
    };
}

export function MetafieldPostToJSON(value?: MetafieldPost | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'permission_set': value.permissionSet,
        'namespace': value.namespace,
        'key': value.key,
        'value': value.value,
        'description': value.description,
        'resource_type': value.resourceType,
        'resource_id': value.resourceId,
        'date_created': value.dateCreated === undefined ? undefined : (value.dateCreated.toISOString()),
        'date_modified': value.dateModified === undefined ? undefined : (value.dateModified.toISOString()),
    };
}


