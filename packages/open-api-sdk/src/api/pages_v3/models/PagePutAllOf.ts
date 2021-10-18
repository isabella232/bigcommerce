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
 * @interface PagePutAllOf
 */
export interface PagePutAllOf {
    /**
     * The unique numeric ID of the page.
     * @type {number}
     * @memberof PagePutAllOf
     */
    id: number;
}

export function PagePutAllOfFromJSON(json: any): PagePutAllOf {
    return PagePutAllOfFromJSONTyped(json, false);
}

export function PagePutAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagePutAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
    };
}

export function PagePutAllOfToJSON(value?: PagePutAllOf | null): any {
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

