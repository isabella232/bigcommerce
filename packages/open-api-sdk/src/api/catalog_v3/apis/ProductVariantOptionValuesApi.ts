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
    ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    NotFound,
    NotFoundFromJSON,
    NotFoundToJSON,
    OptionValueCollectionResponse,
    OptionValueCollectionResponseFromJSON,
    OptionValueCollectionResponseToJSON,
    OptionValueResponse,
    OptionValueResponseFromJSON,
    OptionValueResponseToJSON,
    UNKNOWN_BASE_TYPE,
    UNKNOWN_BASE_TYPEFromJSON,
    UNKNOWN_BASE_TYPEToJSON,
} from '../models';

export interface CreateOptionValueRequest {
    productId: number;
    optionId: number;
    accept: string;
    contentType: string;
    optionValue: UNKNOWN_BASE_TYPE;
}

export interface DeleteOptionValueByIdRequest {
    productId: number;
    optionId: number;
    valueId: number;
    accept: string;
    contentType: string;
}

export interface GetOptionValueByIdRequest {
    productId: number;
    optionId: number;
    valueId: number;
    includeFields?: string;
    excludeFields?: string;
}

export interface GetOptionValuesRequest {
    productId: number;
    optionId: number;
    accept: string;
    contentType: string;
    includeFields?: string;
    excludeFields?: string;
    page?: number;
    limit?: number;
}

export interface UpdateOptionValueRequest {
    productId: number;
    optionId: number;
    valueId: number;
    accept: string;
    contentType: string;
    optionValue: UNKNOWN_BASE_TYPE;
}

/**
 * 
 */
export class ProductVariantOptionValuesApi extends runtime.BaseAPI {

    /**
     * Creates a *Variant Option Value*.  **Required Fields** * label * sort_order  **Read-Only Fields** * id  **Limits** * 250 option values per option limit.
     * Create a Product Variant Option Value
     */
    async createOptionValueRaw(requestParameters: CreateOptionValueRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<OptionValueResponse>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling createOptionValue.');
        }

        if (requestParameters.optionId === null || requestParameters.optionId === undefined) {
            throw new runtime.RequiredError('optionId','Required parameter requestParameters.optionId was null or undefined when calling createOptionValue.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling createOptionValue.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling createOptionValue.');
        }

