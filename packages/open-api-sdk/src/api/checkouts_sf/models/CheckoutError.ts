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
import {
    ErrorInner,
    ErrorInnerFromJSON,
    ErrorInnerFromJSONTyped,
    ErrorInnerToJSON,
} from './';

/**
 * 
 * @export
 * @interface CheckoutError
 */
export interface CheckoutError {
    /**
     * 
     * @type {Array<ErrorInner>}
     * @memberof CheckoutError
     */
    errors?: Array<ErrorInner>;
}

export function CheckoutErrorFromJSON(json: any): CheckoutError {
    return CheckoutErrorFromJSONTyped(json, false);
}

export function CheckoutErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckoutError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'errors': !exists(json, 'errors') ? undefined : ((json['errors'] as Array<any>).map(ErrorInnerFromJSON)),
    };
}

export function CheckoutErrorToJSON(value?: CheckoutError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'errors': value.errors === undefined ? undefined : ((value.errors as Array<any>).map(ErrorInnerToJSON)),
    };
}

