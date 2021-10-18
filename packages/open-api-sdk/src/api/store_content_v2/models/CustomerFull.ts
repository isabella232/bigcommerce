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
    Addresses,
    AddressesFromJSON,
    AddressesFromJSONTyped,
    AddressesToJSON,
    CustomerFullAuthentication,
    CustomerFullAuthenticationFromJSON,
    CustomerFullAuthenticationFromJSONTyped,
    CustomerFullAuthenticationToJSON,
    FormField,
    FormFieldFromJSON,
    FormFieldFromJSONTyped,
    FormFieldToJSON,
} from './';

/**
 * 
 * @export
 * @interface CustomerFull
 */
export interface CustomerFull {
    /**
     * Unique numeric ID of this customer. This is a READ-ONLY field; do not set or modify its value in a POST or PUT request.
     * @type {number}
     * @memberof CustomerFull
     */
    id?: number;
    /**
     * 
     * @type {CustomerFullAuthentication}
     * @memberof CustomerFull
     */
    authentication?: CustomerFullAuthentication;
    /**
     * The name of the company for which the customer works.
     * @type {string}
     * @memberof CustomerFull
     */
    company?: string;
    /**
     * First name of the customer.
     * @type {string}
     * @memberof CustomerFull
     */
    firstName: string;
    /**
     * Last name of the customer.
     * @type {string}
     * @memberof CustomerFull
     */
    lastName: string;
    /**
     * Email address of the customer.
     * @type {string}
     * @memberof CustomerFull
     */
    email: string;
    /**
     * Phone number of the customer.
     * @type {string}
     * @memberof CustomerFull
     */
    phone?: string;
    /**
     * Date on which the customer registered from the storefront or was created in the control panel. This is a READ-ONLY field; do not set or modify its value in a POST or PUT request.
     * @type {Date}
     * @memberof CustomerFull
     */
    dateCreated?: Date;
    /**
     * Date on which the customer updated their details in the storefront or was updated in the control panel. This is a READ-ONLY field; do not set or modify its value in a POST or PUT request.
     * @type {Date}
     * @memberof CustomerFull
     */
    dateModified?: Date;
    /**
     * The amount of credit the customer has. (Float, Float as String, Integer)
     * @type {string}
     * @memberof CustomerFull
     */
    storeCredit?: string;
    /**
     * The customer’s IP address when they signed up.
     * @type {string}
     * @memberof CustomerFull
     */
    registrationIpAddress?: string;
    /**
     * The group to which the customer belongs.
     * @type {number}
     * @memberof CustomerFull
     */
    customerGroupId?: number;
    /**
     * Store-owner notes on the customer.
     * @type {string}
     * @memberof CustomerFull
     */
    notes?: string;
    /**
     * If applicable, the tax-exempt category of the shopper's customer account. You can apply a tax-exempt category to multiple customers. This code should match the exemption codes provided by the third-party integration.
     * @type {string}
     * @memberof CustomerFull
     */
    taxExemptCategory?: string;
    /**
     * Records whether the customer would like to receive marketing content from this store. READ-ONLY.This is a READ-ONLY field; do not set or modify its value in a POST or PUT request.
     * @type {boolean}
     * @memberof CustomerFull
     */
    acceptsMarketing?: boolean;
    /**
     * 
     * @type {Addresses}
     * @memberof CustomerFull
     */
    addresses?: Addresses;
    /**
     * Array of custom fields. This is a READ-ONLY field; do not set or modify its value in a POST or PUT request.
     * @type {Array<FormField>}
     * @memberof CustomerFull
     */
    formFields?: Array<FormField>;
    /**
     * Force a password change on next login.
     * @type {boolean}
     * @memberof CustomerFull
     */
    resetPassOnLogin?: boolean;
}

export function CustomerFullFromJSON(json: any): CustomerFull {
    return CustomerFullFromJSONTyped(json, false);
}

export function CustomerFullFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerFull {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'authentication': !exists(json, '_authentication') ? undefined : CustomerFullAuthenticationFromJSON(json['_authentication']),
        'company': !exists(json, 'company') ? undefined : json['company'],
        'firstName': json['first_name'],
        'lastName': json['last_name'],
        'email': json['email'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'dateCreated': !exists(json, 'date_created') ? undefined : (new Date(json['date_created'])),
        'dateModified': !exists(json, 'date_modified') ? undefined : (new Date(json['date_modified'])),
        'storeCredit': !exists(json, 'store_credit') ? undefined : json['store_credit'],
        'registrationIpAddress': !exists(json, 'registration_ip_address') ? undefined : json['registration_ip_address'],
        'customerGroupId': !exists(json, 'customer_group_id') ? undefined : json['customer_group_id'],
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
        'taxExemptCategory': !exists(json, 'tax_exempt_category') ? undefined : json['tax_exempt_category'],
        'acceptsMarketing': !exists(json, 'accepts_marketing') ? undefined : json['accepts_marketing'],
        'addresses': !exists(json, 'addresses') ? undefined : AddressesFromJSON(json['addresses']),
        'formFields': !exists(json, 'form_fields') ? undefined : ((json['form_fields'] as Array<any>).map(FormFieldFromJSON)),
        'resetPassOnLogin': !exists(json, 'reset_pass_on_login') ? undefined : json['reset_pass_on_login'],
    };
}

export function CustomerFullToJSON(value?: CustomerFull | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        '_authentication': CustomerFullAuthenticationToJSON(value.authentication),
        'company': value.company,
        'first_name': value.firstName,
        'last_name': value.lastName,
        'email': value.email,
        'phone': value.phone,
        'date_created': value.dateCreated === undefined ? undefined : (value.dateCreated.toISOString()),
        'date_modified': value.dateModified === undefined ? undefined : (value.dateModified.toISOString()),
        'store_credit': value.storeCredit,
        'registration_ip_address': value.registrationIpAddress,
        'customer_group_id': value.customerGroupId,
        'notes': value.notes,
        'tax_exempt_category': value.taxExemptCategory,
        'accepts_marketing': value.acceptsMarketing,
        'addresses': AddressesToJSON(value.addresses),
        'form_fields': value.formFields === undefined ? undefined : ((value.formFields as Array<any>).map(FormFieldToJSON)),
        'reset_pass_on_login': value.resetPassOnLogin,
    };
}

