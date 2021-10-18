/* tslint:disable */
/* eslint-disable */
/**
 * Storefront Checkouts
 * Manage checkout operations and data via front-end JavaScript on BigCommerce stencil powered storefronts.
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
    AddressPropertiesCustomFields,
    AddressPropertiesCustomFieldsFromJSON,
    AddressPropertiesCustomFieldsFromJSONTyped,
    AddressPropertiesCustomFieldsToJSON,
} from './';

/**
 * 
 * @export
 * @interface AddressProperties
 */
export interface AddressProperties {
    /**
     * 
     * @type {string}
     * @memberof AddressProperties
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressProperties
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressProperties
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressProperties
     */
    company?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressProperties
     */
    address1?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressProperties
     */
    address2?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressProperties
     */
    city?: string;
    /**
     * Represents state or province.
     * @type {string}
     * @memberof AddressProperties
     */
    stateOrProvince?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressProperties
     */
    stateOrProvinceCode?: string;
    /**
     * ISO 3166-1 alpha-2 country code. (See: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
     * @type {string}
     * @memberof AddressProperties
     */
    countryCode: string;
    /**
     * 
     * @type {string}
     * @memberof AddressProperties
     */
    postalCode?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressProperties
     */
    phone?: string;
    /**
     * 
     * @type {Array<AddressPropertiesCustomFields>}
     * @memberof AddressProperties
     */
    customFields?: Array<AddressPropertiesCustomFields>;
    /**
     * Indicates if we should add this address to the customer address book.
     * @type {boolean}
     * @memberof AddressProperties
     */
    shouldSaveAddress?: boolean;
}

export function AddressPropertiesFromJSON(json: any): AddressProperties {
    return AddressPropertiesFromJSONTyped(json, false);
}

export function AddressPropertiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressProperties {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'company': !exists(json, 'company') ? undefined : json['company'],
        'address1': !exists(json, 'address1') ? undefined : json['address1'],
        'address2': !exists(json, 'address2') ? undefined : json['address2'],
        'city': !exists(json, 'city') ? undefined : json['city'],
        'stateOrProvince': !exists(json, 'stateOrProvince') ? undefined : json['stateOrProvince'],
        'stateOrProvinceCode': !exists(json, 'stateOrProvinceCode') ? undefined : json['stateOrProvinceCode'],
        'countryCode': json['countryCode'],
        'postalCode': !exists(json, 'postalCode') ? undefined : json['postalCode'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'customFields': !exists(json, 'customFields') ? undefined : ((json['customFields'] as Array<any>).map(AddressPropertiesCustomFieldsFromJSON)),
        'shouldSaveAddress': !exists(json, 'shouldSaveAddress') ? undefined : json['shouldSaveAddress'],
    };
}

export function AddressPropertiesToJSON(value?: AddressProperties | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'firstName': value.firstName,
        'lastName': value.lastName,
        'email': value.email,
        'company': value.company,
        'address1': value.address1,
        'address2': value.address2,
        'city': value.city,
        'stateOrProvince': value.stateOrProvince,
        'stateOrProvinceCode': value.stateOrProvinceCode,
        'countryCode': value.countryCode,
        'postalCode': value.postalCode,
        'phone': value.phone,
        'customFields': value.customFields === undefined ? undefined : ((value.customFields as Array<any>).map(AddressPropertiesCustomFieldsToJSON)),
        'shouldSaveAddress': value.shouldSaveAddress,
    };
}

