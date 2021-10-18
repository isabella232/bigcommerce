/* tslint:disable */
/* eslint-disable */
/**
 * Pages V3
 * Manage content pages across multiple sites.
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
 * @interface PageFullAllOf
 */
export interface PageFullAllOf {
    /**
     * ID of the page.
     * @type {number}
     * @memberof PageFullAllOf
     */
    id?: number;
}

export function PageFullAllOfFromJSON(json: any): PageFullAllOf {
    return PageFullAllOfFromJSONTyped(json, false);
}

export function PageFullAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageFullAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function PageFullAllOfToJSON(value?: PageFullAllOf | null): any {
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

