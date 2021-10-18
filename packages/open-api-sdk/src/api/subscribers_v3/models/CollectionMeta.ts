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
    Pagination1,
    Pagination1FromJSON,
    Pagination1FromJSONTyped,
    Pagination1ToJSON,
} from './';

/**
 * Data about the response, including pagination and collection totals.
 * @export
 * @interface CollectionMeta
 */
export interface CollectionMeta {
    /**
     * 
     * @type {Pagination1}
     * @memberof CollectionMeta
     */
    pagination?: Pagination1;
}

export function CollectionMetaFromJSON(json: any): CollectionMeta {
    return CollectionMetaFromJSONTyped(json, false);
}

export function CollectionMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): CollectionMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pagination': !exists(json, 'pagination') ? undefined : Pagination1FromJSON(json['pagination']),
    };
}

export function CollectionMetaToJSON(value?: CollectionMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pagination': Pagination1ToJSON(value.pagination),
    };
}

