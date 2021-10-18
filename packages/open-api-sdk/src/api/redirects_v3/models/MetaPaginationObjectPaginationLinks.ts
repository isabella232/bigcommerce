/* tslint:disable */
/* eslint-disable */
/**
 * Redirects
 * Manage 301 redirects for one or more storefronts powered by a single BigCommerce back-end.  **On This Page** - [Authentication](#authentication) - [OAuth Scopes](#oauth-scopes) ---   ## Authentication  Requests can be authenticated by sending an `access_token` via `X-Auth-Token` HTTP header:  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Accept: application/json X-Auth-Token: {access_token} ```  |Header|Parameter|Description| |-|-|-| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).
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
 * @interface MetaPaginationObjectPaginationLinks
 */
export interface MetaPaginationObjectPaginationLinks {
    /**
     * 
     * @type {string}
     * @memberof MetaPaginationObjectPaginationLinks
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof MetaPaginationObjectPaginationLinks
     */
    current?: string;
}

export function MetaPaginationObjectPaginationLinksFromJSON(json: any): MetaPaginationObjectPaginationLinks {
    return MetaPaginationObjectPaginationLinksFromJSONTyped(json, false);
}

export function MetaPaginationObjectPaginationLinksFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetaPaginationObjectPaginationLinks {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'next': !exists(json, 'next') ? undefined : json['next'],
        'current': !exists(json, 'current') ? undefined : json['current'],
    };
}

export function MetaPaginationObjectPaginationLinksToJSON(value?: MetaPaginationObjectPaginationLinks | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'next': value.next,
        'current': value.current,
    };
}

