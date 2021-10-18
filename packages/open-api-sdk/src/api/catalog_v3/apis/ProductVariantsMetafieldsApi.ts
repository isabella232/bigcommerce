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
    MetaFieldCollectionResponse,
    MetaFieldCollectionResponseFromJSON,
    MetaFieldCollectionResponseToJSON,
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

export interface CreateVariantMetafieldRequest {
    productId: number;
    variantId: number;
    accept: string;
    contentType: string;
    metafield: MetafieldPost;
}

export interface DeleteVariantMetafieldByIdRequest {
    metafieldId: number;
    productId: number;
    variantId: number;
    accept: string;
    contentType: string;
}

export interface GetVariantMetafieldByProductIdAndVariantIdRequest {
    metafieldId: number;
    productId: number;
    variantId: number;
    accept: string;
    contentType: string;
    includeFields?: string;
    excludeFields?: string;
}

export interface GetVariantMetafieldsByProductIdAndVariantIdRequest {
    productId: number;
    variantId: number;
    accept: string;
    contentType: string;
    page?: number;
    limit?: number;
    key?: string;
    namespace?: string;
    includeFields?: string;
    excludeFields?: string;
}

export interface UpdateVariantMetafieldRequest {
    metafieldId: number;
    productId: number;
    variantId: number;
    accept: string;
    contentType: string;
    metafield: MetafieldPut;
}

/**
 * 
 */
export class ProductVariantsMetafieldsApi extends runtime.BaseAPI {

    /**
     * Creates a product variant *Metafield*.  **Required Fields:** * permission_set * namespace * key * value  **Read-Only Fields** * id  **Note:** The max number of metafields allowed on each product, category, variant, or brand is fifty. For more information, see [Platform Limits](https://support.bigcommerce.com/s/article/Platform-Limits) in the Help Center.
     * Create a Product Variant Metafield
     */
    async createVariantMetafieldRaw(requestParameters: CreateVariantMetafieldRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<MetafieldResponse>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling createVariantMetafield.');
        }

        if (requestParameters.variantId === null || requestParameters.variantId === undefined) {
            throw new runtime.RequiredError('variantId','Required parameter requestParameters.variantId was null or undefined when calling createVariantMetafield.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling createVariantMetafield.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling createVariantMetafield.');
        }

