/* tslint:disable */
/* eslint-disable */
/**
 * Webhooks v3
 * Get notified when specific events occur on a BigCommerce store. For more information, see [Webhooks Overview](https://developer.bigcommerce.com/api-docs/store-management/webhooks/overview).
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
    InlineResponse200Meta,
    InlineResponse200MetaFromJSON,
    InlineResponse200MetaFromJSONTyped,
    InlineResponse200MetaToJSON,
    WebhookFull,
    WebhookFullFromJSON,
    WebhookFullFromJSONTyped,
    WebhookFullToJSON,
} from './';

/**
 * 
 * @export
 * @interface InlineResponse200
 */
export interface InlineResponse200 {
    /**
     * 
     * @type {Array<WebhookFull>}
     * @memberof InlineResponse200
     */
    data?: Array<WebhookFull>;
    /**
     * 
     * @type {InlineResponse200Meta}
     * @memberof InlineResponse200
     */
    meta?: InlineResponse200Meta;
}

export function InlineResponse200FromJSON(json: any): InlineResponse200 {
    return InlineResponse200FromJSONTyped(json, false);
}

export function InlineResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(WebhookFullFromJSON)),
        'meta': !exists(json, 'meta') ? undefined : InlineResponse200MetaFromJSON(json['meta']),
    };
}

export function InlineResponse200ToJSON(value?: InlineResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(WebhookFullToJSON)),
        'meta': InlineResponse200MetaToJSON(value.meta),
    };
}

