/* tslint:disable */
/* eslint-disable */
/**
 * Checkouts
 * Create checkouts from existing carts using BigCommerce checkout logic.
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ContactEntity,
    ContactEntityFromJSON,
    ContactEntityFromJSONTyped,
    ContactEntityToJSON,
} from './';

/**
 * 
 * @export
 * @interface ItemGiftCertificate
 */
export interface ItemGiftCertificate {
    /**
     * Currently supports `Birthday`, `Boy`, `Celebration`, `Christmas`, `General`, and `Girl`.
     * @type {string}
     * @memberof ItemGiftCertificate
     */
    theme: string;
    /**
     * Value must be between 1.00 and 1,000.00 in the store's default currency.
     * @type {number}
     * @memberof ItemGiftCertificate
     */
    amount: number;
    /**
     * 
     * @type {ContactEntity}
     * @memberof ItemGiftCertificate
     */
    sender: ContactEntity;
    /**
     * 
     * @type {ContactEntity}
     * @memberof ItemGiftCertificate
     */
    recipient: ContactEntity;
    /**
     * 
     * @type {string}
     * @memberof ItemGiftCertificate
     */
    id?: string;
    /**
     * GiftCertificate-provided name that will appear in the control panel.
     * @type {string}
     * @memberof ItemGiftCertificate
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ItemGiftCertificate
     */
    taxable?: boolean;
    /**
     * Limited to 200 characters.
     * @type {string}
     * @memberof ItemGiftCertificate
     */
    message?: string;
}

export function ItemGiftCertificateFromJSON(json: any): ItemGiftCertificate {
    return ItemGiftCertificateFromJSONTyped(json, false);
}

export function ItemGiftCertificateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemGiftCertificate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'theme': json['theme'],
        'amount': json['amount'],
        'sender': ContactEntityFromJSON(json['sender']),
        'recipient': ContactEntityFromJSON(json['recipient']),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'taxable': !exists(json, 'taxable') ? undefined : json['taxable'],
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function ItemGiftCertificateToJSON(value?: ItemGiftCertificate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'theme': value.theme,
        'amount': value.amount,
        'sender': ContactEntityToJSON(value.sender),
        'recipient': ContactEntityToJSON(value.recipient),
        'id': value.id,
        'name': value.name,
        'taxable': value.taxable,
        'message': value.message,
    };
}

