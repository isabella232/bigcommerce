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
/**
 * 
 * @export
 * @interface CurrencyFullAllOf
 */
export interface CurrencyFullAllOf {
    /**
     * Id of the currency. READ-ONLY.
     * @type {number}
     * @memberof CurrencyFullAllOf
     */
    id?: number;
    /**
     * Date the currency was last updated, created or modified.
     * @type {Date}
     * @memberof CurrencyFullAllOf
     */
    lastUpdated?: Date;
}

export function CurrencyFullAllOfFromJSON(json: any): CurrencyFullAllOf {
    return CurrencyFullAllOfFromJSONTyped(json, false);
}

export function CurrencyFullAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): CurrencyFullAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'lastUpdated': !exists(json, 'last_updated') ? undefined : (new Date(json['last_updated'])),
    };
}

export function CurrencyFullAllOfToJSON(value?: CurrencyFullAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'last_updated': value.lastUpdated === undefined ? undefined : (value.lastUpdated.toISOString()),
    };
}


