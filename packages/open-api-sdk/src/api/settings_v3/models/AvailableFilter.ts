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
 * @interface AvailableFilter
 */
export interface AvailableFilter {
    /**
     * 
     * @type {number}
     * @memberof AvailableFilter
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof AvailableFilter
     */
    type?: AvailableFilterTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AvailableFilter
     */
    name?: string;
}

/**
* @export
* @enum {string}
*/
export enum AvailableFilterTypeEnum {
    Price = 'price',
    Category = 'category',
    Brand = 'brand',
    Rating = 'rating',
    Other = 'other',
    Product = 'product'
}

export function AvailableFilterFromJSON(json: any): AvailableFilter {
    return AvailableFilterFromJSONTyped(json, false);
}

export function AvailableFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): AvailableFilter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function AvailableFilterToJSON(value?: AvailableFilter | null): any {
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

