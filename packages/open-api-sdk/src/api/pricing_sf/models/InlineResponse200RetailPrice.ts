/* tslint:disable */
/* eslint-disable */
/**
 * Pricing
 * Get product pricing.  ## Authentication  Authenticate requests by including an [OAuth](https://developer.bigcommerce.com/api-docs/getting-started/authentication) `access_token` in the request header.  ```http GET /stores/{{STORE_HASH}}/v3/pricing/products host: api.bigcommerce.com Accept: application/json X-Auth-Token: {{ACCESS_TOKEN}} ```  ### OAuth Scopes | UI Name  | Permission | Parameter                     | |----------|------------|-------------------------------| | Products | read-only  | `store_v2_products_read_only` |
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
 * The (optional) RRP/retail price configured for this product
 * @export
 * @interface InlineResponse200RetailPrice
 */
export interface InlineResponse200RetailPrice {
    /**
     * The price provided by the merchant as entered in their catalog/price list (may be inc or ex)
     * @type {number}
     * @memberof InlineResponse200RetailPrice
     */
    asEntered?: number;
    /**
     * Whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction
     * @type {boolean}
     * @memberof InlineResponse200RetailPrice
     */
    enteredInclusive?: boolean;
    /**
     * The estimated tax exclusive price for this product based on the provided customer group
     * @type {number}
     * @memberof InlineResponse200RetailPrice
     */
    taxExclusive?: number;
    /**
     * The estimated tax inclusive price for this product based on the provided customer group
     * @type {number}
     * @memberof InlineResponse200RetailPrice
     */
    taxInclusive?: number;
}

export function InlineResponse200RetailPriceFromJSON(json: any): InlineResponse200RetailPrice {
    return InlineResponse200RetailPriceFromJSONTyped(json, false);
}

export function InlineResponse200RetailPriceFromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse200RetailPrice {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'asEntered': !exists(json, 'as_entered') ? undefined : json['as_entered'],
        'enteredInclusive': !exists(json, 'entered_inclusive') ? undefined : json['entered_inclusive'],
        'taxExclusive': !exists(json, 'tax_exclusive') ? undefined : json['tax_exclusive'],
        'taxInclusive': !exists(json, 'tax_inclusive') ? undefined : json['tax_inclusive'],
    };
}

export function InlineResponse200RetailPriceToJSON(value?: InlineResponse200RetailPrice | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'as_entered': value.asEntered,
        'entered_inclusive': value.enteredInclusive,
        'tax_exclusive': value.taxExclusive,
        'tax_inclusive': value.taxInclusive,
    };
}

