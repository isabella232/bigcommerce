/* tslint:disable */
/* eslint-disable */
/**
 * Webhooks v3
 * Get notified when specific events occur on a BigCommerce store. For more information, see [Webhooks Overview](https://developer.bigcommerce.com/api-docs/store-management/webhooks/overview).
 *
 * The version of the OpenAPI document: 1.0.0
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
 * @interface PaginationLinks
 */
export interface PaginationLinks {
    /**
     * Link to the previous page returned in the response.
     * @type {string}
     * @memberof PaginationLinks
     */
    previous?: string;
    /**
     * Link to the current page returned in the response.
     * @type {string}
     * @memberof PaginationLinks
     */
    current?: string;
    /**
     * Link to the next page returned in the response.
     * @type {string}
     * @memberof PaginationLinks
     */
    next?: string;
}

export function PaginationLinksFromJSON(json: any): PaginationLinks {
    return PaginationLinksFromJSONTyped(json, false);
}

export function PaginationLinksFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginationLinks {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'current': !exists(json, 'current') ? undefined : json['current'],
        'next': !exists(json, 'next') ? undefined : json['next'],
    };
}

export function PaginationLinksToJSON(value?: PaginationLinks | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'previous': value.previous,
        'current': value.current,
        'next': value.next,
    };
}