        if (requestParameters.metafield === null || requestParameters.metafield === undefined) {
            throw new runtime.RequiredError('metafield','Required parameter requestParameters.metafield was null or undefined when calling createVariantMetafield.');
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
            path: `/catalog/products/{product_id}/variants/{variant_id}/metafields`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))).replace(`{${"variant_id"}}`, encodeURIComponent(String(requestParameters.variantId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MetafieldPostToJSON(requestParameters.metafield),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MetafieldResponseFromJSON(jsonValue));
    }

    /**
     * Creates a product variant *Metafield*.  **Required Fields:** * permission_set * namespace * key * value  **Read-Only Fields** * id  **Note:** The max number of metafields allowed on each product, category, variant, or brand is fifty. For more information, see [Platform Limits](https://support.bigcommerce.com/s/article/Platform-Limits) in the Help Center.
     * Create a Product Variant Metafield
     */
    async createVariantMetafield(requestParameters: CreateVariantMetafieldRequest, initOverrides?: RequestInit): Promise<MetafieldResponse> {
        const response = await this.createVariantMetafieldRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a product variant *Metafield*.
     * Delete a Variant Metafield
     */
    async deleteVariantMetafieldByIdRaw(requestParameters: DeleteVariantMetafieldByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.metafieldId === null || requestParameters.metafieldId === undefined) {
            throw new runtime.RequiredError('metafieldId','Required parameter requestParameters.metafieldId was null or undefined when calling deleteVariantMetafieldById.');
        }

        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling deleteVariantMetafieldById.');
        }

        if (requestParameters.variantId === null || requestParameters.variantId === undefined) {
            throw new runtime.RequiredError('variantId','Required parameter requestParameters.variantId was null or undefined when calling deleteVariantMetafieldById.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling deleteVariantMetafieldById.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling deleteVariantMetafieldById.');
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
            path: `/catalog/products/{product_id}/variants/{variant_id}/metafields/{metafield_id}`.replace(`{${"metafield_id"}}`, encodeURIComponent(String(requestParameters.metafieldId))).replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))).replace(`{${"variant_id"}}`, encodeURIComponent(String(requestParameters.variantId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a product variant *Metafield*.
     * Delete a Variant Metafield
     */
    async deleteVariantMetafieldById(requestParameters: DeleteVariantMetafieldByIdRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteVariantMetafieldByIdRaw(requestParameters, initOverrides);
    }

    /**
     * Returns a single product variant *Metafield*. Optional parameters can be passed in.
     * Get a Product Variant Metafields
     */
    async getVariantMetafieldByProductIdAndVariantIdRaw(requestParameters: GetVariantMetafieldByProductIdAndVariantIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<MetafieldResponse1>> {
        if (requestParameters.metafieldId === null || requestParameters.metafieldId === undefined) {
            throw new runtime.RequiredError('metafieldId','Required parameter requestParameters.metafieldId was null or undefined when calling getVariantMetafieldByProductIdAndVariantId.');
        }

        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling getVariantMetafieldByProductIdAndVariantId.');
        }

        if (requestParameters.variantId === null || requestParameters.variantId === undefined) {
            throw new runtime.RequiredError('variantId','Required parameter requestParameters.variantId was null or undefined when calling getVariantMetafieldByProductIdAndVariantId.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling getVariantMetafieldByProductIdAndVariantId.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling getVariantMetafieldByProductIdAndVariantId.');
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
            path: `/catalog/products/{product_id}/variants/{variant_id}/metafields/{metafield_id}`.replace(`{${"metafield_id"}}`, encodeURIComponent(String(requestParameters.metafieldId))).replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))).replace(`{${"variant_id"}}`, encodeURIComponent(String(requestParameters.variantId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MetafieldResponse1FromJSON(jsonValue));
    }

    /**
     * Returns a single product variant *Metafield*. Optional parameters can be passed in.
     * Get a Product Variant Metafields
     */
    async getVariantMetafieldByProductIdAndVariantId(requestParameters: GetVariantMetafieldByProductIdAndVariantIdRequest, initOverrides?: RequestInit): Promise<MetafieldResponse1> {
        const response = await this.getVariantMetafieldByProductIdAndVariantIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of product variant *Metafields*. Optional parameters can be passed in.
     * Get All Product Variant Metafields
     */
    async getVariantMetafieldsByProductIdAndVariantIdRaw(requestParameters: GetVariantMetafieldsByProductIdAndVariantIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<MetaFieldCollectionResponse>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling getVariantMetafieldsByProductIdAndVariantId.');
        }

        if (requestParameters.variantId === null || requestParameters.variantId === undefined) {
            throw new runtime.RequiredError('variantId','Required parameter requestParameters.variantId was null or undefined when calling getVariantMetafieldsByProductIdAndVariantId.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling getVariantMetafieldsByProductIdAndVariantId.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling getVariantMetafieldsByProductIdAndVariantId.');
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
            path: `/catalog/products/{product_id}/variants/{variant_id}/metafields`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))).replace(`{${"variant_id"}}`, encodeURIComponent(String(requestParameters.variantId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MetaFieldCollectionResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of product variant *Metafields*. Optional parameters can be passed in.
     * Get All Product Variant Metafields
     */
    async getVariantMetafieldsByProductIdAndVariantId(requestParameters: GetVariantMetafieldsByProductIdAndVariantIdRequest, initOverrides?: RequestInit): Promise<MetaFieldCollectionResponse> {
        const response = await this.getVariantMetafieldsByProductIdAndVariantIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a product variant *Metafield*.  **Required Fields:** * none  **Read-Only Fields** * id * These fields can only be modified by the app (API credentials) that created the metafield:  * namespace  * key  * permission_set  **Usage Notes** * Attempting to modify `namespace`, `key`, and `permission_set` fields using a client ID different from the one used to create those metafields will result in a 403 error message. 
     * Update Product Variant Metafields
     */
    async updateVariantMetafieldRaw(requestParameters: UpdateVariantMetafieldRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<MetafieldResponse1>> {
        if (requestParameters.metafieldId === null || requestParameters.metafieldId === undefined) {
            throw new runtime.RequiredError('metafieldId','Required parameter requestParameters.metafieldId was null or undefined when calling updateVariantMetafield.');
        }

        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling updateVariantMetafield.');
        }

        if (requestParameters.variantId === null || requestParameters.variantId === undefined) {
            throw new runtime.RequiredError('variantId','Required parameter requestParameters.variantId was null or undefined when calling updateVariantMetafield.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling updateVariantMetafield.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling updateVariantMetafield.');
        }

        if (requestParameters.metafield === null || requestParameters.metafield === undefined) {
            throw new runtime.RequiredError('metafield','Required parameter requestParameters.metafield was null or undefined when calling updateVariantMetafield.');
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
            path: `/catalog/products/{product_id}/variants/{variant_id}/metafields/{metafield_id}`.replace(`{${"metafield_id"}}`, encodeURIComponent(String(requestParameters.metafieldId))).replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))).replace(`{${"variant_id"}}`, encodeURIComponent(String(requestParameters.variantId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: MetafieldPutToJSON(requestParameters.metafield),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MetafieldResponse1FromJSON(jsonValue));
    }

    /**
     * Updates a product variant *Metafield*.  **Required Fields:** * none  **Read-Only Fields** * id * These fields can only be modified by the app (API credentials) that created the metafield:  * namespace  * key  * permission_set  **Usage Notes** * Attempting to modify `namespace`, `key`, and `permission_set` fields using a client ID different from the one used to create those metafields will result in a 403 error message. 
     * Update Product Variant Metafields
     */
    async updateVariantMetafield(requestParameters: UpdateVariantMetafieldRequest, initOverrides?: RequestInit): Promise<MetafieldResponse1> {
        const response = await this.updateVariantMetafieldRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
