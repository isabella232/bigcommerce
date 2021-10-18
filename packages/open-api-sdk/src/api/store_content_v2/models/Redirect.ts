/* tslint:disable */
/* eslint-disable */
/**
 * Content
 * Manage blog posts, blog tags, content pages, and redirects.  <div class=\"HubBlock--callout\"> <div class=\"CalloutBlock--warning\"> <div class=\"HubBlock-content\">  ### Note * Redirects V2 are deprecated; use [V3 Redirects](https://developer.bigcommerce.com/api-reference/storefront/redirects/redirects/getredirects) instead. * Pages V2 are deprecated; use [Pages V3](https://developer.bigcommerce.com/api-reference/store-management/pages) instead.   </div> </div> </div>
 *
 * The version of the OpenAPI document: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    RedirectsIdForward,
    RedirectsIdForwardFromJSON,
    RedirectsIdForwardFromJSONTyped,
    RedirectsIdForwardToJSON,
} from './';

/**
 * 
 * @export
 * @interface Redirect
 */
export interface Redirect {
    /**
     * Numeric ID of the redirect.
     * @type {number}
     * @memberof Redirect
     */
    id?: number;
    /**
     * The path from which to redirect.
     * @type {string}
     * @memberof Redirect
     */
    path: string;
    /**
     * 
     * @type {RedirectsIdForward}
     * @memberof Redirect
     */
    forward: RedirectsIdForward;
    /**
     * URL of the redirect. READ-ONLY
     * @type {string}
     * @memberof Redirect
     */
    url?: string;
}

export function RedirectFromJSON(json: any): Redirect {
    return RedirectFromJSONTyped(json, false);
}

export function RedirectFromJSONTyped(json: any, ignoreDiscriminator: boolean): Redirect {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'path': json['path'],
        'forward': RedirectsIdForwardFromJSON(json['forward']),
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function RedirectToJSON(value?: Redirect | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'path': value.path,
        'forward': RedirectsIdForwardToJSON(value.forward),
        'url': value.url,
    };
}

