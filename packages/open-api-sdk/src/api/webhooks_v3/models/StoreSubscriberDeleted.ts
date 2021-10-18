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
    StoreSubscriberCreatedAllOf,
    StoreSubscriberCreatedAllOfFromJSON,
    StoreSubscriberCreatedAllOfFromJSONTyped,
    StoreSubscriberCreatedAllOfToJSON,
    StoreSubscriberCreatedAllOfData,
    StoreSubscriberCreatedAllOfDataFromJSON,
    StoreSubscriberCreatedAllOfDataFromJSONTyped,
    StoreSubscriberCreatedAllOfDataToJSON,
    WebhookCallbackBase,
    WebhookCallbackBaseFromJSON,
    WebhookCallbackBaseFromJSONTyped,
    WebhookCallbackBaseToJSON,
} from './';

/**
 * Subscriber is deleted
 * 
 * ### Example callback:
 * 
 * ```json
 * {
 *   "created_at": 1561482670,
 *   "store_id": "1025646",
 *   "producer": "stores/{store_hash}",
 *   "scope": "store/subscriber/deleted",
 *   "hash": "352e4afc6dd3fc85ea26bfdf3f91852604d57528",
 *   "data": {
 *     "type": "subscriber",
 *     "id": 5
 *   }
 * }
 * ```
 * 
 * ### Callback schema:
 * @export
 * @interface StoreSubscriberDeleted
 */
export interface StoreSubscriberDeleted {
    /**
     * Hook creation date as a Unix timestamp.
     * @type {number}
     * @memberof StoreSubscriberDeleted
     */
    readonly createdAt?: number;
    /**
     * A numerical identifier that is unique to each store.
     * @type {string}
     * @memberof StoreSubscriberDeleted
     */
    storeId?: string;
    /**
     * Will always follow the pattern `stores/store_hash`. This is the store that created the webhook.
     * @type {string}
     * @memberof StoreSubscriberDeleted
     */
    producer?: string;
    /**
     * The event registered when the webhook was created.
     * @type {string}
     * @memberof StoreSubscriberDeleted
     */
    scope?: string;
    /**
     * The payload data JSON encoded then passed through SH1 encryption.
     * @type {string}
     * @memberof StoreSubscriberDeleted
     */
    hash?: string;
    /**
     * 
     * @type {StoreSubscriberCreatedAllOfData}
     * @memberof StoreSubscriberDeleted
     */
    data?: StoreSubscriberCreatedAllOfData;
}

export function StoreSubscriberDeletedFromJSON(json: any): StoreSubscriberDeleted {
    return StoreSubscriberDeletedFromJSONTyped(json, false);
}

export function StoreSubscriberDeletedFromJSONTyped(json: any, ignoreDiscriminator: boolean): StoreSubscriberDeleted {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': !exists(json, 'created_at') ? undefined : json['created_at'],
        'storeId': !exists(json, 'store_id') ? undefined : json['store_id'],
        'producer': !exists(json, 'producer') ? undefined : json['producer'],
        'scope': !exists(json, 'scope') ? undefined : json['scope'],
        'hash': !exists(json, 'hash') ? undefined : json['hash'],
        'data': !exists(json, 'data') ? undefined : StoreSubscriberCreatedAllOfDataFromJSON(json['data']),
    };
}

export function StoreSubscriberDeletedToJSON(value?: StoreSubscriberDeleted | null): any {
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
        'data': StoreSubscriberCreatedAllOfDataToJSON(value.data),
    };
}

