/* tslint:disable */
/* eslint-disable */
/**
 * Catalog
 * Manage products, brands and categories. To learn more about catalog resources see [Catalog Overview](https://developer.bigcommerce.com/api-docs/catalog/products-overview).  - [Authentication](#authentication) - [Differentiating Variants and Modifiers](#differentiating-variants-and-modifiers) - [Available Endpoints](#available-endpoints) - [Resources](#resources)  ## Authentication Requests can be authenticated by sending an `access_token` via `X-Auth-Token` HTTP header:  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Accept: application/json X-Auth-Token: {access_token} ```  |Header|Parameter|Description| |-|-|-| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  ### OAuth Scopes | UI Name  | Permission | Parameter                     | |----------|------------|-------------------------------| | Products | modify     | `store_v2_products`           | | Products | read-only  | `store_v2_products_read_only` |  For more information on OAuth Scopes, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Differentiating Variants and Modifiers [Variants](https://support.bigcommerce.com/s/article/Product-Options-v3#variations) represent a physical product made up of [Product Option](https://support.bigcommerce.com/s/article/Product-Options-v3) choices, i.e. a large blue t-shirt. Each variant can have a unique SKU.  Modifiers represent a choice a customer makes about a product that doesn\'t represent a physical item, i.e. text to be printed on a t-shirt. Assigning a SKU to a modifier will turn it into a variant.  See [Variant Options](https://developer.bigcommerce.com/api-docs/catalog/products-overview#variant-options) and [Modifier Options](https://developer.bigcommerce.com/api-docs/catalog/products-overview#modifier-options) for more information.  ## Available Endpoints | Resource / Endpoint                     | Description                                                             | |-----------------------------------------|-------------------------------------------------------------------------| | Brand Images                            | Create and manage brand images                                          | | Brand Metafields                        | Create and manage brand metafields                                      | | Brands                                  | Create and manage brands                                                | | Catalog                                 | Create and manage store categories, products, and brands                | | Categories                              | Create and manage categorties                                           | | Category Images                         | Create and manage category images                                       | | Category Metafields                     | Create and manage category metafields                                   | | Product Bulk Pricing Rules              | Create and manage product bulk pricing rules                            | | Product Complex Rules                   | Create and manage product complex rules                                 | | Product Custom Fields                   | Create and manage product custom fields                                 | | Product Images                          | Create and manage product images                                        | | Product Metafields                      | Create and manage product meta fields                                   | | Product Modifier Images                 | Create and manage product modifer images                                | | Product Modifier Values                 | Create and manage product modifier values                               | | Product Modifiers                       | Create and manage product midifiers                                     | | Product Reviews                         | Create and manage product reviews                                       | | Product Variant Option Values           | Create and manage product variant option values                         | | Product Variant Options                 | Create and manage product variant options                               | | Product Variants                        | Create and manage product variants                                      | | Product Videos                          | Create and manage product videos                                        | | Products                                | Create and manage products                                              | | ProductVariant Metafields               | Create and manage product meta flields                                  | | Variants                                | Get and update all variants                                             |  ## Resources  ### Webhooks * [Products](/api-docs/store-management/webhooks/events#products) * [Categories](/api-docs/store-management/webhooks/events#category) * [SKU](/api-docs/store-management/webhooks/events#sku)
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
    BulkPricingRuleFull,
    BulkPricingRuleFullFromJSON,
    BulkPricingRuleFullToJSON,
    ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    InlineResponse2007,
    InlineResponse2007FromJSON,
    InlineResponse2007ToJSON,
    InlineResponse2008,
    InlineResponse2008FromJSON,
    InlineResponse2008ToJSON,
    InlineResponse2009,
    InlineResponse2009FromJSON,
    InlineResponse2009ToJSON,
    NotFound,
    NotFoundFromJSON,
    NotFoundToJSON,
} from '../models';

export interface CreateBulkPricingRuleRequest {
    productId: number;
    accept: string;
    contentType: string;
    bulkPricingRule: BulkPricingRuleFull;
    page?: number;
    limit?: number;
}

export interface DeleteBulkPricingRuleByIdRequest {
    productId: number;
    bulkPricingRuleId: number;
    accept: string;
    contentType: string;
}

export interface GetBulkPricingRuleByIdRequest {
    productId: number;
    bulkPricingRuleId: number;
    accept: string;
    contentType: string;
    includeFields?: string;
    excludeFields?: string;
}

export interface GetBulkPricingRulesRequest {
    productId: number;
    accept: string;
    contentType: string;
    includeFields?: string;
    excludeFields?: string;
    page?: number;
    limit?: number;
}

export interface UpdateBulkPricingRuleRequest {
    productId: number;
    bulkPricingRuleId: number;
    accept: string;
    contentType: string;
    bulkPricingRule: BulkPricingRuleFull;
}

/**
 * 
 */
