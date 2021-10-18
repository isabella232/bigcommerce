/* tslint:disable */
/* eslint-disable */
/**
 * Channels
 * Create and manage sales [channels](https://developer.bigcommerce.com/api-docs/channels/overview), their [sites](https://developer.bigcommerce.com/api-reference/store-management/channels/channel-site), and their [product listings](https://developer.bigcommerce.com/api-reference/store-management/channels/channel-listings).  - [Authentication](#authentication) - [Channels](#channels) - [Channel listings](#channel-listings) - [Channel site](#channel-site) - [Resources](#resources)  ## Authentication  Authenticate requests by including an [OAuth](https://developer.bigcommerce.com/api-docs/getting-started/authentication) `access_token` in the request header.  ```http GET https://api.bigcommerce.com/stores/{{STORE_HASH}}/v3/channels Content-Type: application/json X-Auth-Token: {{ACCESS_TOKEN}} ```  ### [OAuth Scopes](https://developer.bigcommerce.com/api-docs/getting-started/authentication/rest-api-authentication#oauth-scopes)  | UI Name                                      | Permission | Parameter                                     | |----------------------------------------------|------------|-----------------------------------------------| | Channel Listings                             | modify     | `store_channel_listings`                      | | Channel Listings                             | read-only  | `store_channel_listings_read_only`            | | Channel Settings                             | modify     | `store_channel_settings`                      | | Channel Settings                             | read-only  | `store_channel_settings_read_only`            |  ## Channels  A [channel](https://developer.bigcommerce.com/api-reference/cart-checkout/channels-listings-api/channels) is anywhere a merchant sells their products. This encompasses headless storefronts, marketplaces, POS systems, and marketing platforms.  ### Platform  A channel\'s `type` and `platform` combination must be a valid pair as indicated in the table below.  | Platform          | Accepted Type             | |-------------------|---------------------------| | `square`          | `pos`                     | | `stripe`          | `pos`                     | | `vend`            | `pos`                     | | `clover`          | `pos`                     | | `talech`          | `pos`                     | | `facebook`        | `marketplace`,`marketing` | | `instagram`       | `marketplace`,`marketing` | | `amazon`          | `marketplace`             | | `ebay`            | `marketplace`             | | `pinterest`       | `marketplace`             | | `wayfair`         | `marketplace`             | | `overstock`       | `marketplace`             | | `etsy`            | `marketplace`             | | `wish`            | `marketplace`             | | `walmart`         | `marketplace`             | | `gatsby`          | `storefront`              | | `wordpress`       | `storefront`              | | `drupal`          | `storefront`              | | `acquia`          | `storefront`              | | `bloomreach`      | `storefront`              | | `deity`           | `storefront`              | | `next`            | `storefront`              | | `vue`             | `storefront`              | | `google_shopping` | `marketing`               | | `custom`          | `storefront`, `pos`, `marketing`, `marketplace` |  ### Status  Allowed values for a channel\'s `status` vary by channel `type` and `platform`.  |Type|Platform|Allowed Statuses| |--|--|--| |`storefront`|`bigcommerce`|`prelaunch`, `active`, `inactive`, `archived`, `deleted`| |`storefront`|**Is not** `bigcommerce` |`active`, `inactive`, `archived`, `deleted` |`marketing`, `marketplace`, `pos`|N/A|`connected`, `disconnected`, `archived`, `deleted`|  <div class=\"HubBlock--callout\"> <div class=\"CalloutBlock--warning\"> <div class=\"HubBlock-content\">  > ### Note > * A Channel with `deleted` status can be restored within 90 days after deleting by contacting BigCommerce support team. Once the 90 days grace period is over, the Channel `status` will become `terminated`. > * The `terminated` status is read-only. `terminated` channels cannot be restored. > * As of April 2020, `status`  should be used in place of `is_enabled` -- `is_enabled` is deprecated.  </div> </div> </div>  ## Channel listings  [Channel listings](https://developer.bigcommerce.com/api-reference/store-management/channels/channel-listings) allow you to manage catalog differences among different storefronts or marketplaces.  ## Channel site  A [Channel site](https://developer.bigcommerce.com/api-reference/store-management/channels/channel-site) refers to the domain associated with a channel.  ## Resources  * [Sites and Routes API Reference](https://developer.bigcommerce.com/api-reference/cart-checkout/sites-routes-api) * [Building Channels Overview](https://developer.bigcommerce.com/api-docs/channels/overview) * [Building Channel Apps](https://developer.bigcommerce.com/api-docs/channels/building-channel-apps) * [Channels Toolkit Reference](https://developer.bigcommerce.com/api-docs/channels/channels-toolkit-reference)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    CurrencyRequiredWithChannelId,
    CurrencyRequiredWithChannelIdFromJSON,
    CurrencyRequiredWithChannelIdToJSON,
    CurrencyRequiredWithoutChannelId,
    CurrencyRequiredWithoutChannelIdFromJSON,
    CurrencyRequiredWithoutChannelIdToJSON,
    InlineResponse2004,
    InlineResponse2004FromJSON,
    InlineResponse2004ToJSON,
    InlineResponse2005,
    InlineResponse2005FromJSON,
    InlineResponse2005ToJSON,
    InlineResponse2006,
    InlineResponse2006FromJSON,
    InlineResponse2006ToJSON,
} from '../models';

export interface CreateMultipleChannelsCurrencyAssignmentsRequest {
    currencyRequiredWithChannelId: Array<CurrencyRequiredWithChannelId>;
}

export interface CreateSingleChannelCurrencyAssignmentsRequest {
    channelId: number;
    currencyRequiredWithoutChannelId: CurrencyRequiredWithoutChannelId;
}

export interface DeleteSingleChannelCurrencyAssignmentsRequest {
    channelId: number;
}

export interface GetSingleChannelCurrencyAssignmentsRequest {
    channelId: number;
}

export interface UpdateMultipleChannelsCurrencyAssignmentsRequest {
    currencyRequiredWithChannelId: Array<CurrencyRequiredWithChannelId>;
}

export interface UpdateSingleChannelCurrencyAssignmentsRequest {
    channelId: number;
    currencyRequiredWithoutChannelId: CurrencyRequiredWithoutChannelId;
}

/**
 * 
 */
