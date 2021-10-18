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
    ImageResponse,
    ImageResponseFromJSON,
    ImageResponseToJSON,
    NotFound,
    NotFoundFromJSON,
    NotFoundToJSON,
    ProductVariantPost,
    ProductVariantPostFromJSON,
    ProductVariantPostToJSON,
    ProductVariantPut,
    ProductVariantPutFromJSON,
    ProductVariantPutToJSON,
    ResourceImage,
    ResourceImageFromJSON,
    ResourceImageToJSON,
    VariantCollectionResponse,
    VariantCollectionResponseFromJSON,
    VariantCollectionResponseToJSON,
    VariantResponse,
    VariantResponseFromJSON,
    VariantResponseToJSON,
} from '../models';

export interface CreateVariantRequest {
    productId: number;
    variant: ProductVariantPost;
}

export interface CreateVariantImageRequest {
    productId: number;
    variantId: number;
    body?: ResourceImage;
}

export interface DeleteVariantByIdRequest {
    productId: number;
    variantId: number;
    accept: string;
    contentType: string;
}

export interface GetVariantByIdRequest {
    productId: number;
    variantId: number;
    accept: string;
    contentType: string;
    includeFields?: string;
    excludeFields?: string;
}

export interface GetVariantsByProductIdRequest {
    productId: number;
    accept: string;
    contentType: string;
    page?: number;
    limit?: number;
    includeFields?: string;
    excludeFields?: string;
}

export interface UpdateVariantRequest {
    productId: number;
    variantId: number;
    accept: string;
    contentType: string;
    variant: ProductVariantPut;
}

/**
 * 
 */
export class ProductVariantsApi extends runtime.BaseAPI {

    /**
     * Creates a *Product Variant*.  **Required Fields** * sku * option_values  **Read-Only Fields** * id  **Limits** * 600 SKUs per product limit. * 255 characters SKU length limit.  Variants need to be created one at a time using this endpoint. To use a variant array and create products and variants in the same call use the [Create Products](/api-reference/catalog/catalog-api/products/createproduct) during the initial product creation.
     * Create a Product Variant
     */
    async createVariantRaw(requestParameters: CreateVariantRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<VariantResponse>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling createVariant.');
        }

