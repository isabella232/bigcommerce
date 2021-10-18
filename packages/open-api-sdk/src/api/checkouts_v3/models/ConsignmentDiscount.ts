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
/**
 * 
 * @export
 * @interface ConsignmentDiscount
 */
export interface ConsignmentDiscount {
    /**
     * Discount rule ID that applied this discount
     * @type {number}
     * @memberof ConsignmentDiscount
     */
    id?: number;
}

export function ConsignmentDiscountFromJSON(json: any): ConsignmentDiscount {
    return ConsignmentDiscountFromJSONTyped(json, false);
}

export function ConsignmentDiscountFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConsignmentDiscount {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function ConsignmentDiscountToJSON(value?: ConsignmentDiscount | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
    };
}

