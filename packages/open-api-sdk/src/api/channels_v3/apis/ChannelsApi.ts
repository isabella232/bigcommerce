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
    CreateChannelReq,
    CreateChannelReqFromJSON,
    CreateChannelReqToJSON,
    InlineResponse200,
    InlineResponse200FromJSON,
    InlineResponse200ToJSON,
    InlineResponse2001,
    InlineResponse2001FromJSON,
    InlineResponse2001ToJSON,
    InlineResponse2002,
    InlineResponse2002FromJSON,
    InlineResponse2002ToJSON,
    UpdateChannelReq,
    UpdateChannelReqFromJSON,
    UpdateChannelReqToJSON,
} from '../models';

export interface CreateChannelRequest {
    createChannelReq: CreateChannelReq;
}

export interface GetChannelRequest {
    channelId: number;
    include?: GetChannelIncludeEnum;
}

export interface ListChannelsRequest {
    include?: ListChannelsIncludeEnum;
    available?: boolean;
    statusin?: Array<ListChannelsStatusinEnum>;
    typein?: Array<ListChannelsTypeinEnum>;
    platformin?: Array<string>;
    dateCreated?: string;
    dateCreatedmin?: string;
    dateCreatedmax?: string;
    dateModified?: string;
    dateModifiedmin?: string;
    dateModifiedmax?: string;
    limit?: number;
    page?: number;
}

export interface UpdateChannelRequest {
    channelId: number;
    updateChannelReq: UpdateChannelReq;
}

/**
 * 
 */
export class ChannelsApi extends runtime.BaseAPI {

