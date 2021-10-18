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
/**
 * 
 * @export
 * @interface ResponseCartLineItemsDigitalItemsAllOf0DiscountsItems
 */
export interface ResponseCartLineItemsDigitalItemsAllOf0DiscountsItems {
    /**
     * The discounted amount applied within a given context.
     * @type {number}
     * @memberof ResponseCartLineItemsDigitalItemsAllOf0DiscountsItems
     */
    discountedAmount?: number;
    /**
     * ID of the applied discount.
     * @type {number}
     * @memberof ResponseCartLineItemsDigitalItemsAllOf0DiscountsItems
     */
    id?: number;
}

export function ResponseCartLineItemsDigitalItemsAllOf0DiscountsItemsFromJSON(json: any): ResponseCartLineItemsDigitalItemsAllOf0DiscountsItems {
    return ResponseCartLineItemsDigitalItemsAllOf0DiscountsItemsFromJSONTyped(json, false);
}

export function ResponseCartLineItemsDigitalItemsAllOf0DiscountsItemsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseCartLineItemsDigitalItemsAllOf0DiscountsItems {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'discountedAmount': !exists(json, 'discountedAmount') ? undefined : json['discountedAmount'],
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function ResponseCartLineItemsDigitalItemsAllOf0DiscountsItemsToJSON(value?: ResponseCartLineItemsDigitalItemsAllOf0DiscountsItems | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'discountedAmount': value.discountedAmount,
        'id': value.id,
    };
}

