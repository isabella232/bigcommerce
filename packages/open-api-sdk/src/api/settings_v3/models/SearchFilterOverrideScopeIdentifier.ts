/* tslint:disable */
/* eslint-disable */
/**
 * Settings V3
 * Manage settings and configuration for BigCommerce hosted stores and headless storefronts.  ## Authentication  Authenticate requests by including an [OAuth](https://developer.bigcommerce.com/api-docs/getting-started/authentication) `access_token` in the request header.  ```http GET /stores/{{STORE_HASH}}/v3/settings/storefront/status host: api.bigcommerce.com Accept: application/json X-Auth-Token: {{ACCESS_TOKEN}} ```  ### OAuth Scopes |  **UI Name** | **Permission** | **Parameter** | |-|-|-| |  Information & Settings | modify | `store_v2_information` | |  Information & Settings | read-only | `store_v2_information_read_only` |
 *
 * The version of the OpenAPI document: 3.0.0
 * Contact: support@bigcommerce.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface SearchFilterOverrideScopeIdentifier
 */
export interface SearchFilterOverrideScopeIdentifier {
    /**
     * 
     * @type {number}
     * @memberof SearchFilterOverrideScopeIdentifier
     */
    channelId?: number;
    /**
     * 
     * @type {number}
     * @memberof SearchFilterOverrideScopeIdentifier
     */
    categoryId?: number;
}

export function SearchFilterOverrideScopeIdentifierFromJSON(json: any): SearchFilterOverrideScopeIdentifier {
    return SearchFilterOverrideScopeIdentifierFromJSONTyped(json, false);
}

export function SearchFilterOverrideScopeIdentifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchFilterOverrideScopeIdentifier {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'channelId': !exists(json, 'channel_id') ? undefined : json['channel_id'],
        'categoryId': !exists(json, 'category_id') ? undefined : json['category_id'],
    };
}

export function SearchFilterOverrideScopeIdentifierToJSON(value?: SearchFilterOverrideScopeIdentifier | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'channel_id': value.channelId,
        'category_id': value.categoryId,
    };
}

