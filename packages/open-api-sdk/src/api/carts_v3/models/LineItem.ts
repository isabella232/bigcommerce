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
    ItemCustom,
    ItemCustomFromJSON,
    ItemCustomFromJSONTyped,
    ItemCustomToJSON,
    ItemGiftCertificate,
    ItemGiftCertificateFromJSON,
    ItemGiftCertificateFromJSONTyped,
    ItemGiftCertificateToJSON,
} from './';

/**
 * 
 * @export
 * @interface LineItem
 */
export interface LineItem {
    /**
     * 
     * @type {Array<object>}
     * @memberof LineItem
     */
    physicalItems: Array<object>;
    /**
     * 
     * @type {Array<object>}
     * @memberof LineItem
     */
    digitalItems: Array<object>;
    /**
     * 
     * @type {Array<ItemGiftCertificate>}
     * @memberof LineItem
     */
    giftCertificates?: Array<ItemGiftCertificate>;
    /**
     * 
     * @type {Array<ItemCustom>}
     * @memberof LineItem
     */
    virtualItems?: Array<ItemCustom>;
}

export function LineItemFromJSON(json: any): LineItem {
    return LineItemFromJSONTyped(json, false);
}

export function LineItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): LineItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'physicalItems': json['physical_items'],
        'digitalItems': json['digital_items'],
        'giftCertificates': !exists(json, 'gift_certificates') ? undefined : ((json['gift_certificates'] as Array<any>).map(ItemGiftCertificateFromJSON)),
        'virtualItems': !exists(json, 'virtual_items') ? undefined : ((json['virtual_items'] as Array<any>).map(ItemCustomFromJSON)),
    };
}

export function LineItemToJSON(value?: LineItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'physical_items': value.physicalItems,
        'digital_items': value.digitalItems,
        'gift_certificates': value.giftCertificates === undefined ? undefined : ((value.giftCertificates as Array<any>).map(ItemGiftCertificateToJSON)),
        'virtual_items': value.virtualItems === undefined ? undefined : ((value.virtualItems as Array<any>).map(ItemCustomToJSON)),
    };
}

