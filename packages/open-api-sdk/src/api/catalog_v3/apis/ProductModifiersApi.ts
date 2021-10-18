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
    ModifierCollectionResponse,
    ModifierCollectionResponseFromJSON,
    ModifierCollectionResponseToJSON,
    ModifierResponse,
    ModifierResponseFromJSON,
    ModifierResponseToJSON,
    ModifierResponse1,
    ModifierResponse1FromJSON,
    ModifierResponse1ToJSON,
    NotFound,
    NotFoundFromJSON,
    NotFoundToJSON,
    UNKNOWN_BASE_TYPE,
    UNKNOWN_BASE_TYPEFromJSON,
    UNKNOWN_BASE_TYPEToJSON,
} from '../models';

export interface CreateModifierRequest {
    productId: number;
    accept: string;
    contentType: string;
    modifier: UNKNOWN_BASE_TYPE;
}

export interface DeleteModifierByIdRequest {
    productId: number;
    modifierId: number;
    contentType: string;
    accept: string;
}

export interface GetModifierByIdRequest {
    productId: number;
    modifierId: number;
    accept: string;
    contentType: string;
    includeFields?: string;
    excludeFields?: string;
}

export interface GetModifiersRequest {
    productId: number;
    accept: string;
    contentType: string;
    page?: number;
    limit?: number;
    includeFields?: string;
    excludeFields?: string;
}

export interface UpdateModifierRequest {
    productId: number;
    modifierId: number;
    accept: string;
    contentType: string;
    modifier: UNKNOWN_BASE_TYPE;
}

/**
 * 
 */
export class ProductModifiersApi extends runtime.BaseAPI {

    /**
     * Creates a *Product Modifier*.  **Required Fields** * `required` * `display_name` * `type`  **Read-Only Fields** * `id`
     * Create a Product Modifier
     */
    async createModifierRaw(requestParameters: CreateModifierRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ModifierResponse>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling createModifier.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling createModifier.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling createModifier.');
        }

        if (requestParameters.modifier === null || requestParameters.modifier === undefined) {
            throw new runtime.RequiredError('modifier','Required parameter requestParameters.modifier was null or undefined when calling createModifier.');
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
            path: `/catalog/products/{product_id}/modifiers`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UNKNOWN_BASE_TYPEToJSON(requestParameters.modifier),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModifierResponseFromJSON(jsonValue));
    }

    /**
     * Creates a *Product Modifier*.  **Required Fields** * `required` * `display_name` * `type`  **Read-Only Fields** * `id`
     * Create a Product Modifier
     */
    async createModifier(requestParameters: CreateModifierRequest, initOverrides?: RequestInit): Promise<ModifierResponse> {
        const response = await this.createModifierRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a *Product Modifier*.
     * Delete a Modifier
     */
    async deleteModifierByIdRaw(requestParameters: DeleteModifierByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling deleteModifierById.');
        }

        if (requestParameters.modifierId === null || requestParameters.modifierId === undefined) {
            throw new runtime.RequiredError('modifierId','Required parameter requestParameters.modifierId was null or undefined when calling deleteModifierById.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling deleteModifierById.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling deleteModifierById.');
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
            path: `/catalog/products/{product_id}/modifiers/{modifier_id}`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))).replace(`{${"modifier_id"}}`, encodeURIComponent(String(requestParameters.modifierId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a *Product Modifier*.
     * Delete a Modifier
     */
    async deleteModifierById(requestParameters: DeleteModifierByIdRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteModifierByIdRaw(requestParameters, initOverrides);
    }

    /**
     * Returns a single *Product Modifier*. Optional parameters can be passed in.
     * Get a Modifier
     */
    async getModifierByIdRaw(requestParameters: GetModifierByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ModifierResponse1>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling getModifierById.');
        }

        if (requestParameters.modifierId === null || requestParameters.modifierId === undefined) {
            throw new runtime.RequiredError('modifierId','Required parameter requestParameters.modifierId was null or undefined when calling getModifierById.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling getModifierById.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling getModifierById.');
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
            path: `/catalog/products/{product_id}/modifiers/{modifier_id}`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))).replace(`{${"modifier_id"}}`, encodeURIComponent(String(requestParameters.modifierId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModifierResponse1FromJSON(jsonValue));
    }

    /**
     * Returns a single *Product Modifier*. Optional parameters can be passed in.
     * Get a Modifier
     */
    async getModifierById(requestParameters: GetModifierByIdRequest, initOverrides?: RequestInit): Promise<ModifierResponse1> {
        const response = await this.getModifierByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of all *Product Modifiers*. Optional parameters can be passed in.
     * Get All Product Modifiers
     */
    async getModifiersRaw(requestParameters: GetModifiersRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ModifierCollectionResponse>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling getModifiers.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling getModifiers.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling getModifiers.');
        }

        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

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
            path: `/catalog/products/{product_id}/modifiers`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModifierCollectionResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of all *Product Modifiers*. Optional parameters can be passed in.
     * Get All Product Modifiers
     */
    async getModifiers(requestParameters: GetModifiersRequest, initOverrides?: RequestInit): Promise<ModifierCollectionResponse> {
        const response = await this.getModifiersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a *Product Modifier*.
     * Update a Modifier
     */
    async updateModifierRaw(requestParameters: UpdateModifierRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ModifierResponse>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling updateModifier.');
        }

        if (requestParameters.modifierId === null || requestParameters.modifierId === undefined) {
            throw new runtime.RequiredError('modifierId','Required parameter requestParameters.modifierId was null or undefined when calling updateModifier.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling updateModifier.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling updateModifier.');
        }

        if (requestParameters.modifier === null || requestParameters.modifier === undefined) {
            throw new runtime.RequiredError('modifier','Required parameter requestParameters.modifier was null or undefined when calling updateModifier.');
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
            path: `/catalog/products/{product_id}/modifiers/{modifier_id}`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))).replace(`{${"modifier_id"}}`, encodeURIComponent(String(requestParameters.modifierId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UNKNOWN_BASE_TYPEToJSON(requestParameters.modifier),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModifierResponseFromJSON(jsonValue));
    }

    /**
     * Updates a *Product Modifier*.
     * Update a Modifier
     */
    async updateModifier(requestParameters: UpdateModifierRequest, initOverrides?: RequestInit): Promise<ModifierResponse> {
        const response = await this.updateModifierRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
