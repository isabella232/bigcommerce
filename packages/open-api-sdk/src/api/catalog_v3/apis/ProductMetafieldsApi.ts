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
    MetaFieldCollectionResponse1,
    MetaFieldCollectionResponse1FromJSON,
    MetaFieldCollectionResponse1ToJSON,
    MetafieldPost,
    MetafieldPostFromJSON,
    MetafieldPostToJSON,
    MetafieldPut,
    MetafieldPutFromJSON,
    MetafieldPutToJSON,
    MetafieldResponse,
    MetafieldResponseFromJSON,
    MetafieldResponseToJSON,
    MetafieldResponse1,
    MetafieldResponse1FromJSON,
    MetafieldResponse1ToJSON,
    NotFound,
    NotFoundFromJSON,
    NotFoundToJSON,
} from '../models';

export interface CreateProductMetafieldRequest {
    productId: number;
    accept: string;
    contentType: string;
    metafield: MetafieldPost;
}

export interface DeleteProductMetafieldByIdRequest {
    metafieldId: number;
    productId: number;
    accept: string;
    contentType: string;
}

export interface GetProductMetafieldByProductIdRequest {
    metafieldId: number;
    productId: number;
    accept: string;
    contentType: string;
    includeFields?: string;
    excludeFields?: string;
}

export interface GetProductMetafieldsByProductIdRequest {
    productId: number;
    accept: string;
    contentType: string;
    page?: number;
    limit?: number;
    key?: string;
    namespace?: string;
    includeFields?: string;
    excludeFields?: string;
}

export interface UpdateProductMetafieldRequest {
    metafieldId: number;
    productId: number;
    accept: string;
    contentType: string;
    metafield: MetafieldPut;
}

/**
 * 
 */
export class ProductMetafieldsApi extends runtime.BaseAPI {

    /**
     * Creates a *Product Metafield*.  **Required Fields:** * permission_set * namespace * key * value  **Read-Only Fields** * id  **Note:** The max number of metafields allowed on each product, category, variant, or brand is fifty. For more information, see [Platform Limits](https://support.bigcommerce.com/s/article/Platform-Limits) in the Help Center.
     * Create a Product Metafield
     */
    async createProductMetafieldRaw(requestParameters: CreateProductMetafieldRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<MetafieldResponse1>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling createProductMetafield.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling createProductMetafield.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling createProductMetafield.');
        }

