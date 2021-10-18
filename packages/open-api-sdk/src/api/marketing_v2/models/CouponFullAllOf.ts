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
 * @interface CouponFullAllOf
 */
export interface CouponFullAllOf {
    /**
     * The coupon's ID. This is a read-only field; do not set or modify its value in a POST or PUT request.
     * @type {number}
     * @memberof CouponFullAllOf
     */
    id: number;
    /**
     * Date Created
     * @type {string}
     * @memberof CouponFullAllOf
     */
    dateCreated?: string;
    /**
     * Number of times this coupon has been used. This is a read-only field; do not set or modify its value in a POST or PUT request.
     * @type {number}
     * @memberof CouponFullAllOf
     */
    numUses?: number;
}

export function CouponFullAllOfFromJSON(json: any): CouponFullAllOf {
    return CouponFullAllOfFromJSONTyped(json, false);
}

export function CouponFullAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): CouponFullAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'dateCreated': !exists(json, 'date_created') ? undefined : json['date_created'],
        'numUses': !exists(json, 'num_uses') ? undefined : json['num_uses'],
    };
}

export function CouponFullAllOfToJSON(value?: CouponFullAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'date_created': value.dateCreated,
        'num_uses': value.numUses,
    };
}

