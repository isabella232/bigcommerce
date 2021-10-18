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
    ChannelProductVariantFull,
    ChannelProductVariantFullFromJSON,
    ChannelProductVariantFullFromJSONTyped,
    ChannelProductVariantFullToJSON,
    ListingState,
    ListingStateFromJSON,
    ListingStateFromJSONTyped,
    ListingStateToJSON,
} from './';

/**
 * 
 * @export
 * @interface Listing
 */
export interface Listing {
    /**
     * The ID of the channel associated with this channel listing.
     * @type {number}
     * @memberof Listing
     */
    channelId?: number;
    /**
     * The ID of the channel listing that has been created, returned, or updated.
     * @type {number}
     * @memberof Listing
     */
    listingId?: number;
    /**
     * Associated ID within a system / platform outside of BC.
     * @type {string}
     * @memberof Listing
     */
    externalId?: string;
    /**
     * The ID of the product associated with this channel listing.
     * @type {number}
     * @memberof Listing
     */
    productId?: number;
    /**
     * 
     * @type {ListingState}
     * @memberof Listing
     */
    state?: ListingState;
    /**
     * Name of the product for this channel listing specifically. This is an optional field that can be used to override the product name in the catalog.
     * @type {string}
     * @memberof Listing
     */
    name?: string;
    /**
     * Description of the product for this channel listing specifically. This is an optional field that can be used to override the product description in the catalog.
     * @type {string}
     * @memberof Listing
     */
    description?: string;
    /**
     * Date on which the channel listing was first created.
     * @type {Date}
     * @memberof Listing
     */
    dateCreated?: Date;
    /**
     * Date on which the channel listing was most recently changed.
     * @type {Date}
     * @memberof Listing
     */
    dateModified?: Date;
    /**
     * 
     * @type {Array<ChannelProductVariantFull>}
     * @memberof Listing
     */
    variants?: Array<ChannelProductVariantFull>;
}

export function ListingFromJSON(json: any): Listing {
    return ListingFromJSONTyped(json, false);
}

export function ListingFromJSONTyped(json: any, ignoreDiscriminator: boolean): Listing {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'channelId': !exists(json, 'channel_id') ? undefined : json['channel_id'],
        'listingId': !exists(json, 'listing_id') ? undefined : json['listing_id'],
        'externalId': !exists(json, 'external_id') ? undefined : json['external_id'],
        'productId': !exists(json, 'product_id') ? undefined : json['product_id'],
        'state': !exists(json, 'state') ? undefined : ListingStateFromJSON(json['state']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'dateCreated': !exists(json, 'date_created') ? undefined : (new Date(json['date_created'])),
        'dateModified': !exists(json, 'date_modified') ? undefined : (new Date(json['date_modified'])),
        'variants': !exists(json, 'variants') ? undefined : ((json['variants'] as Array<any>).map(ChannelProductVariantFullFromJSON)),
    };
}

export function ListingToJSON(value?: Listing | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'channel_id': value.channelId,
        'listing_id': value.listingId,
        'external_id': value.externalId,
        'product_id': value.productId,
        'state': ListingStateToJSON(value.state),
        'name': value.name,
        'description': value.description,
        'date_created': value.dateCreated === undefined ? undefined : (value.dateCreated.toISOString()),
        'date_modified': value.dateModified === undefined ? undefined : (value.dateModified.toISOString()),
        'variants': value.variants === undefined ? undefined : ((value.variants as Array<any>).map(ChannelProductVariantFullToJSON)),
    };
}


