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
 * 
 * @export
 * @interface OrderCatalogProductPostProductOptions
 */
export interface OrderCatalogProductPostProductOptions {
    /**
     * 
     * @type {number}
     * @memberof OrderCatalogProductPostProductOptions
     */
    id?: number;
    /**
     * Depending on the option type, value can be one of the following:
     * - The variant option value id or the modifier value id for modifier types with a list of defined values, such as drop down or checkbox modifiers.
     * - The modifier value for modifier types without a list of defined values, such as text field or date field modifiers.
     * 
     * Notes:
     * - The following option types are not currently supported via api:
     *   - File upload
     *   - Pick list
     * - For date modifiers use either the `YYYY-MM-DDThh:mm:ss±hh:mm` or the `YYYY-MM-DD` ISO-8601 formats. The date field modifier values are saved and retuned as timestamps. For values entered using the YYYY-MM-DD format, the store timezone is used when creating the timestamp.
     * - For multi-line text field modifiers, use the `\n` characters for separating the lines.
     * @type {string}
     * @memberof OrderCatalogProductPostProductOptions
     */
    value?: string;
    /**
     * Alias for display_name_customer. The product option name that is shown to customer in storefront. `xxx` and `xxx_customer` always hold the same value, updating either `xxx` or `xxx_customer` will change value for both of those fields.
     * @type {string}
     * @memberof OrderCatalogProductPostProductOptions
     */
    displayName?: string;
    /**
     * The product option name that is shown to customer in storefront. `xxx` and `xxx_customer` always hold the same value, updating either `xxx` or `xxx_customer` will change value for both of those fields.
     * @type {string}
     * @memberof OrderCatalogProductPostProductOptions
     */
    displayNameCustomer?: string;
    /**
     * The product option name that is shown to merchant in Control Panel.
     * @type {string}
     * @memberof OrderCatalogProductPostProductOptions
     */
    displayNameMerchant?: string;
    /**
     * Alias for display_value_customer. The product option value that is shown to customer in storefront. `xxx` and `xxx_customer` always hold the same value, updating either `xxx` or `xxx_customer` will change value for both of those fields.
     * @type {string}
     * @memberof OrderCatalogProductPostProductOptions
     */
    displayValue?: string;
    /**
     * The product option value that is shown to merchant in Control Panel.
     * @type {string}
     * @memberof OrderCatalogProductPostProductOptions
     */
    displayValueMerchant?: string;
    /**
     * The product option value that is shown to customer in storefront.`xxx` and `xxx_customer` always hold the same value, updating either `xxx` or `xxx_customer` will change value for both of those fields.
     * @type {string}
     * @memberof OrderCatalogProductPostProductOptions
     */
    displayValueCustomer?: string;
}

export function OrderCatalogProductPostProductOptionsFromJSON(json: any): OrderCatalogProductPostProductOptions {
    return OrderCatalogProductPostProductOptionsFromJSONTyped(json, false);
}

export function OrderCatalogProductPostProductOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderCatalogProductPostProductOptions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'displayName': !exists(json, 'display_name') ? undefined : json['display_name'],
        'displayNameCustomer': !exists(json, 'display_name_customer') ? undefined : json['display_name_customer'],
        'displayNameMerchant': !exists(json, 'display_name_merchant') ? undefined : json['display_name_merchant'],
        'displayValue': !exists(json, 'display_value') ? undefined : json['display_value'],
        'displayValueMerchant': !exists(json, 'display_value_merchant') ? undefined : json['display_value_merchant'],
        'displayValueCustomer': !exists(json, 'display_value_customer') ? undefined : json['display_value_customer'],
    };
}

export function OrderCatalogProductPostProductOptionsToJSON(value?: OrderCatalogProductPostProductOptions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'value': value.value,
        'display_name': value.displayName,
        'display_name_customer': value.displayNameCustomer,
        'display_name_merchant': value.displayNameMerchant,
        'display_value': value.displayValue,
        'display_value_merchant': value.displayValueMerchant,
        'display_value_customer': value.displayValueCustomer,
    };
}

