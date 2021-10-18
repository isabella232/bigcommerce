/* tslint:disable */
/* eslint-disable */
/**
 * Subscribers
 * Manage subscribers.  ### OAuth Scopes |  **UI Name** | **Permission** | **Parameter** | | --- | --- | --- | |  Customers | modify | `store_v2_customers` | |  Customers | read-only | `store_v2_customers_read_only` |  ### Headers  |Header|Parameter|Description| |-|-|-| |`X-Auth-Client`|`client_id`|Obtained by creating an API account or installing an app in a BigCommerce control panel.| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  ### Example  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Content-Type: application/json X-Auth-Client: {client_id} X-Auth-Token: {access_token} ```  * For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication). 
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
    DetailedErrors,
    DetailedErrorsFromJSON,
    DetailedErrorsFromJSONTyped,
    DetailedErrorsToJSON,
} from './';

/**
 * 
 * @export
 * @interface ErrorResponse
 */
export interface ErrorResponse {
    /**
     * 
     * @type {DetailedErrors}
     * @memberof ErrorResponse
     */
    errors?: DetailedErrors;
    /**
     * 
     * @type {string}
     * @memberof ErrorResponse
     */
    instance?: string;
    /**
     * The HTTP status code.
     * @type {number}
     * @memberof ErrorResponse
     */
    status?: number;
    /**
     * The error title describing the particular error.
     * @type {string}
     * @memberof ErrorResponse
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof ErrorResponse
     */
    type?: string;
}

export function ErrorResponseFromJSON(json: any): ErrorResponse {
    return ErrorResponseFromJSONTyped(json, false);
}

export function ErrorResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'errors': !exists(json, 'errors') ? undefined : DetailedErrorsFromJSON(json['errors']),
        'instance': !exists(json, 'instance') ? undefined : json['instance'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function ErrorResponseToJSON(value?: ErrorResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'errors': DetailedErrorsToJSON(value.errors),
        'instance': value.instance,
        'status': value.status,
        'title': value.title,
        'type': value.type,
    };
}

