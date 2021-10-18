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
 * @interface ConsignmentShippingOptionBase
 */
export interface ConsignmentShippingOptionBase {
    /**
     * Read-only
     * @type {string}
     * @memberof ConsignmentShippingOptionBase
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof ConsignmentShippingOptionBase
     */
    id?: string;
    /**
     * Specified the type of shipping option. Flat rate, UPS, etc.,
     * @type {string}
     * @memberof ConsignmentShippingOptionBase
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof ConsignmentShippingOptionBase
     */
    imageUrl?: string;
    /**
     * 
     * @type {number}
     * @memberof ConsignmentShippingOptionBase
     */
    cost?: number;
    /**
     * An estimate of the arrival time.
     * @type {string}
     * @memberof ConsignmentShippingOptionBase
     */
    transitTime?: string;
}

export function ConsignmentShippingOptionBaseFromJSON(json: any): ConsignmentShippingOptionBase {
    return ConsignmentShippingOptionBaseFromJSONTyped(json, false);
}

export function ConsignmentShippingOptionBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConsignmentShippingOptionBase {
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

export function ConsignmentShippingOptionBaseToJSON(value?: ConsignmentShippingOptionBase | null): any {
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

