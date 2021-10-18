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
    Brand,
    BrandFromJSON,
    BrandToJSON,
    Brand1,
    Brand1FromJSON,
    Brand1ToJSON,
    BrandCollectionResponse,
    BrandCollectionResponseFromJSON,
    BrandCollectionResponseToJSON,
    BrandResponse,
    BrandResponseFromJSON,
    BrandResponseToJSON,
    BrandResponse1,
    BrandResponse1FromJSON,
    BrandResponse1ToJSON,
    BrandResponse2,
    BrandResponse2FromJSON,
    BrandResponse2ToJSON,
    ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    NotFound,
    NotFoundFromJSON,
    NotFoundToJSON,
} from '../models';

export interface CreateBrandRequest {
    accept: string;
    contentType: string;
    brand: Brand;
}

export interface DeleteBrandByIdRequest {
    brandId: number;
    accept: string;
    contentType: string;
}

export interface DeleteBrandsRequest {
    accept: string;
    contentType: string;
    name?: string;
    pageTitle?: string;
}

export interface GetBrandByIdRequest {
    brandId: number;
    contentType: string;
    accept: string;
    includeFields?: string;
    excludeFields?: string;
}

export interface GetBrandsRequest {
    accept: string;
    contentType: string;
    id?: number;
    idin?: Array<number>;
    idnotIn?: Array<number>;
    idmin?: Array<number>;
    idmax?: Array<number>;
    idgreater?: Array<number>;
    idless?: Array<number>;
    name?: string;
    pageTitle?: string;
    page?: number;
    limit?: number;
    includeFields?: string;
    excludeFields?: string;
}

export interface UpdateBrandRequest {
    brandId: number;
    contentType: string;
    accept: string;
    brand: Brand1;
}

/**
 * 
 */
export class BrandsApi extends runtime.BaseAPI {

    /**
     * Creates a *Brand*.  **Required Fields** - name  **Read-Only Fields** - id  **Limits** - 30,000 brands per store limit
     * Create a Brand
     */
    async createBrandRaw(requestParameters: CreateBrandRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<BrandResponse>> {
        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling createBrand.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling createBrand.');
        }

        if (requestParameters.brand === null || requestParameters.brand === undefined) {
            throw new runtime.RequiredError('brand','Required parameter requestParameters.brand was null or undefined when calling createBrand.');
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
            path: `/catalog/brands`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BrandToJSON(requestParameters.brand),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BrandResponseFromJSON(jsonValue));
    }

