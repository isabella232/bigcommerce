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
    ErrorBase,
    ErrorBaseFromJSON,
    ErrorBaseToJSON,
    ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    ErrorResponse409,
    ErrorResponse409FromJSON,
    ErrorResponse409ToJSON,
    ErrorResponse422,
    ErrorResponse422FromJSON,
    ErrorResponse422ToJSON,
    InlineResponse200,
    InlineResponse200FromJSON,
    InlineResponse200ToJSON,
    NotFound,
    NotFoundFromJSON,
    NotFoundToJSON,
    ProductBase,
    ProductBaseFromJSON,
    ProductBaseToJSON,
    ProductPost,
    ProductPostFromJSON,
    ProductPostToJSON,
    ProductPut,
    ProductPutFromJSON,
    ProductPutToJSON,
    ProductResponse,
    ProductResponseFromJSON,
    ProductResponseToJSON,
} from '../models';

export interface CreateProductRequest {
    contentType: string;
    accept: string;
    product: ProductPost;
    includeFields?: string;
}

export interface DeleteProductByIdRequest {
    productId: number;
    accept: string;
    contentType: string;
}

export interface DeleteProductsRequest {
    accept: string;
    contentType: string;
    name?: string;
    sku?: string;
    price?: number;
    weight?: number;
    condition?: DeleteProductsConditionEnum;
    brandId?: number;
    dateModified?: Date;
    dateLastImported?: Date;
    isVisible?: boolean;
    isFeatured?: number;
    inventoryLevel?: number;
    totalSold?: number;
    type?: DeleteProductsTypeEnum;
    categories?: number;
    keyword?: string;
}

export interface GetProductByIdRequest {
    productId: number;
    accept: string;
    contentType: string;
    include?: GetProductByIdIncludeEnum;
    includeFields?: string;
    excludeFields?: string;
}

export interface GetProductsRequest {
    id?: number;
    idin?: Array<number>;
    idnotIn?: Array<number>;
    idmin?: Array<number>;
    idmax?: Array<number>;
    idgreater?: Array<number>;
    idless?: Array<number>;
    name?: string;
    upc?: string;
    price?: number;
    weight?: number;
    condition?: GetProductsConditionEnum;
    brandId?: number;
    dateModified?: Date;
    dateModifiedmax?: string;
    dateModifiedmin?: string;
    dateLastImported?: Date;
    dateLastImportedmax?: string;
    dateLastImportedmin?: string;
    isVisible?: boolean;
    isFeatured?: GetProductsIsFeaturedEnum;
    isFreeShipping?: number;
    inventoryLevel?: number;
    inventoryLevelin?: number;
    inventoryLevelnotIn?: number;
    inventoryLevelmin?: number;
    inventoryLevelmax?: number;
    inventoryLevelgreater?: number;
    inventoryLevelless?: number;
    inventoryLow?: number;
    outOfStock?: number;
    totalSold?: number;
    type?: GetProductsTypeEnum;
    categories?: number;
    keyword?: string;
    keywordContext?: GetProductsKeywordContextEnum;
    status?: number;
    include?: GetProductsIncludeEnum;
    includeFields?: string;
    excludeFields?: string;
    availability?: GetProductsAvailabilityEnum;
    page?: number;
    limit?: number;
    direction?: GetProductsDirectionEnum;
    sort?: GetProductsSortEnum;
    categoriesin?: number;
    sku?: string;
    skuin?: Array<string>;
}

export interface UpdateProductRequest {
    productId: number;
    accept: string;
    contentType: string;
    product: ProductPut;
    includeFields?: string;
}

export interface UpdateProductsRequest {
    accept: string;
    contentType: string;
    includeFields?: string;
    products?: Array<object & ProductBase>;
}

/**
 * 
 */
export class ProductsApi extends runtime.BaseAPI {

