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
    ComplexRule,
    ComplexRuleFromJSON,
    ComplexRuleToJSON,
    ComplexRule2,
    ComplexRule2FromJSON,
    ComplexRule2ToJSON,
    ComplexRuleCollectionResponse,
    ComplexRuleCollectionResponseFromJSON,
    ComplexRuleCollectionResponseToJSON,
    ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    InlineResponse2001,
    InlineResponse2001FromJSON,
    InlineResponse2001ToJSON,
    InlineResponse2002,
    InlineResponse2002FromJSON,
    InlineResponse2002ToJSON,
    NotFound,
    NotFoundFromJSON,
    NotFoundToJSON,
} from '../models';

export interface CreateComplexRuleRequest {
    productId: number;
    accept: string;
    contentType: string;
    complexRule: ComplexRule;
}

export interface DeleteComplexRuleByIdRequest {
    productId: number;
    complexRuleId: number;
    contentType: string;
    accept: string;
}

export interface GetComplexRuleByIdRequest {
    productId: number;
    complexRuleId: number;
    accept: string;
    contentType: string;
    includeFields?: string;
    excludeFields?: string;
}

export interface GetComplexRulesRequest {
    productId: number;
    accept: string;
    contentType: string;
    includeFields?: string;
    excludeFields?: string;
    page?: number;
    limit?: number;
}

export interface UpdateComplexRuleRequest {
    productId: number;
    complexRuleId: number;
    complexRule: ComplexRule2;
}

/**
 * 
 */
export class ProductComplexRulesApi extends runtime.BaseAPI {

    /**
     * Creates a product *Complex Rule*.  **Required Fields** - modifier_id - modifier_value_id - modifier_value_id - variant_id  **Read-Only Fields** - complex_rule_id - conditions_id - rule_id - combination_id - id
     * Create a Complex Rule
     */
    async createComplexRuleRaw(requestParameters: CreateComplexRuleRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2001>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling createComplexRule.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling createComplexRule.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling createComplexRule.');
        }

        if (requestParameters.complexRule === null || requestParameters.complexRule === undefined) {
            throw new runtime.RequiredError('complexRule','Required parameter requestParameters.complexRule was null or undefined when calling createComplexRule.');
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
            path: `/catalog/products/{product_id}/complex-rules`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ComplexRuleToJSON(requestParameters.complexRule),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2001FromJSON(jsonValue));
    }

    /**
     * Creates a product *Complex Rule*.  **Required Fields** - modifier_id - modifier_value_id - modifier_value_id - variant_id  **Read-Only Fields** - complex_rule_id - conditions_id - rule_id - combination_id - id
     * Create a Complex Rule
     */
    async createComplexRule(requestParameters: CreateComplexRuleRequest, initOverrides?: RequestInit): Promise<InlineResponse2001> {
        const response = await this.createComplexRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a product *Complex Rule*.
     * Delete a Complex Rule
     */
    async deleteComplexRuleByIdRaw(requestParameters: DeleteComplexRuleByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling deleteComplexRuleById.');
        }

        if (requestParameters.complexRuleId === null || requestParameters.complexRuleId === undefined) {
            throw new runtime.RequiredError('complexRuleId','Required parameter requestParameters.complexRuleId was null or undefined when calling deleteComplexRuleById.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling deleteComplexRuleById.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling deleteComplexRuleById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.contentType !== undefined && requestParameters.contentType !== null) {
            headerParameters['Content-Type'] = String(requestParameters.contentType);
        }

        if (requestParameters.accept !== undefined && requestParameters.accept !== null) {
            headerParameters['Accept'] = String(requestParameters.accept);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/catalog/products/{product_id}/complex-rules/{complex_rule_id}`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))).replace(`{${"complex_rule_id"}}`, encodeURIComponent(String(requestParameters.complexRuleId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a product *Complex Rule*.
     * Delete a Complex Rule
     */
    async deleteComplexRuleById(requestParameters: DeleteComplexRuleByIdRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteComplexRuleByIdRaw(requestParameters, initOverrides);
    }

    /**
     * Returns a single *Complex Rule*. Optional parameters can be passed in.
     * Get a Complex Rule
     */
    async getComplexRuleByIdRaw(requestParameters: GetComplexRuleByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2002>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling getComplexRuleById.');
        }

        if (requestParameters.complexRuleId === null || requestParameters.complexRuleId === undefined) {
            throw new runtime.RequiredError('complexRuleId','Required parameter requestParameters.complexRuleId was null or undefined when calling getComplexRuleById.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling getComplexRuleById.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling getComplexRuleById.');
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
            path: `/catalog/products/{product_id}/complex-rules/{complex_rule_id}`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))).replace(`{${"complex_rule_id"}}`, encodeURIComponent(String(requestParameters.complexRuleId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2002FromJSON(jsonValue));
    }

    /**
     * Returns a single *Complex Rule*. Optional parameters can be passed in.
     * Get a Complex Rule
     */
    async getComplexRuleById(requestParameters: GetComplexRuleByIdRequest, initOverrides?: RequestInit): Promise<InlineResponse2002> {
        const response = await this.getComplexRuleByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of all product *Complex Rules*. Optional parameters may be passed in.
     * Get Complex Rules
     */
    async getComplexRulesRaw(requestParameters: GetComplexRulesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ComplexRuleCollectionResponse>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling getComplexRules.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling getComplexRules.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling getComplexRules.');
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
            path: `/catalog/products/{product_id}/complex-rules`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ComplexRuleCollectionResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of all product *Complex Rules*. Optional parameters may be passed in.
     * Get Complex Rules
     */
    async getComplexRules(requestParameters: GetComplexRulesRequest, initOverrides?: RequestInit): Promise<ComplexRuleCollectionResponse> {
        const response = await this.getComplexRulesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a *Complex Rule*.  **Required Fields**: - none  **Read-Only Fields**: - complex_rule_id - conditions_id - rule_id - combination_id - id
     * Update a Complex Rule
     */
    async updateComplexRuleRaw(requestParameters: UpdateComplexRuleRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2002>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling updateComplexRule.');
        }

        if (requestParameters.complexRuleId === null || requestParameters.complexRuleId === undefined) {
            throw new runtime.RequiredError('complexRuleId','Required parameter requestParameters.complexRuleId was null or undefined when calling updateComplexRule.');
        }

        if (requestParameters.complexRule === null || requestParameters.complexRule === undefined) {
            throw new runtime.RequiredError('complexRule','Required parameter requestParameters.complexRule was null or undefined when calling updateComplexRule.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/catalog/products/{product_id}/complex-rules/{complex_rule_id}`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))).replace(`{${"complex_rule_id"}}`, encodeURIComponent(String(requestParameters.complexRuleId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ComplexRule2ToJSON(requestParameters.complexRule),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2002FromJSON(jsonValue));
    }

    /**
     * Updates a *Complex Rule*.  **Required Fields**: - none  **Read-Only Fields**: - complex_rule_id - conditions_id - rule_id - combination_id - id
     * Update a Complex Rule
     */
    async updateComplexRule(requestParameters: UpdateComplexRuleRequest, initOverrides?: RequestInit): Promise<InlineResponse2002> {
        const response = await this.updateComplexRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
