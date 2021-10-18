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
 * 
 * @export
 * @interface AttributeValue
 */
export interface AttributeValue {
    /**
     * The key associated with the meta field
     * @type {string}
     * @memberof AttributeValue
     */
    key?: string;
    /**
     * The value associated with the meta field
     * @type {string}
     * @memberof AttributeValue
     */
    value?: string;
    /**
     * The namespace associated with product(https://developer.bigcommerce.com/api-reference/catalog/catalog-api/product-metafields/createproductmetafield) or product variant (https://developer.bigcommerce.com/api-reference/catalog/catalog-api/product-variants-metafields/createvariantmetafield) meta fields. The meta field namespace should be saved under this format 'shipping_carrier_{yourCarrierId}' otherwise it will not be recognized as an attribute.
     * @type {string}
     * @memberof AttributeValue
     */
    namespace?: string;
    /**
     * Resource type associated with the meta field. Currently the only values available are 'product' or 'variant'
     * @type {string}
     * @memberof AttributeValue
     */
    resourceType?: AttributeValueResourceTypeEnum;
    /**
     * The resource id of the meta field
     * @type {string}
     * @memberof AttributeValue
     */
    resourceId?: string;
    /**
     * Attribute type associated with the product or product variant meta field. Currently the only value for this is 'metafield'
     * @type {string}
     * @memberof AttributeValue
     */
    attributeType?: AttributeValueAttributeTypeEnum;
}

/**
* @export
* @enum {string}
*/
export enum AttributeValueResourceTypeEnum {
    Product = 'product',
    Variant = 'variant'
}/**
* @export
* @enum {string}
*/
export enum AttributeValueAttributeTypeEnum {
    Metafield = 'metafield'
}

export function AttributeValueFromJSON(json: any): AttributeValue {
    return AttributeValueFromJSONTyped(json, false);
}

export function AttributeValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttributeValue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': !exists(json, 'key') ? undefined : json['key'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
        'resourceType': !exists(json, 'resource_type') ? undefined : json['resource_type'],
        'resourceId': !exists(json, 'resource_id') ? undefined : json['resource_id'],
        'attributeType': !exists(json, 'attribute_type') ? undefined : json['attribute_type'],
    };
}

export function AttributeValueToJSON(value?: AttributeValue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'key': value.key,
        'value': value.value,
        'namespace': value.namespace,
        'resource_type': value.resourceType,
        'resource_id': value.resourceId,
        'attribute_type': value.attributeType,
    };
}