        if (requestParameters.optionValue === null || requestParameters.optionValue === undefined) {
            throw new runtime.RequiredError('optionValue','Required parameter requestParameters.optionValue was null or undefined when calling createOptionValue.');
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
            path: `/catalog/products/{product_id}/options/{option_id}/values`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))).replace(`{${"option_id"}}`, encodeURIComponent(String(requestParameters.optionId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UNKNOWN_BASE_TYPEToJSON(requestParameters.optionValue),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OptionValueResponseFromJSON(jsonValue));
    }

    /**
     * Creates a *Variant Option Value*.  **Required Fields** * label * sort_order  **Read-Only Fields** * id  **Limits** * 250 option values per option limit.
     * Create a Product Variant Option Value
     */
    async createOptionValue(requestParameters: CreateOptionValueRequest, initOverrides?: RequestInit): Promise<OptionValueResponse> {
        const response = await this.createOptionValueRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a *Variant Option Value*.
     * Delete a Product Variant Option Value
     */
    async deleteOptionValueByIdRaw(requestParameters: DeleteOptionValueByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling deleteOptionValueById.');
        }

        if (requestParameters.optionId === null || requestParameters.optionId === undefined) {
            throw new runtime.RequiredError('optionId','Required parameter requestParameters.optionId was null or undefined when calling deleteOptionValueById.');
        }

        if (requestParameters.valueId === null || requestParameters.valueId === undefined) {
            throw new runtime.RequiredError('valueId','Required parameter requestParameters.valueId was null or undefined when calling deleteOptionValueById.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling deleteOptionValueById.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling deleteOptionValueById.');
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
            path: `/catalog/products/{product_id}/options/{option_id}/values/{value_id}`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))).replace(`{${"option_id"}}`, encodeURIComponent(String(requestParameters.optionId))).replace(`{${"value_id"}}`, encodeURIComponent(String(requestParameters.valueId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a *Variant Option Value*.
     * Delete a Product Variant Option Value
     */
    async deleteOptionValueById(requestParameters: DeleteOptionValueByIdRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteOptionValueByIdRaw(requestParameters, initOverrides);
    }

    /**
     * Returns a single *Variant Option Value*. Optional parameters can be passed in.
     * Get a Product Variant Option Value
     */
    async getOptionValueByIdRaw(requestParameters: GetOptionValueByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<OptionValueResponse>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling getOptionValueById.');
        }

        if (requestParameters.optionId === null || requestParameters.optionId === undefined) {
            throw new runtime.RequiredError('optionId','Required parameter requestParameters.optionId was null or undefined when calling getOptionValueById.');
        }

        if (requestParameters.valueId === null || requestParameters.valueId === undefined) {
            throw new runtime.RequiredError('valueId','Required parameter requestParameters.valueId was null or undefined when calling getOptionValueById.');
        }

        const queryParameters: any = {};

        if (requestParameters.includeFields !== undefined) {
            queryParameters['include_fields'] = requestParameters.includeFields;
        }

        if (requestParameters.excludeFields !== undefined) {
            queryParameters['exclude_fields'] = requestParameters.excludeFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/catalog/products/{product_id}/options/{option_id}/values/{value_id}`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))).replace(`{${"option_id"}}`, encodeURIComponent(String(requestParameters.optionId))).replace(`{${"value_id"}}`, encodeURIComponent(String(requestParameters.valueId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OptionValueResponseFromJSON(jsonValue));
    }

    /**
     * Returns a single *Variant Option Value*. Optional parameters can be passed in.
     * Get a Product Variant Option Value
     */
    async getOptionValueById(requestParameters: GetOptionValueByIdRequest, initOverrides?: RequestInit): Promise<OptionValueResponse> {
        const response = await this.getOptionValueByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of all *Variant Option Values*. Optional parameters can be passed in.
     * Get All Product Variant Option Values
     */
    async getOptionValuesRaw(requestParameters: GetOptionValuesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<OptionValueCollectionResponse>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling getOptionValues.');
        }

        if (requestParameters.optionId === null || requestParameters.optionId === undefined) {
            throw new runtime.RequiredError('optionId','Required parameter requestParameters.optionId was null or undefined when calling getOptionValues.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling getOptionValues.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling getOptionValues.');
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
            path: `/catalog/products/{product_id}/options/{option_id}/values`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))).replace(`{${"option_id"}}`, encodeURIComponent(String(requestParameters.optionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OptionValueCollectionResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of all *Variant Option Values*. Optional parameters can be passed in.
     * Get All Product Variant Option Values
     */
    async getOptionValues(requestParameters: GetOptionValuesRequest, initOverrides?: RequestInit): Promise<OptionValueCollectionResponse> {
        const response = await this.getOptionValuesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a *Variant Option Value*.  **Read-Only Fields** * id
     * Update a Product Variant Option Value
     */
    async updateOptionValueRaw(requestParameters: UpdateOptionValueRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<OptionValueResponse>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling updateOptionValue.');
        }

        if (requestParameters.optionId === null || requestParameters.optionId === undefined) {
            throw new runtime.RequiredError('optionId','Required parameter requestParameters.optionId was null or undefined when calling updateOptionValue.');
        }

        if (requestParameters.valueId === null || requestParameters.valueId === undefined) {
            throw new runtime.RequiredError('valueId','Required parameter requestParameters.valueId was null or undefined when calling updateOptionValue.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling updateOptionValue.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling updateOptionValue.');
        }

        if (requestParameters.optionValue === null || requestParameters.optionValue === undefined) {
            throw new runtime.RequiredError('optionValue','Required parameter requestParameters.optionValue was null or undefined when calling updateOptionValue.');
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
            path: `/catalog/products/{product_id}/options/{option_id}/values/{value_id}`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))).replace(`{${"option_id"}}`, encodeURIComponent(String(requestParameters.optionId))).replace(`{${"value_id"}}`, encodeURIComponent(String(requestParameters.valueId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UNKNOWN_BASE_TYPEToJSON(requestParameters.optionValue),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OptionValueResponseFromJSON(jsonValue));
    }

    /**
     * Updates a *Variant Option Value*.  **Read-Only Fields** * id
     * Update a Product Variant Option Value
     */
    async updateOptionValue(requestParameters: UpdateOptionValueRequest, initOverrides?: RequestInit): Promise<OptionValueResponse> {
        const response = await this.updateOptionValueRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
