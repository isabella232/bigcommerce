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
/**
 * 
 * @export
 * @interface CustomerAuthenticationPostPutAllOf
 */
export interface CustomerAuthenticationPostPutAllOf {
    /**
     * If `true`, this customer will be forced to change password on next login.
     * @type {boolean}
     * @memberof CustomerAuthenticationPostPutAllOf
     */
    forcePasswordReset?: boolean;
}

export function CustomerAuthenticationPostPutAllOfFromJSON(json: any): CustomerAuthenticationPostPutAllOf {
    return CustomerAuthenticationPostPutAllOfFromJSONTyped(json, false);
}

export function CustomerAuthenticationPostPutAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerAuthenticationPostPutAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'forcePasswordReset': !exists(json, 'force_password_reset') ? undefined : json['force_password_reset'],
    };
}

export function CustomerAuthenticationPostPutAllOfToJSON(value?: CustomerAuthenticationPostPutAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'force_password_reset': value.forcePasswordReset,
    };
}

