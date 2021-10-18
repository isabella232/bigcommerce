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
 * If it is not included in the PUT request, its existing value on the coupon will be cleared. Also required to be set on the POST request
 * @export
 * @interface CouponBaseAppliesTo
 */
export interface CouponBaseAppliesTo {
    /**
     * ID of either the products or categories
     * @type {Array<number>}
     * @memberof CouponBaseAppliesTo
     */
    ids?: Array<number>;
    /**
     * What the discount applies to. Can be products or categories.
     * @type {string}
     * @memberof CouponBaseAppliesTo
     */
    entity?: string;
}

export function CouponBaseAppliesToFromJSON(json: any): CouponBaseAppliesTo {
    return CouponBaseAppliesToFromJSONTyped(json, false);
}

export function CouponBaseAppliesToFromJSONTyped(json: any, ignoreDiscriminator: boolean): CouponBaseAppliesTo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ids': !exists(json, 'ids') ? undefined : json['ids'],
        'entity': !exists(json, 'entity') ? undefined : json['entity'],
    };
}

export function CouponBaseAppliesToToJSON(value?: CouponBaseAppliesTo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ids': value.ids,
        'entity': value.entity,
    };
}

