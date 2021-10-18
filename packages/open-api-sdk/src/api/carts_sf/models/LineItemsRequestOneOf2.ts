/* tslint:disable */
/* eslint-disable */
/**
 * Storefront Carts
 * Manage cart operations and data via front-end JavaScript on BigCommerce stencil powered storefronts.
 *
 * The version of the OpenAPI document: Storefront
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    RequestCartPostLineItem,
    RequestCartPostLineItemFromJSON,
    RequestCartPostLineItemFromJSONTyped,
    RequestCartPostLineItemToJSON,
    RequestLineItemGiftCertificate,
    RequestLineItemGiftCertificateFromJSON,
    RequestLineItemGiftCertificateFromJSONTyped,
    RequestLineItemGiftCertificateToJSON,
} from './';

/**
 * 
 * @export
 * @interface LineItemsRequestOneOf2
 */
export interface LineItemsRequestOneOf2 {
    /**
     * 
     * @type {Array<RequestCartPostLineItem>}
     * @memberof LineItemsRequestOneOf2
     */
    lineItems: Array<RequestCartPostLineItem>;
    /**
     * 
     * @type {RequestLineItemGiftCertificate}
     * @memberof LineItemsRequestOneOf2
     */
    giftCertificates: RequestLineItemGiftCertificate;
}

export function LineItemsRequestOneOf2FromJSON(json: any): LineItemsRequestOneOf2 {
    return LineItemsRequestOneOf2FromJSONTyped(json, false);
}

export function LineItemsRequestOneOf2FromJSONTyped(json: any, ignoreDiscriminator: boolean): LineItemsRequestOneOf2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lineItems': ((json['lineItems'] as Array<any>).map(RequestCartPostLineItemFromJSON)),
        'giftCertificates': RequestLineItemGiftCertificateFromJSON(json['giftCertificates']),
    };
}

export function LineItemsRequestOneOf2ToJSON(value?: LineItemsRequestOneOf2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lineItems': ((value.lineItems as Array<any>).map(RequestCartPostLineItemToJSON)),
        'giftCertificates': RequestLineItemGiftCertificateToJSON(value.giftCertificates),
    };
}

