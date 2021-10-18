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
    InlineResponse200,
    InlineResponse200FromJSON,
    InlineResponse200ToJSON,
    InlineResponse201,
    InlineResponse201FromJSON,
    InlineResponse201ToJSON,
    PostSite,
    PostSiteFromJSON,
    PostSiteToJSON,
    PutSite,
    PutSiteFromJSON,
    PutSiteToJSON,
} from '../models';

export interface DeleteSiteRequest {
    siteId: number;
}

export interface GetSiteRequest {
    siteId: number;
}

export interface PostSiteRequest {
    body: PostSite;
}

export interface PutSiteRequest {
    siteId: number;
    body: PutSite;
}

export interface SitesGetRequest {
    page?: number;
    limit?: number;
}

/**
 * 
 */
export class SitesApi extends runtime.BaseAPI {

    /**
     * Delete a site with site ID `{site_id}`.  - [Authorization](#authorization) - [Request Parameters](#request-parameters) - [Responses](#responses) - [Send a Test Request](#send-a-test-request)
     * Delete a Site
     */
    async deleteSiteRaw(requestParameters: DeleteSiteRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.siteId === null || requestParameters.siteId === undefined) {
            throw new runtime.RequiredError('siteId','Required parameter requestParameters.siteId was null or undefined when calling deleteSite.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/sites/{site_id}`.replace(`{${"site_id"}}`, encodeURIComponent(String(requestParameters.siteId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a site with site ID `{site_id}`.  - [Authorization](#authorization) - [Request Parameters](#request-parameters) - [Responses](#responses) - [Send a Test Request](#send-a-test-request)
     * Delete a Site
     */
    async deleteSite(requestParameters: DeleteSiteRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteSiteRaw(requestParameters, initOverrides);
    }

    /**
     * Get a site with site ID `{site_id}`.  - [Authorization](#authorization) - [Request Parameters](#request-parameters) - [Responses](#responses) - [Send a Test Request](#send-a-test-request)
     * Get a Site
     */
    async getSiteRaw(requestParameters: GetSiteRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse201>> {
        if (requestParameters.siteId === null || requestParameters.siteId === undefined) {
            throw new runtime.RequiredError('siteId','Required parameter requestParameters.siteId was null or undefined when calling getSite.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/sites/{site_id}`.replace(`{${"site_id"}}`, encodeURIComponent(String(requestParameters.siteId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse201FromJSON(jsonValue));
    }

    /**
     * Get a site with site ID `{site_id}`.  - [Authorization](#authorization) - [Request Parameters](#request-parameters) - [Responses](#responses) - [Send a Test Request](#send-a-test-request)
     * Get a Site
     */
    async getSite(requestParameters: GetSiteRequest, initOverrides?: RequestInit): Promise<InlineResponse201> {
        const response = await this.getSiteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a site that links a [headless storefront](https://developer.bigcommerce.com/api-docs/storefronts/developers-guide-headless) to a sales [channel](https://developer.bigcommerce.com/api-reference/cart-checkout/channels-listings-api).  - [Authorization](#authorization) - [Request Body](#request-body) - [Responses](#responses) - [Send a Test Request](#send-a-test-request)
     * Create a Site
     */
    async postSiteRaw(requestParameters: PostSiteRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse201>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling postSite.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/sites`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostSiteToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse201FromJSON(jsonValue));
    }

    /**
     * Create a site that links a [headless storefront](https://developer.bigcommerce.com/api-docs/storefronts/developers-guide-headless) to a sales [channel](https://developer.bigcommerce.com/api-reference/cart-checkout/channels-listings-api).  - [Authorization](#authorization) - [Request Body](#request-body) - [Responses](#responses) - [Send a Test Request](#send-a-test-request)
     * Create a Site
     */
    async postSite(requestParameters: PostSiteRequest, initOverrides?: RequestInit): Promise<InlineResponse201> {
        const response = await this.postSiteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a site with site ID `{site_id}`.  - [Authorization](#authorization) - [Request Parameters](#request-parameters) - [Request Body](#request-body) - [Responses](#responses) - [Send a Test Request](#send-a-test-request)
     * Update a Site
     */
    async putSiteRaw(requestParameters: PutSiteRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse201>> {
        if (requestParameters.siteId === null || requestParameters.siteId === undefined) {
            throw new runtime.RequiredError('siteId','Required parameter requestParameters.siteId was null or undefined when calling putSite.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling putSite.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/sites/{site_id}`.replace(`{${"site_id"}}`, encodeURIComponent(String(requestParameters.siteId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: PutSiteToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse201FromJSON(jsonValue));
    }

    /**
     * Update a site with site ID `{site_id}`.  - [Authorization](#authorization) - [Request Parameters](#request-parameters) - [Request Body](#request-body) - [Responses](#responses) - [Send a Test Request](#send-a-test-request)
     * Update a Site
     */
    async putSite(requestParameters: PutSiteRequest, initOverrides?: RequestInit): Promise<InlineResponse201> {
        const response = await this.putSiteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get sites linked to a [headless storefront](https://developer.bigcommerce.com/api-docs/storefronts/developers-guide-headless) sales channels.  - [Authorization](#authorization) - [Request Parameters](#request-parameters) - [Responses](#responses) - [Send a Test Request](#send-a-test-request)
     * Get Sites
     */
    async sitesGetRaw(requestParameters: SitesGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse200>> {
        const queryParameters: any = {};

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
            path: `/sites`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse200FromJSON(jsonValue));
    }

    /**
     * Get sites linked to a [headless storefront](https://developer.bigcommerce.com/api-docs/storefronts/developers-guide-headless) sales channels.  - [Authorization](#authorization) - [Request Parameters](#request-parameters) - [Responses](#responses) - [Send a Test Request](#send-a-test-request)
     * Get Sites
     */
    async sitesGet(requestParameters: SitesGetRequest, initOverrides?: RequestInit): Promise<InlineResponse200> {
        const response = await this.sitesGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
