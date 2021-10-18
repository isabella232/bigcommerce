/* tslint:disable */
/* eslint-disable */
/**
 * Subscribers
 * Manage subscribers.  ### OAuth Scopes |  **UI Name** | **Permission** | **Parameter** | | --- | --- | --- | |  Customers | modify | `store_v2_customers` | |  Customers | read-only | `store_v2_customers_read_only` |  ### Headers  |Header|Parameter|Description| |-|-|-| |`X-Auth-Client`|`client_id`|Obtained by creating an API account or installing an app in a BigCommerce control panel.| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  ### Example  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Content-Type: application/json X-Auth-Client: {client_id} X-Auth-Token: {access_token} ```  * For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication). 
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
    NotFound,
    NotFoundFromJSON,
    NotFoundToJSON,
    SubscriberCollectionResponse,
    SubscriberCollectionResponseFromJSON,
    SubscriberCollectionResponseToJSON,
    SubscriberPost,
    SubscriberPostFromJSON,
    SubscriberPostToJSON,
    SubscriberPut,
    SubscriberPutFromJSON,
    SubscriberPutToJSON,
    SubscriberResponse,
    SubscriberResponseFromJSON,
    SubscriberResponseToJSON,
} from '../models';

export interface CreateSubscriberRequest {
    subscriber: SubscriberPost;
    accept?: string;
    contentType?: string;
}

export interface DeleteSubscriberByIdRequest {
    subscriberId: number;
    contentType?: string;
    accept?: string;
}

export interface DeleteSubscribersRequest {
    email?: string;
    firstName?: string;
    lastName?: string;
    source?: string;
    orderId?: number;
    dateCreated?: Date;
    dateModified?: Date;
    accept?: string;
    contentType?: string;
}

export interface GetSubscriberByIdRequest {
    subscriberId: number;
    accept?: string;
    contentType?: string;
}

export interface GetSubscribersRequest {
    email?: string;
    firstName?: string;
    lastName?: string;
    source?: string;
    orderId?: number;
    dateCreated?: Date;
    dateModified?: Date;
    page?: number;
    limit?: number;
    accept?: string;
    contentType?: string;
    id?: number;
}

export interface UpdateSubscriberRequest {
    subscriberId: number;
    subscriber: SubscriberPut;
    accept?: string;
    contentType?: string;
}

/**
 * 
 */
export class SubscribersApi extends runtime.BaseAPI {

