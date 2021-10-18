/* tslint:disable */
/* eslint-disable */
/**
 * Carts
 * Create a cart using BigCommerce cart logic.
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
    GiftWrapping,
    GiftWrappingFromJSON,
    GiftWrappingFromJSONTyped,
    GiftWrappingToJSON,
} from './';

/**
 * 
 * @export
 * @interface ItemPhysicalAllOf
 */
export interface ItemPhysicalAllOf {
    /**
     * 
     * @type {boolean}
     * @memberof ItemPhysicalAllOf
     */
    isRequireShipping?: boolean;
    /**
     * 
     * @type {GiftWrapping}
     * @memberof ItemPhysicalAllOf
     */
    giftWrapping?: GiftWrapping;
}

export function ItemPhysicalAllOfFromJSON(json: any): ItemPhysicalAllOf {
    return ItemPhysicalAllOfFromJSONTyped(json, false);
}

export function ItemPhysicalAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemPhysicalAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isRequireShipping': !exists(json, 'is_require_shipping') ? undefined : json['is_require_shipping'],
        'giftWrapping': !exists(json, 'gift_wrapping') ? undefined : GiftWrappingFromJSON(json['gift_wrapping']),
    };
}

export function ItemPhysicalAllOfToJSON(value?: ItemPhysicalAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'is_require_shipping': value.isRequireShipping,
        'gift_wrapping': GiftWrappingToJSON(value.giftWrapping),
    };
}

