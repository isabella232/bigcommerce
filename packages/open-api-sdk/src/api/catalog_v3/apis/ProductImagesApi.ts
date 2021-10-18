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
    InlineResponse422,
    InlineResponse422FromJSON,
    InlineResponse422ToJSON,
    NotFound,
    NotFoundFromJSON,
    NotFoundToJSON,
    ProductImageCollectionResponse,
    ProductImageCollectionResponseFromJSON,
    ProductImageCollectionResponseToJSON,
    ProductImagePut,
    ProductImagePutFromJSON,
    ProductImagePutToJSON,
    ProductImageResponse,
    ProductImageResponseFromJSON,
    ProductImageResponseToJSON,
    ProductImageResponse1,
    ProductImageResponse1FromJSON,
    ProductImageResponse1ToJSON,
    ProductImageResponse2,
    ProductImageResponse2FromJSON,
    ProductImageResponse2ToJSON,
    UNKNOWN_BASE_TYPE,
    UNKNOWN_BASE_TYPEFromJSON,
    UNKNOWN_BASE_TYPEToJSON,
} from '../models';

export interface CreateProductImageRequest {
    productId: number;
    accept: string;
    contentType: string;
    productImage: UNKNOWN_BASE_TYPE;
}

export interface DeleteProductImageRequest {
    productId: number;
    imageId: number;
    accept: string;
    contentType: string;
}

export interface GetProductImageByIdRequest {
    productId: number;
    imageId: number;
    accept: string;
    contentType: string;
    includeFields?: string;
    excludeFields?: string;
}

export interface GetProductImagesRequest {
    productId: number;
    accept: string;
    contentType: string;
    page?: number;
    limit?: number;
    includeFields?: string;
    excludeFields?: string;
}

export interface UpdateProductImageRequest {
    productId: number;
    imageId: number;
    accept: string;
    contentType: string;
    productImage: ProductImagePut;
}

/**
 * 
 */
export class ProductImagesApi extends runtime.BaseAPI {

    /**
     * Creates a *Product Image*.   **Required Fields** - `image_file`, or - `image_url`  **Usage Notes** - `image_url` - `255` character limit - For file uploads, use the `multipart/form-data` media type - Only one image at a time can be created - Supported image file types are BMP, GIF, JPEG, PNG, WBMP, XBM, and WEBP.
     * Create a Product Image
     */
    async createProductImageRaw(requestParameters: CreateProductImageRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ProductImageResponse>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling createProductImage.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling createProductImage.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling createProductImage.');
        }

        if (requestParameters.productImage === null || requestParameters.productImage === undefined) {
            throw new runtime.RequiredError('productImage','Required parameter requestParameters.productImage was null or undefined when calling createProductImage.');
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
            path: `/catalog/products/{product_id}/images`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UNKNOWN_BASE_TYPEToJSON(requestParameters.productImage),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductImageResponseFromJSON(jsonValue));
    }

    /**
     * Creates a *Product Image*.   **Required Fields** - `image_file`, or - `image_url`  **Usage Notes** - `image_url` - `255` character limit - For file uploads, use the `multipart/form-data` media type - Only one image at a time can be created - Supported image file types are BMP, GIF, JPEG, PNG, WBMP, XBM, and WEBP.
     * Create a Product Image
     */
    async createProductImage(requestParameters: CreateProductImageRequest, initOverrides?: RequestInit): Promise<ProductImageResponse> {
        const response = await this.createProductImageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a *Product Image*.
     * Delete a Product Image
     */
    async deleteProductImageRaw(requestParameters: DeleteProductImageRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling deleteProductImage.');
        }

        if (requestParameters.imageId === null || requestParameters.imageId === undefined) {
            throw new runtime.RequiredError('imageId','Required parameter requestParameters.imageId was null or undefined when calling deleteProductImage.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling deleteProductImage.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling deleteProductImage.');
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
            path: `/catalog/products/{product_id}/images/{image_id}`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))).replace(`{${"image_id"}}`, encodeURIComponent(String(requestParameters.imageId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a *Product Image*.
     * Delete a Product Image
     */
    async deleteProductImage(requestParameters: DeleteProductImageRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteProductImageRaw(requestParameters, initOverrides);
    }

    /**
     * Returns a single *Product Image*. Optional parameters can be passed in.
     * Get a Product Image
     */
    async getProductImageByIdRaw(requestParameters: GetProductImageByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ProductImageResponse1>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling getProductImageById.');
        }

        if (requestParameters.imageId === null || requestParameters.imageId === undefined) {
            throw new runtime.RequiredError('imageId','Required parameter requestParameters.imageId was null or undefined when calling getProductImageById.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling getProductImageById.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling getProductImageById.');
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
            path: `/catalog/products/{product_id}/images/{image_id}`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))).replace(`{${"image_id"}}`, encodeURIComponent(String(requestParameters.imageId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductImageResponse1FromJSON(jsonValue));
    }

    /**
     * Returns a single *Product Image*. Optional parameters can be passed in.
     * Get a Product Image
     */
    async getProductImageById(requestParameters: GetProductImageByIdRequest, initOverrides?: RequestInit): Promise<ProductImageResponse1> {
        const response = await this.getProductImageByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of *Product Images*. Optional parameters can be passed in.
     * Get All Product Images
     */
    async getProductImagesRaw(requestParameters: GetProductImagesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ProductImageCollectionResponse>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling getProductImages.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling getProductImages.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling getProductImages.');
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
            path: `/catalog/products/{product_id}/images`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductImageCollectionResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of *Product Images*. Optional parameters can be passed in.
     * Get All Product Images
     */
    async getProductImages(requestParameters: GetProductImagesRequest, initOverrides?: RequestInit): Promise<ProductImageCollectionResponse> {
        const response = await this.getProductImagesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a *Product Image*.  **Usage Notes** - `image_url` - `255` character limit - For file uploads, send a POST request using the `multipart/form-data` media type
     * Update a Product Image
     */
    async updateProductImageRaw(requestParameters: UpdateProductImageRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ProductImageResponse2>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling updateProductImage.');
        }

        if (requestParameters.imageId === null || requestParameters.imageId === undefined) {
            throw new runtime.RequiredError('imageId','Required parameter requestParameters.imageId was null or undefined when calling updateProductImage.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling updateProductImage.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling updateProductImage.');
        }

        if (requestParameters.productImage === null || requestParameters.productImage === undefined) {
            throw new runtime.RequiredError('productImage','Required parameter requestParameters.productImage was null or undefined when calling updateProductImage.');
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
            path: `/catalog/products/{product_id}/images/{image_id}`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))).replace(`{${"image_id"}}`, encodeURIComponent(String(requestParameters.imageId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ProductImagePutToJSON(requestParameters.productImage),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductImageResponse2FromJSON(jsonValue));
    }

    /**
     * Updates a *Product Image*.  **Usage Notes** - `image_url` - `255` character limit - For file uploads, send a POST request using the `multipart/form-data` media type
     * Update a Product Image
     */
    async updateProductImage(requestParameters: UpdateProductImageRequest, initOverrides?: RequestInit): Promise<ProductImageResponse2> {
        const response = await this.updateProductImageRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
