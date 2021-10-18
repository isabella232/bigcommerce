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
/**
 * 
 * @export
 * @interface ProductOptionSelection
 */
export interface ProductOptionSelection {
    /**
     * 
     * @type {number}
     * @memberof ProductOptionSelection
     */
    optionId?: number;
    /**
     * 
     * @type {string}
     * @memberof ProductOptionSelection
     */
    optionValue?: string;
}

export function ProductOptionSelectionFromJSON(json: any): ProductOptionSelection {
    return ProductOptionSelectionFromJSONTyped(json, false);
}

export function ProductOptionSelectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductOptionSelection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'optionId': !exists(json, 'option_id') ? undefined : json['option_id'],
        'optionValue': !exists(json, 'option_value') ? undefined : json['option_value'],
    };
}

export function ProductOptionSelectionToJSON(value?: ProductOptionSelection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'option_id': value.optionId,
        'option_value': value.optionValue,
    };
}

