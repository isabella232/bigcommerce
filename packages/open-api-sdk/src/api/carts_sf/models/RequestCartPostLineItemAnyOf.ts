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
 * @interface RequestCartPostLineItemAnyOf
 */
export interface RequestCartPostLineItemAnyOf {
    /**
     * ID of the product.
     * @type {number}
     * @memberof RequestCartPostLineItemAnyOf
     */
    productId: number;
    /**
     * Quantity of this item.
     * @type {number}
     * @memberof RequestCartPostLineItemAnyOf
     */
    quantity: number;
}

export function RequestCartPostLineItemAnyOfFromJSON(json: any): RequestCartPostLineItemAnyOf {
    return RequestCartPostLineItemAnyOfFromJSONTyped(json, false);
}

export function RequestCartPostLineItemAnyOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): RequestCartPostLineItemAnyOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'productId': json['productId'],
        'quantity': json['quantity'],
    };
}

export function RequestCartPostLineItemAnyOfToJSON(value?: RequestCartPostLineItemAnyOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'productId': value.productId,
        'quantity': value.quantity,
    };
}

