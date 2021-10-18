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
    ThemeVariations,
    ThemeVariationsFromJSON,
    ThemeVariationsFromJSONTyped,
    ThemeVariationsToJSON,
} from './';

/**
 * A theme.
 * @export
 * @interface ThemesCollectionResponseData
 */
export interface ThemesCollectionResponseData {
    /**
     * The variations.
     * @type {Array<ThemeVariations>}
     * @memberof ThemesCollectionResponseData
     */
    variations?: Array<ThemeVariations>;
    /**
     * The identifier.
     * @type {string}
     * @memberof ThemesCollectionResponseData
     */
    uuid?: string;
    /**
     * The theme name identifier.
     * @type {string}
     * @memberof ThemesCollectionResponseData
     */
    name?: string;
    /**
     * Flag to identify private themes.
     * @type {boolean}
     * @memberof ThemesCollectionResponseData
     */
    isPrivate?: boolean;
}

export function ThemesCollectionResponseDataFromJSON(json: any): ThemesCollectionResponseData {
    return ThemesCollectionResponseDataFromJSONTyped(json, false);
}

export function ThemesCollectionResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThemesCollectionResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'variations': !exists(json, 'variations') ? undefined : ((json['variations'] as Array<any>).map(ThemeVariationsFromJSON)),
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'isPrivate': !exists(json, 'is_private') ? undefined : json['is_private'],
    };
}

export function ThemesCollectionResponseDataToJSON(value?: ThemesCollectionResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'variations': value.variations === undefined ? undefined : ((value.variations as Array<any>).map(ThemeVariationsToJSON)),
        'uuid': value.uuid,
        'name': value.name,
        'is_private': value.isPrivate,
    };
}

