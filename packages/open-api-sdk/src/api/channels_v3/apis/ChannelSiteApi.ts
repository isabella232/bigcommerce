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
    InlineResponse2009,
    InlineResponse2009FromJSON,
    InlineResponse2009ToJSON,
    SitePost,
    SitePostFromJSON,
    SitePostToJSON,
    SitePut,
    SitePutFromJSON,
    SitePutToJSON,
} from '../models';

export interface ChannelsChannelIdSiteDeleteRequest {
    channelId: string;
}

export interface GetChannelSiteRequest {
    channelId: string;
}

export interface PostChannelSiteRequest {
    channelId: string;
    sitePost?: SitePost;
}

export interface PutChannelSiteRequest {
    channelId: string;
    sitePut?: SitePut;
}

/**
 * 
 */
export class ChannelSiteApi extends runtime.BaseAPI {

    /**
     * Deletes the Channel\'s site.
     * Delete a Channel Site
     */
    async channelsChannelIdSiteDeleteRaw(requestParameters: ChannelsChannelIdSiteDeleteRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.channelId === null || requestParameters.channelId === undefined) {
            throw new runtime.RequiredError('channelId','Required parameter requestParameters.channelId was null or undefined when calling channelsChannelIdSiteDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/channels/{channel_id}/site`.replace(`{${"channel_id"}}`, encodeURIComponent(String(requestParameters.channelId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Deletes the Channel\'s site.
     * Delete a Channel Site
     */
    async channelsChannelIdSiteDelete(requestParameters: ChannelsChannelIdSiteDeleteRequest, initOverrides?: RequestInit): Promise<object> {
        const response = await this.channelsChannelIdSiteDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Alias of GET /sites?channel_id=channel_id  Returns site data for given channel. 
     * Get a Channel Site
     */
    async getChannelSiteRaw(requestParameters: GetChannelSiteRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2009>> {
        if (requestParameters.channelId === null || requestParameters.channelId === undefined) {
            throw new runtime.RequiredError('channelId','Required parameter requestParameters.channelId was null or undefined when calling getChannelSite.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/channels/{channel_id}/site`.replace(`{${"channel_id"}}`, encodeURIComponent(String(requestParameters.channelId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2009FromJSON(jsonValue));
    }

    /**
     * Alias of GET /sites?channel_id=channel_id  Returns site data for given channel. 
     * Get a Channel Site
     */
    async getChannelSite(requestParameters: GetChannelSiteRequest, initOverrides?: RequestInit): Promise<InlineResponse2009> {
        const response = await this.getChannelSiteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Alias of POST `/sites`. Creates a site for provided channel.
     * Create a Channel Site
     */
    async postChannelSiteRaw(requestParameters: PostChannelSiteRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2009>> {
        if (requestParameters.channelId === null || requestParameters.channelId === undefined) {
            throw new runtime.RequiredError('channelId','Required parameter requestParameters.channelId was null or undefined when calling postChannelSite.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/channels/{channel_id}/site`.replace(`{${"channel_id"}}`, encodeURIComponent(String(requestParameters.channelId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SitePostToJSON(requestParameters.sitePost),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2009FromJSON(jsonValue));
    }

    /**
     * Alias of POST `/sites`. Creates a site for provided channel.
     * Create a Channel Site
     */
    async postChannelSite(requestParameters: PostChannelSiteRequest, initOverrides?: RequestInit): Promise<InlineResponse2009> {
        const response = await this.postChannelSiteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a site for provided channel.
     * Update a Channel Site
     */
    async putChannelSiteRaw(requestParameters: PutChannelSiteRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2009>> {
        if (requestParameters.channelId === null || requestParameters.channelId === undefined) {
            throw new runtime.RequiredError('channelId','Required parameter requestParameters.channelId was null or undefined when calling putChannelSite.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/channels/{channel_id}/site`.replace(`{${"channel_id"}}`, encodeURIComponent(String(requestParameters.channelId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: SitePutToJSON(requestParameters.sitePut),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2009FromJSON(jsonValue));
    }

    /**
     * Updates a site for provided channel.
     * Update a Channel Site
     */
    async putChannelSite(requestParameters: PutChannelSiteRequest, initOverrides?: RequestInit): Promise<InlineResponse2009> {
        const response = await this.putChannelSiteRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
