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
/**
 * 
 * @export
 * @interface SiteFullRoutes
 */
export interface SiteFullRoutes {
    /**
     * Unique ID for this route. Required when updating an existing route
     * @type {number}
     * @memberof SiteFullRoutes
     */
    id?: number;
    /**
     * What type of resource are we routing to?
     * @type {string}
     * @memberof SiteFullRoutes
     */
    type?: SiteFullRoutesTypeEnum;
    /**
     * (entity_id?) For a given type, which resources should match this route? e.g For a route with the type: "product" and matching: "5" this route would be used for the product with the ID of 5.
     * 
     * Depending on the type of resource, this may be an ID (matching a specific item), or a "*" wildcard matching all items of that type.
     * @type {string}
     * @memberof SiteFullRoutes
     */
    matching?: string;
    /**
     * The route template that will be used to generate the URL for the requested resource.
     * 
     * Supports several tokens:
     * 
     * - {id} The ID of the requested item
     * - {slug} The slug for the requested item (if available). Note: the `slug` value may contain `/` slash
     * - {language} The language string that the client is using
     * @type {string}
     * @memberof SiteFullRoutes
     */
    route?: string;
}

/**
* @export
* @enum {string}
*/
export enum SiteFullRoutesTypeEnum {
    Product = 'product',
    Brand = 'brand',
    Category = 'category',
    Page = 'page',
    Blog = 'blog',
    Home = 'home',
    Cart = 'cart',
    Checkout = 'checkout',
    Search = 'search',
    Account = 'account',
    Login = 'login',
    Returns = 'returns',
    Static = 'static'
}

export function SiteFullRoutesFromJSON(json: any): SiteFullRoutes {
    return SiteFullRoutesFromJSONTyped(json, false);
}

export function SiteFullRoutesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SiteFullRoutes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'matching': !exists(json, 'matching') ? undefined : json['matching'],
        'route': !exists(json, 'route') ? undefined : json['route'],
    };
}

export function SiteFullRoutesToJSON(value?: SiteFullRoutes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'type': value.type,
        'matching': value.matching,
        'route': value.route,
    };
}

