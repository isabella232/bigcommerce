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
    InlineResponse2007,
    InlineResponse2007FromJSON,
    InlineResponse2007ToJSON,
    InlineResponse2008,
    InlineResponse2008FromJSON,
    InlineResponse2008ToJSON,
    UpsertListingWithListingIdReq,
    UpsertListingWithListingIdReqFromJSON,
    UpsertListingWithListingIdReqToJSON,
    UpsertListingWithoutListingIdReq,
    UpsertListingWithoutListingIdReqFromJSON,
    UpsertListingWithoutListingIdReqToJSON,
} from '../models';

export interface CreateChannelListingsRequest {
    channelId: number;
    upsertListingWithoutListingIdReq: Array<UpsertListingWithoutListingIdReq>;
}

export interface GetChannelListingRequest {
    channelId: number;
    listingId: number;
}

export interface ListChannelListingsRequest {
    channelId: number;
    limit?: number;
    after?: number;
    productIdin?: Array<number>;
    dateCreated?: string;
    dateCreatedmin?: string;
    dateCreatedmax?: string;
    dateModified?: string;
    dateModifiedmin?: string;
    dateModifiedmax?: string;
}

export interface UpdateChannelListingsRequest {
    channelId: number;
    upsertListingWithListingIdReq: Array<UpsertListingWithListingIdReq>;
}

/**
 * 
 */
export class ChannelListingsApi extends runtime.BaseAPI {

    /**
     * Creates one or more *Channel Listings* for a specific channel.
     * Create Channel Listings
     */
    async createChannelListingsRaw(requestParameters: CreateChannelListingsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2007>> {
        if (requestParameters.channelId === null || requestParameters.channelId === undefined) {
            throw new runtime.RequiredError('channelId','Required parameter requestParameters.channelId was null or undefined when calling createChannelListings.');
        }

        if (requestParameters.upsertListingWithoutListingIdReq === null || requestParameters.upsertListingWithoutListingIdReq === undefined) {
            throw new runtime.RequiredError('upsertListingWithoutListingIdReq','Required parameter requestParameters.upsertListingWithoutListingIdReq was null or undefined when calling createChannelListings.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/channels/{channel_id}/listings`.replace(`{${"channel_id"}}`, encodeURIComponent(String(requestParameters.channelId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.upsertListingWithoutListingIdReq.map(UpsertListingWithoutListingIdReqToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2007FromJSON(jsonValue));
    }

    /**
     * Creates one or more *Channel Listings* for a specific channel.
     * Create Channel Listings
     */
    async createChannelListings(requestParameters: CreateChannelListingsRequest, initOverrides?: RequestInit): Promise<InlineResponse2007> {
        const response = await this.createChannelListingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a *Channel Listing* for a specific channel.
     * Get a Channel Listing
     */
    async getChannelListingRaw(requestParameters: GetChannelListingRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2008>> {
        if (requestParameters.channelId === null || requestParameters.channelId === undefined) {
            throw new runtime.RequiredError('channelId','Required parameter requestParameters.channelId was null or undefined when calling getChannelListing.');
        }

        if (requestParameters.listingId === null || requestParameters.listingId === undefined) {
            throw new runtime.RequiredError('listingId','Required parameter requestParameters.listingId was null or undefined when calling getChannelListing.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/channels/{channel_id}/listings/{listing_id}`.replace(`{${"channel_id"}}`, encodeURIComponent(String(requestParameters.channelId))).replace(`{${"listing_id"}}`, encodeURIComponent(String(requestParameters.listingId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2008FromJSON(jsonValue));
    }

    /**
     * Returns a *Channel Listing* for a specific channel.
     * Get a Channel Listing
     */
    async getChannelListing(requestParameters: GetChannelListingRequest, initOverrides?: RequestInit): Promise<InlineResponse2008> {
        const response = await this.getChannelListingRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of all *Channel Listings* for a specific channel. Note that if the *Channel* is not found or there is no listing associated to the *Channel*, it will return a 200 response with empty data.
     * Get Channel Listings
     */
    async listChannelListingsRaw(requestParameters: ListChannelListingsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2007>> {
        if (requestParameters.channelId === null || requestParameters.channelId === undefined) {
            throw new runtime.RequiredError('channelId','Required parameter requestParameters.channelId was null or undefined when calling listChannelListings.');
        }

        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.after !== undefined) {
            queryParameters['after'] = requestParameters.after;
        }

        if (requestParameters.productIdin) {
            queryParameters['product_id:in'] = requestParameters.productIdin;
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

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/channels/{channel_id}/listings`.replace(`{${"channel_id"}}`, encodeURIComponent(String(requestParameters.channelId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2007FromJSON(jsonValue));
    }

    /**
     * Returns a list of all *Channel Listings* for a specific channel. Note that if the *Channel* is not found or there is no listing associated to the *Channel*, it will return a 200 response with empty data.
     * Get Channel Listings
     */
    async listChannelListings(requestParameters: ListChannelListingsRequest, initOverrides?: RequestInit): Promise<InlineResponse2007> {
        const response = await this.listChannelListingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates one or more *Channel Listings* for a specific channel.  > ### Note > * Partial updates are supported. In most cases, if a field that *cannot* be updated is passed in, the API **will not** respond with an error. It returns a 200 response with the object, in which you will see the field(s) were not updated. > * If a new variant is provided, the API will append the variant to the list. If a variant already exists, the API will update the existing variant. Other variants that are not provided in the payload remains unchanged. > * If `listing_id` does not exist, the API will return a 200 response with empty data. > * `listing_id` is required and cannot be less than or equal to zero. > * `product_id` cannot be updated after a channel listing is created. > * `product_id` of a variant must match the `product_id` of the channel listing.
     * Update Channel Listings
     */
    async updateChannelListingsRaw(requestParameters: UpdateChannelListingsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2007>> {
        if (requestParameters.channelId === null || requestParameters.channelId === undefined) {
            throw new runtime.RequiredError('channelId','Required parameter requestParameters.channelId was null or undefined when calling updateChannelListings.');
        }

        if (requestParameters.upsertListingWithListingIdReq === null || requestParameters.upsertListingWithListingIdReq === undefined) {
            throw new runtime.RequiredError('upsertListingWithListingIdReq','Required parameter requestParameters.upsertListingWithListingIdReq was null or undefined when calling updateChannelListings.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/channels/{channel_id}/listings`.replace(`{${"channel_id"}}`, encodeURIComponent(String(requestParameters.channelId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.upsertListingWithListingIdReq.map(UpsertListingWithListingIdReqToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2007FromJSON(jsonValue));
    }

    /**
     * Updates one or more *Channel Listings* for a specific channel.  > ### Note > * Partial updates are supported. In most cases, if a field that *cannot* be updated is passed in, the API **will not** respond with an error. It returns a 200 response with the object, in which you will see the field(s) were not updated. > * If a new variant is provided, the API will append the variant to the list. If a variant already exists, the API will update the existing variant. Other variants that are not provided in the payload remains unchanged. > * If `listing_id` does not exist, the API will return a 200 response with empty data. > * `listing_id` is required and cannot be less than or equal to zero. > * `product_id` cannot be updated after a channel listing is created. > * `product_id` of a variant must match the `product_id` of the channel listing.
     * Update Channel Listings
     */
    async updateChannelListings(requestParameters: UpdateChannelListingsRequest, initOverrides?: RequestInit): Promise<InlineResponse2007> {
        const response = await this.updateChannelListingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
