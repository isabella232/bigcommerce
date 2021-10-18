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
    StoreCustomerAddressCreatedAllOf,
    StoreCustomerAddressCreatedAllOfFromJSON,
    StoreCustomerAddressCreatedAllOfFromJSONTyped,
    StoreCustomerAddressCreatedAllOfToJSON,
    StoreCustomerAddressCreatedAllOfData,
    StoreCustomerAddressCreatedAllOfDataFromJSON,
    StoreCustomerAddressCreatedAllOfDataFromJSONTyped,
    StoreCustomerAddressCreatedAllOfDataToJSON,
    WebhookCallbackBase,
    WebhookCallbackBaseFromJSON,
    WebhookCallbackBaseFromJSONTyped,
    WebhookCallbackBaseToJSON,
} from './';

/**
 * Customer address is created
 * 
 * ### Example callback:
 * 
 * ```json
 * {
 *   "created_at": 1561482670,
 *   "store_id": "1025646",
 *   "producer": "stores/{store_hash}",
 *   "scope": "store/customer/address/created",
 *   "hash": "352e4afc6dd3fc85ea26bfdf3f91852604d57528",
 *   "data": {
 *     "type": "customer",
 *     "id": 60,
 *     "address": {
 *       "customer_id": 32
 *     }
 *   }
 * }
 * ```
 * 
 * ### Callback schema:
 * @export
 * @interface StoreCustomerAddressCreated
 */
export interface StoreCustomerAddressCreated {
    /**
     * Hook creation date as a Unix timestamp.
     * @type {number}
     * @memberof StoreCustomerAddressCreated
     */
    readonly createdAt?: number;
    /**
     * A numerical identifier that is unique to each store.
     * @type {string}
     * @memberof StoreCustomerAddressCreated
     */
    storeId?: string;
    /**
     * Will always follow the pattern `stores/store_hash`. This is the store that created the webhook.
     * @type {string}
     * @memberof StoreCustomerAddressCreated
     */
    producer?: string;
    /**
     * The event registered when the webhook was created.
     * @type {string}
     * @memberof StoreCustomerAddressCreated
     */
    scope?: string;
    /**
     * The payload data JSON encoded then passed through SH1 encryption.
     * @type {string}
     * @memberof StoreCustomerAddressCreated
     */
    hash?: string;
    /**
     * 
     * @type {StoreCustomerAddressCreatedAllOfData}
     * @memberof StoreCustomerAddressCreated
     */
    data?: StoreCustomerAddressCreatedAllOfData;
}

export function StoreCustomerAddressCreatedFromJSON(json: any): StoreCustomerAddressCreated {
    return StoreCustomerAddressCreatedFromJSONTyped(json, false);
}

export function StoreCustomerAddressCreatedFromJSONTyped(json: any, ignoreDiscriminator: boolean): StoreCustomerAddressCreated {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': !exists(json, 'created_at') ? undefined : json['created_at'],
        'storeId': !exists(json, 'store_id') ? undefined : json['store_id'],
        'producer': !exists(json, 'producer') ? undefined : json['producer'],
        'scope': !exists(json, 'scope') ? undefined : json['scope'],
        'hash': !exists(json, 'hash') ? undefined : json['hash'],
        'data': !exists(json, 'data') ? undefined : StoreCustomerAddressCreatedAllOfDataFromJSON(json['data']),
    };
}

export function StoreCustomerAddressCreatedToJSON(value?: StoreCustomerAddressCreated | null): any {
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
        'data': StoreCustomerAddressCreatedAllOfDataToJSON(value.data),
    };
}

