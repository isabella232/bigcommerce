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
    ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    ErrorResponse1,
    ErrorResponse1FromJSON,
    ErrorResponse1ToJSON,
    ValidateCustomerCredentialsObject,
    ValidateCustomerCredentialsObjectFromJSON,
    ValidateCustomerCredentialsObjectToJSON,
    ValidateCustomerCredentialsResponseObject,
    ValidateCustomerCredentialsResponseObjectFromJSON,
    ValidateCustomerCredentialsResponseObjectToJSON,
} from '../models';

export interface CustomerValidateCredentialsRequest {
    validateCustomerCredentialsObject: ValidateCustomerCredentialsObject;
}

/**
 * 
 */
export class CustomerValidateCredentialsApi extends runtime.BaseAPI {

    /**
     * Validate a customer credentials - This endpoint has special rate limiting protections to protect against abuse.
     * Validate a customer credentials
     */
    async customerValidateCredentialsRaw(requestParameters: CustomerValidateCredentialsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ValidateCustomerCredentialsResponseObject>> {
        if (requestParameters.validateCustomerCredentialsObject === null || requestParameters.validateCustomerCredentialsObject === undefined) {
            throw new runtime.RequiredError('validateCustomerCredentialsObject','Required parameter requestParameters.validateCustomerCredentialsObject was null or undefined when calling customerValidateCredentials.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/customers/validate-credentials`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ValidateCustomerCredentialsObjectToJSON(requestParameters.validateCustomerCredentialsObject),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ValidateCustomerCredentialsResponseObjectFromJSON(jsonValue));
    }

    /**
     * Validate a customer credentials - This endpoint has special rate limiting protections to protect against abuse.
     * Validate a customer credentials
     */
    async customerValidateCredentials(requestParameters: CustomerValidateCredentialsRequest, initOverrides?: RequestInit): Promise<ValidateCustomerCredentialsResponseObject> {
        const response = await this.customerValidateCredentialsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}