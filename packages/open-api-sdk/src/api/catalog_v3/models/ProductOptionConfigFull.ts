/* tslint:disable */
/* eslint-disable */
/**
 * Catalog
 * Manage products, brands and categories. To learn more about catalog resources see [Catalog Overview](https://developer.bigcommerce.com/api-docs/catalog/products-overview).  - [Authentication](#authentication) - [Differentiating Variants and Modifiers](#differentiating-variants-and-modifiers) - [Available Endpoints](#available-endpoints) - [Resources](#resources)  ## Authentication Requests can be authenticated by sending an `access_token` via `X-Auth-Token` HTTP header:  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Accept: application/json X-Auth-Token: {access_token} ```  |Header|Parameter|Description| |-|-|-| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  ### OAuth Scopes | UI Name  | Permission | Parameter                     | |----------|------------|-------------------------------| | Products | modify     | `store_v2_products`           | | Products | read-only  | `store_v2_products_read_only` |  For more information on OAuth Scopes, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Differentiating Variants and Modifiers [Variants](https://support.bigcommerce.com/s/article/Product-Options-v3#variations) represent a physical product made up of [Product Option](https://support.bigcommerce.com/s/article/Product-Options-v3) choices, i.e. a large blue t-shirt. Each variant can have a unique SKU.  Modifiers represent a choice a customer makes about a product that doesn\'t represent a physical item, i.e. text to be printed on a t-shirt. Assigning a SKU to a modifier will turn it into a variant.  See [Variant Options](https://developer.bigcommerce.com/api-docs/catalog/products-overview#variant-options) and [Modifier Options](https://developer.bigcommerce.com/api-docs/catalog/products-overview#modifier-options) for more information.  ## Available Endpoints | Resource / Endpoint                     | Description                                                             | |-----------------------------------------|-------------------------------------------------------------------------| | Brand Images                            | Create and manage brand images                                          | | Brand Metafields                        | Create and manage brand metafields                                      | | Brands                                  | Create and manage brands                                                | | Catalog                                 | Create and manage store categories, products, and brands                | | Categories                              | Create and manage categorties                                           | | Category Images                         | Create and manage category images                                       | | Category Metafields                     | Create and manage category metafields                                   | | Product Bulk Pricing Rules              | Create and manage product bulk pricing rules                            | | Product Complex Rules                   | Create and manage product complex rules                                 | | Product Custom Fields                   | Create and manage product custom fields                                 | | Product Images                          | Create and manage product images                                        | | Product Metafields                      | Create and manage product meta fields                                   | | Product Modifier Images                 | Create and manage product modifer images                                | | Product Modifier Values                 | Create and manage product modifier values                               | | Product Modifiers                       | Create and manage product midifiers                                     | | Product Reviews                         | Create and manage product reviews                                       | | Product Variant Option Values           | Create and manage product variant option values                         | | Product Variant Options                 | Create and manage product variant options                               | | Product Variants                        | Create and manage product variants                                      | | Product Videos                          | Create and manage product videos                                        | | Products                                | Create and manage products                                              | | ProductVariant Metafields               | Create and manage product meta flields                                  | | Variants                                | Get and update all variants                                             |  ## Resources  ### Webhooks * [Products](/api-docs/store-management/webhooks/events#products) * [Categories](/api-docs/store-management/webhooks/events#category) * [SKU](/api-docs/store-management/webhooks/events#sku)
 *
 * The version of the OpenAPI document: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * The values for option config can vary based on the Modifier created.
 * @export
 * @interface ProductOptionConfigFull
 */
