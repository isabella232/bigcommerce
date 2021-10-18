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
    CategoriesTreeResp,
    CategoriesTreeRespFromJSON,
    CategoriesTreeRespToJSON,
    Category,
    CategoryFromJSON,
    CategoryToJSON,
    Category1,
    Category1FromJSON,
    Category1ToJSON,
    CategoryBase,
    CategoryBaseFromJSON,
    CategoryBaseToJSON,
    CategoryResponse,
    CategoryResponseFromJSON,
    CategoryResponseToJSON,
    CategoryResponse1,
    CategoryResponse1FromJSON,
    CategoryResponse1ToJSON,
    ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    NotFound,
    NotFoundFromJSON,
    NotFoundToJSON,
} from '../models';

export interface CreateCategoryRequest {
    accept: string;
    contentType: string;
    category: Category;
}

export interface DeleteCategoriesRequest {
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
    parentId?: number;
    pageTitle?: string;
    keyword?: string;
    isVisible?: boolean;
    namelike?: Array<string>;
    parentIdin?: Array<number>;
    parentIdmin?: Array<number>;
    parentIdmax?: Array<number>;
    parentIdgreater?: Array<number>;
    parentIdless?: Array<number>;
    pageTitlelike?: Array<string>;
}

export interface DeleteCategoryByIdRequest {
    categoryId: number;
    accept: string;
    contentType: string;
}

export interface GetCategoriesRequest {
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
    namelike?: Array<string>;
    parentId?: number;
    parentIdin?: Array<number>;
    parentIdmin?: Array<number>;
    parentIdmax?: Array<number>;
    parentIdgreater?: Array<number>;
    parentIdless?: Array<number>;
    pageTitle?: string;
    pageTitlelike?: Array<string>;
    keyword?: string;
    isVisible?: boolean;
    page?: number;
    limit?: number;
    includeFields?: string;
    excludeFields?: string;
}

export interface GetCategoryByIdRequest {
    categoryId: number;
    includeFields?: string;
    excludeFields?: string;
}

export interface GetCategoryTreeRequest {
    accept: string;
    contentType: string;
}

export interface UpdateCategoryRequest {
    categoryId: number;
    accept: string;
    contentType: string;
    category: Category1;
}

/**
 * 
 */
export class CategoryApi extends runtime.BaseAPI {

    /**
     * Creates a *Category*.  **Required Fields**: - parent_id:   - To create a child category, set the parent_id to the parent category.  - To create a top level category, set the parent_id to 0. - name  **Read-Only Fields**: - id  **Limits**: - 16,000 categories per store limit. - 1,000 categories per product limit. - 50 characters category name length. - 8 levels of category depth limit. - 65,642 characters category description length limit.
     * Create a Category
     */
    async createCategoryRaw(requestParameters: CreateCategoryRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CategoryResponse>> {
        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling createCategory.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling createCategory.');
        }

        if (requestParameters.category === null || requestParameters.category === undefined) {
            throw new runtime.RequiredError('category','Required parameter requestParameters.category was null or undefined when calling createCategory.');
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
            path: `/catalog/categories`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CategoryToJSON(requestParameters.category),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CategoryResponseFromJSON(jsonValue));
    }

