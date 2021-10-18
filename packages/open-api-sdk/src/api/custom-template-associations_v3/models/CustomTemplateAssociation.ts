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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CustomTemplateAssociation
 */
export interface CustomTemplateAssociation {
    /**
     * 
     * @type {number}
     * @memberof CustomTemplateAssociation
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomTemplateAssociation
     */
    channelId?: number;
    /**
     * 
     * @type {string}
     * @memberof CustomTemplateAssociation
     */
    entityType?: CustomTemplateAssociationEntityTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof CustomTemplateAssociation
     */
    entityId?: number;
    /**
     * 
     * @type {string}
     * @memberof CustomTemplateAssociation
     */
    fileName?: string;
    /**
     * An invalid file name does not match with an existing custom layout file in the currently active theme for the channel. When an association is invalid the store will fallback to using the default for that entity type.
     * @type {boolean}
     * @memberof CustomTemplateAssociation
     */
    isValid?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CustomTemplateAssociation
     */
    dateCreated?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomTemplateAssociation
     */
    dateModified?: string;
}

/**
* @export
* @enum {string}
*/
export enum CustomTemplateAssociationEntityTypeEnum {
    Product = 'product',
    Category = 'category',
    Brand = 'brand',
    Page = 'page'
}

export function CustomTemplateAssociationFromJSON(json: any): CustomTemplateAssociation {
    return CustomTemplateAssociationFromJSONTyped(json, false);
}

export function CustomTemplateAssociationFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomTemplateAssociation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'channelId': !exists(json, 'channel_id') ? undefined : json['channel_id'],
        'entityType': !exists(json, 'entity_type') ? undefined : json['entity_type'],
        'entityId': !exists(json, 'entity_id') ? undefined : json['entity_id'],
        'fileName': !exists(json, 'file_name') ? undefined : json['file_name'],
        'isValid': !exists(json, 'is_valid') ? undefined : json['is_valid'],
        'dateCreated': !exists(json, 'date_created') ? undefined : json['date_created'],
        'dateModified': !exists(json, 'date_modified') ? undefined : json['date_modified'],
    };
}

export function CustomTemplateAssociationToJSON(value?: CustomTemplateAssociation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'channel_id': value.channelId,
        'entity_type': value.entityType,
        'entity_id': value.entityId,
        'file_name': value.fileName,
        'is_valid': value.isValid,
        'date_created': value.dateCreated,
        'date_modified': value.dateModified,
    };
}


