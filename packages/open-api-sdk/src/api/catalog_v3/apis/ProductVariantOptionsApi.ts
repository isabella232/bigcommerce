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
    OptionCollectionResponse,
    OptionCollectionResponseFromJSON,
    OptionCollectionResponseToJSON,
    OptionResponse,
    OptionResponseFromJSON,
    OptionResponseToJSON,
    OptionResponse1,
    OptionResponse1FromJSON,
    OptionResponse1ToJSON,
    OptionResponse2,
    OptionResponse2FromJSON,
    OptionResponse2ToJSON,
    UNKNOWN_BASE_TYPE,
    UNKNOWN_BASE_TYPEFromJSON,
    UNKNOWN_BASE_TYPEToJSON,
} from '../models';

export interface CreateOptionRequest {
    productId: number;
    accept: string;
    contentType: string;
    option: UNKNOWN_BASE_TYPE;
}

export interface DeleteOptionByIdRequest {
    productId: number;
    optionId: number;
    accept: string;
    contentType: string;
}

export interface GetOptionByIdRequest {
    productId: number;
    optionId: number;
    contentType: string;
    accept: string;
    includeFields?: string;
    excludeFields?: string;
}

export interface GetOptionsRequest {
    productId: number;
    page?: number;
    limit?: number;
    includeFields?: string;
    excludeFields?: string;
}

export interface UpdateOptionRequest {
    productId: number;
    optionId: number;
    accept: string;
    contentType: string;
    option: UNKNOWN_BASE_TYPE;
}

/**
 * 
 */
export class ProductVariantOptionsApi extends runtime.BaseAPI {

    /**
     * Creates a *Variant Option*.  **Required Fields** * display_name * type * option_values  **Read-Only Fields** * id  **Limits** * 255 characters option name length.  **Notes**  * Only one variant option at a time can be created; individual variant options will contain an array of multiple values. * There are several examples listed below that create options, but the SKU’s are not updated and they are not a variant on the product. Variant SKUs must be created with a separate request. * Variant options will show on the storefront as an option that can be selected by the customer. A request like this could be used to add new choices to a variant that has already been created. * If more than one variant needs to be created use the [Create a Product](/api-reference/catalog/catalog-api/products/createproduct) endpoint.
     * Create a Product Variant Option
     */
    async createOptionRaw(requestParameters: CreateOptionRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<OptionResponse>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling createOption.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling createOption.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling createOption.');
        }

        if (requestParameters.option === null || requestParameters.option === undefined) {
            throw new runtime.RequiredError('option','Required parameter requestParameters.option was null or undefined when calling createOption.');
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
            path: `/catalog/products/{product_id}/options`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UNKNOWN_BASE_TYPEToJSON(requestParameters.option),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OptionResponseFromJSON(jsonValue));
    }

    /**
     * Creates a *Variant Option*.  **Required Fields** * display_name * type * option_values  **Read-Only Fields** * id  **Limits** * 255 characters option name length.  **Notes**  * Only one variant option at a time can be created; individual variant options will contain an array of multiple values. * There are several examples listed below that create options, but the SKU’s are not updated and they are not a variant on the product. Variant SKUs must be created with a separate request. * Variant options will show on the storefront as an option that can be selected by the customer. A request like this could be used to add new choices to a variant that has already been created. * If more than one variant needs to be created use the [Create a Product](/api-reference/catalog/catalog-api/products/createproduct) endpoint.
     * Create a Product Variant Option
     */
    async createOption(requestParameters: CreateOptionRequest, initOverrides?: RequestInit): Promise<OptionResponse> {
        const response = await this.createOptionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a *Variant Option*.
     * Delete a Product Variant Option
     */
    async deleteOptionByIdRaw(requestParameters: DeleteOptionByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling deleteOptionById.');
        }

        if (requestParameters.optionId === null || requestParameters.optionId === undefined) {
            throw new runtime.RequiredError('optionId','Required parameter requestParameters.optionId was null or undefined when calling deleteOptionById.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling deleteOptionById.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling deleteOptionById.');
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
            path: `/catalog/products/{product_id}/options/{option_id}`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))).replace(`{${"option_id"}}`, encodeURIComponent(String(requestParameters.optionId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a *Variant Option*.
     * Delete a Product Variant Option
     */
    async deleteOptionById(requestParameters: DeleteOptionByIdRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteOptionByIdRaw(requestParameters, initOverrides);
    }

    /**
     * Returns a single *Variant Option*. Optional parameters can be passed in.
     * Get a Product Variant Option
     */
    async getOptionByIdRaw(requestParameters: GetOptionByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<OptionResponse1>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling getOptionById.');
        }

        if (requestParameters.optionId === null || requestParameters.optionId === undefined) {
            throw new runtime.RequiredError('optionId','Required parameter requestParameters.optionId was null or undefined when calling getOptionById.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling getOptionById.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling getOptionById.');
        }

        const queryParameters: any = {};

        if (requestParameters.includeFields !== undefined) {
            queryParameters['include_fields'] = requestParameters.includeFields;
        }

        if (requestParameters.excludeFields !== undefined) {
            queryParameters['exclude_fields'] = requestParameters.excludeFields;
        }

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
            path: `/catalog/products/{product_id}/options/{option_id}`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))).replace(`{${"option_id"}}`, encodeURIComponent(String(requestParameters.optionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OptionResponse1FromJSON(jsonValue));
    }

    /**
     * Returns a single *Variant Option*. Optional parameters can be passed in.
     * Get a Product Variant Option
     */
    async getOptionById(requestParameters: GetOptionByIdRequest, initOverrides?: RequestInit): Promise<OptionResponse1> {
        const response = await this.getOptionByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of product *Variant Options*. Optional parameters can be passed in. 
     * Get All Product Variant Options
     */
    async getOptionsRaw(requestParameters: GetOptionsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<OptionCollectionResponse>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling getOptions.');
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

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/catalog/products/{product_id}/options`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OptionCollectionResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of product *Variant Options*. Optional parameters can be passed in. 
     * Get All Product Variant Options
     */
    async getOptions(requestParameters: GetOptionsRequest, initOverrides?: RequestInit): Promise<OptionCollectionResponse> {
        const response = await this.getOptionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a *Variant Option*.  **Read-Only Fields** * id
     * Update a Product Variant Option
     */
    async updateOptionRaw(requestParameters: UpdateOptionRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<OptionResponse2>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling updateOption.');
        }

        if (requestParameters.optionId === null || requestParameters.optionId === undefined) {
            throw new runtime.RequiredError('optionId','Required parameter requestParameters.optionId was null or undefined when calling updateOption.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling updateOption.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling updateOption.');
        }

        if (requestParameters.option === null || requestParameters.option === undefined) {
            throw new runtime.RequiredError('option','Required parameter requestParameters.option was null or undefined when calling updateOption.');
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
            path: `/catalog/products/{product_id}/options/{option_id}`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))).replace(`{${"option_id"}}`, encodeURIComponent(String(requestParameters.optionId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UNKNOWN_BASE_TYPEToJSON(requestParameters.option),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OptionResponse2FromJSON(jsonValue));
    }

    /**
     * Updates a *Variant Option*.  **Read-Only Fields** * id
     * Update a Product Variant Option
     */
    async updateOption(requestParameters: UpdateOptionRequest, initOverrides?: RequestInit): Promise<OptionResponse2> {
        const response = await this.updateOptionRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