    /**
     * Creates a *Category*.  **Required Fields**: - parent_id:   - To create a child category, set the parent_id to the parent category.  - To create a top level category, set the parent_id to 0. - name  **Read-Only Fields**: - id  **Limits**: - 16,000 categories per store limit. - 1,000 categories per product limit. - 50 characters category name length. - 8 levels of category depth limit. - 65,642 characters category description length limit.
     * Create a Category
     */
    async createCategory(requestParameters: CreateCategoryRequest, initOverrides?: RequestInit): Promise<CategoryResponse> {
        const response = await this.createCategoryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes *Category* objects. At least one filter parameter is required to perform the `DELETE` operation.  **Usage Notes**  - Sending a `DELETE`request without specifying a filter parameter will result in a `422` error.  - Sending a `DELETE` request for a category that contains products will result in a `422` error. Move products to a new category by sending a `PUT` requst to the `/catalog/products/{product_id}` endpoint before deleting a category.
     * Delete Categories
     */
    async deleteCategoriesRaw(requestParameters: DeleteCategoriesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling deleteCategories.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling deleteCategories.');
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

        if (requestParameters.parentId !== undefined) {
            queryParameters['parent_id'] = requestParameters.parentId;
        }

        if (requestParameters.pageTitle !== undefined) {
            queryParameters['page_title'] = requestParameters.pageTitle;
        }

        if (requestParameters.keyword !== undefined) {
            queryParameters['keyword'] = requestParameters.keyword;
        }

        if (requestParameters.isVisible !== undefined) {
            queryParameters['is_visible'] = requestParameters.isVisible;
        }

        if (requestParameters.namelike) {
            queryParameters['name:like'] = requestParameters.namelike.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.parentIdin) {
            queryParameters['parent_id:in'] = requestParameters.parentIdin.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.parentIdmin) {
            queryParameters['parent_id:min'] = requestParameters.parentIdmin.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.parentIdmax) {
            queryParameters['parent_id:max'] = requestParameters.parentIdmax.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.parentIdgreater) {
            queryParameters['parent_id:greater'] = requestParameters.parentIdgreater.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.parentIdless) {
            queryParameters['parent_id:less'] = requestParameters.parentIdless.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.pageTitlelike) {
            queryParameters['page_title:like'] = requestParameters.pageTitlelike.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/catalog/categories`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes *Category* objects. At least one filter parameter is required to perform the `DELETE` operation.  **Usage Notes**  - Sending a `DELETE`request without specifying a filter parameter will result in a `422` error.  - Sending a `DELETE` request for a category that contains products will result in a `422` error. Move products to a new category by sending a `PUT` requst to the `/catalog/products/{product_id}` endpoint before deleting a category.
     * Delete Categories
     */
    async deleteCategories(requestParameters: DeleteCategoriesRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteCategoriesRaw(requestParameters, initOverrides);
    }

    /**
     * Deletes a *Category*.
     * Delete a Category
     */
    async deleteCategoryByIdRaw(requestParameters: DeleteCategoryByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.categoryId === null || requestParameters.categoryId === undefined) {
            throw new runtime.RequiredError('categoryId','Required parameter requestParameters.categoryId was null or undefined when calling deleteCategoryById.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling deleteCategoryById.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling deleteCategoryById.');
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
            path: `/catalog/categories/{category_id}`.replace(`{${"category_id"}}`, encodeURIComponent(String(requestParameters.categoryId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a *Category*.
     * Delete a Category
     */
    async deleteCategoryById(requestParameters: DeleteCategoryByIdRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteCategoryByIdRaw(requestParameters, initOverrides);
    }

    /**
     * Returns a list of *Categories*. Optional filter parameters can be passed in.
     * Get All Categories
     */
    async getCategoriesRaw(requestParameters: GetCategoriesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CategoryBase>> {
        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling getCategories.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling getCategories.');
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

        if (requestParameters.namelike) {
            queryParameters['name:like'] = requestParameters.namelike.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.parentId !== undefined) {
            queryParameters['parent_id'] = requestParameters.parentId;
        }

        if (requestParameters.parentIdin) {
            queryParameters['parent_id:in'] = requestParameters.parentIdin.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.parentIdmin) {
            queryParameters['parent_id:min'] = requestParameters.parentIdmin.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.parentIdmax) {
            queryParameters['parent_id:max'] = requestParameters.parentIdmax.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.parentIdgreater) {
            queryParameters['parent_id:greater'] = requestParameters.parentIdgreater.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.parentIdless) {
            queryParameters['parent_id:less'] = requestParameters.parentIdless.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.pageTitle !== undefined) {
            queryParameters['page_title'] = requestParameters.pageTitle;
        }

        if (requestParameters.pageTitlelike) {
            queryParameters['page_title:like'] = requestParameters.pageTitlelike.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.keyword !== undefined) {
            queryParameters['keyword'] = requestParameters.keyword;
        }

        if (requestParameters.isVisible !== undefined) {
            queryParameters['is_visible'] = requestParameters.isVisible;
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
            path: `/catalog/categories`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CategoryBaseFromJSON(jsonValue));
    }

    /**
     * Returns a list of *Categories*. Optional filter parameters can be passed in.
     * Get All Categories
     */
    async getCategories(requestParameters: GetCategoriesRequest, initOverrides?: RequestInit): Promise<CategoryBase> {
        const response = await this.getCategoriesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a single *Category*. Optional parameters can be passed in.
     * Get a Category
     */
    async getCategoryByIdRaw(requestParameters: GetCategoryByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CategoryResponse>> {
        if (requestParameters.categoryId === null || requestParameters.categoryId === undefined) {
            throw new runtime.RequiredError('categoryId','Required parameter requestParameters.categoryId was null or undefined when calling getCategoryById.');
        }

        const queryParameters: any = {};

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
            path: `/catalog/categories/{category_id}`.replace(`{${"category_id"}}`, encodeURIComponent(String(requestParameters.categoryId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CategoryResponseFromJSON(jsonValue));
    }

    /**
     * Returns a single *Category*. Optional parameters can be passed in.
     * Get a Category
     */
    async getCategoryById(requestParameters: GetCategoryByIdRequest, initOverrides?: RequestInit): Promise<CategoryResponse> {
        const response = await this.getCategoryByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the categories tree, a nested lineage of the categories with parent->child relationship. The Category objects returned are simplified versions of the category objects returned in the rest of this API.
     * Get Category Tree
     */
    async getCategoryTreeRaw(requestParameters: GetCategoryTreeRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CategoriesTreeResp>> {
        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling getCategoryTree.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling getCategoryTree.');
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
            path: `/catalog/categories/tree`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CategoriesTreeRespFromJSON(jsonValue));
    }

    /**
     * Returns the categories tree, a nested lineage of the categories with parent->child relationship. The Category objects returned are simplified versions of the category objects returned in the rest of this API.
     * Get Category Tree
     */
    async getCategoryTree(requestParameters: GetCategoryTreeRequest, initOverrides?: RequestInit): Promise<CategoriesTreeResp> {
        const response = await this.getCategoryTreeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a *Category*.  **Required Fields** * none  **Read-Only Fields** - id
     * Update a Category
     */
    async updateCategoryRaw(requestParameters: UpdateCategoryRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CategoryResponse1>> {
        if (requestParameters.categoryId === null || requestParameters.categoryId === undefined) {
            throw new runtime.RequiredError('categoryId','Required parameter requestParameters.categoryId was null or undefined when calling updateCategory.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling updateCategory.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling updateCategory.');
        }

        if (requestParameters.category === null || requestParameters.category === undefined) {
            throw new runtime.RequiredError('category','Required parameter requestParameters.category was null or undefined when calling updateCategory.');
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
            path: `/catalog/categories/{category_id}`.replace(`{${"category_id"}}`, encodeURIComponent(String(requestParameters.categoryId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: Category1ToJSON(requestParameters.category),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CategoryResponse1FromJSON(jsonValue));
    }

    /**
     * Updates a *Category*.  **Required Fields** * none  **Read-Only Fields** - id
     * Update a Category
     */
    async updateCategory(requestParameters: UpdateCategoryRequest, initOverrides?: RequestInit): Promise<CategoryResponse1> {
        const response = await this.updateCategoryRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
