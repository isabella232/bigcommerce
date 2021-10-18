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

import { exists, mapValues } from '../runtime';
import {
    ChannelProductVariantPartial,
    ChannelProductVariantPartialFromJSON,
    ChannelProductVariantPartialFromJSONTyped,
    ChannelProductVariantPartialToJSON,
    ListingState,
    ListingStateFromJSON,
    ListingStateFromJSONTyped,
    ListingStateToJSON,
} from './';

/**
 * Details about assigning a product to a specific channel.
 * @export
 * @interface UpsertListingWithListingIdReq
 */
export interface UpsertListingWithListingIdReq {
    /**
     * The ID of the channel listing that has been created, returned, or updated.
     * @type {number}
     * @memberof UpsertListingWithListingIdReq
     */
    listingId: number;
    /**
     * The ID of the product associated with this channel listing.
     * @type {number}
     * @memberof UpsertListingWithListingIdReq
     */
    productId: number;
    /**
     * Associated ID within a system / platform outside of BC.
     * @type {string}
     * @memberof UpsertListingWithListingIdReq
     */
    externalId?: string;
    /**
     * 
     * @type {ListingState}
     * @memberof UpsertListingWithListingIdReq
     */
    state: ListingState;
    /**
     * Name of the product for this channel listing specifically. This is an optional field that can be used to override the product name in the catalog.
     * @type {string}
     * @memberof UpsertListingWithListingIdReq
     */
    name?: string;
    /**
     * Description of the product for this channel listing specifically. This is an optional field that can be used to override the product description in the catalog.
     * @type {string}
     * @memberof UpsertListingWithListingIdReq
     */
    description?: string;
    /**
     * 
     * @type {Array<ChannelProductVariantPartial>}
     * @memberof UpsertListingWithListingIdReq
     */
    variants: Array<ChannelProductVariantPartial>;
}

export function UpsertListingWithListingIdReqFromJSON(json: any): UpsertListingWithListingIdReq {
    return UpsertListingWithListingIdReqFromJSONTyped(json, false);
}

export function UpsertListingWithListingIdReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpsertListingWithListingIdReq {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'listingId': json['listing_id'],
        'productId': json['product_id'],
        'externalId': !exists(json, 'external_id') ? undefined : json['external_id'],
        'state': ListingStateFromJSON(json['state']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'variants': ((json['variants'] as Array<any>).map(ChannelProductVariantPartialFromJSON)),
    };
}

export function UpsertListingWithListingIdReqToJSON(value?: UpsertListingWithListingIdReq | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'listing_id': value.listingId,
        'product_id': value.productId,
        'external_id': value.externalId,
        'state': ListingStateToJSON(value.state),
        'name': value.name,
        'description': value.description,
        'variants': ((value.variants as Array<any>).map(ChannelProductVariantPartialToJSON)),
    };
}


