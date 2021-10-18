/* tslint:disable */
/* eslint-disable */
/**
 * Themes
 * Backup, restore, download, and activate themes; and, get the status of theme jobs and read theme configurations.  - [OAuth Scopes](#oauth-scopes) - [Authentication](#authentication)  ## Authentication  Requests can be authenticated by sending an `access_token` via `X-Auth-Token` HTTP header.  ```http GET /stores/{$$.env.store_hash}/v3/themes host: api.bigcommerce.com Accept: application/json X-Auth-Token: {access_token} ```  ### OAuth Scopes | UI Name                                      | Permission | Parameter                                     | |----------------------------------------------|------------|-----------------------------------------------| | Themes                                       | modify     | `store_themes_manage`                         | For more information on OAuth Scopes, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    InlineResponse2001Data,
    InlineResponse2001DataFromJSON,
    InlineResponse2001DataFromJSONTyped,
    InlineResponse2001DataToJSON,
} from './';

/**
 * 
 * @export
 * @interface InlineResponse2001
 */
export interface InlineResponse2001 {
    /**
     * 
     * @type {InlineResponse2001Data}
     * @memberof InlineResponse2001
     */
    data?: InlineResponse2001Data;
    /**
     * 
     * @type {object}
     * @memberof InlineResponse2001
     */
    meta?: object;
}

export function InlineResponse2001FromJSON(json: any): InlineResponse2001 {
    return InlineResponse2001FromJSONTyped(json, false);
}

export function InlineResponse2001FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse2001 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : InlineResponse2001DataFromJSON(json['data']),
        'meta': !exists(json, 'meta') ? undefined : json['meta'],
    };
}

export function InlineResponse2001ToJSON(value?: InlineResponse2001 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': InlineResponse2001DataToJSON(value.data),
        'meta': value.meta,
    };
}

