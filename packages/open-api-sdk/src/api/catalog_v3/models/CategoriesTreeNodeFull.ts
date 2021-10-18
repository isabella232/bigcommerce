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
 * Used to reflect parent <> child category relationships. Used by Category Tree.
 * @export
 * @interface CategoriesTreeNodeFull
 */
export interface CategoriesTreeNodeFull {
    /**
     * The unique numeric ID of the category; increments sequentially.
     * @type {number}
     * @memberof CategoriesTreeNodeFull
     */
    id?: number;
    /**
     * The unique numeric ID of the category's parent. This field controls where the category sits in the tree of categories that organize the catalog.
     * @type {number}
     * @memberof CategoriesTreeNodeFull
     */
    parentId?: number;
    /**
     * The name displayed for the category. Name is unique with respect to the category's siblings.
     * @type {string}
     * @memberof CategoriesTreeNodeFull
     */
    name?: string;
    /**
     * Flag to determine whether the product should be displayed to customers browsing the store. If `true`, the category will be displayed. If `false`, the category will be hidden from view.
     * @type {boolean}
     * @memberof CategoriesTreeNodeFull
     */
    isVisible?: boolean;
    /**
     * The custom URL for the category on the storefront.
     * @type {string}
     * @memberof CategoriesTreeNodeFull
     */
    url?: string;
    /**
     * The list of children of the category.
     * @type {Array<CategoriesTreeNodeFull>}
     * @memberof CategoriesTreeNodeFull
     */
    children?: Array<CategoriesTreeNodeFull>;
}

export function CategoriesTreeNodeFullFromJSON(json: any): CategoriesTreeNodeFull {
    return CategoriesTreeNodeFullFromJSONTyped(json, false);
}

export function CategoriesTreeNodeFullFromJSONTyped(json: any, ignoreDiscriminator: boolean): CategoriesTreeNodeFull {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'parentId': !exists(json, 'parent_id') ? undefined : json['parent_id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'isVisible': !exists(json, 'is_visible') ? undefined : json['is_visible'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'children': !exists(json, 'children') ? undefined : ((json['children'] as Array<any>).map(CategoriesTreeNodeFullFromJSON)),
    };
}

export function CategoriesTreeNodeFullToJSON(value?: CategoriesTreeNodeFull | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'parent_id': value.parentId,
        'name': value.name,
        'is_visible': value.isVisible,
        'url': value.url,
        'children': value.children === undefined ? undefined : ((value.children as Array<any>).map(CategoriesTreeNodeFullToJSON)),
    };
}


