/* tslint:disable */
/* eslint-disable */
/**
 * Custom Template Associations
 * Efficiently associate a stencil theme\'s custom templates to products, categories, brands, and pages.  - [Authentication](#authentication) - [Creating template associations](#creating-template-associations) - [Getting entity IDs](#getting-entity-ids) - [Getting available templates](#getting-available-templates) - [Getting theme UUIDs](#getting-theme-uuids) - [Additional information](#additional-information)   ## Authentication  Authenticate requests by including an [OAuth](https://developer.bigcommerce.com/api-docs/getting-started/authentication) `access_token` and `client_id` in the request headers.  ```http GET https://api.bigcommerce.com/stores/{{STORE_HASH}}/v3/storefront/custom-template-associations Content-Type: application/json X-Auth-Token: {{ACCESS_TOKEN}} ```  ### OAuth scopes  | UI Name | Permission | Parameter |-|-|-| | Themes |Read-only|`store_themes_read_only`| | Themes |Manage|`store_themes_manage`|  ## Creating template associations  To [associate custom templates to entities](https://developer.bigcommerce.com/api-reference/store-management/custom-template-associations/custom-template-associations/upsertcustomtemplateassociations), send a `PUT` request to `/v3/storefront/custom-template-associations`.  ```http PUT https://api.bigcommerce.com/stores/{{STORE_HASH}}/v3/storefront/custom-template-associations X-Auth-Token: {{ACCESS_TOKEN}} Content-Type: application/json Accept: application/json  [   {     \"channel_id\": 1,     \"entity_type\": \"product\",     \"entity_id\": 12,     \"file_name\": \"custom-template-1.html\"   } ] ```  [![Open in Request Runner](https://storage.googleapis.com/bigcommerce-production-dev-center/images/Open-Request-Runner.svg)](https://developer.bigcommerce.com/api-reference/store-management/custom-template-associations/custom-template-associations/upsertcustomtemplateassociations#requestrunner)  <div class=\"HubBlock--callout\"> <div class=\"CalloutBlock--info\"> <div class=\"HubBlock-content\">  > ### Note > * The allowed values for `entity_type` are `product`, `category`, `brand`, and `page`.  </div> </div> </div>  ## Getting entity IDs  Use the [Catalog API](https://developer.bigcommerce.com/api-reference/store-management/catalog) to get the `entity_id` for `category`, `product`, and `brand` entity types. For example, to [get all products](https://developer.bigcommerce.com/api-reference/store-management/catalog/products/getproducts), send a `GET` request to `/v3/catalog/products`.  ```http GET https://api.bigcommerce.com/stores/{{STORE_HASH}}/v3/catalog/products X-Auth-Token: {{ACCESS_TOKEN}} Content-Type: application/json Accept: application/json ```  [![Open in Request Runner](https://storage.googleapis.com/bigcommerce-production-dev-center/images/Open-Request-Runner.svg)](https://developer.bigcommerce.com/api-reference/store-management/catalog/products/getproducts#requestrunner)  To [get the `entity_id` for a content page](https://developer.bigcommerce.com/api-reference/store-management/store-content/pages/getallpages), send a `GET` request to `/v2/pages`.  ```http GET https://api.bigcommerce.com/stores/{{STORE_HASH}}/v2/pages X-Auth-Token: {{ACCESS_TOKEN}} Content-Type: application/json Accept: application/json ```  [![Open in Request Runner](https://storage.googleapis.com/bigcommerce-production-dev-center/images/Open-Request-Runner.svg)](https://developer.bigcommerce.com/api-reference/store-management/store-content/pages/getallpages#requestrunner)  ## Getting available templates  To [get available custom templates](https://developer.bigcommerce.com/api-reference/store-management/themes/theme-custom-templates/get-themes-theme-uuid-custom-templates) for each `entity_type`, send a `GET` request to `/v3/themes/custom-templates/{version_uuid}`.  ```http GET https://api.bigcommerce.com/stores/{{STORE_HASH}}/v3/themes/custom-templates/{version_uuid} X-Auth-Token: {{ACCESS_TOKEN}} Content-Type: application/json Accept: application/json ```  [![Open in Request Runner](https://storage.googleapis.com/bigcommerce-production-dev-center/images/Open-Request-Runner.svg)](https://developer.bigcommerce.com/api-reference/store-management/themes/theme-custom-templates/get-themes-theme-uuid-custom-templates#requestrunner)  **Response:**  ```json {   \"data\": {     \"product\": [       \"custom-product-1.html\"     ],     \"category\": [],     \"brand\": [       \"custom-brand-1.html\"     ],     \"page\": [       \"custom-page-1.html\",       \"holiday-page.html\"     ]   },   \"meta\": {} } ```  ## Getting theme UUIDs  To [get the `version_uuid` for an active theme](https://developer.bigcommerce.com/api-reference/store-management/channels/channel-active-theme/get-channel-active-theme), send a `GET` request to `/v3/channels/{channel_id}/active-theme`.  ```http GET https://api.bigcommerce.com/stores/{{STORE_HASH}}/v3/channels/{channel_id}/active-theme X-Auth-Token: {{ACCESS_TOKEN}} Content-Type: application/json Accept: application/json ```  [![Open in Request Runner](https://storage.googleapis.com/bigcommerce-production-dev-center/images/Open-Request-Runner.svg)](https://developer.bigcommerce.com/api-reference/store-management/channels/channel-active-theme/get-channel-active-theme#requestrunner)  **Response:**  ```json {   \"data\": {     \"active_theme_configuration_uuid\": \"748c5390-0b42-0139-b008-0242ac110013\",     \"active_theme_uuid\": \"94bd1450-b873-0137-6902-0242ac11001f\",     \"active_theme_version_uuid\": \"94dde070-b873-0137-6902-0242ac11001f\",     \"saved_theme_configuration_uuid\": \"748c5390-0b42-0139-b008-0242ac110013\"   },   \"meta\": {} } ```  ## Additional information  * [Get Channel Active Theme](https://developer.bigcommerce.com/api-reference/store-management/channels/channel-active-theme/get-channel-active-theme) * [Get Available Custom Templates](https://developer.bigcommerce.com/api-reference/store-management/themes/theme-custom-templates/get-themes-theme-uuid-custom-templates) * [Catalog API](https://developer.bigcommerce.com/api-reference/store-management/catalog) * [Store Content API](https://developer.bigcommerce.com/api-reference/store-management/store-content) * [Channels API](https://developer.bigcommerce.com/api-reference/store-management/channels)
 *
 * The version of the OpenAPI document: 3.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    CustomTemplateAssociationUpsert,
    CustomTemplateAssociationUpsertFromJSON,
    CustomTemplateAssociationUpsertToJSON,
    ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    InlineResponse200,
    InlineResponse200FromJSON,
    InlineResponse200ToJSON,
} from '../models';

export interface DeleteCustomTemplateAssociationsRequest {
    idin?: number;
    entityIdin?: number;
    channelId?: number;
    type?: DeleteCustomTemplateAssociationsTypeEnum;
}

export interface GetCustomTemplateAssociationsRequest {
    channelId?: number;
    entityIdin?: string;
    limit?: number;
    page?: number;
    type?: GetCustomTemplateAssociationsTypeEnum;
    isValid?: boolean;
}

export interface UpsertCustomTemplateAssociationsRequest {
    customTemplateAssociationUpsert?: Set<CustomTemplateAssociationUpsert>;
}

/**
 * 
 */
