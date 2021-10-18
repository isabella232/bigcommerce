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
    AddressProperties,
    AddressPropertiesFromJSON,
    AddressPropertiesFromJSONTyped,
    AddressPropertiesToJSON,
    ConsignmentLineItem,
    ConsignmentLineItemFromJSON,
    ConsignmentLineItemFromJSONTyped,
    ConsignmentLineItemToJSON,
} from './';

/**
 * One or more of these three fields are mandatory. Shipping address and line items can be updated in one request. Shipping option ID has to be updated in a separate request, since changing the address or line items can invalidate the previously available shipping options.
 * @export
 * @interface NewUpdateConsignment
 */
export interface NewUpdateConsignment {
    /**
     * 
     * @type {AddressProperties}
     * @memberof NewUpdateConsignment
     */
    shippingAddress?: AddressProperties;
    /**
     * 
     * @type {Array<ConsignmentLineItem>}
     * @memberof NewUpdateConsignment
     */
    lineItems?: Array<ConsignmentLineItem>;
    /**
     * 
     * @type {string}
     * @memberof NewUpdateConsignment
     */
    shippingOptionId?: string;
}

export function NewUpdateConsignmentFromJSON(json: any): NewUpdateConsignment {
    return NewUpdateConsignmentFromJSONTyped(json, false);
}

export function NewUpdateConsignmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewUpdateConsignment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'shippingAddress': !exists(json, 'shippingAddress') ? undefined : AddressPropertiesFromJSON(json['shippingAddress']),
        'lineItems': !exists(json, 'lineItems') ? undefined : ((json['lineItems'] as Array<any>).map(ConsignmentLineItemFromJSON)),
        'shippingOptionId': !exists(json, 'shippingOptionId') ? undefined : json['shippingOptionId'],
    };
}

export function NewUpdateConsignmentToJSON(value?: NewUpdateConsignment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'shippingAddress': AddressPropertiesToJSON(value.shippingAddress),
        'lineItems': value.lineItems === undefined ? undefined : ((value.lineItems as Array<any>).map(ConsignmentLineItemToJSON)),
        'shippingOptionId': value.shippingOptionId,
    };
}