        if (requestParameters.variant === null || requestParameters.variant === undefined) {
            throw new runtime.RequiredError('variant','Required parameter requestParameters.variant was null or undefined when calling createVariant.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/catalog/products/{product_id}/variants`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ProductVariantPostToJSON(requestParameters.variant),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VariantResponseFromJSON(jsonValue));
    }

    /**
     * Creates a *Product Variant*.  **Required Fields** * sku * option_values  **Read-Only Fields** * id  **Limits** * 600 SKUs per product limit. * 255 characters SKU length limit.  Variants need to be created one at a time using this endpoint. To use a variant array and create products and variants in the same call use the [Create Products](/api-reference/catalog/catalog-api/products/createproduct) during the initial product creation.
     * Create a Product Variant
     */
    async createVariant(requestParameters: CreateVariantRequest, initOverrides?: RequestInit): Promise<VariantResponse> {
        const response = await this.createVariantRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates a *Variant Image*.  The image will show on the storefront when the value is selected.   **Required Fields** - image_file: Form posts. Files larger than 1 MB are not accepted - image_url: Any publicly available URL
     * Create a Variant Image
     */
    async createVariantImageRaw(requestParameters: CreateVariantImageRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ImageResponse>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling createVariantImage.');
        }

        if (requestParameters.variantId === null || requestParameters.variantId === undefined) {
            throw new runtime.RequiredError('variantId','Required parameter requestParameters.variantId was null or undefined when calling createVariantImage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/catalog/products/{product_id}/variants/{variant_id}/image`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))).replace(`{${"variant_id"}}`, encodeURIComponent(String(requestParameters.variantId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ResourceImageToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ImageResponseFromJSON(jsonValue));
    }

    /**
     * Creates a *Variant Image*.  The image will show on the storefront when the value is selected.   **Required Fields** - image_file: Form posts. Files larger than 1 MB are not accepted - image_url: Any publicly available URL
     * Create a Variant Image
     */
    async createVariantImage(requestParameters: CreateVariantImageRequest, initOverrides?: RequestInit): Promise<ImageResponse> {
        const response = await this.createVariantImageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a product *Variant*.
     * Delete a Product Variant
     */
    async deleteVariantByIdRaw(requestParameters: DeleteVariantByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling deleteVariantById.');
        }

        if (requestParameters.variantId === null || requestParameters.variantId === undefined) {
            throw new runtime.RequiredError('variantId','Required parameter requestParameters.variantId was null or undefined when calling deleteVariantById.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling deleteVariantById.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling deleteVariantById.');
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
            path: `/catalog/products/{product_id}/variants/{variant_id}`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))).replace(`{${"variant_id"}}`, encodeURIComponent(String(requestParameters.variantId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a product *Variant*.
     * Delete a Product Variant
     */
    async deleteVariantById(requestParameters: DeleteVariantByIdRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteVariantByIdRaw(requestParameters, initOverrides);
    }

    /**
     * Returns a single product *Variant*. Optional parameters can be passed in.
     * Get a Product Variant
     */
    async getVariantByIdRaw(requestParameters: GetVariantByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<VariantResponse>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling getVariantById.');
        }

        if (requestParameters.variantId === null || requestParameters.variantId === undefined) {
            throw new runtime.RequiredError('variantId','Required parameter requestParameters.variantId was null or undefined when calling getVariantById.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling getVariantById.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling getVariantById.');
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
            path: `/catalog/products/{product_id}/variants/{variant_id}`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))).replace(`{${"variant_id"}}`, encodeURIComponent(String(requestParameters.variantId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VariantResponseFromJSON(jsonValue));
    }

    /**
     * Returns a single product *Variant*. Optional parameters can be passed in.
     * Get a Product Variant
     */
    async getVariantById(requestParameters: GetVariantByIdRequest, initOverrides?: RequestInit): Promise<VariantResponse> {
        const response = await this.getVariantByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of product *Variants*. Optional parameters can be passed in.
     * Get All Product Variants
     */
    async getVariantsByProductIdRaw(requestParameters: GetVariantsByProductIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<VariantCollectionResponse>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling getVariantsByProductId.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling getVariantsByProductId.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling getVariantsByProductId.');
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
            path: `/catalog/products/{product_id}/variants`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VariantCollectionResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of product *Variants*. Optional parameters can be passed in.
     * Get All Product Variants
     */
    async getVariantsByProductId(requestParameters: GetVariantsByProductIdRequest, initOverrides?: RequestInit): Promise<VariantCollectionResponse> {
        const response = await this.getVariantsByProductIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a product *Variant*.
     * Update a Product Variant
     */
    async updateVariantRaw(requestParameters: UpdateVariantRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<VariantResponse>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling updateVariant.');
        }

        if (requestParameters.variantId === null || requestParameters.variantId === undefined) {
            throw new runtime.RequiredError('variantId','Required parameter requestParameters.variantId was null or undefined when calling updateVariant.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling updateVariant.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling updateVariant.');
        }

        if (requestParameters.variant === null || requestParameters.variant === undefined) {
            throw new runtime.RequiredError('variant','Required parameter requestParameters.variant was null or undefined when calling updateVariant.');
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
            path: `/catalog/products/{product_id}/variants/{variant_id}`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))).replace(`{${"variant_id"}}`, encodeURIComponent(String(requestParameters.variantId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ProductVariantPutToJSON(requestParameters.variant),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VariantResponseFromJSON(jsonValue));
    }

    /**
     * Updates a product *Variant*.
     * Update a Product Variant
     */
    async updateVariant(requestParameters: UpdateVariantRequest, initOverrides?: RequestInit): Promise<VariantResponse> {
        const response = await this.updateVariantRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