    /**
     * Creates a *Product*. Only one product can be created at a time.  **Required Fields:** - `name` - `type` - `weight` - `price`  **Read-Only Fields** - `id` - `date_created` - `date_modified` - `calculated_price` - `base_variant_id`  **Limits** - 255 characters product name length.  **Usage Notes** * `POST` requests to `/products` accepts a single `video` object; to send an array of video objects, see: `/products/{product_id}/videos`.
     * Create a Product
     */
    async createProductRaw(requestParameters: CreateProductRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ProductResponse>> {
        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling createProduct.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling createProduct.');
        }

        if (requestParameters.product === null || requestParameters.product === undefined) {
            throw new runtime.RequiredError('product','Required parameter requestParameters.product was null or undefined when calling createProduct.');
        }

        const queryParameters: any = {};

        if (requestParameters.includeFields !== undefined) {
            queryParameters['include_fields'] = requestParameters.includeFields;
        }

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
            path: `/catalog/products`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ProductPostToJSON(requestParameters.product),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductResponseFromJSON(jsonValue));
    }

    /**
     * Creates a *Product*. Only one product can be created at a time.  **Required Fields:** - `name` - `type` - `weight` - `price`  **Read-Only Fields** - `id` - `date_created` - `date_modified` - `calculated_price` - `base_variant_id`  **Limits** - 255 characters product name length.  **Usage Notes** * `POST` requests to `/products` accepts a single `video` object; to send an array of video objects, see: `/products/{product_id}/videos`.
     * Create a Product
     */
    async createProduct(requestParameters: CreateProductRequest, initOverrides?: RequestInit): Promise<ProductResponse> {
        const response = await this.createProductRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a *Product*.
     * Delete a Product
     */
    async deleteProductByIdRaw(requestParameters: DeleteProductByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling deleteProductById.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling deleteProductById.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling deleteProductById.');
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
            path: `/catalog/products/{product_id}`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a *Product*.
     * Delete a Product
     */
    async deleteProductById(requestParameters: DeleteProductByIdRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteProductByIdRaw(requestParameters, initOverrides);
    }

    /**
     * To delete *Product* objects, you must include a filter. This prevents inadvertently deleting all *Product* objects in a store.  <div class=\"HubBlock--callout\"> <div class=\"CalloutBlock--info\"> <div class=\"HubBlock-content\"> The maximum number of products you can delete at one time is 250. </div> </div> </div>    **Example**: To delete products with the id\'s of 1,2 and 3, use `DELETE /v3/catalog/products?id:in=1,2,3`.
     * Delete Products
     */
    async deleteProductsRaw(requestParameters: DeleteProductsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling deleteProducts.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling deleteProducts.');
        }

        const queryParameters: any = {};

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        if (requestParameters.sku !== undefined) {
            queryParameters['sku'] = requestParameters.sku;
        }

        if (requestParameters.price !== undefined) {
            queryParameters['price'] = requestParameters.price;
        }

        if (requestParameters.weight !== undefined) {
            queryParameters['weight'] = requestParameters.weight;
        }

        if (requestParameters.condition !== undefined) {
            queryParameters['condition'] = requestParameters.condition;
        }

        if (requestParameters.brandId !== undefined) {
            queryParameters['brand_id'] = requestParameters.brandId;
        }

        if (requestParameters.dateModified !== undefined) {
            queryParameters['date_modified'] = (requestParameters.dateModified as any).toISOString();
        }

        if (requestParameters.dateLastImported !== undefined) {
            queryParameters['date_last_imported'] = (requestParameters.dateLastImported as any).toISOString();
        }

        if (requestParameters.isVisible !== undefined) {
            queryParameters['is_visible'] = requestParameters.isVisible;
        }

        if (requestParameters.isFeatured !== undefined) {
            queryParameters['is_featured'] = requestParameters.isFeatured;
        }

        if (requestParameters.inventoryLevel !== undefined) {
            queryParameters['inventory_level'] = requestParameters.inventoryLevel;
        }

        if (requestParameters.totalSold !== undefined) {
            queryParameters['total_sold'] = requestParameters.totalSold;
        }

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }

        if (requestParameters.categories !== undefined) {
            queryParameters['categories'] = requestParameters.categories;
        }

        if (requestParameters.keyword !== undefined) {
            queryParameters['keyword'] = requestParameters.keyword;
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
            path: `/catalog/products`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * To delete *Product* objects, you must include a filter. This prevents inadvertently deleting all *Product* objects in a store.  <div class=\"HubBlock--callout\"> <div class=\"CalloutBlock--info\"> <div class=\"HubBlock-content\"> The maximum number of products you can delete at one time is 250. </div> </div> </div>    **Example**: To delete products with the id\'s of 1,2 and 3, use `DELETE /v3/catalog/products?id:in=1,2,3`.
     * Delete Products
     */
    async deleteProducts(requestParameters: DeleteProductsRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteProductsRaw(requestParameters, initOverrides);
    }

    /**
     * Returns a single *Product*. Optional parameters can be passed in.
     * Get a Product
     */
    async getProductByIdRaw(requestParameters: GetProductByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ProductResponse>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling getProductById.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling getProductById.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling getProductById.');
        }

        const queryParameters: any = {};

        if (requestParameters.include !== undefined) {
            queryParameters['include'] = requestParameters.include;
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
            path: `/catalog/products/{product_id}`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductResponseFromJSON(jsonValue));
    }

    /**
     * Returns a single *Product*. Optional parameters can be passed in.
     * Get a Product
     */
    async getProductById(requestParameters: GetProductByIdRequest, initOverrides?: RequestInit): Promise<ProductResponse> {
        const response = await this.getProductByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of **Products**. Optional filter parameters can be passed in.
     * Get All Products
     */
    async getProductsRaw(requestParameters: GetProductsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse200>> {
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

        if (requestParameters.upc !== undefined) {
            queryParameters['upc'] = requestParameters.upc;
        }

        if (requestParameters.price !== undefined) {
            queryParameters['price'] = requestParameters.price;
        }

        if (requestParameters.weight !== undefined) {
            queryParameters['weight'] = requestParameters.weight;
        }

        if (requestParameters.condition !== undefined) {
            queryParameters['condition'] = requestParameters.condition;
        }

        if (requestParameters.brandId !== undefined) {
            queryParameters['brand_id'] = requestParameters.brandId;
        }

        if (requestParameters.dateModified !== undefined) {
            queryParameters['date_modified'] = (requestParameters.dateModified as any).toISOString();
        }

        if (requestParameters.dateModifiedmax !== undefined) {
            queryParameters['date_modified:max'] = requestParameters.dateModifiedmax;
        }

        if (requestParameters.dateModifiedmin !== undefined) {
            queryParameters['date_modified:min'] = requestParameters.dateModifiedmin;
        }

        if (requestParameters.dateLastImported !== undefined) {
            queryParameters['date_last_imported'] = (requestParameters.dateLastImported as any).toISOString();
        }

        if (requestParameters.dateLastImportedmax !== undefined) {
            queryParameters['date_last_imported:max'] = requestParameters.dateLastImportedmax;
        }

        if (requestParameters.dateLastImportedmin !== undefined) {
            queryParameters['date_last_imported:min'] = requestParameters.dateLastImportedmin;
        }

        if (requestParameters.isVisible !== undefined) {
            queryParameters['is_visible'] = requestParameters.isVisible;
        }

        if (requestParameters.isFeatured !== undefined) {
            queryParameters['is_featured'] = requestParameters.isFeatured;
        }

        if (requestParameters.isFreeShipping !== undefined) {
            queryParameters['is_free_shipping'] = requestParameters.isFreeShipping;
        }

        if (requestParameters.inventoryLevel !== undefined) {
            queryParameters['inventory_level'] = requestParameters.inventoryLevel;
        }

        if (requestParameters.inventoryLevelin !== undefined) {
            queryParameters['inventory_level:in'] = requestParameters.inventoryLevelin;
        }

        if (requestParameters.inventoryLevelnotIn !== undefined) {
            queryParameters['inventory_level:not_in'] = requestParameters.inventoryLevelnotIn;
        }

        if (requestParameters.inventoryLevelmin !== undefined) {
            queryParameters['inventory_level:min'] = requestParameters.inventoryLevelmin;
        }

        if (requestParameters.inventoryLevelmax !== undefined) {
            queryParameters['inventory_level:max'] = requestParameters.inventoryLevelmax;
        }

        if (requestParameters.inventoryLevelgreater !== undefined) {
            queryParameters['inventory_level:greater'] = requestParameters.inventoryLevelgreater;
        }

        if (requestParameters.inventoryLevelless !== undefined) {
            queryParameters['inventory_level:less'] = requestParameters.inventoryLevelless;
        }

        if (requestParameters.inventoryLow !== undefined) {
            queryParameters['inventory_low'] = requestParameters.inventoryLow;
        }

        if (requestParameters.outOfStock !== undefined) {
            queryParameters['out_of_stock'] = requestParameters.outOfStock;
        }

        if (requestParameters.totalSold !== undefined) {
            queryParameters['total_sold'] = requestParameters.totalSold;
        }

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }

        if (requestParameters.categories !== undefined) {
            queryParameters['categories'] = requestParameters.categories;
        }

        if (requestParameters.keyword !== undefined) {
            queryParameters['keyword'] = requestParameters.keyword;
        }

        if (requestParameters.keywordContext !== undefined) {
            queryParameters['keyword_context'] = requestParameters.keywordContext;
        }

        if (requestParameters.status !== undefined) {
            queryParameters['status'] = requestParameters.status;
        }

        if (requestParameters.include !== undefined) {
            queryParameters['include'] = requestParameters.include;
        }

        if (requestParameters.includeFields !== undefined) {
            queryParameters['include_fields'] = requestParameters.includeFields;
        }

        if (requestParameters.excludeFields !== undefined) {
            queryParameters['exclude_fields'] = requestParameters.excludeFields;
        }

        if (requestParameters.availability !== undefined) {
            queryParameters['availability'] = requestParameters.availability;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.direction !== undefined) {
            queryParameters['direction'] = requestParameters.direction;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.categoriesin !== undefined) {
            queryParameters['categories:in'] = requestParameters.categoriesin;
        }

        if (requestParameters.sku !== undefined) {
            queryParameters['sku'] = requestParameters.sku;
        }

        if (requestParameters.skuin) {
            queryParameters['sku:in'] = requestParameters.skuin.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/catalog/products`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse200FromJSON(jsonValue));
    }

    /**
     * Returns a list of **Products**. Optional filter parameters can be passed in.
     * Get All Products
     */
    async getProducts(requestParameters: GetProductsRequest, initOverrides?: RequestInit): Promise<InlineResponse200> {
        const response = await this.getProductsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a *Product*.  **Read-Only Fields** - id - date_created - date_modified - calculated_price - base_variant_id 
     * Update a Product
     */
    async updateProductRaw(requestParameters: UpdateProductRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ProductResponse>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling updateProduct.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling updateProduct.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling updateProduct.');
        }

        if (requestParameters.product === null || requestParameters.product === undefined) {
            throw new runtime.RequiredError('product','Required parameter requestParameters.product was null or undefined when calling updateProduct.');
        }

        const queryParameters: any = {};

        if (requestParameters.includeFields !== undefined) {
            queryParameters['include_fields'] = requestParameters.includeFields;
        }

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
            path: `/catalog/products/{product_id}`.replace(`{${"product_id"}}`, encodeURIComponent(String(requestParameters.productId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ProductPutToJSON(requestParameters.product),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductResponseFromJSON(jsonValue));
    }

    /**
     * Updates a *Product*.  **Read-Only Fields** - id - date_created - date_modified - calculated_price - base_variant_id 
     * Update a Product
     */
    async updateProduct(requestParameters: UpdateProductRequest, initOverrides?: RequestInit): Promise<ProductResponse> {
        const response = await this.updateProductRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates products in batches. At the time of writing, batches are limited to 10 products.  **Required Fields** * `id` - product `id` is required for batch updates to products.  **Read-Only Fields** - `id` - `date_created` - `date_modified` - `calculated_price` - `base_variant_id`
     * Update Products (Batch)
     */
    async updateProductsRaw(requestParameters: UpdateProductsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse200>> {
        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling updateProducts.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling updateProducts.');
        }

        const queryParameters: any = {};

        if (requestParameters.includeFields !== undefined) {
            queryParameters['include_fields'] = requestParameters.includeFields;
        }

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
            path: `/catalog/products`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.products.map(object &amp; ProductBaseToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse200FromJSON(jsonValue));
    }

    /**
     * Updates products in batches. At the time of writing, batches are limited to 10 products.  **Required Fields** * `id` - product `id` is required for batch updates to products.  **Read-Only Fields** - `id` - `date_created` - `date_modified` - `calculated_price` - `base_variant_id`
     * Update Products (Batch)
     */
    async updateProducts(requestParameters: UpdateProductsRequest, initOverrides?: RequestInit): Promise<InlineResponse200> {
        const response = await this.updateProductsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum DeleteProductsConditionEnum {
    New = 'new',
    Used = 'used',
    Refurbished = 'refurbished'
}
/**
    * @export
    * @enum {string}
    */
export enum DeleteProductsTypeEnum {
    Digital = 'digital',
    Physical = 'physical'
}
/**
    * @export
    * @enum {string}
    */
export enum GetProductByIdIncludeEnum {
    Variants = 'variants',
    Images = 'images',
    CustomFields = 'custom_fields',
    BulkPricingRules = 'bulk_pricing_rules',
    PrimaryImage = 'primary_image',
    Modifiers = 'modifiers',
    Options = 'options',
    Videos = 'videos'
}
/**
    * @export
    * @enum {string}
    */
export enum GetProductsConditionEnum {
    New = 'new',
    Used = 'used',
    Refurbished = 'refurbished'
}
/**
    * @export
    * @enum {string}
    */
export enum GetProductsIsFeaturedEnum {
    NUMBER_1 = 1,
    NUMBER_0 = 0
}
/**
    * @export
    * @enum {string}
    */
export enum GetProductsTypeEnum {
    Digital = 'digital',
    Physical = 'physical'
}
/**
    * @export
    * @enum {string}
    */
export enum GetProductsKeywordContextEnum {
    Shopper = 'shopper',
    Merchant = 'merchant'
}
/**
    * @export
    * @enum {string}
    */
export enum GetProductsIncludeEnum {
    Variants = 'variants',
    Images = 'images',
    CustomFields = 'custom_fields',
    BulkPricingRules = 'bulk_pricing_rules',
    PrimaryImage = 'primary_image',
    Modifiers = 'modifiers',
    Options = 'options',
    Videos = 'videos'
}
/**
    * @export
    * @enum {string}
    */
export enum GetProductsAvailabilityEnum {
    Available = 'available',
    Disabled = 'disabled',
    Preorder = 'preorder'
}
/**
    * @export
    * @enum {string}
    */
export enum GetProductsDirectionEnum {
    Asc = 'asc',
    Desc = 'desc'
}
/**
    * @export
    * @enum {string}
    */
export enum GetProductsSortEnum {
    Id = 'id',
    Name = 'name',
    Sku = 'sku',
    Price = 'price',
    DateModified = 'date_modified',
    DateLastImported = 'date_last_imported',
    InventoryLevel = 'inventory_level',
    IsVisible = 'is_visible',
    TotalSold = 'total_sold'
}
