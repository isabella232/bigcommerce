/* tslint:disable */
/* eslint-disable */
/**
 * Customers V3
 * Create and manage customers.  - [Authentication](#authentication) - [Resources](#resources)  ## Authentication  Requests can be authenticated by sending an `access_token` via `X-Auth-Token` HTTP header:  ```http GET /stores/{$$.env.store_hash}/v3/customers host: api.bigcommerce.com Accept: application/json X-Auth-Token: {access_token} ```  |Header|Parameter|Description| |-|-|-| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  ### OAuth Scopes  | UI Name                                      | Permission | Parameter                                     | |----------------------------------------------|------------|-----------------------------------------------| | Customers                                    | modify     | `store_v2_customers`                          | | Customers                                    | read-only  | `store_v2_customers_read_only`                | | Stored Payment Instruments                   | modify     | `store_stored_payment_instruments`            | | Stored Payment Instruments                   | read-only  | `store_stored_payment_instruments_read_only`  |  For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Resources * [Customer and Subscribers Overview](/api-docs/customers/customers-subscribers-overview).
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    CustomerSettingsObject,
    CustomerSettingsObjectFromJSON,
    CustomerSettingsObjectToJSON,
} from '../models';

export interface CustomerSettingsPutRequest {
    customerSettingsObject: CustomerSettingsObject;
}

/**
 * 
 */
export class CustomerSettingsApi extends runtime.BaseAPI {

    /**
     * Returns the global-level customer settings.
     * Get Customer Settings
     */
    async customerSettingsGetRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<CustomerSettingsObject>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/customers/settings`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerSettingsObjectFromJSON(jsonValue));
    }

    /**
     * Returns the global-level customer settings.
     * Get Customer Settings
     */
    async customerSettingsGet(initOverrides?: RequestInit): Promise<CustomerSettingsObject> {
        const response = await this.customerSettingsGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Updates the customer settings on the global level.
     * Update Customer Settings
     */
    async customerSettingsPutRaw(requestParameters: CustomerSettingsPutRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CustomerSettingsObject>> {
        if (requestParameters.customerSettingsObject === null || requestParameters.customerSettingsObject === undefined) {
            throw new runtime.RequiredError('customerSettingsObject','Required parameter requestParameters.customerSettingsObject was null or undefined when calling customerSettingsPut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/customers/settings`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CustomerSettingsObjectToJSON(requestParameters.customerSettingsObject),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerSettingsObjectFromJSON(jsonValue));
    }

    /**
     * Updates the customer settings on the global level.
     * Update Customer Settings
     */
    async customerSettingsPut(requestParameters: CustomerSettingsPutRequest, initOverrides?: RequestInit): Promise<CustomerSettingsObject> {
        const response = await this.customerSettingsPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

}