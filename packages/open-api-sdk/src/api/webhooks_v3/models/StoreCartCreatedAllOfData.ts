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
 * A lightweight description of the event that triggered the webhook.
 * @export
 * @interface StoreCartCreatedAllOfData
 */
export interface StoreCartCreatedAllOfData {
    /**
     * can be `cart` or `cart_line_item`
     * @type {string}
     * @memberof StoreCartCreatedAllOfData
     */
    type?: StoreCartCreatedAllOfDataTypeEnum;
    /**
     * ID of the cart
     * @type {string}
     * @memberof StoreCartCreatedAllOfData
     */
    id?: string;
}

/**
* @export
* @enum {string}
*/
export enum StoreCartCreatedAllOfDataTypeEnum {
    Cart = 'cart',
    CartLineItem = 'cart_line_item'
}

export function StoreCartCreatedAllOfDataFromJSON(json: any): StoreCartCreatedAllOfData {
    return StoreCartCreatedAllOfDataFromJSONTyped(json, false);
}

export function StoreCartCreatedAllOfDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): StoreCartCreatedAllOfData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : json['type'],
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function StoreCartCreatedAllOfDataToJSON(value?: StoreCartCreatedAllOfData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
    };
}

