/* tslint:disable */
/* eslint-disable */
/**
 * Shipping Providers
 * Implement endpoints consumed by BigCommerce for custom shipping integrations. To learn more, see [Shipping Provider API Overview](/api-docs/store-management/shipping/shipping-provider-api).  <div class=\"otp\" id=\"no-index\">  ### On this Page - [Authentication](#authentication) - [Subresources](#subresources) - [Additional Information](#additional-information)  </div>  ## Authentication This specification file describes API requests BigCommerce will make to a registered shipping carrier\'s server to check connection options and retrieve rates. As such, the method of authentication is determined by the carrier\'s server.  ## Subresources  ### Check Connection Options The Check Connection Options request is made by BigCommerce when checking for available shipping options. Each Shipping Provider will have different configurations for the payload.  ### Rate The Rate request is made by BigCommerce to get shipping quotes from the provider.  ## Additional Information  **Webhooks** - [Shipment](https://developer.bigcommerce.com/api-docs/getting-started/webhooks/webhook-events#shipment)  **Related API Resources** - [Shipping Provider](/api-reference/store-management/shipping-provider-api) - [Shipping Zones](/api-reference/store-management/shipping-api/shipping-zones) - [Shipping Methods](/api-reference/store-management/shipping-api/shipping-method) - [Shipping Carriers](/api-reference/store-management/shipping-api/shipping-carrier)
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
 * Value objects contained within the request context
 * @export
 * @interface ReferenceValue
 */
export interface ReferenceValue {
    /**
     * 
     * @type {string}
     * @memberof ReferenceValue
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ReferenceValue
     */
    value?: string;
}

export function ReferenceValueFromJSON(json: any): ReferenceValue {
    return ReferenceValueFromJSONTyped(json, false);
}

export function ReferenceValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferenceValue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function ReferenceValueToJSON(value?: ReferenceValue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'value': value.value,
    };
}