export interface ProductOptionConfigFull {
    /**
     * (date, text, multi_line_text, numbers_only_text) The default value. Shown on a date option as an ISO-8601–formatted string, or on a text option as a string.
     * @type {string}
     * @memberof ProductOptionConfigFull
     */
    defaultValue?: string;
    /**
     * (checkbox) Flag for setting the checkbox to be checked by default.
     * @type {boolean}
     * @memberof ProductOptionConfigFull
     */
    checkedByDefault?: boolean;
    /**
     * (checkbox) Label displayed for the checkbox option.
     * @type {string}
     * @memberof ProductOptionConfigFull
     */
    checkboxLabel?: string;
    /**
     * (date) Flag to limit the dates allowed to be entered on a date option.
     * @type {boolean}
     * @memberof ProductOptionConfigFull
     */
    dateLimited?: boolean;
    /**
     * (date) The type of limit that is allowed to be entered on a date option.
     * @type {string}
     * @memberof ProductOptionConfigFull
     */
    dateLimitMode?: ProductOptionConfigFullDateLimitModeEnum;
    /**
     * (date) The earliest date allowed to be entered on the date option, as an ISO-8601 formatted string.
     * @type {Date}
     * @memberof ProductOptionConfigFull
     */
    dateEarliestValue?: Date;
    /**
     * (date) The latest date allowed to be entered on the date option, as an ISO-8601 formatted string.
     * @type {Date}
     * @memberof ProductOptionConfigFull
     */
    dateLatestValue?: Date;
    /**
     * (file) The kind of restriction on the file types that can be uploaded with a file upload option. Values: `specific` - restricts uploads to particular file types; `all` - allows all file types.
     * @type {string}
     * @memberof ProductOptionConfigFull
     */
    fileTypesMode?: ProductOptionConfigFullFileTypesModeEnum;
    /**
     * (file) The type of files allowed to be uploaded if the `file_type_option` is set to `specific`. Values:
     *   `images` - Allows upload of image MIME types (`bmp`, `gif`, `jpg`, `jpeg`, `jpe`, `jif`, `jfif`, `jfi`, `png`, `wbmp`, `xbm`, `tiff`). `documents` - Allows upload of document MIME types (`txt`, `pdf`, `rtf`, `doc`, `docx`, `xls`, `xlsx`, `accdb`, `mdb`, `one`, `pps`, `ppsx`, `ppt`, `pptx`, `pub`, `odt`, `ods`, `odp`, `odg`, `odf`).
     *   `other` - Allows file types defined in the `file_types_other` array.
     * @type {Array<string>}
     * @memberof ProductOptionConfigFull
     */
    fileTypesSupported?: Array<string>;
    /**
     * (file) A list of other file types allowed with the file upload option.
     * @type {Array<string>}
     * @memberof ProductOptionConfigFull
     */
    fileTypesOther?: Array<string>;
    /**
     * (file) The maximum size for a file that can be used with the file upload option. This will still be limited by the server.
     * @type {number}
     * @memberof ProductOptionConfigFull
     */
    fileMaxSize?: number;
    /**
     * (text, multi_line_text) Flag to validate the length of a text or multi-line text input.
     * @type {boolean}
     * @memberof ProductOptionConfigFull
     */
    textCharactersLimited?: boolean;
    /**
     * (text, multi_line_text) The minimum length allowed for a text or multi-line text option.
     * @type {number}
     * @memberof ProductOptionConfigFull
     */
    textMinLength?: number;
    /**
     * (text, multi_line_text) The maximum length allowed for a text or multi line text option.
     * @type {number}
     * @memberof ProductOptionConfigFull
     */
    textMaxLength?: number;
    /**
     * (multi_line_text) Flag to validate the maximum number of lines allowed on a multi-line text input.
     * @type {boolean}
     * @memberof ProductOptionConfigFull
     */
    textLinesLimited?: boolean;
    /**
     * (multi_line_text) The maximum number of lines allowed on a multi-line text input.
     * @type {number}
     * @memberof ProductOptionConfigFull
     */
    textMaxLines?: number;
    /**
     * (numbers_only_text) Flag to limit the value of a number option.
     * @type {boolean}
     * @memberof ProductOptionConfigFull
     */
    numberLimited?: boolean;
    /**
     * (numbers_only_text) The type of limit on values entered for a number option.
     * @type {string}
     * @memberof ProductOptionConfigFull
     */
    numberLimitMode?: ProductOptionConfigFullNumberLimitModeEnum;
    /**
     * (numbers_only_text) The lowest allowed value for a number option if `number_limited` is true.
     * @type {number}
     * @memberof ProductOptionConfigFull
     */
    numberLowestValue?: number;
    /**
     * (numbers_only_text) The highest allowed value for a number option if `number_limited` is true.
     * @type {number}
     * @memberof ProductOptionConfigFull
     */
    numberHighestValue?: number;
    /**
     * (numbers_only_text) Flag to limit the input on a number option to whole numbers only.
     * @type {boolean}
     * @memberof ProductOptionConfigFull
     */
    numberIntegersOnly?: boolean;
    /**
     * (product_list, product_list_with_images) Flag for automatically adjusting inventory on a product included in the list.
     * @type {boolean}
     * @memberof ProductOptionConfigFull
     */
    productListAdjustsInventory?: boolean;
    /**
     * (product_list, product_list_with_images) Flag to add the optional product's price to the main product's price.
     * @type {boolean}
     * @memberof ProductOptionConfigFull
     */
    productListAdjustsPricing?: boolean;
    /**
     * (product_list, product_list_with_images) How to factor the optional product's weight and package dimensions into the shipping quote. Values: `none` - don't adjust; `weight` - use shipping weight only; `package` - use weight and dimensions.
     * @type {string}
     * @memberof ProductOptionConfigFull
     */
    productListShippingCalc?: ProductOptionConfigFullProductListShippingCalcEnum;
}