    /**
     * Creates a *Subscriber*.  **Required Fields** * email  **Read Only Fields** * id
     * Create a Subscriber
     */
    async createSubscriberRaw(requestParameters: CreateSubscriberRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SubscriberResponse>> {
        if (requestParameters.subscriber === null || requestParameters.subscriber === undefined) {
            throw new runtime.RequiredError('subscriber','Required parameter requestParameters.subscriber was null or undefined when calling createSubscriber.');
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
            path: `/customers/subscribers`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SubscriberPostToJSON(requestParameters.subscriber),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriberResponseFromJSON(jsonValue));
    }

    /**
     * Creates a *Subscriber*.  **Required Fields** * email  **Read Only Fields** * id
     * Create a Subscriber
     */
    async createSubscriber(requestParameters: CreateSubscriberRequest, initOverrides?: RequestInit): Promise<SubscriberResponse> {
        const response = await this.createSubscriberRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a *Subscriber*.
     * Delete a Subscriber
     */
    async deleteSubscriberByIdRaw(requestParameters: DeleteSubscriberByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.subscriberId === null || requestParameters.subscriberId === undefined) {
            throw new runtime.RequiredError('subscriberId','Required parameter requestParameters.subscriberId was null or undefined when calling deleteSubscriberById.');
        }

        const queryParameters: any = {};

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
            path: `/customers/subscribers/{subscriber_id}`.replace(`{${"subscriber_id"}}`, encodeURIComponent(String(requestParameters.subscriberId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a *Subscriber*.
     * Delete a Subscriber
     */
    async deleteSubscriberById(requestParameters: DeleteSubscriberByIdRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteSubscriberByIdRaw(requestParameters, initOverrides);
    }

    /**
     * By default, it deletes all *Subscribers*. A filter should be added to avoid deleting all subscribers in a store.
     * Delete Subscribers
     */
    async deleteSubscribersRaw(requestParameters: DeleteSubscribersRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters.email !== undefined) {
            queryParameters['email'] = requestParameters.email;
        }

        if (requestParameters.firstName !== undefined) {
            queryParameters['first_name'] = requestParameters.firstName;
        }

        if (requestParameters.lastName !== undefined) {
            queryParameters['last_name'] = requestParameters.lastName;
        }

        if (requestParameters.source !== undefined) {
            queryParameters['source'] = requestParameters.source;
        }

        if (requestParameters.orderId !== undefined) {
            queryParameters['order_id'] = requestParameters.orderId;
        }

        if (requestParameters.dateCreated !== undefined) {
            queryParameters['date_created'] = (requestParameters.dateCreated as any).toISOString();
        }

        if (requestParameters.dateModified !== undefined) {
            queryParameters['date_modified'] = (requestParameters.dateModified as any).toISOString();
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
            path: `/customers/subscribers`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * By default, it deletes all *Subscribers*. A filter should be added to avoid deleting all subscribers in a store.
     * Delete Subscribers
     */
    async deleteSubscribers(requestParameters: DeleteSubscribersRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteSubscribersRaw(requestParameters, initOverrides);
    }

    /**
     * Returns a *Subscriber*.
     * Get a Subscriber
     */
    async getSubscriberByIdRaw(requestParameters: GetSubscriberByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SubscriberResponse>> {
        if (requestParameters.subscriberId === null || requestParameters.subscriberId === undefined) {
            throw new runtime.RequiredError('subscriberId','Required parameter requestParameters.subscriberId was null or undefined when calling getSubscriberById.');
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
            path: `/customers/subscribers/{subscriber_id}`.replace(`{${"subscriber_id"}}`, encodeURIComponent(String(requestParameters.subscriberId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriberResponseFromJSON(jsonValue));
    }

    /**
     * Returns a *Subscriber*.
     * Get a Subscriber
     */
    async getSubscriberById(requestParameters: GetSubscriberByIdRequest, initOverrides?: RequestInit): Promise<SubscriberResponse> {
        const response = await this.getSubscriberByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of *Subscribers*. Optional filter parameters can be passed in.
     * Get Subscribers
     */
    async getSubscribersRaw(requestParameters: GetSubscribersRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SubscriberCollectionResponse>> {
        const queryParameters: any = {};

        if (requestParameters.email !== undefined) {
            queryParameters['email'] = requestParameters.email;
        }

        if (requestParameters.firstName !== undefined) {
            queryParameters['first_name'] = requestParameters.firstName;
        }

        if (requestParameters.lastName !== undefined) {
            queryParameters['last_name'] = requestParameters.lastName;
        }

        if (requestParameters.source !== undefined) {
            queryParameters['source'] = requestParameters.source;
        }

        if (requestParameters.orderId !== undefined) {
            queryParameters['order_id'] = requestParameters.orderId;
        }

        if (requestParameters.dateCreated !== undefined) {
            queryParameters['date_created'] = (requestParameters.dateCreated as any).toISOString();
        }

        if (requestParameters.dateModified !== undefined) {
            queryParameters['date_modified'] = (requestParameters.dateModified as any).toISOString();
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.id !== undefined) {
            queryParameters['id'] = requestParameters.id;
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
            path: `/customers/subscribers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriberCollectionResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of *Subscribers*. Optional filter parameters can be passed in.
     * Get Subscribers
     */
    async getSubscribers(requestParameters: GetSubscribersRequest, initOverrides?: RequestInit): Promise<SubscriberCollectionResponse> {
        const response = await this.getSubscribersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a *Subscriber*.  **Read Only Fields** * id
     * Update a Subscriber
     */
    async updateSubscriberRaw(requestParameters: UpdateSubscriberRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SubscriberResponse>> {
        if (requestParameters.subscriberId === null || requestParameters.subscriberId === undefined) {
            throw new runtime.RequiredError('subscriberId','Required parameter requestParameters.subscriberId was null or undefined when calling updateSubscriber.');
        }

        if (requestParameters.subscriber === null || requestParameters.subscriber === undefined) {
            throw new runtime.RequiredError('subscriber','Required parameter requestParameters.subscriber was null or undefined when calling updateSubscriber.');
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
            path: `/customers/subscribers/{subscriber_id}`.replace(`{${"subscriber_id"}}`, encodeURIComponent(String(requestParameters.subscriberId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: SubscriberPutToJSON(requestParameters.subscriber),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriberResponseFromJSON(jsonValue));
    }

    /**
     * Updates a *Subscriber*.  **Read Only Fields** * id
     * Update a Subscriber
     */
    async updateSubscriber(requestParameters: UpdateSubscriberRequest, initOverrides?: RequestInit): Promise<SubscriberResponse> {
        const response = await this.updateSubscriberRaw(requestParameters, initOverrides);
        return await response.value();
    }

}