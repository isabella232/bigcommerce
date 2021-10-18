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
 * A PayPal account stored instrument
 * @export
 * @interface PayPalAccountInstrument
 */
export interface PayPalAccountInstrument {
    /**
     * Instrument type
     * @type {string}
     * @memberof PayPalAccountInstrument
     */
    type?: PayPalAccountInstrumentTypeEnum;
    /**
     * An identifier representing this stored instrument
     * @type {string}
     * @memberof PayPalAccountInstrument
     */
    token?: string;
    /**
     * Identifies whether this stored instrument is default for the customer
     * @type {boolean}
     * @memberof PayPalAccountInstrument
     */
    isDefault?: boolean;
    /**
     * PayPal email address
     * @type {string}
     * @memberof PayPalAccountInstrument
     */
    email?: string;
}

/**
* @export
* @enum {string}
*/
export enum PayPalAccountInstrumentTypeEnum {
    StoredPaypalAccount = 'stored_paypal_account'
}

export function PayPalAccountInstrumentFromJSON(json: any): PayPalAccountInstrument {
    return PayPalAccountInstrumentFromJSONTyped(json, false);
}

export function PayPalAccountInstrumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayPalAccountInstrument {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : json['type'],
        'token': !exists(json, 'token') ? undefined : json['token'],
        'isDefault': !exists(json, 'is_default') ? undefined : json['is_default'],
        'email': !exists(json, 'email') ? undefined : json['email'],
    };
}

export function PayPalAccountInstrumentToJSON(value?: PayPalAccountInstrument | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'token': value.token,
        'is_default': value.isDefault,
        'email': value.email,
    };
}