export class CustomTemplateAssociationsApi extends runtime.BaseAPI {

    /**
     * Delete custom template associations. At least one query parameter must be used.
     * Delete Custom Template Associations
     */
    async deleteCustomTemplateAssociationsRaw(requestParameters: DeleteCustomTemplateAssociationsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters.idin !== undefined) {
            queryParameters['id:in'] = requestParameters.idin;
        }

        if (requestParameters.entityIdin !== undefined) {
            queryParameters['entity_id:in'] = requestParameters.entityIdin;
        }

        if (requestParameters.channelId !== undefined) {
            queryParameters['channel_id'] = requestParameters.channelId;
        }

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/storefront/custom-template-associations`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete custom template associations. At least one query parameter must be used.
     * Delete Custom Template Associations
     */
    async deleteCustomTemplateAssociations(requestParameters: DeleteCustomTemplateAssociationsRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteCustomTemplateAssociationsRaw(requestParameters, initOverrides);
    }

    /**
     * Get a collection of the store\'s custom template associations across all storefronts
     * Get Custom Template Associations
     */
    async getCustomTemplateAssociationsRaw(requestParameters: GetCustomTemplateAssociationsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse200>> {
        const queryParameters: any = {};

        if (requestParameters.channelId !== undefined) {
            queryParameters['channel_id'] = requestParameters.channelId;
        }

        if (requestParameters.entityIdin !== undefined) {
            queryParameters['entity_id:in'] = requestParameters.entityIdin;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }

        if (requestParameters.isValid !== undefined) {
            queryParameters['is_valid'] = requestParameters.isValid;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/storefront/custom-template-associations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse200FromJSON(jsonValue));
    }

    /**
     * Get a collection of the store\'s custom template associations across all storefronts
     * Get Custom Template Associations
     */
    async getCustomTemplateAssociations(requestParameters: GetCustomTemplateAssociationsRequest, initOverrides?: RequestInit): Promise<InlineResponse200> {
        const response = await this.getCustomTemplateAssociationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Upsert new custom template associations data across all storefronts. If an existing record is found for the combination of channel ID, entity ID, and type, the existing record will be overwritten with the new template.
     * Upsert Custom Template Associations
     */
    async upsertCustomTemplateAssociationsRaw(requestParameters: UpsertCustomTemplateAssociationsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<object>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/storefront/custom-template-associations`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.customTemplateAssociationUpsert.map(CustomTemplateAssociationUpsertToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Upsert new custom template associations data across all storefronts. If an existing record is found for the combination of channel ID, entity ID, and type, the existing record will be overwritten with the new template.
     * Upsert Custom Template Associations
     */
    async upsertCustomTemplateAssociations(requestParameters: UpsertCustomTemplateAssociationsRequest, initOverrides?: RequestInit): Promise<object> {
        const response = await this.upsertCustomTemplateAssociationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum DeleteCustomTemplateAssociationsTypeEnum {
    Product = 'product',
    Category = 'category',
    Brand = 'brand',
    Page = 'page'
}
/**
    * @export
    * @enum {string}
    */
export enum GetCustomTemplateAssociationsTypeEnum {
    Product = 'product',
    Category = 'category',
    Brand = 'brand',
    Page = 'page'
}
