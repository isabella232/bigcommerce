/* tslint:disable */
/* eslint-disable */
/**
 * Shipping V2
 * Manage shipping zones, shipping methods, and shipping carrier connections.  ### Shipping Zones The Shipping Zone object and endpoints manage shipping zones within countries.  ### Shipping Methods The Shipping Methods object and endpoints manage shipping rules within Shipping Zones. These rules determine the shipping rates displayed at checkout, and related parts of the control panel, such as the shipping of manual orders.  ### Shipping Carrier Connections Carrier connections refer to specific settings required to connect to a specific shipping carrier. Each carrier requires your app to supply a unique set of properties/fields to establish a connection with that carrier.
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
    ShippingZoneHandlingFees,
    ShippingZoneHandlingFeesFromJSON,
    ShippingZoneHandlingFeesFromJSONTyped,
    ShippingZoneHandlingFeesToJSON,
    ShippingZoneLocations,
    ShippingZoneLocationsFromJSON,
    ShippingZoneLocationsFromJSONTyped,
    ShippingZoneLocationsToJSON,
    ShippingZonesFreeShipping,
    ShippingZonesFreeShippingFromJSON,
    ShippingZonesFreeShippingFromJSONTyped,
    ShippingZonesFreeShippingToJSON,
} from './';

/**
 * 
 * @export
 * @interface ShippingZone2
 */
export interface ShippingZone2 {
    /**
     * Zone Id. READ-ONLY
     * @type {number}
     * @memberof ShippingZone2
     */
    id?: number;
    /**
     * Zone name. Required for /PUT
     * @type {string}
     * @memberof ShippingZone2
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ShippingZone2
     */
    type?: ShippingZone2TypeEnum;
    /**
     * Array of zone locations.
     * @type {Array<ShippingZoneLocations>}
     * @memberof ShippingZone2
     */
    locations?: Array<ShippingZoneLocations>;
    /**
     * 
     * @type {ShippingZonesFreeShipping}
     * @memberof ShippingZone2
     */
    freeShipping?: ShippingZonesFreeShipping;
    /**
     * 
     * @type {ShippingZoneHandlingFees}
     * @memberof ShippingZone2
     */
    handlingFees?: ShippingZoneHandlingFees;
    /**
     * Whether this shipping zone is enabled.
     * @type {boolean}
     * @memberof ShippingZone2
     */
    enabled?: boolean;
}

/**
* @export
* @enum {string}
*/
export enum ShippingZone2TypeEnum {
    Zip = 'zip',
    Country = 'country',
    State = 'state',
    Global = 'global'
}

export function ShippingZone2FromJSON(json: any): ShippingZone2 {
    return ShippingZone2FromJSONTyped(json, false);
}

export function ShippingZone2FromJSONTyped(json: any, ignoreDiscriminator: boolean): ShippingZone2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': json['name'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'locations': !exists(json, 'locations') ? undefined : ((json['locations'] as Array<any>).map(ShippingZoneLocationsFromJSON)),
        'freeShipping': !exists(json, 'free_shipping') ? undefined : ShippingZonesFreeShippingFromJSON(json['free_shipping']),
        'handlingFees': !exists(json, 'handling_fees') ? undefined : ShippingZoneHandlingFeesFromJSON(json['handling_fees']),
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
    };
}

export function ShippingZone2ToJSON(value?: ShippingZone2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'type': value.type,
        'locations': value.locations === undefined ? undefined : ((value.locations as Array<any>).map(ShippingZoneLocationsToJSON)),
        'free_shipping': ShippingZonesFreeShippingToJSON(value.freeShipping),
        'handling_fees': ShippingZoneHandlingFeesToJSON(value.handlingFees),
        'enabled': value.enabled,
    };
}