    /**
     * Creates a *Brand*.  **Required Fields** - name  **Read-Only Fields** - id  **Limits** - 30,000 brands per store limit
     * Create a Brand
     */
    async createBrand(requestParameters: CreateBrandRequest, initOverrides?: RequestInit): Promise<BrandResponse> {
        const response = await this.createBrandRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a *Brand*.
     * Delete a Brand
     */
    async deleteBrandByIdRaw(requestParameters: DeleteBrandByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.brandId === null || requestParameters.brandId === undefined) {
            throw new runtime.RequiredError('brandId','Required parameter requestParameters.brandId was null or undefined when calling deleteBrandById.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling deleteBrandById.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling deleteBrandById.');
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
            path: `/catalog/brands/{brand_id}`.replace(`{${"brand_id"}}`, encodeURIComponent(String(requestParameters.brandId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a *Brand*.
     * Delete a Brand
     */
    async deleteBrandById(requestParameters: DeleteBrandByIdRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteBrandByIdRaw(requestParameters, initOverrides);
    }

    /**
     * By default, it deletes all *Brand* objects. A filter should be added to avoid deleting all *Brand* objects in a store.
     * Delete Brands
     */
    async deleteBrandsRaw(requestParameters: DeleteBrandsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling deleteBrands.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling deleteBrands.');
        }

        const queryParameters: any = {};

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        if (requestParameters.pageTitle !== undefined) {
            queryParameters['page_title'] = requestParameters.pageTitle;
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
            path: `/catalog/brands`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * By default, it deletes all *Brand* objects. A filter should be added to avoid deleting all *Brand* objects in a store.
     * Delete Brands
     */
    async deleteBrands(requestParameters: DeleteBrandsRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteBrandsRaw(requestParameters, initOverrides);
    }

    /**
     * Returns a single *Brand*. Optional filter parameters can be passed in.
     * Get a Brand
     */
    async getBrandByIdRaw(requestParameters: GetBrandByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<BrandResponse1>> {
        if (requestParameters.brandId === null || requestParameters.brandId === undefined) {
            throw new runtime.RequiredError('brandId','Required parameter requestParameters.brandId was null or undefined when calling getBrandById.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling getBrandById.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling getBrandById.');
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
            path: `/catalog/brands/{brand_id}`.replace(`{${"brand_id"}}`, encodeURIComponent(String(requestParameters.brandId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BrandResponse1FromJSON(jsonValue));
    }

    /**
     * Returns a single *Brand*. Optional filter parameters can be passed in.
     * Get a Brand
     */
    async getBrandById(requestParameters: GetBrandByIdRequest, initOverrides?: RequestInit): Promise<BrandResponse1> {
        const response = await this.getBrandByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of *Brands*. Optional filter parameters can be passed in.
     * Get All Brands
     */
    async getBrandsRaw(requestParameters: GetBrandsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<BrandCollectionResponse>> {
        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling getBrands.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling getBrands.');
        }

        const queryParameters: any = {};

        if (requestParameters.id !== undefined) {
            queryParameters['id'] = requestParameters.id;
        }

        if (requestParameters.idin) {
            queryParameters['id:in'] = requestParameters.idin.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.idnotIn) {
            queryParameters['id:not_in'] = requestParameters.idnotIn.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.idmin) {
            queryParameters['id:min'] = requestParameters.idmin.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.idmax) {
            queryParameters['id:max'] = requestParameters.idmax.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.idgreater) {
            queryParameters['id:greater'] = requestParameters.idgreater.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.idless) {
            queryParameters['id:less'] = requestParameters.idless.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        if (requestParameters.pageTitle !== undefined) {
            queryParameters['page_title'] = requestParameters.pageTitle;
        }

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
            path: `/catalog/brands`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BrandCollectionResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of *Brands*. Optional filter parameters can be passed in.
     * Get All Brands
     */
    async getBrands(requestParameters: GetBrandsRequest, initOverrides?: RequestInit): Promise<BrandCollectionResponse> {
        const response = await this.getBrandsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a *Brand*.  **Required Fields** - None  **Read-Only Fields** - id  To update a *Brand Image*, send a request with an `image_url`.
     * Update a Brand
     */
    async updateBrandRaw(requestParameters: UpdateBrandRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<BrandResponse2>> {
        if (requestParameters.brandId === null || requestParameters.brandId === undefined) {
            throw new runtime.RequiredError('brandId','Required parameter requestParameters.brandId was null or undefined when calling updateBrand.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling updateBrand.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling updateBrand.');
        }

        if (requestParameters.brand === null || requestParameters.brand === undefined) {
            throw new runtime.RequiredError('brand','Required parameter requestParameters.brand was null or undefined when calling updateBrand.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

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
            path: `/catalog/brands/{brand_id}`.replace(`{${"brand_id"}}`, encodeURIComponent(String(requestParameters.brandId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: Brand1ToJSON(requestParameters.brand),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BrandResponse2FromJSON(jsonValue));
    }

    /**
     * Updates a *Brand*.  **Required Fields** - None  **Read-Only Fields** - id  To update a *Brand Image*, send a request with an `image_url`.
     * Update a Brand
     */
    async updateBrand(requestParameters: UpdateBrandRequest, initOverrides?: RequestInit): Promise<BrandResponse2> {
        const response = await this.updateBrandRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
