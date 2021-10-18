/* tslint:disable */
/* eslint-disable */
/**
 * Storefront Token
 * Get and manage tokens used to authenticate cross-origin requests to the [GraphQL Storefront API](https://developer.bigcommerce.com/api-docs/storefront/graphql/graphql-storefront-api-overview).  - [Authentication](#authentication) - [API tokens](#api-tokens) - [Customer impersonation tokens](#customer-impersonation-tokens) - [Revoking tokens](#revoking-tokens) - [Additional information](#additional-information)  ## Authentication  Authenticate requests by including an [OAuth](https://developer.bigcommerce.com/api-docs/getting-started/authentication) `access_token` in the request header.  ```http GET https://api.bigcommerce.com/stores/{{STORE_HASH}}/v3/channels Content-Type: application/json X-Auth-Token: {{ACCESS_TOKEN}} ```  ### [OAuth scopes](https://developer.bigcommerce.com/api-docs/getting-started/authentication/rest-api-authentication#oauth-scopes)  | UI Name                                      | Permission | Parameter                                     | |----------------------------------------------|------------|-----------------------------------------------| | Storefront API Customer Impersonation Tokens | manage     | `store_storefront_api_customer_impersonation` | | Storefront API Tokens                        | manage     | `store_storefront_api`                        |  ## [API tokens](https://developer.bigcommerce.com/api-reference/cart-checkout/storefront-api-token/api-token/createtoken)  Generate tokens (JWT) for authenticating cross-origin requests to the [GraphQL Storefront API](https://developer.bigcommerce.com/api-docs/storefront/graphql/graphql-storefront-api-overview). To [create a token](https://developer.bigcommerce.com/api-reference/cart-checkout/storefront-api-token/api-token/createtoken), send a `POST` request to `/stores/{{STORE_HASH}}/v3/storefront/api-token`.  ```http POST https://api.bigcommerce.com/stores/{{STORE_HASH}}/v3/storefront/api-token X-Auth-Token: {{ACCESS_TOKEN}} Content-Type: application/json Accept: application/json  {   \"channel_id\": 1,   \"expires_at\": 1602288000,   \"allowed_cors_origins\":      [\"https://store.example.com\"]    } ```  |Property|Type|Description| |-|-|-| |`channel_id`|int| Must be a valid channel ID on the store (required) | |`expires_at`|int| Unix timestamp (required) | |`allowed_cors_origins`|array[str]| Allowed origins for cross origin requests (required) |  [![Open in Request Runner](https://storage.googleapis.com/bigcommerce-production-dev-center/images/Open-Request-Runner.svg)](https://developer.bigcommerce.com/api-reference/cart-checkout/storefront-api-token/api-token/createtoken#requestrunner)    [**Response:**](https://developer.bigcommerce.com/api-reference/cart-checkout/storefront-api-token/api-token/createtoken#responses)  ```json {   \"token\":\"...eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9...\",   \"meta\": {     // ...   } } ```    ## [Customer impersonation tokens](https://developer.bigcommerce.com/api-reference/cart-checkout/storefront-api-token/customer-impersonation-token/createtokenwithcustomerimpersonation)  Generate tokens for use in server-to-server requests to the [GraphQL Storefront API](https://developer.bigcommerce.com/api-docs/storefront/graphql/graphql-storefront-api-overview#customer-impersonation-tokens). To [create a customer impersonation token](https://developer.bigcommerce.com/api-reference/cart-checkout/storefront-api-token/customer-impersonation-token/createtokenwithcustomerimpersonation), send a `POST` request to `/v3/storefront/api-token-customer-impersonation`.  ```http POST https://api.bigcommerce.com/stores/{STORE_HASH}/v3/storefront/api-token-customer-impersonation x-Auth-Token: {{ACCESS_TOKEN}} X-Bc-Customer-Id: {{CUSTOMER_ID}} ```  [**Response:**](https://developer.bigcommerce.com/api-reference/cart-checkout/storefront-api-token/customer-impersonation-token/createtokenwithcustomerimpersonation#responses)  ```json {   \"data\":   {     \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\"   }   \"meta\": {} } ```  Customer impersonation token authenticated requests made to the GraphQL API receive store information from the perspective of the customer with the ID specified in the `X-Bc-Customer-Id` header sent with the GraphQL `POST` request. Pricing, product availability, customer account, and customer details will be reflected. Consider this sample request using a [customer impersonation token](https://developer.bigcommerce.com/api-reference/cart-checkout/storefront-api-token/customer-impersonation-token/createtokenwithcustomerimpersonation) to run a request in the context of customer ID `123`.  ```http POST https://store.example.com/graphql Authorization: Bearer {{CUSTOMER_IMPERSONATION_TOKEN}} X-Bc-Customer-Id: 123  {     \"query\": \"query CustomerInformation {\\n  customer {\\n    firstName\\n    lastName\\n    email\\n  }\\n}\" } ```  <div class=\"HubBlock--callout\"> <div class=\"CalloutBlock--warning\"> <div class=\"HubBlock-content\">  > ### Note > * Customer impersonation tokens should **never** be exposed publicly, for example, to JavaScript or HTML. These tokens should not be used for frontend requests. > * Unlike normal GraphQL API tokens, they are sensitive and should be treated like secrets, just as you might treat an OAuth token. > * Attempts to run requests using these tokens from a web browser will be rejected.  </div> </div> </div>  ## [Revoking tokens](https://developer.bigcommerce.com/api-reference/cart-checkout/storefront-api-token/api-token/revoketoken) To [revoke a token](https://developer.bigcommerce.com/api-reference/cart-checkout/storefront-api-token/api-token/revoketoken), send a `DELETE` request to `/v3/storefront/api-token`.  ```http DELETE /stores/{{STORE_HASH}}/v3/storefront/api-token-customer-impersonation host: api.bigcommerce.com x-Auth-Token: {{ACCESS_TOKEN}} Sf-Api-Token: {{CUSTOMER_ID}} ```  ## Additional information  * [GraphQL API Overview](https://developer.bigcommerce.com/api-docs/storefront/graphql/graphql-storefront-api-overview)
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
    TokenFull,
    TokenFullFromJSON,
    TokenFullToJSON,
    TokenPostImpersonation,
    TokenPostImpersonationFromJSON,
    TokenPostImpersonationToJSON,
    TokenPostSimple,
    TokenPostSimpleFromJSON,
    TokenPostSimpleToJSON,
    UNKNOWN_BASE_TYPE,
    UNKNOWN_BASE_TYPEFromJSON,
    UNKNOWN_BASE_TYPEToJSON,
} from '../models';

export interface CreateTokenRequest {
    body?: UNKNOWN_BASE_TYPE;
}

export interface RevokeTokenRequest {
    sfApiToken: string;
}

/**
 * 
 */
