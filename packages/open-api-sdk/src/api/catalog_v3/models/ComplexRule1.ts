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
    Adjuster1,
    Adjuster1FromJSON,
    Adjuster1FromJSONTyped,
    Adjuster1ToJSON,
    ComplexRuleCondition1,
    ComplexRuleCondition1FromJSON,
    ComplexRuleCondition1FromJSONTyped,
    ComplexRuleCondition1ToJSON,
} from './';

/**
 * Common ComplexRule properties.
 * @export
 * @interface ComplexRule1
 */
export interface ComplexRule1 {
    /**
     * The unique numeric ID of the rule; increments sequentially.
     * Read-Only
     * @type {number}
     * @memberof ComplexRule1
     */
    id?: number;
    /**
     * The unique numeric ID of the product with which the rule is associated; increments sequentially.
     * @type {number}
     * @memberof ComplexRule1
     */
    productId?: number;
    /**
     * The priority to give this rule when making adjustments to the product properties.
     * @type {number}
     * @memberof ComplexRule1
     */
    sortOrder?: number;
    /**
     * Flag for determining whether the rule is to be used when adjusting a product's price, weight, image, or availabilty.
     * @type {boolean}
     * @memberof ComplexRule1
     */
    enabled?: boolean;
    /**
     * Flag for determining whether other rules should not be applied after this rule has been applied.
     * @type {boolean}
     * @memberof ComplexRule1
     */
    stop?: boolean;
    /**
     * Flag for determining whether the rule should disable purchasing of a product when the conditions are applied.
     * @type {boolean}
     * @memberof ComplexRule1
     */
    purchasingDisabled?: boolean;
    /**
     * Message displayed on the storefront when a rule disables the purchasing of a product.
     * @type {string}
     * @memberof ComplexRule1
     */
    purchasingDisabledMessage?: string;
    /**
     * Flag for determining whether the rule should hide purchasing of a product when the conditions are applied.
     * @type {boolean}
     * @memberof ComplexRule1
     */
    purchasingHidden?: boolean;
    /**
     * The URL for an image displayed on the storefront when the conditions are applied. Limit of 8MB per file.
     * @type {string}
     * @memberof ComplexRule1
     */
    imageUrl?: string;
    /**
     * 
     * @type {Adjuster1}
     * @memberof ComplexRule1
     */
    priceAdjuster?: Adjuster1;
    /**
     * 
     * @type {Adjuster1}
     * @memberof ComplexRule1
     */
    weightAdjuster?: Adjuster1;
    /**
     * 
     * @type {Array<ComplexRuleCondition1>}
     * @memberof ComplexRule1
     */
    conditions?: Array<ComplexRuleCondition1>;
}

export function ComplexRule1FromJSON(json: any): ComplexRule1 {
    return ComplexRule1FromJSONTyped(json, false);
}

export function ComplexRule1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ComplexRule1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'productId': !exists(json, 'product_id') ? undefined : json['product_id'],
        'sortOrder': !exists(json, 'sort_order') ? undefined : json['sort_order'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'stop': !exists(json, 'stop') ? undefined : json['stop'],
        'purchasingDisabled': !exists(json, 'purchasing_disabled') ? undefined : json['purchasing_disabled'],
        'purchasingDisabledMessage': !exists(json, 'purchasing_disabled_message') ? undefined : json['purchasing_disabled_message'],
        'purchasingHidden': !exists(json, 'purchasing_hidden') ? undefined : json['purchasing_hidden'],
        'imageUrl': !exists(json, 'image_url') ? undefined : json['image_url'],
        'priceAdjuster': !exists(json, 'price_adjuster') ? undefined : Adjuster1FromJSON(json['price_adjuster']),
        'weightAdjuster': !exists(json, 'weight_adjuster') ? undefined : Adjuster1FromJSON(json['weight_adjuster']),
        'conditions': !exists(json, 'conditions') ? undefined : ((json['conditions'] as Array<any>).map(ComplexRuleCondition1FromJSON)),
    };
}

export function ComplexRule1ToJSON(value?: ComplexRule1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'product_id': value.productId,
        'sort_order': value.sortOrder,
        'enabled': value.enabled,
        'stop': value.stop,
        'purchasing_disabled': value.purchasingDisabled,
        'purchasing_disabled_message': value.purchasingDisabledMessage,
        'purchasing_hidden': value.purchasingHidden,
        'image_url': value.imageUrl,
        'price_adjuster': Adjuster1ToJSON(value.priceAdjuster),
        'weight_adjuster': Adjuster1ToJSON(value.weightAdjuster),
        'conditions': value.conditions === undefined ? undefined : ((value.conditions as Array<any>).map(ComplexRuleCondition1ToJSON)),
    };
}