        if (requestParameters.metafield === null || requestParameters.metafield === undefined) {
            throw new runtime.RequiredError('metafield','Required parameter requestParameters.metafield was null or undefined when calling createProductMetafield.');
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
            path: `/catalog/products/{product_id}/metafields`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MetafieldPostToJSON(requestParameters.metafield),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MetafieldResponse1FromJSON(jsonValue));
    }

    /**
     * Creates a *Product Metafield*.  **Required Fields:** * permission_set * namespace * key * value  **Read-Only Fields** * id  **Note:** The max number of metafields allowed on each product, category, variant, or brand is fifty. For more information, see [Platform Limits](https://support.bigcommerce.com/s/article/Platform-Limits) in the Help Center.
     * Create a Product Metafield
     */
    async createProductMetafield(requestParameters: CreateProductMetafieldRequest, initOverrides?: RequestInit): Promise<MetafieldResponse1> {
        const response = await this.createProductMetafieldRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a *Product Metafield*.
     * Delete a Product Metafield
     */
    async deleteProductMetafieldByIdRaw(requestParameters: DeleteProductMetafieldByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.metafieldId === null || requestParameters.metafieldId === undefined) {
            throw new runtime.RequiredError('metafieldId','Required parameter requestParameters.metafieldId was null or undefined when calling deleteProductMetafieldById.');
        }

        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling deleteProductMetafieldById.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling deleteProductMetafieldById.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling deleteProductMetafieldById.');
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
            path: `/catalog/products/{product_id}/metafields/{metafield_id}`.replace(`{${"metafield_id"}}`, encodeURIComponent(String(requestParameters.metafieldId))).replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a *Product Metafield*.
     * Delete a Product Metafield
     */
    async deleteProductMetafieldById(requestParameters: DeleteProductMetafieldByIdRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteProductMetafieldByIdRaw(requestParameters, initOverrides);
    }

    /**
     * Returns a single *Product Metafield*. Optional parameters can be passed in.
     * Get a Product Metafield
     */
    async getProductMetafieldByProductIdRaw(requestParameters: GetProductMetafieldByProductIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<MetafieldResponse>> {
        if (requestParameters.metafieldId === null || requestParameters.metafieldId === undefined) {
            throw new runtime.RequiredError('metafieldId','Required parameter requestParameters.metafieldId was null or undefined when calling getProductMetafieldByProductId.');
        }

        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling getProductMetafieldByProductId.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling getProductMetafieldByProductId.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling getProductMetafieldByProductId.');
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
            path: `/catalog/products/{product_id}/metafields/{metafield_id}`.replace(`{${"metafield_id"}}`, encodeURIComponent(String(requestParameters.metafieldId))).replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MetafieldResponseFromJSON(jsonValue));
    }

    /**
     * Returns a single *Product Metafield*. Optional parameters can be passed in.
     * Get a Product Metafield
     */
    async getProductMetafieldByProductId(requestParameters: GetProductMetafieldByProductIdRequest, initOverrides?: RequestInit): Promise<MetafieldResponse> {
        const response = await this.getProductMetafieldByProductIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of *Product Metafields*. Optional parameters can be passed in.
     * Get All Product Metafields
     */
    async getProductMetafieldsByProductIdRaw(requestParameters: GetProductMetafieldsByProductIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<MetaFieldCollectionResponse1>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling getProductMetafieldsByProductId.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling getProductMetafieldsByProductId.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling getProductMetafieldsByProductId.');
        }

        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.key !== undefined) {
            queryParameters['key'] = requestParameters.key;
        }

        if (requestParameters.namespace !== undefined) {
            queryParameters['namespace'] = requestParameters.namespace;
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
            path: `/catalog/products/{product_id}/metafields`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MetaFieldCollectionResponse1FromJSON(jsonValue));
    }

    /**
     * Returns a list of *Product Metafields*. Optional parameters can be passed in.
     * Get All Product Metafields
     */
    async getProductMetafieldsByProductId(requestParameters: GetProductMetafieldsByProductIdRequest, initOverrides?: RequestInit): Promise<MetaFieldCollectionResponse1> {
        const response = await this.getProductMetafieldsByProductIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a *Product Metafield*.  **Required Fields** * none  **Read-Only Fields** * id * These fields can only be modified by the app (API credentials) that created the metafield:  * namespace  * key  * permission_set  **Usage Notes** * Attempting to modify `namespace`, `key`, and `permission_set` fields using a client ID different from the one used to create those metafields will result in a 403 error message. 
     * Update a Product Metafield
     */
    async updateProductMetafieldRaw(requestParameters: UpdateProductMetafieldRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<MetafieldResponse>> {
        if (requestParameters.metafieldId === null || requestParameters.metafieldId === undefined) {
            throw new runtime.RequiredError('metafieldId','Required parameter requestParameters.metafieldId was null or undefined when calling updateProductMetafield.');
        }

        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling updateProductMetafield.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling updateProductMetafield.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling updateProductMetafield.');
        }

        if (requestParameters.metafield === null || requestParameters.metafield === undefined) {
            throw new runtime.RequiredError('metafield','Required parameter requestParameters.metafield was null or undefined when calling updateProductMetafield.');
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
            path: `/catalog/products/{product_id}/metafields/{metafield_id}`.replace(`{${"metafield_id"}}`, encodeURIComponent(String(requestParameters.metafieldId))).replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: MetafieldPutToJSON(requestParameters.metafield),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MetafieldResponseFromJSON(jsonValue));
    }

    /**
     * Updates a *Product Metafield*.  **Required Fields** * none  **Read-Only Fields** * id * These fields can only be modified by the app (API credentials) that created the metafield:  * namespace  * key  * permission_set  **Usage Notes** * Attempting to modify `namespace`, `key`, and `permission_set` fields using a client ID different from the one used to create those metafields will result in a 403 error message. 
     * Update a Product Metafield
     */
    async updateProductMetafield(requestParameters: UpdateProductMetafieldRequest, initOverrides?: RequestInit): Promise<MetafieldResponse> {
        const response = await this.updateProductMetafieldRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