export class APITokenApi extends runtime.BaseAPI {

    /**
     * Creates a Storefront API token.  **Required Scopes** * `Manage` `Storefront API Tokens`
     * Create a Token
     */
    async createTokenRaw(requestParameters: CreateTokenRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<TokenFull>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/storefront/api-token`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UNKNOWN_BASE_TYPEToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TokenFullFromJSON(jsonValue));
    }

    /**
     * Creates a Storefront API token.  **Required Scopes** * `Manage` `Storefront API Tokens`
     * Create a Token
     */
    async createToken(requestParameters: CreateTokenRequest, initOverrides?: RequestInit): Promise<TokenFull> {
        const response = await this.createTokenRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Revoke access for a Storefront API token.
     * Revoke a Token
     */
    async revokeTokenRaw(requestParameters: RevokeTokenRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.sfApiToken === null || requestParameters.sfApiToken === undefined) {
            throw new runtime.RequiredError('sfApiToken','Required parameter requestParameters.sfApiToken was null or undefined when calling revokeToken.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.sfApiToken !== undefined && requestParameters.sfApiToken !== null) {
            headerParameters['Sf-Api-Token'] = String(requestParameters.sfApiToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/storefront/api-token`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Revoke access for a Storefront API token.
     * Revoke a Token
     */
    async revokeToken(requestParameters: RevokeTokenRequest, initOverrides?: RequestInit): Promise<void> {
        await this.revokeTokenRaw(requestParameters, initOverrides);
    }

}
