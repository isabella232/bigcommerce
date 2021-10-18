/* tslint:disable */
/* eslint-disable */
/**
 * Settings V3
 * Manage settings and configuration for BigCommerce hosted stores and headless storefronts.  ## Authentication  Authenticate requests by including an [OAuth](https://developer.bigcommerce.com/api-docs/getting-started/authentication) `access_token` in the request header.  ```http GET /stores/{{STORE_HASH}}/v3/settings/storefront/status host: api.bigcommerce.com Accept: application/json X-Auth-Token: {{ACCESS_TOKEN}} ```  ### OAuth Scopes |  **UI Name** | **Permission** | **Parameter** | |-|-|-| |  Information & Settings | modify | `store_v2_information` | |  Information & Settings | read-only | `store_v2_information_read_only` |
 *
 * The version of the OpenAPI document: 3.0.0
 * Contact: support@bigcommerce.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    ConfiguredFilter,
    ConfiguredFilterFromJSON,
    ConfiguredFilterToJSON,
    ConfiguredFiltersOverride,
    ConfiguredFiltersOverrideFromJSON,
    ConfiguredFiltersOverrideToJSON,
    InlineResponse2004,
    InlineResponse2004FromJSON,
    InlineResponse2004ToJSON,
    InlineResponse2005,
    InlineResponse2005FromJSON,
    InlineResponse2005ToJSON,
    InlineResponse2006,
    InlineResponse2006FromJSON,
    InlineResponse2006ToJSON,
    InlineResponse2007,
    InlineResponse2007FromJSON,
    InlineResponse2007ToJSON,
} from '../models';

export interface DeleteContextsRequest {
    channelId?: number;
    categoryId?: number;
}

export interface GetAvailableRequest {
    channelId?: number;
    categoryId?: number;
}

export interface GetContextsRequest {
    channelId?: number;
    categoryId?: number;
}

export interface UpdateEnabledRequest {
    configuredFilter?: Array<ConfiguredFilter>;
}

export interface UpsertContextsRequest {
    configuredFiltersOverride?: Array<ConfiguredFiltersOverride>;
}

/**
 * 
 */
export class SearchFiltersApi extends runtime.BaseAPI {

    /**
     * Deletes contextual filters enabled in a particular context.
     * Delete Contextual Filters
     */
    async deleteContextsRaw(requestParameters: DeleteContextsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters.channelId !== undefined) {
            queryParameters['channel_id'] = requestParameters.channelId;
        }

        if (requestParameters.categoryId !== undefined) {
            queryParameters['category_id'] = requestParameters.categoryId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/settings/search/filters/contexts`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes contextual filters enabled in a particular context.
     * Delete Contextual Filters
     */
    async deleteContexts(requestParameters: DeleteContextsRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteContextsRaw(requestParameters, initOverrides);
    }

    /**
     * Returns a list of filters available to power [Product Filtering](https://support.bigcommerce.com/s/article/Product-Filtering-Settings).
     * Get Available Filters
     */
    async getAvailableRaw(requestParameters: GetAvailableRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2005>> {
        const queryParameters: any = {};

        if (requestParameters.channelId !== undefined) {
            queryParameters['channel_id'] = requestParameters.channelId;
        }

        if (requestParameters.categoryId !== undefined) {
            queryParameters['category_id'] = requestParameters.categoryId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/settings/search/filters/available`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2005FromJSON(jsonValue));
    }

    /**
     * Returns a list of filters available to power [Product Filtering](https://support.bigcommerce.com/s/article/Product-Filtering-Settings).
     * Get Available Filters
     */
    async getAvailable(requestParameters: GetAvailableRequest, initOverrides?: RequestInit): Promise<InlineResponse2005> {
        const response = await this.getAvailableRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of contextual filters enabled for a particular channel or category.  **Usage Notes**  Contextual filters allow you to configure the enabled filters per channel or category, so that shoppers can filter by the most relevant criteria.  The order of the returned filters will match the sort order of the filters on the storefront.
     * Get Contextual Filters
     */
    async getContextsRaw(requestParameters: GetContextsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2006>> {
        const queryParameters: any = {};

        if (requestParameters.channelId !== undefined) {
            queryParameters['channel_id'] = requestParameters.channelId;
        }

        if (requestParameters.categoryId !== undefined) {
            queryParameters['category_id'] = requestParameters.categoryId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/settings/search/filters/contexts`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2006FromJSON(jsonValue));
    }

    /**
     * Returns a list of contextual filters enabled for a particular channel or category.  **Usage Notes**  Contextual filters allow you to configure the enabled filters per channel or category, so that shoppers can filter by the most relevant criteria.  The order of the returned filters will match the sort order of the filters on the storefront.
     * Get Contextual Filters
     */
    async getContexts(requestParameters: GetContextsRequest, initOverrides?: RequestInit): Promise<InlineResponse2006> {
        const response = await this.getContextsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of enabled default [Product Filtering](https://support.bigcommerce.com/s/article/Product-Filtering-Settings) filters. These filters will be used if a store does not have contextual overrides.
     * Get Enabled Filters
     */
    async getEnabledRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2004>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/settings/search/filters`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2004FromJSON(jsonValue));
    }

    /**
     * Returns a list of enabled default [Product Filtering](https://support.bigcommerce.com/s/article/Product-Filtering-Settings) filters. These filters will be used if a store does not have contextual overrides.
     * Get Enabled Filters
     */
    async getEnabled(initOverrides?: RequestInit): Promise<InlineResponse2004> {
        const response = await this.getEnabledRaw(initOverrides);
        return await response.value();
    }

    /**
     * Updates enabled default [Product Filtering](https://support.bigcommerce.com/s/article/Product-Filtering-Settings) filters.
     * Update Enabled Filters
     */
    async updateEnabledRaw(requestParameters: UpdateEnabledRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2004>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/settings/search/filters`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.configuredFilter.map(ConfiguredFilterToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2004FromJSON(jsonValue));
    }

    /**
     * Updates enabled default [Product Filtering](https://support.bigcommerce.com/s/article/Product-Filtering-Settings) filters.
     * Update Enabled Filters
     */
    async updateEnabled(requestParameters: UpdateEnabledRequest, initOverrides?: RequestInit): Promise<InlineResponse2004> {
        const response = await this.updateEnabledRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Upserts contextual filters for a particular channel or category.  **Usage Notes**  Contextual filters allow you to configure the enabled filters per channel or category, so that shoppers can filter by the most relevant criteria.  You can change the order of the filters on the live site by changing the order of the filters you send.
     * Upsert Contextual Filters
     */
    async upsertContextsRaw(requestParameters: UpsertContextsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2007>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/settings/search/filters/contexts`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.configuredFiltersOverride.map(ConfiguredFiltersOverrideToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2007FromJSON(jsonValue));
    }

    /**
     * Upserts contextual filters for a particular channel or category.  **Usage Notes**  Contextual filters allow you to configure the enabled filters per channel or category, so that shoppers can filter by the most relevant criteria.  You can change the order of the filters on the live site by changing the order of the filters you send.
     * Upsert Contextual Filters
     */
    async upsertContexts(requestParameters: UpsertContextsRequest, initOverrides?: RequestInit): Promise<InlineResponse2007> {
        const response = await this.upsertContextsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}