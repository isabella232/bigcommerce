/* tslint:disable */
/* eslint-disable */
/**
 * Customers V3
 * Create and manage customers.  - [Authentication](#authentication) - [Resources](#resources)  ## Authentication  Requests can be authenticated by sending an `access_token` via `X-Auth-Token` HTTP header:  ```http GET /stores/{$$.env.store_hash}/v3/customers host: api.bigcommerce.com Accept: application/json X-Auth-Token: {access_token} ```  |Header|Parameter|Description| |-|-|-| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  ### OAuth Scopes  | UI Name                                      | Permission | Parameter                                     | |----------------------------------------------|------------|-----------------------------------------------| | Customers                                    | modify     | `store_v2_customers`                          | | Customers                                    | read-only  | `store_v2_customers_read_only`                | | Stored Payment Instruments                   | modify     | `store_stored_payment_instruments`            | | Stored Payment Instruments                   | read-only  | `store_stored_payment_instruments_read_only`  |  For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Resources * [Customer and Subscribers Overview](/api-docs/customers/customers-subscribers-overview).
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Links,
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './';

/**
 * Data about the response, including pagination and collection totals.
 * @export
 * @interface Pagination
 */
export interface Pagination {
    /**
     * Total number of items in the result set.
     * @type {number}
     * @memberof Pagination
     */
    total?: number;
    /**
     * Total number of items in the collection response.
     * @type {number}
     * @memberof Pagination
     */
    count?: number;
    /**
     * The amount of items returned in the collection per page, controlled by the limit parameter.
     * @type {number}
     * @memberof Pagination
     */
    perPage?: number;
    /**
     * The page you are currently on within the collection.
     * @type {number}
     * @memberof Pagination
     */
    currentPage?: number;
    /**
     * The total number of pages in the collection.
     * @type {number}
     * @memberof Pagination
     */
    totalPages?: number;
    /**
     * 
     * @type {Links}
     * @memberof Pagination
     */
    links?: Links;
}

export function PaginationFromJSON(json: any): Pagination {
    return PaginationFromJSONTyped(json, false);
}

export function PaginationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Pagination {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'total': !exists(json, 'total') ? undefined : json['total'],
        'count': !exists(json, 'count') ? undefined : json['count'],
        'perPage': !exists(json, 'per_page') ? undefined : json['per_page'],
        'currentPage': !exists(json, 'current_page') ? undefined : json['current_page'],
        'totalPages': !exists(json, 'total_pages') ? undefined : json['total_pages'],
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
    };
}

export function PaginationToJSON(value?: Pagination | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'total': value.total,
        'count': value.count,
        'per_page': value.perPage,
        'current_page': value.currentPage,
        'total_pages': value.totalPages,
        'links': LinksToJSON(value.links),
    };
}

