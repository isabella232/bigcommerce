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
 * @interface AvailableOtherFilter
 */
export interface AvailableOtherFilter {
    /**
     * 
     * @type {string}
     * @memberof AvailableOtherFilter
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof AvailableOtherFilter
     */
    type?: AvailableOtherFilterTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AvailableOtherFilter
     */
    name?: string;
}

/**
* @export
* @enum {string}
*/
export enum AvailableOtherFilterTypeEnum {
    Other = 'other'
}

export function AvailableOtherFilterFromJSON(json: any): AvailableOtherFilter {
    return AvailableOtherFilterFromJSONTyped(json, false);
}

export function AvailableOtherFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): AvailableOtherFilter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function AvailableOtherFilterToJSON(value?: AvailableOtherFilter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'type': value.type,
        'name': value.name,
    };
}

