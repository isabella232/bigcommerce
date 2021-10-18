/* tslint:disable */
/* eslint-disable */
/**
 * Checkouts
 * Create checkouts from existing carts using BigCommerce checkout logic.
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    CustomField,
    CustomFieldFromJSON,
    CustomFieldFromJSONTyped,
    CustomFieldToJSON,
} from './';

/**
 * 
 * @export
 * @interface AddressProperties1
 */
export interface AddressProperties1 {
    /**
     * 
     * @type {string}
     * @memberof AddressProperties1
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressProperties1
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressProperties1
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof AddressProperties1
     */
    company?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressProperties1
     */
    address1?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressProperties1
     */
    address2?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressProperties1
     */
    city?: string;
    /**
     * Represents state or province.
     * @type {string}
     * @memberof AddressProperties1
     */
    stateOrProvince?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressProperties1
     */
    stateOrProvinceCode?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressProperties1
     */
    countryCode: string;
    /**
     * 
     * @type {string}
     * @memberof AddressProperties1
     */
    postalCode?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressProperties1
     */
    phone?: string;
    /**
     * 
     * @type {Array<CustomField>}
     * @memberof AddressProperties1
     */
    customFields?: Array<CustomField>;
}

export function AddressProperties1FromJSON(json: any): AddressProperties1 {
    return AddressProperties1FromJSONTyped(json, false);
}

export function AddressProperties1FromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressProperties1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstName': !exists(json, 'first_name') ? undefined : json['first_name'],
        'lastName': !exists(json, 'last_name') ? undefined : json['last_name'],
        'email': json['email'],
        'company': !exists(json, 'company') ? undefined : json['company'],
        'address1': !exists(json, 'address1') ? undefined : json['address1'],
        'address2': !exists(json, 'address2') ? undefined : json['address2'],
        'city': !exists(json, 'city') ? undefined : json['city'],
        'stateOrProvince': !exists(json, 'state_or_province') ? undefined : json['state_or_province'],
        'stateOrProvinceCode': !exists(json, 'state_or_province_code') ? undefined : json['state_or_province_code'],
        'countryCode': json['country_code'],
        'postalCode': !exists(json, 'postal_code') ? undefined : json['postal_code'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'customFields': !exists(json, 'custom_fields') ? undefined : ((json['custom_fields'] as Array<any>).map(CustomFieldFromJSON)),
    };
}

export function AddressProperties1ToJSON(value?: AddressProperties1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'first_name': value.firstName,
        'last_name': value.lastName,
        'email': value.email,
        'company': value.company,
        'address1': value.address1,
        'address2': value.address2,
        'city': value.city,
        'state_or_province': value.stateOrProvince,
        'state_or_province_code': value.stateOrProvinceCode,
        'country_code': value.countryCode,
        'postal_code': value.postalCode,
        'phone': value.phone,
        'custom_fields': value.customFields === undefined ? undefined : ((value.customFields as Array<any>).map(CustomFieldToJSON)),
    };
}

