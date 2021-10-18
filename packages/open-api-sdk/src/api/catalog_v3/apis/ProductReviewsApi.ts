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
    NotFound,
    NotFoundFromJSON,
    NotFoundToJSON,
    ProductReviewCollectionResponse,
    ProductReviewCollectionResponseFromJSON,
    ProductReviewCollectionResponseToJSON,
    ProductReviewResponse,
    ProductReviewResponseFromJSON,
    ProductReviewResponseToJSON,
    UNKNOWN_BASE_TYPE,
    UNKNOWN_BASE_TYPEFromJSON,
    UNKNOWN_BASE_TYPEToJSON,
} from '../models';

export interface CreateProductReviewRequest {
    productId: number;
    accept: string;
    contentType: string;
    productReview: UNKNOWN_BASE_TYPE;
}

export interface DeleteProductReviewRequest {
    productId: number;
    reviewId: number;
    accept: string;
    contentType: string;
}

export interface GetProductReviewByIdRequest {
    productId: number;
    reviewId: number;
    accept: string;
    contentType: string;
    includeFields?: string;
    excludeFields?: string;
}

export interface GetProductReviewsRequest {
    productId: number;
    accept: string;
    contentType: string;
    includeFields?: string;
    excludeFields?: string;
    page?: number;
    limit?: number;
    status?: number;
}

export interface UpdateProductReviewRequest {
    productId: number;
    reviewId: number;
    accept: string;
    contentType: string;
    productReview: UNKNOWN_BASE_TYPE;
}

/**
 * 
 */
export class ProductReviewsApi extends runtime.BaseAPI {

    /**
     * Creates a *Product Review*.  **Required Fields** - title - date_reviewed  **Read-Only Fields** * id
     * Create a Product Review
     */
    async createProductReviewRaw(requestParameters: CreateProductReviewRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ProductReviewResponse>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling createProductReview.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling createProductReview.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling createProductReview.');
        }

        if (requestParameters.productReview === null || requestParameters.productReview === undefined) {
            throw new runtime.RequiredError('productReview','Required parameter requestParameters.productReview was null or undefined when calling createProductReview.');
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
            path: `/catalog/products/{product_id}/reviews`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UNKNOWN_BASE_TYPEToJSON(requestParameters.productReview),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductReviewResponseFromJSON(jsonValue));
    }

    /**
     * Creates a *Product Review*.  **Required Fields** - title - date_reviewed  **Read-Only Fields** * id
     * Create a Product Review
     */
    async createProductReview(requestParameters: CreateProductReviewRequest, initOverrides?: RequestInit): Promise<ProductReviewResponse> {
        const response = await this.createProductReviewRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a *Product Review*.
     * Delete a Product Review
     */
    async deleteProductReviewRaw(requestParameters: DeleteProductReviewRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling deleteProductReview.');
        }

        if (requestParameters.reviewId === null || requestParameters.reviewId === undefined) {
            throw new runtime.RequiredError('reviewId','Required parameter requestParameters.reviewId was null or undefined when calling deleteProductReview.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling deleteProductReview.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling deleteProductReview.');
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
            path: `/catalog/products/{product_id}/reviews/{review_id}`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))).replace(`{${"review_id"}}`, encodeURIComponent(String(requestParameters.reviewId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a *Product Review*.
     * Delete a Product Review
     */
    async deleteProductReview(requestParameters: DeleteProductReviewRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteProductReviewRaw(requestParameters, initOverrides);
    }

    /**
     * Returns a single *Product Review*. Optional parameters maybe passed in.
     * Get a Product Review
     */
    async getProductReviewByIdRaw(requestParameters: GetProductReviewByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ProductReviewResponse>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling getProductReviewById.');
        }

        if (requestParameters.reviewId === null || requestParameters.reviewId === undefined) {
            throw new runtime.RequiredError('reviewId','Required parameter requestParameters.reviewId was null or undefined when calling getProductReviewById.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling getProductReviewById.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling getProductReviewById.');
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
            path: `/catalog/products/{product_id}/reviews/{review_id}`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))).replace(`{${"review_id"}}`, encodeURIComponent(String(requestParameters.reviewId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductReviewResponseFromJSON(jsonValue));
    }

    /**
     * Returns a single *Product Review*. Optional parameters maybe passed in.
     * Get a Product Review
     */
    async getProductReviewById(requestParameters: GetProductReviewByIdRequest, initOverrides?: RequestInit): Promise<ProductReviewResponse> {
        const response = await this.getProductReviewByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of all *Product Reviews*. Optional parameters can be passed in.
     * Get Product Reviews
     */
    async getProductReviewsRaw(requestParameters: GetProductReviewsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ProductReviewCollectionResponse>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling getProductReviews.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling getProductReviews.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling getProductReviews.');
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

        if (requestParameters.status !== undefined) {
            queryParameters['status'] = requestParameters.status;
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
            path: `/catalog/products/{product_id}/reviews`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductReviewCollectionResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of all *Product Reviews*. Optional parameters can be passed in.
     * Get Product Reviews
     */
    async getProductReviews(requestParameters: GetProductReviewsRequest, initOverrides?: RequestInit): Promise<ProductReviewCollectionResponse> {
        const response = await this.getProductReviewsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a *Product Review*.  **Required Fields** * none  **Read-Only Fields** * id
     * Update a Product Review
     */
    async updateProductReviewRaw(requestParameters: UpdateProductReviewRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ProductReviewResponse>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling updateProductReview.');
        }

        if (requestParameters.reviewId === null || requestParameters.reviewId === undefined) {
            throw new runtime.RequiredError('reviewId','Required parameter requestParameters.reviewId was null or undefined when calling updateProductReview.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling updateProductReview.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling updateProductReview.');
        }

        if (requestParameters.productReview === null || requestParameters.productReview === undefined) {
            throw new runtime.RequiredError('productReview','Required parameter requestParameters.productReview was null or undefined when calling updateProductReview.');
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
            path: `/catalog/products/{product_id}/reviews/{review_id}`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))).replace(`{${"review_id"}}`, encodeURIComponent(String(requestParameters.reviewId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UNKNOWN_BASE_TYPEToJSON(requestParameters.productReview),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductReviewResponseFromJSON(jsonValue));
    }

    /**
     * Updates a *Product Review*.  **Required Fields** * none  **Read-Only Fields** * id
     * Update a Product Review
     */
    async updateProductReview(requestParameters: UpdateProductReviewRequest, initOverrides?: RequestInit): Promise<ProductReviewResponse> {
        const response = await this.updateProductReviewRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
