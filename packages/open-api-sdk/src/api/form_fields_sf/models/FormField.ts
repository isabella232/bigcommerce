/* tslint:disable */
/* eslint-disable */
/**
 * Storefront Form Fields (Beta)
 * Read form fields on a BigCommerce hosted storefront.  <div class=\"HubBlock--callout\"> <div class=\"CalloutBlock--warning\"> <div class=\"HubBlock-content\">  > ### Note > * Breaking changes may be introduced to this endpoint while in beta.  </div> </div> </div>
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
    FormFieldOptions,
    FormFieldOptionsFromJSON,
    FormFieldOptionsFromJSONTyped,
    FormFieldOptionsToJSON,
} from './';

/**
 * Form Field
 * @export
 * @interface FormField
 */
export interface FormField {
    /**
     * Field unique ID
     * @type {string}
     * @memberof FormField
     */
    id?: string;
    /**
     * Field name
     * @type {string}
     * @memberof FormField
     */
    name?: string;
    /**
     * Wether is a custom field or system built-in field.
     * @type {boolean}
     * @memberof FormField
     */
    custom?: boolean;
    /**
     * User-friendly label
     * @type {string}
     * @memberof FormField
     */
    label?: string;
    /**
     * Wether this field is required or not
     * @type {boolean}
     * @memberof FormField
     */
    required?: boolean;
    /**
     * The field unique ID
     * @type {string}
     * @memberof FormField
     */
    _default?: string;
    /**
     * Type of the value hold by the field
     * @type {string}
     * @memberof FormField
     */
    type?: FormFieldTypeEnum;
    /**
     * Type of the field
     * @type {string}
     * @memberof FormField
     */
    fieldType?: FormFieldFieldTypeEnum;
    /**
     * The minimun valid value for the field (integer and date type only)
     * @type {string}
     * @memberof FormField
     */
    min?: string;
    /**
     * The minimun valid value for the field (integer and date type only)
     * @type {string}
     * @memberof FormField
     */
    max?: string;
    /**
     * The maximum length for the value (string type only)
     * @type {number}
     * @memberof FormField
     */
    maxLength?: number;
    /**
     * Whether the field represents a password field
     * @type {boolean}
     * @memberof FormField
     */
    secret?: boolean;
    /**
     * 
     * @type {FormFieldOptions}
     * @memberof FormField
     */
    options?: FormFieldOptions;
}

/**
* @export
* @enum {string}
*/
export enum FormFieldTypeEnum {
    Integer = 'integer',
    String = 'string',
    Array = 'array',
    Date = 'date'
}/**
* @export
* @enum {string}
*/
export enum FormFieldFieldTypeEnum {
    Checkbox = 'checkbox',
    Text = 'text',
    Date = 'date',
    Multiline = 'multiline',
    Radio = 'radio',
    Dropdown = 'dropdown'
}

export function FormFieldFromJSON(json: any): FormField {
    return FormFieldFromJSONTyped(json, false);
}

export function FormFieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): FormField {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'custom': !exists(json, 'custom') ? undefined : json['custom'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'required': !exists(json, 'required') ? undefined : json['required'],
        '_default': !exists(json, 'default') ? undefined : json['default'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'fieldType': !exists(json, 'fieldType') ? undefined : json['fieldType'],
        'min': !exists(json, 'min') ? undefined : json['min'],
        'max': !exists(json, 'max') ? undefined : json['max'],
        'maxLength': !exists(json, 'maxLength') ? undefined : json['maxLength'],
        'secret': !exists(json, 'secret') ? undefined : json['secret'],
        'options': !exists(json, 'options') ? undefined : FormFieldOptionsFromJSON(json['options']),
    };
}

export function FormFieldToJSON(value?: FormField | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'custom': value.custom,
        'label': value.label,
        'required': value.required,
        'default': value._default,
        'type': value.type,
        'fieldType': value.fieldType,
        'min': value.min,
        'max': value.max,
        'maxLength': value.maxLength,
        'secret': value.secret,
        'options': FormFieldOptionsToJSON(value.options),
    };
}

