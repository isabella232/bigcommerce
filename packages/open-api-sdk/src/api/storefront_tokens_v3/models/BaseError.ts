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

import { exists, mapValues } from '../runtime';
/**
 * Error payload for the BigCommerce API.
 * @export
 * @interface BaseError
 */
export interface BaseError {
    /**
     * The HTTP status code.
     * @type {number}
     * @memberof BaseError
     */
    status?: number;
    /**
     * The error title describing the particular error.
     * @type {string}
     * @memberof BaseError
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseError
     */
    type?: string;
}

export function BaseErrorFromJSON(json: any): BaseError {
    return BaseErrorFromJSONTyped(json, false);
}

export function BaseErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): BaseError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function BaseErrorToJSON(value?: BaseError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'title': value.title,
        'type': value.type,
    };
}


