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
    StoreChannelCreatedAllOf,
    StoreChannelCreatedAllOfFromJSON,
    StoreChannelCreatedAllOfFromJSONTyped,
    StoreChannelCreatedAllOfToJSON,
    StoreChannelCreatedAllOfData,
    StoreChannelCreatedAllOfDataFromJSON,
    StoreChannelCreatedAllOfDataFromJSONTyped,
    StoreChannelCreatedAllOfDataToJSON,
    WebhookCallbackBase,
    WebhookCallbackBaseFromJSON,
    WebhookCallbackBaseFromJSONTyped,
    WebhookCallbackBaseToJSON,
} from './';

/**
 * Fires when a channel is updated via control panel or API. 
 * 
 * Fields that trigger event:<ul><li>name</li><li>external_id</li><li>status</li><li>is_listable_from_ui</li><li>is_visible</li><li>is_enabled (to be deprecated)</li><li>config_meta</li></ul>
 * 
 * ### Example callback:
 * 
 * ```json
 * {
 *   "created_at": 1561482670,
 *   "store_id": "1025646",
 *   "producer": "stores/{store_hash}",
 *   "scope": "store/channel/updated",
 *   "hash": "352e4afc6dd3fc85ea26bfdf3f91852604d57528",
 *   "data": {
 *     "type": "channel",
 *     "id": 173331
 *   }
 * }
 * ```
 * 
 * ### Callback schema:
 * @export
 * @interface StoreChannelUpdated
 */
export interface StoreChannelUpdated {
    /**
     * Hook creation date as a Unix timestamp.
     * @type {number}
     * @memberof StoreChannelUpdated
     */
    readonly createdAt?: number;
    /**
     * A numerical identifier that is unique to each store.
     * @type {string}
     * @memberof StoreChannelUpdated
     */
    storeId?: string;
    /**
     * Will always follow the pattern `stores/store_hash`. This is the store that created the webhook.
     * @type {string}
     * @memberof StoreChannelUpdated
     */
    producer?: string;
    /**
     * The event registered when the webhook was created.
     * @type {string}
     * @memberof StoreChannelUpdated
     */
    scope?: string;
    /**
     * The payload data JSON encoded then passed through SH1 encryption.
     * @type {string}
     * @memberof StoreChannelUpdated
     */
    hash?: string;
    /**
     * 
     * @type {StoreChannelCreatedAllOfData}
     * @memberof StoreChannelUpdated
     */
    data?: StoreChannelCreatedAllOfData;
}

export function StoreChannelUpdatedFromJSON(json: any): StoreChannelUpdated {
    return StoreChannelUpdatedFromJSONTyped(json, false);
}

export function StoreChannelUpdatedFromJSONTyped(json: any, ignoreDiscriminator: boolean): StoreChannelUpdated {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': !exists(json, 'created_at') ? undefined : json['created_at'],
        'storeId': !exists(json, 'store_id') ? undefined : json['store_id'],
        'producer': !exists(json, 'producer') ? undefined : json['producer'],
        'scope': !exists(json, 'scope') ? undefined : json['scope'],
        'hash': !exists(json, 'hash') ? undefined : json['hash'],
        'data': !exists(json, 'data') ? undefined : StoreChannelCreatedAllOfDataFromJSON(json['data']),
    };
}

export function StoreChannelUpdatedToJSON(value?: StoreChannelUpdated | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'store_id': value.storeId,
        'producer': value.producer,
        'scope': value.scope,
        'hash': value.hash,
        'data': StoreChannelCreatedAllOfDataToJSON(value.data),
    };
}

