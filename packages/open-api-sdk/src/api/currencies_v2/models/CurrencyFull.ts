/* tslint:disable */
/* eslint-disable */
/**
 * Currencies
 * Manage alternate currency display options on the storefront.  - [OAuth Scopes](#oauth-scopes) - [Authentication](#authentication) - [Available Endpoints](#available-endpoints) - [Definitions](#definitions) - [FAQ](#faq) - [Resources](#resources)  ## OAuth Scopes | UI Name                                      | Permission | Parameter                                     | |----------------------------------------------|------------|-----------------------------------------------| | Information & Settings                       | modify     | `store_v2_information`                        | | Information & Settings                       | read-only  | `store_v2_information_read_only`              |  For more information on OAuth Scopes, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Authentication  Requests can be authenticated by sending an `access_token` via `X-Auth-Token` HTTP header:  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Accept: application/json X-Auth-Token: {access_token} ```  |Header|Parameter|Description| |-|-|-| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Available Endpoints | Resource / Endpoint                     | Description                                                             | |-----------------------------------------|-------------------------------------------------------------------------| | Currencies                              | Create and manage store currencies and their display                    |  ## Definitions  | Name | Description | | -- | -- | | Default Currency | Store\'s default currency is the one from which any auto-conversion of pricing (product, tax, shipping, promotions) will happen.| | Display Currency | Currency that is displayed on the storefront. This might or might not mean that shopper can actually transact in that currency. Display currency is also often called \"presentment currency\" in the payments industry. | | Transactional Currency | Transactional currency is what currency and amount BC passes to the payment provider and the currency/amount that the shopper will be charged to their bank account. If there\'s a discrepancy between the storefront display currency and the transactional currency, a shopper has to pay a conversion fee and the conversion rate that will be used will be outside of BC\'s purview. | | Settlement Currency | This is the currency in which the merchant gets paid out to their bank account. If there\'s a discrepancy between the currency that shopper transacts in and the currency in which merchant settles, merchant has to pay a conversion fee and the conversion rate used will be outside of BC\'s purview. Merchant is able to set their settlement currency through their payment provider. | |BigCommerce Conversion Rate | Any conversion rate set on BigCommerce used to convert product’s default currency pricing into a new non-default currency. Conversion rate could be static or dynamic. | | Static Conversion Rate | One of the two auto-converted pricing options. If a merchant manually enters a static conversion rate, then the conversion rate will remain the same until/unless merchant updates their currency settings to use a different conversion rate. The advantage of using this method is to avoid constantly fluctuating price in non-default currencies. | | Dynamic Conversion Rate | One of the two auto-converted pricing options. If a merchant selects a dynamic conversion rate, they\'ve tied themselves to a currency conversion service, which will update the conversion rate at a certain frequency. This helps shopper-facing pricing remain most aligned to the store\'s default currency and keeps non-default currency conversion rate at market rate. Merchant can either use BigCommerce Currency Service provided in the Currency setup page, or they can use API to automatically update the exchange rate from their trusted source. | | Bank Conversion Rate | Conversion rate used by merchant’s or shopper’s payment or credit card provider when auto-converting from store’s transactional currency. This rate might not align to the BC conversion rate and BC has no visibility into it. | | Multi Currency Pricing | Rather than opting for auto-converting product pricing from default currency using BC conversion rate, merchant has a choice to set price per product per currency. This will be implemented through price lists. |  ## FAQ  **Do Multi-Currency settings work with the Checkout SDK?**   The Checkout SDK works with multi-currency. There is no additional setup needed for the SDK. After setting up currency in the Control Panel the SDK will work as normal.  ## Resources  - [How Currencies Works](https://developer.bigcommerce.com/api-docs/catalog/currencies/how-currencies-work) - [Price List API](https://developer.bigcommerce.com/api-reference/catalog/pricelists-api) - [Using Price Lists](https://support.bigcommerce.com/s/article/Price-Lists) (BigCommerce Knowledge Base) - [Managing Currencies](https://support.bigcommerce.com/s/article/Managing-Currencies-Beta) (BigCommerce Knowledge Base) - [Tax](https://support.bigcommerce.com/s/article/Manual-Tax-Setup#intro1) (BigCommerce Knowledge Base)
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
    CurrencyBase,
    CurrencyBaseFromJSON,
    CurrencyBaseFromJSONTyped,
    CurrencyBaseToJSON,
    CurrencyFullAllOf,
    CurrencyFullAllOfFromJSON,
    CurrencyFullAllOfFromJSONTyped,
    CurrencyFullAllOfToJSON,
} from './';

/**
 * 
 * @export
 * @interface CurrencyFull
 */