/**
* @export
* @enum {string}
*/
export enum ProductOptionConfigFullDateLimitModeEnum {
    Earliest = 'earliest',
    Range = 'range',
    Latest = 'latest'
}/**
* @export
* @enum {string}
*/
export enum ProductOptionConfigFullFileTypesModeEnum {
    Specific = 'specific',
    All = 'all'
}/**
* @export
* @enum {string}
*/
export enum ProductOptionConfigFullNumberLimitModeEnum {
    Lowest = 'lowest',
    Highest = 'highest',
    Range = 'range'
}/**
* @export
* @enum {string}
*/
export enum ProductOptionConfigFullProductListShippingCalcEnum {
    None = 'none',
    Weight = 'weight',
    Package = 'package'
}

export function ProductOptionConfigFullFromJSON(json: any): ProductOptionConfigFull {
    return ProductOptionConfigFullFromJSONTyped(json, false);
}

export function ProductOptionConfigFullFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductOptionConfigFull {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'defaultValue': !exists(json, 'default_value') ? undefined : json['default_value'],
        'checkedByDefault': !exists(json, 'checked_by_default') ? undefined : json['checked_by_default'],
        'checkboxLabel': !exists(json, 'checkbox_label') ? undefined : json['checkbox_label'],
        'dateLimited': !exists(json, 'date_limited') ? undefined : json['date_limited'],
        'dateLimitMode': !exists(json, 'date_limit_mode') ? undefined : json['date_limit_mode'],
        'dateEarliestValue': !exists(json, 'date_earliest_value') ? undefined : (new Date(json['date_earliest_value'])),
        'dateLatestValue': !exists(json, 'date_latest_value') ? undefined : (new Date(json['date_latest_value'])),
        'fileTypesMode': !exists(json, 'file_types_mode') ? undefined : json['file_types_mode'],
        'fileTypesSupported': !exists(json, 'file_types_supported') ? undefined : json['file_types_supported'],
        'fileTypesOther': !exists(json, 'file_types_other') ? undefined : json['file_types_other'],
        'fileMaxSize': !exists(json, 'file_max_size') ? undefined : json['file_max_size'],
        'textCharactersLimited': !exists(json, 'text_characters_limited') ? undefined : json['text_characters_limited'],
        'textMinLength': !exists(json, 'text_min_length') ? undefined : json['text_min_length'],
        'textMaxLength': !exists(json, 'text_max_length') ? undefined : json['text_max_length'],
        'textLinesLimited': !exists(json, 'text_lines_limited') ? undefined : json['text_lines_limited'],
        'textMaxLines': !exists(json, 'text_max_lines') ? undefined : json['text_max_lines'],
        'numberLimited': !exists(json, 'number_limited') ? undefined : json['number_limited'],
        'numberLimitMode': !exists(json, 'number_limit_mode') ? undefined : json['number_limit_mode'],
        'numberLowestValue': !exists(json, 'number_lowest_value') ? undefined : json['number_lowest_value'],
        'numberHighestValue': !exists(json, 'number_highest_value') ? undefined : json['number_highest_value'],
        'numberIntegersOnly': !exists(json, 'number_integers_only') ? undefined : json['number_integers_only'],
        'productListAdjustsInventory': !exists(json, 'product_list_adjusts_inventory') ? undefined : json['product_list_adjusts_inventory'],
        'productListAdjustsPricing': !exists(json, 'product_list_adjusts_pricing') ? undefined : json['product_list_adjusts_pricing'],
        'productListShippingCalc': !exists(json, 'product_list_shipping_calc') ? undefined : json['product_list_shipping_calc'],
    };
}

export function ProductOptionConfigFullToJSON(value?: ProductOptionConfigFull | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'default_value': value.defaultValue,
        'checked_by_default': value.checkedByDefault,
        'checkbox_label': value.checkboxLabel,
        'date_limited': value.dateLimited,
        'date_limit_mode': value.dateLimitMode,
        'date_earliest_value': value.dateEarliestValue === undefined ? undefined : (value.dateEarliestValue.toISOString().substr(0,10)),
        'date_latest_value': value.dateLatestValue === undefined ? undefined : (value.dateLatestValue.toISOString().substr(0,10)),
        'file_types_mode': value.fileTypesMode,
        'file_types_supported': value.fileTypesSupported,
        'file_types_other': value.fileTypesOther,
        'file_max_size': value.fileMaxSize,
        'text_characters_limited': value.textCharactersLimited,
        'text_min_length': value.textMinLength,
        'text_max_length': value.textMaxLength,
        'text_lines_limited': value.textLinesLimited,
        'text_max_lines': value.textMaxLines,
        'number_limited': value.numberLimited,
        'number_limit_mode': value.numberLimitMode,
        'number_lowest_value': value.numberLowestValue,
        'number_highest_value': value.numberHighestValue,
        'number_integers_only': value.numberIntegersOnly,
        'product_list_adjusts_inventory': value.productListAdjustsInventory,
        'product_list_adjusts_pricing': value.productListAdjustsPricing,
        'product_list_shipping_calc': value.productListShippingCalc,
    };
}


