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
    ModifierValueCollectionResponse,
    ModifierValueCollectionResponseFromJSON,
    ModifierValueCollectionResponseToJSON,
    ModifierValueResponse,
    ModifierValueResponseFromJSON,
    ModifierValueResponseToJSON,
    ModifierValueResponse1,
    ModifierValueResponse1FromJSON,
    ModifierValueResponse1ToJSON,
    NotFound,
    NotFoundFromJSON,
    NotFoundToJSON,
    UNKNOWN_BASE_TYPE,
    UNKNOWN_BASE_TYPEFromJSON,
    UNKNOWN_BASE_TYPEToJSON,
} from '../models';

export interface CreateModifierValueRequest {
    productId: number;
    modifierId: number;
    accept: string;
    contentType: string;
    modifierValue: UNKNOWN_BASE_TYPE;
}

export interface DeleteModifierValueByIdRequest {
    productId: number;
    modifierId: number;
    valueId: number;
    accept: string;
    contentType: string;
}

export interface GetModifierValueByIdRequest {
    productId: number;
    modifierId: number;
    valueId: number;
    accept: string;
    contentType: string;
    includeFields?: string;
    excludeFields?: string;
}

export interface GetModifierValuesRequest {
    productId: number;
    modifierId: number;
    accept: string;
    contentType: string;
    includeFields?: string;
    excludeFields?: string;
    page?: number;
    limit?: number;
}

export interface UpdateModifierValueRequest {
    productId: number;
    modifierId: number;
    valueId: number;
    accept: string;
    contentType: string;
    modifierValue: UNKNOWN_BASE_TYPE;
}

/**
 * 
 */
export class ProductModifierValuesApi extends runtime.BaseAPI {

    /**
     * Creates a *Modifier Value*.  **Required Fields** * label * sort_order  **Read-Only Fields** * id
     * Create Modifier Value
     */
    async createModifierValueRaw(requestParameters: CreateModifierValueRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ModifierValueResponse>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling createModifierValue.');
        }

        if (requestParameters.modifierId === null || requestParameters.modifierId === undefined) {
            throw new runtime.RequiredError('modifierId','Required parameter requestParameters.modifierId was null or undefined when calling createModifierValue.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling createModifierValue.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling createModifierValue.');
        }