export class ProductBulkPricingRulesApi extends runtime.BaseAPI {

    /**
     * Creates a *Bulk Pricing Rule*.  **Required Fields** - quantity_min - quantity_max - type - amount  **Read-Only Fields** - id  **Limits** - 50 bulk pricing rule per product limit.
     * Create a Bulk Pricing Rule
     */
    async createBulkPricingRuleRaw(requestParameters: CreateBulkPricingRuleRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2008>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling createBulkPricingRule.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling createBulkPricingRule.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling createBulkPricingRule.');
        }

        if (requestParameters.bulkPricingRule === null || requestParameters.bulkPricingRule === undefined) {
            throw new runtime.RequiredError('bulkPricingRule','Required parameter requestParameters.bulkPricingRule was null or undefined when calling createBulkPricingRule.');
        }

        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.accept !== undefined && requestParameters.accept !== null) {
            headerParameters['Accept'] = String(requestParameters.accept);
        }

        if (requestParameters.contentType !== undefined && requestParameters.contentType !== null) {
            headerParameters['Content-Type'] = String(requestParameters.contentType);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/catalog/products/{product_id}/bulk-pricing-rules`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BulkPricingRuleFullToJSON(requestParameters.bulkPricingRule),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2008FromJSON(jsonValue));
    }

    /**
     * Creates a *Bulk Pricing Rule*.  **Required Fields** - quantity_min - quantity_max - type - amount  **Read-Only Fields** - id  **Limits** - 50 bulk pricing rule per product limit.
     * Create a Bulk Pricing Rule
     */
    async createBulkPricingRule(requestParameters: CreateBulkPricingRuleRequest, initOverrides?: RequestInit): Promise<InlineResponse2008> {
        const response = await this.createBulkPricingRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a *Bulk Pricing Rule*.
     * Delete a Bulk Pricing Rule
     */
    async deleteBulkPricingRuleByIdRaw(requestParameters: DeleteBulkPricingRuleByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling deleteBulkPricingRuleById.');
        }

        if (requestParameters.bulkPricingRuleId === null || requestParameters.bulkPricingRuleId === undefined) {
            throw new runtime.RequiredError('bulkPricingRuleId','Required parameter requestParameters.bulkPricingRuleId was null or undefined when calling deleteBulkPricingRuleById.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling deleteBulkPricingRuleById.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling deleteBulkPricingRuleById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.accept !== undefined && requestParameters.accept !== null) {
            headerParameters['Accept'] = String(requestParameters.accept);
        }

        if (requestParameters.contentType !== undefined && requestParameters.contentType !== null) {
            headerParameters['Content-Type'] = String(requestParameters.contentType);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/catalog/products/{product_id}/bulk-pricing-rules/{bulk_pricing_rule_id}`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))).replace(`{${"bulk_pricing_rule_id"}}`, encodeURIComponent(String(requestParameters.bulkPricingRuleId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a *Bulk Pricing Rule*.
     * Delete a Bulk Pricing Rule
     */
    async deleteBulkPricingRuleById(requestParameters: DeleteBulkPricingRuleByIdRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteBulkPricingRuleByIdRaw(requestParameters, initOverrides);
    }

    /**
     * Returns a single *Bulk Pricing Rule*. Optional parameters can be passed in.
     * Get a Bulk Pricing Rule
     */
    async getBulkPricingRuleByIdRaw(requestParameters: GetBulkPricingRuleByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2008>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling getBulkPricingRuleById.');
        }

        if (requestParameters.bulkPricingRuleId === null || requestParameters.bulkPricingRuleId === undefined) {
            throw new runtime.RequiredError('bulkPricingRuleId','Required parameter requestParameters.bulkPricingRuleId was null or undefined when calling getBulkPricingRuleById.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling getBulkPricingRuleById.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling getBulkPricingRuleById.');
        }

        const queryParameters: any = {};

        if (requestParameters.includeFields !== undefined) {
            queryParameters['include_fields'] = requestParameters.includeFields;
        }

        if (requestParameters.excludeFields !== undefined) {
            queryParameters['exclude_fields'] = requestParameters.excludeFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.accept !== undefined && requestParameters.accept !== null) {
            headerParameters['Accept'] = String(requestParameters.accept);
        }

        if (requestParameters.contentType !== undefined && requestParameters.contentType !== null) {
            headerParameters['Content-Type'] = String(requestParameters.contentType);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/catalog/products/{product_id}/bulk-pricing-rules/{bulk_pricing_rule_id}`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))).replace(`{${"bulk_pricing_rule_id"}}`, encodeURIComponent(String(requestParameters.bulkPricingRuleId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2008FromJSON(jsonValue));
    }

    /**
     * Returns a single *Bulk Pricing Rule*. Optional parameters can be passed in.
     * Get a Bulk Pricing Rule
     */
    async getBulkPricingRuleById(requestParameters: GetBulkPricingRuleByIdRequest, initOverrides?: RequestInit): Promise<InlineResponse2008> {
        const response = await this.getBulkPricingRuleByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of *Bulk Pricing Rules*. Optional parameters can be passed in.
     * Get All Bulk Pricing Rules
     */
    async getBulkPricingRulesRaw(requestParameters: GetBulkPricingRulesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2007>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling getBulkPricingRules.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling getBulkPricingRules.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling getBulkPricingRules.');
        }

        const queryParameters: any = {};

        if (requestParameters.includeFields !== undefined) {
            queryParameters['include_fields'] = requestParameters.includeFields;
        }

        if (requestParameters.excludeFields !== undefined) {
            queryParameters['exclude_fields'] = requestParameters.excludeFields;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.accept !== undefined && requestParameters.accept !== null) {
            headerParameters['Accept'] = String(requestParameters.accept);
        }

        if (requestParameters.contentType !== undefined && requestParameters.contentType !== null) {
            headerParameters['Content-Type'] = String(requestParameters.contentType);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/catalog/products/{product_id}/bulk-pricing-rules`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2007FromJSON(jsonValue));
    }

    /**
     * Returns a list of *Bulk Pricing Rules*. Optional parameters can be passed in.
     * Get All Bulk Pricing Rules
     */
    async getBulkPricingRules(requestParameters: GetBulkPricingRulesRequest, initOverrides?: RequestInit): Promise<InlineResponse2007> {
        const response = await this.getBulkPricingRulesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a *Bulk Pricing Rule*.  **Required Fields** * none  **Read-Only Fields** - id
     * Update a Bulk Pricing Rule
     */
    async updateBulkPricingRuleRaw(requestParameters: UpdateBulkPricingRuleRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2009>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling updateBulkPricingRule.');
        }

        if (requestParameters.bulkPricingRuleId === null || requestParameters.bulkPricingRuleId === undefined) {
            throw new runtime.RequiredError('bulkPricingRuleId','Required parameter requestParameters.bulkPricingRuleId was null or undefined when calling updateBulkPricingRule.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling updateBulkPricingRule.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling updateBulkPricingRule.');
        }

        if (requestParameters.bulkPricingRule === null || requestParameters.bulkPricingRule === undefined) {
            throw new runtime.RequiredError('bulkPricingRule','Required parameter requestParameters.bulkPricingRule was null or undefined when calling updateBulkPricingRule.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.accept !== undefined && requestParameters.accept !== null) {
            headerParameters['Accept'] = String(requestParameters.accept);
        }

        if (requestParameters.contentType !== undefined && requestParameters.contentType !== null) {
            headerParameters['Content-Type'] = String(requestParameters.contentType);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/catalog/products/{product_id}/bulk-pricing-rules/{bulk_pricing_rule_id}`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))).replace(`{${"bulk_pricing_rule_id"}}`, encodeURIComponent(String(requestParameters.bulkPricingRuleId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: BulkPricingRuleFullToJSON(requestParameters.bulkPricingRule),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2009FromJSON(jsonValue));
    }

    /**
     * Updates a *Bulk Pricing Rule*.  **Required Fields** * none  **Read-Only Fields** - id
     * Update a Bulk Pricing Rule
     */
    async updateBulkPricingRule(requestParameters: UpdateBulkPricingRuleRequest, initOverrides?: RequestInit): Promise<InlineResponse2009> {
        const response = await this.updateBulkPricingRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
