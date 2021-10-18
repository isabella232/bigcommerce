/* tslint:disable */
/* eslint-disable */
/**
 * Webhooks v3
 * Get notified when specific events occur on a BigCommerce store. For more information, see [Webhooks Overview](https://developer.bigcommerce.com/api-docs/store-management/webhooks/overview).
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface StoreSkuCreatedAllOfDataSku
 */
export interface StoreSkuCreatedAllOfDataSku {
    /**
     * ID of the product
     * @type {number}
     * @memberof StoreSkuCreatedAllOfDataSku
     */
    productId?: number;
    /**
     * ID of the variant
     * @type {number}
     * @memberof StoreSkuCreatedAllOfDataSku
     */
    variantId?: number;
}

export function StoreSkuCreatedAllOfDataSkuFromJSON(json: any): StoreSkuCreatedAllOfDataSku {
    return StoreSkuCreatedAllOfDataSkuFromJSONTyped(json, false);
}

export function StoreSkuCreatedAllOfDataSkuFromJSONTyped(json: any, ignoreDiscriminator: boolean): StoreSkuCreatedAllOfDataSku {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'productId': !exists(json, 'product_id') ? undefined : json['product_id'],
        'variantId': !exists(json, 'variant_id') ? undefined : json['variant_id'],
    };
}

export function StoreSkuCreatedAllOfDataSkuToJSON(value?: StoreSkuCreatedAllOfDataSku | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'product_id': value.productId,
        'variant_id': value.variantId,
    };
}