export class ChannelCurrencyAssignmentsApi extends runtime.BaseAPI {

    /**
     * Sets enabled currencies and default currency for multiple channels. Note that currencies must be added first in the Store Setup > Currencies settings from the BigCommerce Control Panel before the currencies can be assigned to a channel.
     * Create Multiple Channels Currency Assignments
     */
    async createMultipleChannelsCurrencyAssignmentsRaw(requestParameters: CreateMultipleChannelsCurrencyAssignmentsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2004>> {
        if (requestParameters.currencyRequiredWithChannelId === null || requestParameters.currencyRequiredWithChannelId === undefined) {
            throw new runtime.RequiredError('currencyRequiredWithChannelId','Required parameter requestParameters.currencyRequiredWithChannelId was null or undefined when calling createMultipleChannelsCurrencyAssignments.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/channels/currency-assignments`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.currencyRequiredWithChannelId.map(CurrencyRequiredWithChannelIdToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2004FromJSON(jsonValue));
    }

    /**
     * Sets enabled currencies and default currency for multiple channels. Note that currencies must be added first in the Store Setup > Currencies settings from the BigCommerce Control Panel before the currencies can be assigned to a channel.
     * Create Multiple Channels Currency Assignments
     */
    async createMultipleChannelsCurrencyAssignments(requestParameters: CreateMultipleChannelsCurrencyAssignmentsRequest, initOverrides?: RequestInit): Promise<InlineResponse2004> {
        const response = await this.createMultipleChannelsCurrencyAssignmentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Sets enabled currencies and default currency for a specific channel. Note that currencies must be added first in the Store Setup > Currencies settings from the BigCommerce Control Panel before the currencies can be assigned to a channel.
     * Create Channel Currency Assignments
     */
    async createSingleChannelCurrencyAssignmentsRaw(requestParameters: CreateSingleChannelCurrencyAssignmentsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2005>> {
        if (requestParameters.channelId === null || requestParameters.channelId === undefined) {
            throw new runtime.RequiredError('channelId','Required parameter requestParameters.channelId was null or undefined when calling createSingleChannelCurrencyAssignments.');
        }

        if (requestParameters.currencyRequiredWithoutChannelId === null || requestParameters.currencyRequiredWithoutChannelId === undefined) {
            throw new runtime.RequiredError('currencyRequiredWithoutChannelId','Required parameter requestParameters.currencyRequiredWithoutChannelId was null or undefined when calling createSingleChannelCurrencyAssignments.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/channels/{channel_id}/currency-assignments`.replace(`{${"channel_id"}}`, encodeURIComponent(String(requestParameters.channelId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CurrencyRequiredWithoutChannelIdToJSON(requestParameters.currencyRequiredWithoutChannelId),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2005FromJSON(jsonValue));
    }

    /**
     * Sets enabled currencies and default currency for a specific channel. Note that currencies must be added first in the Store Setup > Currencies settings from the BigCommerce Control Panel before the currencies can be assigned to a channel.
     * Create Channel Currency Assignments
     */
    async createSingleChannelCurrencyAssignments(requestParameters: CreateSingleChannelCurrencyAssignmentsRequest, initOverrides?: RequestInit): Promise<InlineResponse2005> {
        const response = await this.createSingleChannelCurrencyAssignmentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes currency assignments for a specific channel. Once done, this channel will inherit the store’s currency settings.
     * Delete Channel Currency Assignments
     */
    async deleteSingleChannelCurrencyAssignmentsRaw(requestParameters: DeleteSingleChannelCurrencyAssignmentsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2006>> {
        if (requestParameters.channelId === null || requestParameters.channelId === undefined) {
            throw new runtime.RequiredError('channelId','Required parameter requestParameters.channelId was null or undefined when calling deleteSingleChannelCurrencyAssignments.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/channels/{channel_id}/currency-assignments`.replace(`{${"channel_id"}}`, encodeURIComponent(String(requestParameters.channelId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2006FromJSON(jsonValue));
    }

    /**
     * Deletes currency assignments for a specific channel. Once done, this channel will inherit the store’s currency settings.
     * Delete Channel Currency Assignments
     */
    async deleteSingleChannelCurrencyAssignments(requestParameters: DeleteSingleChannelCurrencyAssignmentsRequest, initOverrides?: RequestInit): Promise<InlineResponse2006> {
        const response = await this.deleteSingleChannelCurrencyAssignmentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of currency assignments for a specific channel.
     * Get Channel Currency Assignments
     */
    async getSingleChannelCurrencyAssignmentsRaw(requestParameters: GetSingleChannelCurrencyAssignmentsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2005>> {
        if (requestParameters.channelId === null || requestParameters.channelId === undefined) {
            throw new runtime.RequiredError('channelId','Required parameter requestParameters.channelId was null or undefined when calling getSingleChannelCurrencyAssignments.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/channels/{channel_id}/currency-assignments`.replace(`{${"channel_id"}}`, encodeURIComponent(String(requestParameters.channelId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2005FromJSON(jsonValue));
    }

    /**
     * Returns a list of currency assignments for a specific channel.
     * Get Channel Currency Assignments
     */
    async getSingleChannelCurrencyAssignments(requestParameters: GetSingleChannelCurrencyAssignmentsRequest, initOverrides?: RequestInit): Promise<InlineResponse2005> {
        const response = await this.getSingleChannelCurrencyAssignmentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of currency assignments for all channels.
     * Get All Channels Currency Assignments
     */
    async listAllCurrencyAssignmentsRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2004>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/channels/currency-assignments`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2004FromJSON(jsonValue));
    }

    /**
     * Returns a list of currency assignments for all channels.
     * Get All Channels Currency Assignments
     */
    async listAllCurrencyAssignments(initOverrides?: RequestInit): Promise<InlineResponse2004> {
        const response = await this.listAllCurrencyAssignmentsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Updates enabled currencies and default currency for multiple channels. Note that currencies must be added first in the Store Setup > Currencies settings from the BigCommerce Control Panel before the currencies can be assigned to a channel.
     * Update Multiple Channels Currency Assignments
     */
    async updateMultipleChannelsCurrencyAssignmentsRaw(requestParameters: UpdateMultipleChannelsCurrencyAssignmentsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2004>> {
        if (requestParameters.currencyRequiredWithChannelId === null || requestParameters.currencyRequiredWithChannelId === undefined) {
            throw new runtime.RequiredError('currencyRequiredWithChannelId','Required parameter requestParameters.currencyRequiredWithChannelId was null or undefined when calling updateMultipleChannelsCurrencyAssignments.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/channels/currency-assignments`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.currencyRequiredWithChannelId.map(CurrencyRequiredWithChannelIdToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2004FromJSON(jsonValue));
    }

    /**
     * Updates enabled currencies and default currency for multiple channels. Note that currencies must be added first in the Store Setup > Currencies settings from the BigCommerce Control Panel before the currencies can be assigned to a channel.
     * Update Multiple Channels Currency Assignments
     */
    async updateMultipleChannelsCurrencyAssignments(requestParameters: UpdateMultipleChannelsCurrencyAssignmentsRequest, initOverrides?: RequestInit): Promise<InlineResponse2004> {
        const response = await this.updateMultipleChannelsCurrencyAssignmentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates enabled currencies and default currency for a specific channel. Note that currencies must be added first in the Store Setup > Currencies settings from the BigCommerce Control Panel before the currencies can be assigned to a channel.
     * Update Channel Currency Assignments
     */
    async updateSingleChannelCurrencyAssignmentsRaw(requestParameters: UpdateSingleChannelCurrencyAssignmentsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2005>> {
        if (requestParameters.channelId === null || requestParameters.channelId === undefined) {
            throw new runtime.RequiredError('channelId','Required parameter requestParameters.channelId was null or undefined when calling updateSingleChannelCurrencyAssignments.');
        }

        if (requestParameters.currencyRequiredWithoutChannelId === null || requestParameters.currencyRequiredWithoutChannelId === undefined) {
            throw new runtime.RequiredError('currencyRequiredWithoutChannelId','Required parameter requestParameters.currencyRequiredWithoutChannelId was null or undefined when calling updateSingleChannelCurrencyAssignments.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/channels/{channel_id}/currency-assignments`.replace(`{${"channel_id"}}`, encodeURIComponent(String(requestParameters.channelId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CurrencyRequiredWithoutChannelIdToJSON(requestParameters.currencyRequiredWithoutChannelId),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2005FromJSON(jsonValue));
    }

    /**
     * Updates enabled currencies and default currency for a specific channel. Note that currencies must be added first in the Store Setup > Currencies settings from the BigCommerce Control Panel before the currencies can be assigned to a channel.
     * Update Channel Currency Assignments
     */
    async updateSingleChannelCurrencyAssignments(requestParameters: UpdateSingleChannelCurrencyAssignmentsRequest, initOverrides?: RequestInit): Promise<InlineResponse2005> {
        const response = await this.updateSingleChannelCurrencyAssignmentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
