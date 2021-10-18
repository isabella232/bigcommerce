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
    VariantCollectionResponse2,
    VariantCollectionResponse2FromJSON,
    VariantCollectionResponse2ToJSON,
    VariantsBatchErrorResponse,
    VariantsBatchErrorResponseFromJSON,
    VariantsBatchErrorResponseToJSON,
} from '../models';

export interface DeleteBrandsRequest {
    accept: string;
    contentType: string;
    name?: string;
    pageTitle?: string;
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

export interface UpdateVariantsBatchRequest {
    accept: string;
    contentType: string;
    body: Array<object>;
}

/**
 * 
 */
export class CatalogApi extends runtime.BaseAPI {

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
     * Updates a batch of `variant` objects. At the time of writing, the limit is 50 variants. This limit is subject to change.
     * Update Variants (Batch)
     */
    async updateVariantsBatchRaw(requestParameters: UpdateVariantsBatchRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<VariantCollectionResponse2>> {
        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling updateVariantsBatch.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling updateVariantsBatch.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateVariantsBatch.');
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
            path: `/catalog/variants`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VariantCollectionResponse2FromJSON(jsonValue));
    }

    /**
     * Updates a batch of `variant` objects. At the time of writing, the limit is 50 variants. This limit is subject to change.
     * Update Variants (Batch)
     */
    async updateVariantsBatch(requestParameters: UpdateVariantsBatchRequest, initOverrides?: RequestInit): Promise<VariantCollectionResponse2> {
        const response = await this.updateVariantsBatchRaw(requestParameters, initOverrides);
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
