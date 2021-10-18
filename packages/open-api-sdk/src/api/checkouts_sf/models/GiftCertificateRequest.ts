/* tslint:disable */
/* eslint-disable */
/**
 * Storefront Checkouts
 * Manage checkout operations and data via front-end JavaScript on BigCommerce stencil powered storefronts.
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
 * 
 * @export
 * @interface GiftCertificateRequest
 */
export interface GiftCertificateRequest {
    /**
     * 
     * @type {string}
     * @memberof GiftCertificateRequest
     */
    giftCertificateCode?: string;
}

export function GiftCertificateRequestFromJSON(json: any): GiftCertificateRequest {
    return GiftCertificateRequestFromJSONTyped(json, false);
}

export function GiftCertificateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GiftCertificateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'giftCertificateCode': !exists(json, 'giftCertificateCode') ? undefined : json['giftCertificateCode'],
    };
}

export function GiftCertificateRequestToJSON(value?: GiftCertificateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'giftCertificateCode': value.giftCertificateCode,
    };
}

