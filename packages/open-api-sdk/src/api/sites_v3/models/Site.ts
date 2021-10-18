/* tslint:disable */
/* eslint-disable */
/**
 * Sites
 * Create and manage [sites](#sites) and [routes](#routes) for [headless storefront](https://support.bigcommerce.com/s/article/The-Headless-Approach#what-mean) sales [channels](https://developer.bigcommerce.com/api-reference/cart-checkout/channels-listings-api).  - [Authentication](#authentication) - [Sites](#sites) - [Site routes](#site-routes) - [Route types](#route-types) - [Route variables](#route-variables) - [Additional Information](#additional-information)  ## Authentication  Authenticate requests by sending an [OAuth](https://developer.bigcommerce.com/api-docs/getting-started/authentication) `access_token` via `X-Auth-Token` HTTP header.  ```http GET https://api.bigcommerce.com/stores/{{STORE_HASH}}/v3/sites Content-Type: application/json X-Auth-Token: {{ACCESS_TOKEN}} ```  ### [OAuth Scopes](https://developer.bigcommerce.com/api-docs/getting-started/authentication/rest-api-authentication#oauth-scopes)  | UI Name        | Permission | Parameter               | |----------------|------------|-------------------------| | Sites & Routes | modify     | `store_sites`           | | Sites & Routes | read-only  | `store_sites_read_only` |  For more information on authenticating BigCommerce APIs, see [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## [Sites](https://developer.bigcommerce.com/api-reference/cart-checkout/sites-routes-api/sites)  Sites link [headless storefronts](https://developer.bigcommerce.com/api-docs/storefronts/developers-guide-headless) to sales [channels](https://developer.bigcommerce.com/api-reference/cart-checkout/channels-listings-api). To [create a site](https://developer.bigcommerce.com/api-reference/cart-checkout/sites-routes-api/sites/post-site), send a `POST` request to `/stores/{{STORE_HASH}}/v3/sites`.  ```http POST https://api.bigcommerce.com/stores/{{STORE_HASH}}/v3/sites X-Auth-Token: {{ACCESS_TOKEN}} Content-Type: application/json Accept: application/json  {   \"url\": \"http://store.example.com/\",   \"channel_id\": 5 } ```  [![Open in Request Runner](https://storage.googleapis.com/bigcommerce-production-dev-center/images/Open-Request-Runner.svg)](https://developer.bigcommerce.com/api-reference/cart-checkout/sites-routes-api/sites/post-site#requestrunner)  **[Response:](https://developer.bigcommerce.com/api-reference/cart-checkout/sites-routes-api/sites/post-site#responses)**  ```json {   \"id\": 1,   \"url\": \"http://store.example.com/\",   \"channel_id\": 5,   \"created_at\": \"2018-01-04T04:15:50.000Z\",   \"updated_at\": \"2018-01-04T04:15:50.000Z\" } ```  To [get a list of sites](https://developer.bigcommerce.com/api-reference/cart-checkout/sites-routes-api/sites/getsites), send a `GET` request to `/stores/{{STORE_HASH}}/v3/sites`.  ```http GET https://api.bigcommerce.com/stores/{{STORE_HASH}}/v3/sites X-Auth-Token: {{ACCESS_TOKEN}} Accept: application/json ```  [![Open in Request Runner](https://storage.googleapis.com/bigcommerce-production-dev-center/images/Open-Request-Runner.svg)](https://developer.bigcommerce.com/api-reference/cart-checkout/sites-routes-api/sites/getsites#requestrunner)  ## [Site routes](https://developer.bigcommerce.com/api-reference/cart-checkout/sites-routes-api/site-routes)  Site routes tell BigCommerce how to link to pages on a [headless storefront](https://developer.bigcommerce.com/api-docs/storefronts/developers-guide-headless). To [create a route](https://developer.bigcommerce.com/api-reference/cart-checkout/sites-routes-api/site-routes/post-site-route) for a [site](#sites), send a `POST` request to `/stores/{{STORE_HASH}}/v3/sites/{site_id}/routes`.  ```http POST https://api.bigcommerce.com/stores/{{STORE_HASH}}/v3/sites/{site_id}/routes X-Auth-Token: {{ACCESS_TOKEN}} Content-Type: application/json Accept: application/json  {   \"type\": \"product\",   \"matching\": \"12\",   \"route\": \"/en/product?id=12\" } ```  [![Open in Request Runner](https://storage.googleapis.com/bigcommerce-production-dev-center/images/Open-Request-Runner.svg)](https://developer.bigcommerce.com/api-reference/cart-checkout/sites-routes-api/site-routes/post-site-route#requestrunner)  ## Route types  The following route types are supported.  | Type | Description | |-|-| |`product`|Route for product details pages | |`brand`|Route to brand pages | |`category`|Route to category pages |     |`blog`|Route to blog page|     |`home`|Route to storefront homepage| |`cart`|Route to shopper\'s cart| |`checkout`|Route to checkout page| |`search`|Route to store search page| |`account`|Route to account profile page| |`login`|Route to account login page| |`returns`|Route for return policy page| |`static`|Route to a static page|     |`create_account`|Route to create new shopper account page| |`forgot_password`|Route to shopper forgot password page| |`account_order_status`|Route for order status page| |`account_new_return`|Route for product returns page| |`recover_abandoned_cart`|Route for URL in emails for a shopper to recover their abandoned cart|  ## Route variables  The following route variables are supported  |Variable|Description| |-|-|-| |`{id}`|The **ID** of the requested item| |`{slug}`|The **slug** for the requested item (if available). Note: the `slug` value may contain `/` slash| |`{lang}`|The **language** string that the client is using|  **Example:**  ```http POST https://api.bigcommerce.com/stores/{{STORE_HASH}}/v3/sites/{site_id}/routes X-Auth-Token: {{ACCESS_TOKEN}} Content-Type: application/json Accept: application/json  {   \"type\": \"product\",   \"matching\": \"*\",   \"route\": \"/{lang}/{slug}?id={id}\" } ```  ## Additional Information  ### Related resources * [Channels and Listings Reference](https://developer.bigcommerce.com/api-reference/cart-checkout/channels-listings-api) * [Channels Overview](https://developer.bigcommerce.com/api-docs/channels/overview) * [Building Headless Storefronts Guide](https://developer.bigcommerce.com/api-docs/storefronts/developers-guide-headless)
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
    SiteRouteFull,
    SiteRouteFullFromJSON,
    SiteRouteFullFromJSONTyped,
    SiteRouteFullToJSON,
} from './';

/**
 * 
 * @export
 * @interface Site
 */
