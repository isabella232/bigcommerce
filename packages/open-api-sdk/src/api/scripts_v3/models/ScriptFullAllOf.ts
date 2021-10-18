/* tslint:disable */
/* eslint-disable */
/**
 * Scripts
 * Inject client-side code onto a BigCommere storefront. To learn more about scripts, see [Scripts API](/api-docs/store-management/scripts).   - [OAuth Scopes](#oauth-scopes) - [Authentication](#authentication) - [Available Endpoints](#available-endpoints)  ## OAuth Scopes | UI Name                                      | Permission | Parameter                                     | |----------------------------------------------|------------|-----------------------------------------------| | Checkout Content<sup>1</sup>                             | modify     | `store_content_checkout`                      | | Checkout Content<sup>1</sup>                             | read-only  | `store_content_checkout_read_only`            | | Content                                       | modify     | `store_v2_content`                            | | Content                                       | read-only  | `store_v2_content_read_only`                  |  1. `Checkout Content` scopes are required to create or read scripts on the checkout page.  For more information on OAuth Scopes, see [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Authentication  Requests can be authenticated by sending an`access_token` via `X-Auth-Token` HTTP header:  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Accept: application/json X-Auth-Token: {access_token} ```  |Header|Parameter|Description| |-|-|-| |`X-Auth-Token`|`access_token`|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  For more information on Authenticating BigCommerce APIs, see [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Available Endpoints | Resource / Endpoint                     | Description                                                             | |-----------------------------------------|-------------------------------------------------------------------------| | Scripts                                 | Add client-side code to a store                                         |
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
 * @interface ScriptFullAllOf
 */
export interface ScriptFullAllOf {
    /**
     * The primary identifier.
     * @type {string}
     * @memberof ScriptFullAllOf
     */
    uuid?: string;
    /**
     * The date on which this object was initially created.
     * @type {Date}
     * @memberof ScriptFullAllOf
     */
    dateCreated?: Date;
    /**
     * The date on which this object was last updated.
     * @type {Date}
     * @memberof ScriptFullAllOf
     */
    dateModified?: Date;
}

export function ScriptFullAllOfFromJSON(json: any): ScriptFullAllOf {
    return ScriptFullAllOfFromJSONTyped(json, false);
}

export function ScriptFullAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScriptFullAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'dateCreated': !exists(json, 'date_created') ? undefined : (new Date(json['date_created'])),
        'dateModified': !exists(json, 'date_modified') ? undefined : (new Date(json['date_modified'])),
    };
}

export function ScriptFullAllOfToJSON(value?: ScriptFullAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'date_created': value.dateCreated === undefined ? undefined : (value.dateCreated.toISOString()),
        'date_modified': value.dateModified === undefined ? undefined : (value.dateModified.toISOString()),
    };
}

