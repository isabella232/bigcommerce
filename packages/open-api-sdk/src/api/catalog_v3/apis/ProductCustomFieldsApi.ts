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
    CustomField1,
    CustomField1FromJSON,
    CustomField1ToJSON,
    CustomField2,
    CustomField2FromJSON,
    CustomField2ToJSON,
    ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    InlineResponse2003,
    InlineResponse2003FromJSON,
    InlineResponse2003ToJSON,
    InlineResponse2004,
    InlineResponse2004FromJSON,
    InlineResponse2004ToJSON,
    InlineResponse2005,
    InlineResponse2005FromJSON,
    InlineResponse2005ToJSON,
    InlineResponse2006,
    InlineResponse2006FromJSON,
    InlineResponse2006ToJSON,
    NotFound,
    NotFoundFromJSON,
    NotFoundToJSON,
} from '../models';

export interface CreateCustomFieldRequest {
    productId: number;
    accept: string;
    contentType: string;
    customField: CustomField1;
}

export interface DeleteCustomFieldByIdRequest {
    productId: number;
    customFieldId: number;
    accept: string;
    contentType: string;
}

export interface GetCustomFieldByIdRequest {
    productId: number;
    customFieldId: number;
    accept: string;
    contentType: string;
    includeFields?: string;
    excludeFields?: string;
}

export interface GetCustomFieldsRequest {
    productId: number;
    accept: string;
    contentType: string;
    includeFields?: string;
    excludeFields?: string;
    page?: number;
    limit?: number;
}

export interface UpdateCustomFieldRequest {
    productId: number;
    customFieldId: number;
    accept: string;
    contentType: string;
    customField: CustomField2;
}

/**
 * 
 */
export class ProductCustomFieldsApi extends runtime.BaseAPI {

    /**
     * Creates a *Custom Field*.  **Required Fields:** - name - value  **Read-Only:** - id  **Limits** - 200 custom fields per product limit. - 255 characters per custom field limit.
     * Create a Custom Fields
     */
    async createCustomFieldRaw(requestParameters: CreateCustomFieldRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2004>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling createCustomField.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling createCustomField.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling createCustomField.');
        }

        if (requestParameters.customField === null || requestParameters.customField === undefined) {
            throw new runtime.RequiredError('customField','Required parameter requestParameters.customField was null or undefined when calling createCustomField.');
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
            path: `/catalog/products/{product_id}/custom-fields`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CustomField1ToJSON(requestParameters.customField),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2004FromJSON(jsonValue));
    }

    /**
     * Creates a *Custom Field*.  **Required Fields:** - name - value  **Read-Only:** - id  **Limits** - 200 custom fields per product limit. - 255 characters per custom field limit.
     * Create a Custom Fields
     */
    async createCustomField(requestParameters: CreateCustomFieldRequest, initOverrides?: RequestInit): Promise<InlineResponse2004> {
        const response = await this.createCustomFieldRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a product *Custom Field*.
     * Delete a Custom Field
     */
    async deleteCustomFieldByIdRaw(requestParameters: DeleteCustomFieldByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling deleteCustomFieldById.');
        }

        if (requestParameters.customFieldId === null || requestParameters.customFieldId === undefined) {
            throw new runtime.RequiredError('customFieldId','Required parameter requestParameters.customFieldId was null or undefined when calling deleteCustomFieldById.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling deleteCustomFieldById.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling deleteCustomFieldById.');
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
            path: `/catalog/products/{product_id}/custom-fields/{custom_field_id}`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))).replace(`{${"custom_field_id"}}`, encodeURIComponent(String(requestParameters.customFieldId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a product *Custom Field*.
     * Delete a Custom Field
     */
    async deleteCustomFieldById(requestParameters: DeleteCustomFieldByIdRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteCustomFieldByIdRaw(requestParameters, initOverrides);
    }

    /**
     * Returns a single *Custom Field*. Optional parameters can be passed in.
     * Get a Custom Field
     */
    async getCustomFieldByIdRaw(requestParameters: GetCustomFieldByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2005>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling getCustomFieldById.');
        }

        if (requestParameters.customFieldId === null || requestParameters.customFieldId === undefined) {
            throw new runtime.RequiredError('customFieldId','Required parameter requestParameters.customFieldId was null or undefined when calling getCustomFieldById.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling getCustomFieldById.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling getCustomFieldById.');
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
            path: `/catalog/products/{product_id}/custom-fields/{custom_field_id}`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))).replace(`{${"custom_field_id"}}`, encodeURIComponent(String(requestParameters.customFieldId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2005FromJSON(jsonValue));
    }

    /**
     * Returns a single *Custom Field*. Optional parameters can be passed in.
     * Get a Custom Field
     */
    async getCustomFieldById(requestParameters: GetCustomFieldByIdRequest, initOverrides?: RequestInit): Promise<InlineResponse2005> {
        const response = await this.getCustomFieldByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of product *Custom Fields*. Optional parameters can be passed in.
     * Get Custom Fields
     */
    async getCustomFieldsRaw(requestParameters: GetCustomFieldsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2003>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling getCustomFields.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling getCustomFields.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling getCustomFields.');
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
            path: `/catalog/products/{product_id}/custom-fields`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2003FromJSON(jsonValue));
    }

    /**
     * Returns a list of product *Custom Fields*. Optional parameters can be passed in.
     * Get Custom Fields
     */
    async getCustomFields(requestParameters: GetCustomFieldsRequest, initOverrides?: RequestInit): Promise<InlineResponse2003> {
        const response = await this.getCustomFieldsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a *Custom Field*.  **Required Fields** - none  **Read-Only** - id
     * Update a Custom Field
     */
    async updateCustomFieldRaw(requestParameters: UpdateCustomFieldRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2006>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling updateCustomField.');
        }

        if (requestParameters.customFieldId === null || requestParameters.customFieldId === undefined) {
            throw new runtime.RequiredError('customFieldId','Required parameter requestParameters.customFieldId was null or undefined when calling updateCustomField.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling updateCustomField.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling updateCustomField.');
        }

        if (requestParameters.customField === null || requestParameters.customField === undefined) {
            throw new runtime.RequiredError('customField','Required parameter requestParameters.customField was null or undefined when calling updateCustomField.');
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
            path: `/catalog/products/{product_id}/custom-fields/{custom_field_id}`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))).replace(`{${"custom_field_id"}}`, encodeURIComponent(String(requestParameters.customFieldId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CustomField2ToJSON(requestParameters.customField),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2006FromJSON(jsonValue));
    }

    /**
     * Updates a *Custom Field*.  **Required Fields** - none  **Read-Only** - id
     * Update a Custom Field
     */
    async updateCustomField(requestParameters: UpdateCustomFieldRequest, initOverrides?: RequestInit): Promise<InlineResponse2006> {
        const response = await this.updateCustomFieldRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
