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
    WhichThemeToDownloadAllOf,
    WhichThemeToDownloadAllOfFromJSON,
    WhichThemeToDownloadAllOfFromJSONTyped,
    WhichThemeToDownloadAllOfToJSON,
} from './';

/**
 * An object specifying which theme to download. One of: `original`: the original Marketplace or uploaded custom theme; `last_activated`: the theme version most recently applied to the store; `last_created`: the theme version most recently created.
 * @export
 * @interface WhichThemeToDownload
 */
export interface WhichThemeToDownload {
    /**
     * Which revision to use.
     * @type {string}
     * @memberof WhichThemeToDownload
     */
    which?: WhichThemeToDownloadWhichEnum;
}

/**
* @export
* @enum {string}
*/
export enum WhichThemeToDownloadWhichEnum {
    Original = 'original',
    LastActivated = 'last_activated',
    LastCreated = 'last_created'
}

export function WhichThemeToDownloadFromJSON(json: any): WhichThemeToDownload {
    return WhichThemeToDownloadFromJSONTyped(json, false);
}

export function WhichThemeToDownloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): WhichThemeToDownload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'which': !exists(json, 'which') ? undefined : json['which'],
    };
}

export function WhichThemeToDownloadToJSON(value?: WhichThemeToDownload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'which': value.which,
    };
}

