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
    CustomUrlCategory,
    CustomUrlCategoryFromJSON,
    CustomUrlCategoryFromJSONTyped,
    CustomUrlCategoryToJSON,
} from './';

/**
 * Common Category object properties.
 * @export
 * @interface Category
 */
export interface Category {
    /**
     * Unique ID of the *Category*. Increments sequentially.
     * Read-Only.
     * @type {number}
     * @memberof Category
     */
    id?: number;
    /**
     * The unique numeric ID of the category's parent. This field controls where the category sits in the tree of categories that organize the catalog.
     * Required in a POST if creating a child category.
     * @type {number}
     * @memberof Category
     */
    parentId: number;
    /**
     * The name displayed for the category. Name is unique with respect to the category's siblings.
     * Required in a POST.
     * @type {string}
     * @memberof Category
     */
    name: string;
    /**
     * The product description, which can include HTML formatting.
     * @type {string}
     * @memberof Category
     */
    description?: string;
    /**
     * Number of views the category has on the storefront.
     * @type {number}
     * @memberof Category
     */
    views?: number;
    /**
     * Priority this category will be given when included in the menu and category pages. The lower the number, the closer to the top of the results the category will be.
     * @type {number}
     * @memberof Category
     */
    sortOrder?: number;
    /**
     * Custom title for the category page. If not defined, the category name will be used as the meta title.
     * @type {string}
     * @memberof Category
     */
    pageTitle?: string;
    /**
     * A comma-separated list of keywords that can be used to locate the category when searching the store.
     * @type {string}
     * @memberof Category
     */
    searchKeywords?: string;
    /**
     * Custom meta keywords for the category page. If not defined, the store's default keywords will be used. Must post as an array like: ["awesome","sauce"].
     * @type {Array<string>}
     * @memberof Category
     */
    metaKeywords?: Array<string>;
    /**
     * Custom meta description for the category page. If not defined, the store's default meta description will be used.
     * @type {string}
     * @memberof Category
     */
    metaDescription?: string;
    /**
     * A valid layout file. (Please refer to [this article](https://support.bigcommerce.com/articles/Public/Creating-Custom-Template-Files/) on creating category files.) This field is writable only for stores with a Blueprint theme applied.
     * @type {string}
     * @memberof Category
     */
    layoutFile?: string;
    /**
     * Flag to determine whether the product should be displayed to customers browsing the store. If `true`, the category will be displayed. If `false`, the category will be hidden from view.
     * @type {boolean}
     * @memberof Category
     */
    isVisible?: boolean;
    /**
     * Determines how the products are sorted on category page load.
     * @type {string}
     * @memberof Category
     */
    defaultProductSort?: CategoryDefaultProductSortEnum;
    /**
     * Image URL used for this category on the storefront. Images can be uploaded via form file post to `/categories/{categoryId}/image`, or by providing a publicly accessible URL in this field.
     * @type {string}
     * @memberof Category
     */
    imageUrl?: string;
    /**
     * 
     * @type {CustomUrlCategory}
     * @memberof Category
     */
    customUrl?: CustomUrlCategory;
}

/**
* @export
* @enum {string}
*/
export enum CategoryDefaultProductSortEnum {
    UseStoreSettings = 'use_store_settings',
    Featured = 'featured',
    Newest = 'newest',
    BestSelling = 'best_selling',
    AlphaAsc = 'alpha_asc',
    AlphaDesc = 'alpha_desc',
    AvgCustomerReview = 'avg_customer_review',
    PriceAsc = 'price_asc',
    PriceDesc = 'price_desc'
}

export function CategoryFromJSON(json: any): Category {
    return CategoryFromJSONTyped(json, false);
}

export function CategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): Category {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'parentId': json['parent_id'],
        'name': json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'views': !exists(json, 'views') ? undefined : json['views'],
        'sortOrder': !exists(json, 'sort_order') ? undefined : json['sort_order'],
        'pageTitle': !exists(json, 'page_title') ? undefined : json['page_title'],
        'searchKeywords': !exists(json, 'search_keywords') ? undefined : json['search_keywords'],
        'metaKeywords': !exists(json, 'meta_keywords') ? undefined : json['meta_keywords'],
        'metaDescription': !exists(json, 'meta_description') ? undefined : json['meta_description'],
        'layoutFile': !exists(json, 'layout_file') ? undefined : json['layout_file'],
        'isVisible': !exists(json, 'is_visible') ? undefined : json['is_visible'],
        'defaultProductSort': !exists(json, 'default_product_sort') ? undefined : json['default_product_sort'],
        'imageUrl': !exists(json, 'image_url') ? undefined : json['image_url'],
        'customUrl': !exists(json, 'custom_url') ? undefined : CustomUrlCategoryFromJSON(json['custom_url']),
    };
}

export function CategoryToJSON(value?: Category | null): any {
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
        'description': value.description,
        'views': value.views,
        'sort_order': value.sortOrder,
        'page_title': value.pageTitle,
        'search_keywords': value.searchKeywords,
        'meta_keywords': value.metaKeywords,
        'meta_description': value.metaDescription,
        'layout_file': value.layoutFile,
        'is_visible': value.isVisible,
        'default_product_sort': value.defaultProductSort,
        'image_url': value.imageUrl,
        'custom_url': CustomUrlCategoryToJSON(value.customUrl),
    };
}


