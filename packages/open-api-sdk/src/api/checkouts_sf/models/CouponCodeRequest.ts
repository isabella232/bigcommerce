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
 * @interface CouponCodeRequest
 */
export interface CouponCodeRequest {
    /**
     * 
     * @type {string}
     * @memberof CouponCodeRequest
     */
    couponCode?: string;
}

export function CouponCodeRequestFromJSON(json: any): CouponCodeRequest {
    return CouponCodeRequestFromJSONTyped(json, false);
}

export function CouponCodeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CouponCodeRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'couponCode': !exists(json, 'couponCode') ? undefined : json['couponCode'],
    };
}

export function CouponCodeRequestToJSON(value?: CouponCodeRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'couponCode': value.couponCode,
    };
}

