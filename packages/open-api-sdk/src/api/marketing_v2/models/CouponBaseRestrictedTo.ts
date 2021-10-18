/* tslint:disable */
/* eslint-disable */
/**
 * Marketing
 * Manage coupons, banners, and gift certificates.  - [Authentication](#authentication) - [Subresources](#subresources)  ## Authentication  Authenticate requests by including an [OAuth](https://developer.bigcommerce.com/api-docs/getting-started/authentication) `access_token` in the request header.  ```http GET https://api.bigcommerce.com/stores/{{STORE_HASH}}/v3/{{ENDPOINT}} Content-Type: application/json X-Auth-Token: {{ACCESS_TOKEN}} ```  ### OAuth Scopes |  **UI Name** | **Permission** | **Parameter** | | --- | --- | --- | |  Marketing | modify | `store_v2_marketing` | |  Marketing | read-only | `store_v2_marketing_read_only` |  ## Subresources  ### Coupons Category or product discounts that can be applied to orders for customers who enter a given code.  ### Banners Banners available to display on a store.  ### Gift Certificates Gift certificates available to offer to a store’s customers.
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
 * 
 * @export
 * @interface CouponBaseRestrictedTo
 */
export interface CouponBaseRestrictedTo {
    /**
     * 
     * @type {string}
     * @memberof CouponBaseRestrictedTo
     */
    countries?: string;
    /**
     * 
     * @type {string}
     * @memberof CouponBaseRestrictedTo
     */
    ?: string;
}

export function CouponBaseRestrictedToFromJSON(json: any): CouponBaseRestrictedTo {
    return CouponBaseRestrictedToFromJSONTyped(json, false);
}

export function CouponBaseRestrictedToFromJSONTyped(json: any, ignoreDiscriminator: boolean): CouponBaseRestrictedTo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'countries': !exists(json, 'countries') ? undefined : json['countries'],
        '': !exists(json, '') ? undefined : json[''],
    };
}

export function CouponBaseRestrictedToToJSON(value?: CouponBaseRestrictedTo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'countries': value.countries,
        '': value.,
    };
}

