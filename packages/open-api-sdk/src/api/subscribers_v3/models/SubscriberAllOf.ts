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
/**
 * 
 * @export
 * @interface SubscriberAllOf
 */
export interface SubscriberAllOf {
    /**
     * The date on which the subscriber was modified.
     * @type {Date}
     * @memberof SubscriberAllOf
     */
    dateModified?: Date;
    /**
     * The date of which the subscriber was created.
     * @type {Date}
     * @memberof SubscriberAllOf
     */
    dateCreated?: Date;
}

export function SubscriberAllOfFromJSON(json: any): SubscriberAllOf {
    return SubscriberAllOfFromJSONTyped(json, false);
}

export function SubscriberAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriberAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dateModified': !exists(json, 'date_modified') ? undefined : (new Date(json['date_modified'])),
        'dateCreated': !exists(json, 'date_created') ? undefined : (new Date(json['date_created'])),
    };
}

export function SubscriberAllOfToJSON(value?: SubscriberAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'date_modified': value.dateModified === undefined ? undefined : (value.dateModified.toISOString()),
        'date_created': value.dateCreated === undefined ? undefined : (value.dateCreated.toISOString()),
    };
}

