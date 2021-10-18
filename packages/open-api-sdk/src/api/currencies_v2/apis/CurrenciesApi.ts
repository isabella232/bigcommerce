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


import * as runtime from '../runtime';
import {
    CurrencyBase,
    CurrencyBaseFromJSON,
    CurrencyBaseToJSON,
    CurrencyFull,
    CurrencyFullFromJSON,
    CurrencyFullToJSON,
} from '../models';

export interface CurrenciesDeleteRequest {
    contentType: string;
    accepts: string;
}

export interface CurrenciesGetRequest {
    accept: string;
    contentType: string;
}

export interface CurrenciesPostRequest {
    accept: string;
    contentType: string;
    body?: CurrencyBase;
}

export interface DeleteACurrencyRequest {
    id: string;
    accept: string;
    contentType: string;
}

export interface GetACurrencyRequest {
    id: string;
    contentType: string;
    accept: string;
}

export interface UpdateACurrencyRequest {
    id: string;
    accept: string;
    contentType: string;
    body?: CurrencyBase;
}

/**
 * 
 */
export class CurrenciesApi extends runtime.BaseAPI {

    /**
     * Deletes all non-default store currencies.
     * Delete All Currencies
     */
    async currenciesDeleteRaw(requestParameters: CurrenciesDeleteRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling currenciesDelete.');
        }

        if (requestParameters.accepts === null || requestParameters.accepts === undefined) {
            throw new runtime.RequiredError('accepts','Required parameter requestParameters.accepts was null or undefined when calling currenciesDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.contentType !== undefined && requestParameters.contentType !== null) {
            headerParameters['Content-Type'] = String(requestParameters.contentType);
        }

        if (requestParameters.accepts !== undefined && requestParameters.accepts !== null) {
            headerParameters['Accepts'] = String(requestParameters.accepts);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/currencies`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Deletes all non-default store currencies.
     * Delete All Currencies
     */
    async currenciesDelete(requestParameters: CurrenciesDeleteRequest, initOverrides?: RequestInit): Promise<object> {
        const response = await this.currenciesDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of all store *Currency*.
     * Get All Currencies
     */
    async currenciesGetRaw(requestParameters: CurrenciesGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<CurrencyFull>>> {
        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling currenciesGet.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling currenciesGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.accept !== undefined && requestParameters.accept !== null) {
            headerParameters['Accept'] = String(requestParameters.accept);
        }

        if (requestParameters.contentType !== undefined && requestParameters.contentType !== null) {
            headerParameters['Content-Type'] = String(requestParameters.contentType);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/currencies`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CurrencyFullFromJSON));
    }

    /**
     * Returns a list of all store *Currency*.
     * Get All Currencies
     */
    async currenciesGet(requestParameters: CurrenciesGetRequest, initOverrides?: RequestInit): Promise<Array<CurrencyFull>> {
        const response = await this.currenciesGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates *Currency*.  **Required Fields**   * name * currency_code * currency_exchange_rate * token_location * token * decimal_token * thousands_token * decimal_places  **Read-Only Fields**  * id * date_created * date_modified   The `is_default` property can only be set to true. The value of `is_default` cannot be unset, only overridden. To change the store\'s default currency via the BigCommerce control panel, please see [Managing Currencies](https://support.bigcommerce.com/articles/Public/Managing-Currencies/?q=currency&l=en_US&fs=Search&pn=1#default).
     * Create a Currency
     */
    async currenciesPostRaw(requestParameters: CurrenciesPostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CurrencyFull>> {
        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling currenciesPost.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling currenciesPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.accept !== undefined && requestParameters.accept !== null) {
            headerParameters['Accept'] = String(requestParameters.accept);
        }

        if (requestParameters.contentType !== undefined && requestParameters.contentType !== null) {
            headerParameters['Content-Type'] = String(requestParameters.contentType);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/currencies`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CurrencyFullFromJSON(jsonValue));
    }

    /**
     * Creates *Currency*.  **Required Fields**   * name * currency_code * currency_exchange_rate * token_location * token * decimal_token * thousands_token * decimal_places  **Read-Only Fields**  * id * date_created * date_modified   The `is_default` property can only be set to true. The value of `is_default` cannot be unset, only overridden. To change the store\'s default currency via the BigCommerce control panel, please see [Managing Currencies](https://support.bigcommerce.com/articles/Public/Managing-Currencies/?q=currency&l=en_US&fs=Search&pn=1#default).
     * Create a Currency
     */
    async currenciesPost(requestParameters: CurrenciesPostRequest, initOverrides?: RequestInit): Promise<CurrencyFull> {
        const response = await this.currenciesPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a *Currency*.  If a currency\'s `is_default` property is set to true, this currency cannot be deleted. 
     * Delete a Currency
     */
    async deleteACurrencyRaw(requestParameters: DeleteACurrencyRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteACurrency.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling deleteACurrency.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling deleteACurrency.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.accept !== undefined && requestParameters.accept !== null) {
            headerParameters['Accept'] = String(requestParameters.accept);
        }

        if (requestParameters.contentType !== undefined && requestParameters.contentType !== null) {
            headerParameters['Content-Type'] = String(requestParameters.contentType);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/currencies/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Deletes a *Currency*.  If a currency\'s `is_default` property is set to true, this currency cannot be deleted. 
     * Delete a Currency
     */
    async deleteACurrency(requestParameters: DeleteACurrencyRequest, initOverrides?: RequestInit): Promise<object> {
        const response = await this.deleteACurrencyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a single *Currency*.
     * Get a Currency
     */
    async getACurrencyRaw(requestParameters: GetACurrencyRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CurrencyFull>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getACurrency.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling getACurrency.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling getACurrency.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.contentType !== undefined && requestParameters.contentType !== null) {
            headerParameters['Content-Type'] = String(requestParameters.contentType);
        }

        if (requestParameters.accept !== undefined && requestParameters.accept !== null) {
            headerParameters['Accept'] = String(requestParameters.accept);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/currencies/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CurrencyFullFromJSON(jsonValue));
    }

    /**
     * Returns a single *Currency*.
     * Get a Currency
     */
    async getACurrency(requestParameters: GetACurrencyRequest, initOverrides?: RequestInit): Promise<CurrencyFull> {
        const response = await this.getACurrencyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a *Currency*.  **Read-Only Fields**  * id * date_created * date_modified * currency_code   The `is_default` property can only be set to true. The value of `is_default` cannot be unset, only overridden. 
     * Update a Currency
     */
    async updateACurrencyRaw(requestParameters: UpdateACurrencyRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CurrencyFull>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateACurrency.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling updateACurrency.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling updateACurrency.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.accept !== undefined && requestParameters.accept !== null) {
            headerParameters['Accept'] = String(requestParameters.accept);
        }

        if (requestParameters.contentType !== undefined && requestParameters.contentType !== null) {
            headerParameters['Content-Type'] = String(requestParameters.contentType);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/currencies/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CurrencyFullFromJSON(jsonValue));
    }

    /**
     * Updates a *Currency*.  **Read-Only Fields**  * id * date_created * date_modified * currency_code   The `is_default` property can only be set to true. The value of `is_default` cannot be unset, only overridden. 
     * Update a Currency
     */
    async updateACurrency(requestParameters: UpdateACurrencyRequest, initOverrides?: RequestInit): Promise<CurrencyFull> {
        const response = await this.updateACurrencyRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
