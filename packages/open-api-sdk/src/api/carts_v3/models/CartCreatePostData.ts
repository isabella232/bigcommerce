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
    CartCreatePostDataCurrency,
    CartCreatePostDataCurrencyFromJSON,
    CartCreatePostDataCurrencyFromJSONTyped,
    CartCreatePostDataCurrencyToJSON,
    LineItemGiftCertificateRequestData,
    LineItemGiftCertificateRequestDataFromJSON,
    LineItemGiftCertificateRequestDataFromJSONTyped,
    LineItemGiftCertificateRequestDataToJSON,
} from './';

/**
 * 
 * @export
 * @interface CartCreatePostData
 */
export interface CartCreatePostData {
    /**
     * 
     * @type {number}
     * @memberof CartCreatePostData
     */
    customerId?: number;
    /**
     * 
     * @type {object}
     * @memberof CartCreatePostData
     */
    lineItems?: object;
    /**
     * 
     * @type {Array<object>}
     * @memberof CartCreatePostData
     */
    customItems?: Array<object>;
    /**
     * 
     * @type {Array<LineItemGiftCertificateRequestData>}
     * @memberof CartCreatePostData
     */
    giftCertificates?: Array<LineItemGiftCertificateRequestData>;
    /**
     * If no channel is specified, defaults to 1. 
     * @type {number}
     * @memberof CartCreatePostData
     */
    channelId?: number;
    /**
     * 
     * @type {CartCreatePostDataCurrency}
     * @memberof CartCreatePostData
     */
    currency?: CartCreatePostDataCurrency;
    /**
     * Accepts string of format `xx` or `xx-YY`.
     * @type {string}
     * @memberof CartCreatePostData
     */
    locale?: string;
}

export function CartCreatePostDataFromJSON(json: any): CartCreatePostData {
    return CartCreatePostDataFromJSONTyped(json, false);
}

export function CartCreatePostDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CartCreatePostData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customerId': !exists(json, 'customer_id') ? undefined : json['customer_id'],
        'lineItems': !exists(json, 'line_items') ? undefined : json['line_items'],
        'customItems': !exists(json, 'custom_items') ? undefined : json['custom_items'],
        'giftCertificates': !exists(json, 'gift_certificates') ? undefined : ((json['gift_certificates'] as Array<any>).map(LineItemGiftCertificateRequestDataFromJSON)),
        'channelId': !exists(json, 'channel_id') ? undefined : json['channel_id'],
        'currency': !exists(json, 'currency') ? undefined : CartCreatePostDataCurrencyFromJSON(json['currency']),
        'locale': !exists(json, 'locale') ? undefined : json['locale'],
    };
}

export function CartCreatePostDataToJSON(value?: CartCreatePostData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'customer_id': value.customerId,
        'line_items': value.lineItems,
        'custom_items': value.customItems,
        'gift_certificates': value.giftCertificates === undefined ? undefined : ((value.giftCertificates as Array<any>).map(LineItemGiftCertificateRequestDataToJSON)),
        'channel_id': value.channelId,
        'currency': CartCreatePostDataCurrencyToJSON(value.currency),
        'locale': value.locale,
    };
}