export interface CurrencyFull {
    /**
     * Specifies the store’s default currency display format. For write operations, only true value is accepted. When set to true, it cannot be unset, only overridden. 
     * @type {boolean}
     * @memberof CurrencyFull
     */
    isDefault?: boolean;
    /**
     * 2-letter ISO Alpha-2 code for this currency’s country.
     * @type {string}
     * @memberof CurrencyFull
     */
    countryIso2?: string;
    /**
     * 3-letter ISO 4217 code for this currency.
     * @type {string}
     * @memberof CurrencyFull
     */
    currencyCode: string;
    /**
     * Amount of this currency that is equivalent to one U.S. dollar.(Float, Float as String, Integer)
     * @type {string}
     * @memberof CurrencyFull
     */
    currencyExchangeRate: string;
    /**
     * Specifies whether to use the Open Exchange Rates service to update the currency conversion. A value of false specifies a static conversion value. auto_update only applies to non-transactional currencies.
     * @type {boolean}
     * @memberof CurrencyFull
     */
    autoUpdate?: boolean;
    /**
     * Specifies whether this currency’s symbol appears to the “left” or “right” of the numeric amount.
     * @type {string}
     * @memberof CurrencyFull
     */
    tokenLocation: string;
    /**
     * Symbol for this currency.
     * @type {string}
     * @memberof CurrencyFull
     */
    token: string;
    /**
     * Symbol used as the decimal separator in this currency.
     * @type {string}
     * @memberof CurrencyFull
     */
    decimalToken: string;
    /**
     * Symbol used as the thousands separator in this currency.
     * @type {string}
     * @memberof CurrencyFull
     */
    thousandsToken: string;
    /**
     * Number of decimal places to show for this currency.
     * @type {number}
     * @memberof CurrencyFull
     */
    decimalPlaces: number;
    /**
     * Name of the currency.
     * @type {string}
     * @memberof CurrencyFull
     */
    name: string;
    /**
     * If the currency is active on the store.
     * @type {boolean}
     * @memberof CurrencyFull
     */
    enabled?: boolean;
    /**
     * Indicates if the currency is set as transactional or not. False means display only currency
     * @type {boolean}
     * @memberof CurrencyFull
     */
    isTransactional?: boolean;
    /**
     * Id of the currency. READ-ONLY.
     * @type {number}
     * @memberof CurrencyFull
     */
    id?: number;
    /**
     * Date the currency was last updated, created or modified.
     * @type {Date}
     * @memberof CurrencyFull
     */
    lastUpdated?: Date;
}

export function CurrencyFullFromJSON(json: any): CurrencyFull {
    return CurrencyFullFromJSONTyped(json, false);
}

export function CurrencyFullFromJSONTyped(json: any, ignoreDiscriminator: boolean): CurrencyFull {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isDefault': !exists(json, 'is_default') ? undefined : json['is_default'],
        'countryIso2': !exists(json, 'country_iso2') ? undefined : json['country_iso2'],
        'currencyCode': json['currency_code'],
        'currencyExchangeRate': json['currency_exchange_rate'],
        'autoUpdate': !exists(json, 'auto_update') ? undefined : json['auto_update'],
        'tokenLocation': json['token_location'],
        'token': json['token'],
        'decimalToken': json['decimal_token'],
        'thousandsToken': json['thousands_token'],
        'decimalPlaces': json['decimal_places'],
        'name': json['name'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'isTransactional': !exists(json, 'is_transactional') ? undefined : json['is_transactional'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'lastUpdated': !exists(json, 'last_updated') ? undefined : (new Date(json['last_updated'])),
    };
}

export function CurrencyFullToJSON(value?: CurrencyFull | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'is_default': value.isDefault,
        'country_iso2': value.countryIso2,
        'currency_code': value.currencyCode,
        'currency_exchange_rate': value.currencyExchangeRate,
        'auto_update': value.autoUpdate,
        'token_location': value.tokenLocation,
        'token': value.token,
        'decimal_token': value.decimalToken,
        'thousands_token': value.thousandsToken,
        'decimal_places': value.decimalPlaces,
        'name': value.name,
        'enabled': value.enabled,
        'is_transactional': value.isTransactional,
        'id': value.id,
        'last_updated': value.lastUpdated === undefined ? undefined : (value.lastUpdated.toISOString()),
    };
}


