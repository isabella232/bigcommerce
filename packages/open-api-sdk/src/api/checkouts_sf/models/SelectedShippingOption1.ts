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
 * @interface SelectedShippingOption1
 */
export interface SelectedShippingOption1 {
    /**
     * Read-only
     * @type {string}
     * @memberof SelectedShippingOption1
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof SelectedShippingOption1
     */
    id?: string;
    /**
     * Specified the type of shipping option. Flat rate, UPS, etc.,
     * @type {string}
     * @memberof SelectedShippingOption1
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof SelectedShippingOption1
     */
    imageUrl?: string;
    /**
     * 
     * @type {number}
     * @memberof SelectedShippingOption1
     */
    cost?: number;
    /**
     * An estimate of the arrival time.
     * @type {string}
     * @memberof SelectedShippingOption1
     */
    transitTime?: string;
}

export function SelectedShippingOption1FromJSON(json: any): SelectedShippingOption1 {
    return SelectedShippingOption1FromJSONTyped(json, false);
}

export function SelectedShippingOption1FromJSONTyped(json: any, ignoreDiscriminator: boolean): SelectedShippingOption1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'imageUrl': !exists(json, 'imageUrl') ? undefined : json['imageUrl'],
        'cost': !exists(json, 'cost') ? undefined : json['cost'],
        'transitTime': !exists(json, 'transitTime') ? undefined : json['transitTime'],
    };
}

export function SelectedShippingOption1ToJSON(value?: SelectedShippingOption1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'id': value.id,
        'type': value.type,
        'imageUrl': value.imageUrl,
        'cost': value.cost,
        'transitTime': value.transitTime,
    };
}