        if (requestParameters.modifierValue === null || requestParameters.modifierValue === undefined) {
            throw new runtime.RequiredError('modifierValue','Required parameter requestParameters.modifierValue was null or undefined when calling createModifierValue.');
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
            path: `/catalog/products/{product_id}/modifiers/{modifier_id}/values`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))).replace(`{${"modifier_id"}}`, encodeURIComponent(String(requestParameters.modifierId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UNKNOWN_BASE_TYPEToJSON(requestParameters.modifierValue),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModifierValueResponseFromJSON(jsonValue));
    }

    /**
     * Creates a *Modifier Value*.  **Required Fields** * label * sort_order  **Read-Only Fields** * id
     * Create Modifier Value
     */
    async createModifierValue(requestParameters: CreateModifierValueRequest, initOverrides?: RequestInit): Promise<ModifierValueResponse> {
        const response = await this.createModifierValueRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a *Modifier Value*.
     * Delete Modifier Value
     */
    async deleteModifierValueByIdRaw(requestParameters: DeleteModifierValueByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling deleteModifierValueById.');
        }

        if (requestParameters.modifierId === null || requestParameters.modifierId === undefined) {
            throw new runtime.RequiredError('modifierId','Required parameter requestParameters.modifierId was null or undefined when calling deleteModifierValueById.');
        }

        if (requestParameters.valueId === null || requestParameters.valueId === undefined) {
            throw new runtime.RequiredError('valueId','Required parameter requestParameters.valueId was null or undefined when calling deleteModifierValueById.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling deleteModifierValueById.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling deleteModifierValueById.');
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
            path: `/catalog/products/{product_id}/modifiers/{modifier_id}/values/{value_id}`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))).replace(`{${"modifier_id"}}`, encodeURIComponent(String(requestParameters.modifierId))).replace(`{${"value_id"}}`, encodeURIComponent(String(requestParameters.valueId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a *Modifier Value*.
     * Delete Modifier Value
     */
    async deleteModifierValueById(requestParameters: DeleteModifierValueByIdRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteModifierValueByIdRaw(requestParameters, initOverrides);
    }

    /**
     * Returns a single *Modifier Value*. Optional parameters can be passed in.
     * Get a Modifier Value
     */
    async getModifierValueByIdRaw(requestParameters: GetModifierValueByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ModifierValueResponse1>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling getModifierValueById.');
        }

        if (requestParameters.modifierId === null || requestParameters.modifierId === undefined) {
            throw new runtime.RequiredError('modifierId','Required parameter requestParameters.modifierId was null or undefined when calling getModifierValueById.');
        }

        if (requestParameters.valueId === null || requestParameters.valueId === undefined) {
            throw new runtime.RequiredError('valueId','Required parameter requestParameters.valueId was null or undefined when calling getModifierValueById.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling getModifierValueById.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling getModifierValueById.');
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
            path: `/catalog/products/{product_id}/modifiers/{modifier_id}/values/{value_id}`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))).replace(`{${"modifier_id"}}`, encodeURIComponent(String(requestParameters.modifierId))).replace(`{${"value_id"}}`, encodeURIComponent(String(requestParameters.valueId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModifierValueResponse1FromJSON(jsonValue));
    }

    /**
     * Returns a single *Modifier Value*. Optional parameters can be passed in.
     * Get a Modifier Value
     */
    async getModifierValueById(requestParameters: GetModifierValueByIdRequest, initOverrides?: RequestInit): Promise<ModifierValueResponse1> {
        const response = await this.getModifierValueByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of all product *Modifier Values*. Optional parameters can be passed in.
     * Get All Modifier Values
     */
    async getModifierValuesRaw(requestParameters: GetModifierValuesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ModifierValueCollectionResponse>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling getModifierValues.');
        }

        if (requestParameters.modifierId === null || requestParameters.modifierId === undefined) {
            throw new runtime.RequiredError('modifierId','Required parameter requestParameters.modifierId was null or undefined when calling getModifierValues.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling getModifierValues.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling getModifierValues.');
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
            path: `/catalog/products/{product_id}/modifiers/{modifier_id}/values`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))).replace(`{${"modifier_id"}}`, encodeURIComponent(String(requestParameters.modifierId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModifierValueCollectionResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of all product *Modifier Values*. Optional parameters can be passed in.
     * Get All Modifier Values
     */
    async getModifierValues(requestParameters: GetModifierValuesRequest, initOverrides?: RequestInit): Promise<ModifierValueCollectionResponse> {
        const response = await this.getModifierValuesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a *Modifier Value*.  **Required Fields** * none  **Read-Only Fields** * id
     * Update a Modifier Value
     */
    async updateModifierValueRaw(requestParameters: UpdateModifierValueRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ModifierValueResponse>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling updateModifierValue.');
        }

        if (requestParameters.modifierId === null || requestParameters.modifierId === undefined) {
            throw new runtime.RequiredError('modifierId','Required parameter requestParameters.modifierId was null or undefined when calling updateModifierValue.');
        }

        if (requestParameters.valueId === null || requestParameters.valueId === undefined) {
            throw new runtime.RequiredError('valueId','Required parameter requestParameters.valueId was null or undefined when calling updateModifierValue.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling updateModifierValue.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling updateModifierValue.');
        }

        if (requestParameters.modifierValue === null || requestParameters.modifierValue === undefined) {
            throw new runtime.RequiredError('modifierValue','Required parameter requestParameters.modifierValue was null or undefined when calling updateModifierValue.');
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
            path: `/catalog/products/{product_id}/modifiers/{modifier_id}/values/{value_id}`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))).replace(`{${"modifier_id"}}`, encodeURIComponent(String(requestParameters.modifierId))).replace(`{${"value_id"}}`, encodeURIComponent(String(requestParameters.valueId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UNKNOWN_BASE_TYPEToJSON(requestParameters.modifierValue),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModifierValueResponseFromJSON(jsonValue));
    }

    /**
     * Updates a *Modifier Value*.  **Required Fields** * none  **Read-Only Fields** * id
     * Update a Modifier Value
     */
    async updateModifierValue(requestParameters: UpdateModifierValueRequest, initOverrides?: RequestInit): Promise<ModifierValueResponse> {
        const response = await this.updateModifierValueRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
