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
 * @interface ErrorResponse
 */
export interface ErrorResponse {
    /**
     * HTTP status code
     * @type {number}
     * @memberof ErrorResponse
     */
    status: number;
    /**
     * Short summary describing the particular error
     * @type {string}
     * @memberof ErrorResponse
     */
    title: string;
    /**
     * Detailed summary describing the particular error
     * @type {string}
     * @memberof ErrorResponse
     */
    detail?: string;
    /**
     * Reference that identifies the particular error
     * @type {string}
     * @memberof ErrorResponse
     */
    type: string;
    /**
     * Code representing the particular error
     * @type {number}
     * @memberof ErrorResponse
     */
    code?: number;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ErrorResponse
     */
    errors?: { [key: string]: string; };
}

export function ErrorResponseFromJSON(json: any): ErrorResponse {
    return ErrorResponseFromJSONTyped(json, false);
}

export function ErrorResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': json['status'],
        'title': json['title'],
        'detail': !exists(json, 'detail') ? undefined : json['detail'],
        'type': json['type'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
    };
}

export function ErrorResponseToJSON(value?: ErrorResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'title': value.title,
        'detail': value.detail,
        'type': value.type,
        'code': value.code,
        'errors': value.errors,
    };
}

