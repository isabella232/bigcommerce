/* tslint:disable */
/* eslint-disable */
/**
 * Storefront Orders
 * Get order data immediately after an order is placed on the storefront.
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
    Order,
    OrderFromJSON,
    OrderFromJSONTyped,
    OrderToJSON,
} from './';

/**
 * Response data container for Order endpoints (`POST /order` and `POST /order/{orderId}`).
 * @export
 * @interface Data
 */
export interface Data {
    /**
     * 
     * @type {Order}
     * @memberof Data
     */
    order?: Order;
}

export function DataFromJSON(json: any): Data {
    return DataFromJSONTyped(json, false);
}

export function DataFromJSONTyped(json: any, ignoreDiscriminator: boolean): Data {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'order': !exists(json, 'order') ? undefined : OrderFromJSON(json['order']),
    };
}

export function DataToJSON(value?: Data | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'order': OrderToJSON(value.order),
    };
}

