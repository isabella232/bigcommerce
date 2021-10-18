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


import * as runtime from '../runtime';
import {
    ErrorFull,
    ErrorFullFromJSON,
    ErrorFullToJSON,
    InlineResponse2001,
    InlineResponse2001FromJSON,
    InlineResponse2001ToJSON,
    InlineResponse2011,
    InlineResponse2011FromJSON,
    InlineResponse2011ToJSON,
    InlineResponse422,
    InlineResponse422FromJSON,
    InlineResponse422ToJSON,
    InlineResponse4221,
    InlineResponse4221FromJSON,
    InlineResponse4221ToJSON,
    SiteRouteBase,
    SiteRouteBaseFromJSON,
    SiteRouteBaseToJSON,
    SiteRouteFull,
    SiteRouteFullFromJSON,
    SiteRouteFullToJSON,
    SiteRoutesRouteBase,
    SiteRoutesRouteBaseFromJSON,
    SiteRoutesRouteBaseToJSON,
} from '../models';

export interface DeleteRouteRequest {
    siteId: number;
    routeId: number;
}

export interface GetSiteRouteRequest {
    siteId: number;
    routeId: number;
}

export interface IndexSiteRoutesRequest {
    siteId: number;
    type?: string;
    page?: number;
    limit?: number;
}

export interface PostSiteRouteRequest {
    siteId: number;
    body: SiteRouteBase;
}

export interface PutSiteRouteRequest {
    siteId: number;
    routeId: number;
    body: SiteRoutesRouteBase;
}

export interface SitesSiteIdRoutesPutRequest {
    siteId: number;
    body?: Array<SiteRouteFull>;
}

/**
 * 
 */
export class SiteRoutesApi extends runtime.BaseAPI {

    /**
     * Delete a site\'s route.  - [Authorization](#authorization) - [Request Parameters](#request-parameters) - [Responses](#responses) - [Send a Test Request](#send-a-test-request)
     * Delete a Site Route
     */
    async deleteRouteRaw(requestParameters: DeleteRouteRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.siteId === null || requestParameters.siteId === undefined) {
            throw new runtime.RequiredError('siteId','Required parameter requestParameters.siteId was null or undefined when calling deleteRoute.');
        }

