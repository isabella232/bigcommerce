/* tslint:disable */
/* eslint-disable */
/**
 * Shipping V3
 * V3 REST API shipping endpoints.
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
    CustomsInformation,
    CustomsInformationFromJSON,
    CustomsInformationToJSON,
    InlineResponse200,
    InlineResponse200FromJSON,
    InlineResponse200ToJSON,
} from '../models';

export interface ShippingProductsCustomsInformationDeleteRequest {
    productIdin: Array<number>;
    accept?: string;
    contentType?: string;
}

export interface ShippingProductsCustomsInformationGetRequest {
    accept?: string;
    contentType?: string;
    productIdin?: Array<number>;
    page?: number;
    limit?: number;
}

export interface ShippingProductsCustomsInformationPutRequest {
    body?: Array<CustomsInformation>;
}

/**
 * 
 */
export class ProductsApi extends runtime.BaseAPI {

    /**
     * Deletes customs information objects for a product.  ## Example  This is a batch operation. The `product_id` query parameter is required.  ```http DELETE /shipping/products/customs-information?product_id:in=4,5,6 ```
     * Delete Customs Information
     */
    async shippingProductsCustomsInformationDeleteRaw(requestParameters: ShippingProductsCustomsInformationDeleteRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.productIdin === null || requestParameters.productIdin === undefined) {
            throw new runtime.RequiredError('productIdin','Required parameter requestParameters.productIdin was null or undefined when calling shippingProductsCustomsInformationDelete.');
        }

        const queryParameters: any = {};

        if (requestParameters.productIdin) {
            queryParameters['product_id:in'] = requestParameters.productIdin.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/shipping/products/customs-information`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes customs information objects for a product.  ## Example  This is a batch operation. The `product_id` query parameter is required.  ```http DELETE /shipping/products/customs-information?product_id:in=4,5,6 ```
     * Delete Customs Information
     */
    async shippingProductsCustomsInformationDelete(requestParameters: ShippingProductsCustomsInformationDeleteRequest, initOverrides?: RequestInit): Promise<void> {
        await this.shippingProductsCustomsInformationDeleteRaw(requestParameters, initOverrides);
    }

    /**
     * Get customs information for products.  ## Examples  This list can be filtered to return customs information objects specific to a list of requested product_ids. This is achieved by appending the query string **?product_id:in=4,5,6** to the resource **_/shipping/products/customs-information**.  ```http GET /shipping/products/customs-information?product_id:in=4,5,6 ```
     * Get Customs Information
     */
    async shippingProductsCustomsInformationGetRaw(requestParameters: ShippingProductsCustomsInformationGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse200>> {
        const queryParameters: any = {};

        if (requestParameters.productIdin) {
            queryParameters['product_id:in'] = requestParameters.productIdin.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
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
            path: `/shipping/products/customs-information`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse200FromJSON(jsonValue));
    }

    /**
     * Get customs information for products.  ## Examples  This list can be filtered to return customs information objects specific to a list of requested product_ids. This is achieved by appending the query string **?product_id:in=4,5,6** to the resource **_/shipping/products/customs-information**.  ```http GET /shipping/products/customs-information?product_id:in=4,5,6 ```
     * Get Customs Information
     */
    async shippingProductsCustomsInformationGet(requestParameters: ShippingProductsCustomsInformationGetRequest, initOverrides?: RequestInit): Promise<InlineResponse200> {
        const response = await this.shippingProductsCustomsInformationGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates and updates product customs information.  This is a batch operation where the creation of multiple customs information objects can be done with one `PUT` request.  ## Limits * Limit of 50 customs information objects per `PUT` request.
     * Upsert Customs Information
     */
    async shippingProductsCustomsInformationPutRaw(requestParameters: ShippingProductsCustomsInformationPutRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<CustomsInformation>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/shipping/products/customs-information`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body.map(CustomsInformationToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CustomsInformationFromJSON));
    }

    /**
     * Creates and updates product customs information.  This is a batch operation where the creation of multiple customs information objects can be done with one `PUT` request.  ## Limits * Limit of 50 customs information objects per `PUT` request.
     * Upsert Customs Information
     */
    async shippingProductsCustomsInformationPut(requestParameters: ShippingProductsCustomsInformationPutRequest, initOverrides?: RequestInit): Promise<Array<CustomsInformation>> {
        const response = await this.shippingProductsCustomsInformationPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

}