export interface Site {
    /**
     * 
     * @type {number}
     * @memberof Site
     */
    id?: number;
    /**
     * The Fully Qualified URL (including host and scheme) where this site is hosted. All URLs generated for this site will be appended to this.
     * @type {string}
     * @memberof Site
     */
    url?: string;
    /**
     * The channel this site is attached to. Each site belongs to a single channel, and each channel can have either zero or one sites.
     * @type {number}
     * @memberof Site
     */
    channelId?: number;
    /**
     * When was this site created? RFC 3339
     * @type {string}
     * @memberof Site
     */
    createdAt?: string;
    /**
     * When was this site defintion last updated? RFC 3339
     * @type {string}
     * @memberof Site
     */
    updatedAt?: string;
    /**
     * (optional - if included) collection of routes defined for this site. Limited to 200 routes side loaded (query routes direction via `/routes` for bulk)
     * @type {Array<SiteRouteFull>}
     * @memberof Site
     */
    routes?: Array<SiteRouteFull>;
}

export function SiteFromJSON(json: any): Site {
    return SiteFromJSONTyped(json, false);
}

export function SiteFromJSONTyped(json: any, ignoreDiscriminator: boolean): Site {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'channelId': !exists(json, 'channel_id') ? undefined : json['channel_id'],
        'createdAt': !exists(json, 'created_at') ? undefined : json['created_at'],
        'updatedAt': !exists(json, 'updated_at') ? undefined : json['updated_at'],
        'routes': !exists(json, 'routes') ? undefined : ((json['routes'] as Array<any>).map(SiteRouteFullFromJSON)),
    };
}

export function SiteToJSON(value?: Site | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'url': value.url,
        'channel_id': value.channelId,
        'created_at': value.createdAt,
        'updated_at': value.updatedAt,
        'routes': value.routes === undefined ? undefined : ((value.routes as Array<any>).map(SiteRouteFullToJSON)),
    };
}


