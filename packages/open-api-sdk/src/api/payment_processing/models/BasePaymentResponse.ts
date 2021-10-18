/* tslint:disable */
/* eslint-disable */
/**
 * Payment Processing
 * Process payments using payment instrument such as credit card. See [Payments Overview](https://developer.bigcommerce.com/api-docs/store-management/payment-processing) for more information.
 *
 * The version of the OpenAPI document: 1.0.0
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
 * @interface BasePaymentResponse
 */
export interface BasePaymentResponse {
    /**
     * Identifier for this transaction
     * @type {string}
     * @memberof BasePaymentResponse
     */
    id?: string;
    /**
     * Transaction type for this payment
     * @type {string}
     * @memberof BasePaymentResponse
     */
    transactionType?: BasePaymentResponseTransactionTypeEnum;
}

/**
* @export
* @enum {string}
*/
export enum BasePaymentResponseTransactionTypeEnum {
    Authorization = 'authorization',
    Purchase = 'purchase'
}

export function BasePaymentResponseFromJSON(json: any): BasePaymentResponse {
    return BasePaymentResponseFromJSONTyped(json, false);
}

export function BasePaymentResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BasePaymentResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'transactionType': !exists(json, 'transaction_type') ? undefined : json['transaction_type'],
    };
}

export function BasePaymentResponseToJSON(value?: BasePaymentResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'transaction_type': value.transactionType,
    };
}

