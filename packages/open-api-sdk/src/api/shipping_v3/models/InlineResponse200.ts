/* tslint:disable */
/* eslint-disable */
/**
 * Shipping V3
 * V3 REST API shipping endpoints.
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
    CustomsInformation,
    CustomsInformationFromJSON,
    CustomsInformationFromJSONTyped,
    CustomsInformationToJSON,
    MetaCollection,
    MetaCollectionFromJSON,
    MetaCollectionFromJSONTyped,
    MetaCollectionToJSON,
} from './';

/**
 * 
 * @export
 * @interface InlineResponse200
 */
export interface InlineResponse200 {
    /**
     * 
     * @type {Array<CustomsInformation>}
     * @memberof InlineResponse200
     */
    data?: Array<CustomsInformation>;
    /**
     * 
     * @type {MetaCollection}
     * @memberof InlineResponse200
     */
    meta?: MetaCollection;
}

export function InlineResponse200FromJSON(json: any): InlineResponse200 {
    return InlineResponse200FromJSONTyped(json, false);
}

export function InlineResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(CustomsInformationFromJSON)),
        'meta': !exists(json, 'meta') ? undefined : MetaCollectionFromJSON(json['meta']),
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
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(CustomsInformationToJSON)),
        'meta': MetaCollectionToJSON(value.meta),
    };
}

