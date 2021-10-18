/* tslint:disable */
/* eslint-disable */
/**
 * Orders V2
 * Manage order coupons, messages, products, shipping addresses, statuses, taxes, shipments, and shipping address quotes.  - [Authentication](#authentication) - [Order](#order)  ## Authentication  Authenticate requests by including an [OAuth](https://developer.bigcommerce.com/api-docs/getting-started/authentication) `access_token` request header.  ```http GET https://api.bigcommerce.com/stores/{{STORE_HASH}}/v3/{{ENDPOINT}} Content-Type: application/json X-Auth-Token: {{ACCESS_TOKEN}} ```  ### OAuth Scopes  |  **UI Name** | **Permission** | **Parameter** | | --- | --- | --- | |  Orders | modify | `store_v2_orders` | |  Orders | read-only | `store_v2_orders_read_only` |   ## Order  The Order object contains a record of the purchase agreement between a shopper and a merchant. To learn more about creating orders, see [Orders API Guide](/api-docs/orders/orders-api-overview).  ### Currency Fields  The **default** currency refers to the transactional currency which is the currency the shopper pays in.  The **display** currency refers to the presentational currency used to present prices to the shopper on the storefront.  * `currency_id` - the display currency ID. Depending on the currency selected, the value may be different from the transactional currency. * `currency_code` - the currency code of the display currency used to present prices to the shopper on the storefront. Depending on the currency selected, the value may be different from the transactional currency. * `currency_exchange_rate` - the exchange rate between the store\'s default currency and the display currency. For orders created using the V2 endpoints, this value is always 1 (only in the storefront this value can be different to 1). * `default_currency_id` - the transactional currency ID. * `default_currency_code` - the currency code of the transactional currency the shopper pays in.  The following additional fields are returned on orders when Multi-Currency is enabled on the store:  * `store_default_currency_code` - the currency code of the store\'s default currency. * `store_default_to_transactional_exchange_rate` - the exchange rate between the store\'s default currency and the transactional currency used in the order.  **Example:**  ```json {   ...   \"currency_id\": 4,   \"currency_code\": \"EUR\",   \"currency_exchange_rate\": 1,   \"default_currency_id\": 4,   \"default_currency_code\": \"EUR\",   \"store_default_currency_code\": \"USD\",   \"store_default_to_transactional_exchange_rate\": \"100.0000000000\"   ... } ```
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
 * Shipping Address properties common to all requests and responses.
 * @export
 * @interface ShippingAddressBase
 */
export interface ShippingAddressBase {
    /**
     * 
     * @type {string}
     * @memberof ShippingAddressBase
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof ShippingAddressBase
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof ShippingAddressBase
     */
    company?: string;
    /**
     * Street address (first line).
     * @type {string}
     * @memberof ShippingAddressBase
     */
    street1?: string;
    /**
     * Street address (second line).
     * @type {string}
     * @memberof ShippingAddressBase
     */
    street2?: string;
    /**
     * 
     * @type {string}
     * @memberof ShippingAddressBase
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof ShippingAddressBase
     */
    state?: string;
    /**
     * Zip or postal code, as a string.
     * @type {string}
     * @memberof ShippingAddressBase
     */
    zip?: string;
    /**
     * 
     * @type {string}
     * @memberof ShippingAddressBase
     */
    country?: string;
    /**
     * 2-letter ISO Alpha-2 code for the country.
     * @type {string}
     * @memberof ShippingAddressBase
     */
    countryIso2?: string;
    /**
     * Recipient's telephone number.
     * @type {string}
     * @memberof ShippingAddressBase
     */
    phone?: string;
    /**
     * Recipient's email address. 
     * @type {string}
     * @memberof ShippingAddressBase
     */
    email?: string;
    /**
     * Text code identifying the BigCommerce shipping module selected by the customer.
     * @type {string}
     * @memberof ShippingAddressBase
     */
    shippingMethod?: string;
}

export function ShippingAddressBaseFromJSON(json: any): ShippingAddressBase {
    return ShippingAddressBaseFromJSONTyped(json, false);
}

export function ShippingAddressBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShippingAddressBase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstName': !exists(json, 'first_name') ? undefined : json['first_name'],
        'lastName': !exists(json, 'last_name') ? undefined : json['last_name'],
        'company': !exists(json, 'company') ? undefined : json['company'],
        'street1': !exists(json, 'street_1') ? undefined : json['street_1'],
        'street2': !exists(json, 'street_2') ? undefined : json['street_2'],
        'city': !exists(json, 'city') ? undefined : json['city'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'zip': !exists(json, 'zip') ? undefined : json['zip'],
        'country': !exists(json, 'country') ? undefined : json['country'],
        'countryIso2': !exists(json, 'country_iso2') ? undefined : json['country_iso2'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'shippingMethod': !exists(json, 'shipping_method') ? undefined : json['shipping_method'],
    };
}

export function ShippingAddressBaseToJSON(value?: ShippingAddressBase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'first_name': value.firstName,
        'last_name': value.lastName,
        'company': value.company,
        'street_1': value.street1,
        'street_2': value.street2,
        'city': value.city,
        'state': value.state,
        'zip': value.zip,
        'country': value.country,
        'country_iso2': value.countryIso2,
        'phone': value.phone,
        'email': value.email,
        'shipping_method': value.shippingMethod,
    };
}