    /**
     * Creates a *Channel*.
     * Create a Channel
     */
    async createChannelRaw(requestParameters: CreateChannelRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2001>> {
        if (requestParameters.createChannelReq === null || requestParameters.createChannelReq === undefined) {
            throw new runtime.RequiredError('createChannelReq','Required parameter requestParameters.createChannelReq was null or undefined when calling createChannel.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/channels`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateChannelReqToJSON(requestParameters.createChannelReq),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2001FromJSON(jsonValue));
    }

    /**
     * Creates a *Channel*.
     * Create a Channel
     */
    async createChannel(requestParameters: CreateChannelRequest, initOverrides?: RequestInit): Promise<InlineResponse2001> {
        const response = await this.createChannelRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a *Channel*. Channel ID `1` returns the default BigCommerce storefront.
     * Get a Channel
     */
    async getChannelRaw(requestParameters: GetChannelRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2002>> {
        if (requestParameters.channelId === null || requestParameters.channelId === undefined) {
            throw new runtime.RequiredError('channelId','Required parameter requestParameters.channelId was null or undefined when calling getChannel.');
        }

        const queryParameters: any = {};

        if (requestParameters.include !== undefined) {
            queryParameters['include'] = requestParameters.include;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/channels/{channel_id}`.replace(`{${"channel_id"}}`, encodeURIComponent(String(requestParameters.channelId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2002FromJSON(jsonValue));
    }

    /**
     * Returns a *Channel*. Channel ID `1` returns the default BigCommerce storefront.
     * Get a Channel
     */
    async getChannel(requestParameters: GetChannelRequest, initOverrides?: RequestInit): Promise<InlineResponse2002> {
        const response = await this.getChannelRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of *Channels*.  Will always return the default BigCommerce storefront with an ID of `1`. This storefront is created by default when you provision a BigCommerce store.
     * Get All Channels
     */
    async listChannelsRaw(requestParameters: ListChannelsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse200>> {
        const queryParameters: any = {};

        if (requestParameters.include !== undefined) {
            queryParameters['include'] = requestParameters.include;
        }

        if (requestParameters.available !== undefined) {
            queryParameters['available'] = requestParameters.available;
        }

        if (requestParameters.statusin) {
            queryParameters['status:in'] = requestParameters.statusin;
        }

        if (requestParameters.typein) {
            queryParameters['type:in'] = requestParameters.typein;
        }

        if (requestParameters.platformin) {
            queryParameters['platform:in'] = requestParameters.platformin;
        }

        if (requestParameters.dateCreated !== undefined) {
            queryParameters['date_created'] = requestParameters.dateCreated;
        }

        if (requestParameters.dateCreatedmin !== undefined) {
            queryParameters['date_created:min'] = requestParameters.dateCreatedmin;
        }

        if (requestParameters.dateCreatedmax !== undefined) {
            queryParameters['date_created:max'] = requestParameters.dateCreatedmax;
        }

        if (requestParameters.dateModified !== undefined) {
            queryParameters['date_modified'] = requestParameters.dateModified;
        }

        if (requestParameters.dateModifiedmin !== undefined) {
            queryParameters['date_modified:min'] = requestParameters.dateModifiedmin;
        }

        if (requestParameters.dateModifiedmax !== undefined) {
            queryParameters['date_modified:max'] = requestParameters.dateModifiedmax;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/channels`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse200FromJSON(jsonValue));
    }

    /**
     * Returns a list of *Channels*.  Will always return the default BigCommerce storefront with an ID of `1`. This storefront is created by default when you provision a BigCommerce store.
     * Get All Channels
     */
    async listChannels(requestParameters: ListChannelsRequest, initOverrides?: RequestInit): Promise<InlineResponse200> {
        const response = await this.listChannelsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a *Channel*.  ## Updatable Fields  The following fields can be updated. * `name` * `external_id` * `status` * `is_listable_from_ui` * `is_visible` * `is_enabled` * `config_meta`   > ### Note > * Partial updates are supported. In most cases, if a field that *cannot* be updated is passed in, the API **will not** respond with an error. It returns a 200 response with the object, in which you will see the field(s) were not updated. > * `platform` and `type` cannot be updated after a channel is created. > * A channel with status `deleted` or `terminated` cannot be updated.
     * Update a Channel
     */
    async updateChannelRaw(requestParameters: UpdateChannelRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2001>> {
        if (requestParameters.channelId === null || requestParameters.channelId === undefined) {
            throw new runtime.RequiredError('channelId','Required parameter requestParameters.channelId was null or undefined when calling updateChannel.');
        }

        if (requestParameters.updateChannelReq === null || requestParameters.updateChannelReq === undefined) {
            throw new runtime.RequiredError('updateChannelReq','Required parameter requestParameters.updateChannelReq was null or undefined when calling updateChannel.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/channels/{channel_id}`.replace(`{${"channel_id"}}`, encodeURIComponent(String(requestParameters.channelId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateChannelReqToJSON(requestParameters.updateChannelReq),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2001FromJSON(jsonValue));
    }

    /**
     * Updates a *Channel*.  ## Updatable Fields  The following fields can be updated. * `name` * `external_id` * `status` * `is_listable_from_ui` * `is_visible` * `is_enabled` * `config_meta`   > ### Note > * Partial updates are supported. In most cases, if a field that *cannot* be updated is passed in, the API **will not** respond with an error. It returns a 200 response with the object, in which you will see the field(s) were not updated. > * `platform` and `type` cannot be updated after a channel is created. > * A channel with status `deleted` or `terminated` cannot be updated.
     * Update a Channel
     */
    async updateChannel(requestParameters: UpdateChannelRequest, initOverrides?: RequestInit): Promise<InlineResponse2001> {
        const response = await this.updateChannelRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum GetChannelIncludeEnum {
    Currencies = 'currencies'
}
/**
    * @export
    * @enum {string}
    */
export enum ListChannelsIncludeEnum {
    Currencies = 'currencies'
}
/**
    * @export
    * @enum {string}
    */
export enum ListChannelsStatusinEnum {
    Prelaunch = 'prelaunch',
    Active = 'active',
    Inactive = 'inactive',
    Connected = 'connected',
    Disconnected = 'disconnected',
    Archived = 'archived',
    Deleted = 'deleted',
    Terminated = 'terminated'
}
/**
    * @export
    * @enum {string}
    */
export enum ListChannelsTypeinEnum {
    Marketplace = 'marketplace',
    Marketing = 'marketing',
    Pos = 'pos',
    Storefront = 'storefront'
}