        if (requestParameters.routeId === null || requestParameters.routeId === undefined) {
            throw new runtime.RequiredError('routeId','Required parameter requestParameters.routeId was null or undefined when calling deleteRoute.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/sites/{site_id}/routes/{route_id}`.replace(`{${"site_id"}}`, encodeURIComponent(String(requestParameters.siteId))).replace(`{${"route_id"}}`, encodeURIComponent(String(requestParameters.routeId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a site\'s route.  - [Authorization](#authorization) - [Request Parameters](#request-parameters) - [Responses](#responses) - [Send a Test Request](#send-a-test-request)
     * Delete a Site Route
     */
    async deleteRoute(requestParameters: DeleteRouteRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteRouteRaw(requestParameters, initOverrides);
    }

    /**
     * Get a site\'s route.  - [Authorization](#authorization) - [Request Parameters](#request-parameters) - [Responses](#responses) - [Send a Test Request](#send-a-test-request)
     * Get a Site Route
     */
    async getSiteRouteRaw(requestParameters: GetSiteRouteRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2011>> {
        if (requestParameters.siteId === null || requestParameters.siteId === undefined) {
            throw new runtime.RequiredError('siteId','Required parameter requestParameters.siteId was null or undefined when calling getSiteRoute.');
        }

        if (requestParameters.routeId === null || requestParameters.routeId === undefined) {
            throw new runtime.RequiredError('routeId','Required parameter requestParameters.routeId was null or undefined when calling getSiteRoute.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/sites/{site_id}/routes/{route_id}`.replace(`{${"site_id"}}`, encodeURIComponent(String(requestParameters.siteId))).replace(`{${"route_id"}}`, encodeURIComponent(String(requestParameters.routeId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2011FromJSON(jsonValue));
    }

    /**
     * Get a site\'s route.  - [Authorization](#authorization) - [Request Parameters](#request-parameters) - [Responses](#responses) - [Send a Test Request](#send-a-test-request)
     * Get a Site Route
     */
    async getSiteRoute(requestParameters: GetSiteRouteRequest, initOverrides?: RequestInit): Promise<InlineResponse2011> {
        const response = await this.getSiteRouteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a site\'s routes.  - [Authorization](#authorization) - [Request Parameters](#request-parameters) - [Request Body](#request-body) - [Responses](#responses) - [Send a Test Request](#send-a-test-request)
     * Get a Site\'s Routes
     */
    async indexSiteRoutesRaw(requestParameters: IndexSiteRoutesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2001>> {
        if (requestParameters.siteId === null || requestParameters.siteId === undefined) {
            throw new runtime.RequiredError('siteId','Required parameter requestParameters.siteId was null or undefined when calling indexSiteRoutes.');
        }

        const queryParameters: any = {};

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/sites/{site_id}/routes`.replace(`{${"site_id"}}`, encodeURIComponent(String(requestParameters.siteId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2001FromJSON(jsonValue));
    }

    /**
     * Get a site\'s routes.  - [Authorization](#authorization) - [Request Parameters](#request-parameters) - [Request Body](#request-body) - [Responses](#responses) - [Send a Test Request](#send-a-test-request)
     * Get a Site\'s Routes
     */
    async indexSiteRoutes(requestParameters: IndexSiteRoutesRequest, initOverrides?: RequestInit): Promise<InlineResponse2001> {
        const response = await this.indexSiteRoutesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create routes that tell BigCommerce how to link to pages on a [headless storefront](https://developer.bigcommerce.com/api-docs/storefronts/developers-guide-headless).  - [Usage notes](#usage-notes) - [Authorization](#authorization) - [Request Parameters](#request-parameters) - [Request Body](#request-body) - [Responses](#responses) - [Send a Test Request](#send-a-test-request)  ## Usage Notes * For a list of supported route types, see [Route types](https://developer.bigcommerce.com/api-reference/store-management/sites#route-types).
     * Create a Site Route
     */
    async postSiteRouteRaw(requestParameters: PostSiteRouteRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2011>> {
        if (requestParameters.siteId === null || requestParameters.siteId === undefined) {
            throw new runtime.RequiredError('siteId','Required parameter requestParameters.siteId was null or undefined when calling postSiteRoute.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling postSiteRoute.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/sites/{site_id}/routes`.replace(`{${"site_id"}}`, encodeURIComponent(String(requestParameters.siteId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SiteRouteBaseToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2011FromJSON(jsonValue));
    }

    /**
     * Create routes that tell BigCommerce how to link to pages on a [headless storefront](https://developer.bigcommerce.com/api-docs/storefronts/developers-guide-headless).  - [Usage notes](#usage-notes) - [Authorization](#authorization) - [Request Parameters](#request-parameters) - [Request Body](#request-body) - [Responses](#responses) - [Send a Test Request](#send-a-test-request)  ## Usage Notes * For a list of supported route types, see [Route types](https://developer.bigcommerce.com/api-reference/store-management/sites#route-types).
     * Create a Site Route
     */
    async postSiteRoute(requestParameters: PostSiteRouteRequest, initOverrides?: RequestInit): Promise<InlineResponse2011> {
        const response = await this.postSiteRouteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a site\'s route.  - [Authorization](#authorization) - [Request Parameters](#request-parameters) - [Request Body](#request-body) - [Responses](#responses) - [Send a Test Request](#send-a-test-request) 
     * Update a Site Route
     */
    async putSiteRouteRaw(requestParameters: PutSiteRouteRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2011>> {
        if (requestParameters.siteId === null || requestParameters.siteId === undefined) {
            throw new runtime.RequiredError('siteId','Required parameter requestParameters.siteId was null or undefined when calling putSiteRoute.');
        }

        if (requestParameters.routeId === null || requestParameters.routeId === undefined) {
            throw new runtime.RequiredError('routeId','Required parameter requestParameters.routeId was null or undefined when calling putSiteRoute.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling putSiteRoute.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/sites/{site_id}/routes/{route_id}`.replace(`{${"site_id"}}`, encodeURIComponent(String(requestParameters.siteId))).replace(`{${"route_id"}}`, encodeURIComponent(String(requestParameters.routeId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: SiteRoutesRouteBaseToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2011FromJSON(jsonValue));
    }

    /**
     * Update a site\'s route.  - [Authorization](#authorization) - [Request Parameters](#request-parameters) - [Request Body](#request-body) - [Responses](#responses) - [Send a Test Request](#send-a-test-request) 
     * Update a Site Route
     */
    async putSiteRoute(requestParameters: PutSiteRouteRequest, initOverrides?: RequestInit): Promise<InlineResponse2011> {
        const response = await this.putSiteRouteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Upsert routes for site with ID `{site_id}`.  - [Usage notes](#usage-notes) - [Authorization](#authorization) - [Request Parameters](#request-parameters) - [Request Body](#request-body) - [Responses](#responses) - [Send a Test Request](#send-a-test-request)  ## Usage Notes * `id` is required when updating an existing route.
     * Update Site\'s Routes
     */
    async sitesSiteIdRoutesPutRaw(requestParameters: SitesSiteIdRoutesPutRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2001>> {
        if (requestParameters.siteId === null || requestParameters.siteId === undefined) {
            throw new runtime.RequiredError('siteId','Required parameter requestParameters.siteId was null or undefined when calling sitesSiteIdRoutesPut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/sites/{site_id}/routes`.replace(`{${"site_id"}}`, encodeURIComponent(String(requestParameters.siteId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body.map(SiteRouteFullToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2001FromJSON(jsonValue));
    }

    /**
     * Upsert routes for site with ID `{site_id}`.  - [Usage notes](#usage-notes) - [Authorization](#authorization) - [Request Parameters](#request-parameters) - [Request Body](#request-body) - [Responses](#responses) - [Send a Test Request](#send-a-test-request)  ## Usage Notes * `id` is required when updating an existing route.
     * Update Site\'s Routes
     */
    async sitesSiteIdRoutesPut(requestParameters: SitesSiteIdRoutesPutRequest, initOverrides?: RequestInit): Promise<InlineResponse2001> {
        const response = await this.sitesSiteIdRoutesPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
