/* tslint:disable */
/* eslint-disable */
/**
 * Channels
 * Create and manage sales [channels](https://developer.bigcommerce.com/api-docs/channels/overview), their [sites](https://developer.bigcommerce.com/api-reference/store-management/channels/channel-site), and their [product listings](https://developer.bigcommerce.com/api-reference/store-management/channels/channel-listings).  - [Authentication](#authentication) - [Channels](#channels) - [Channel listings](#channel-listings) - [Channel site](#channel-site) - [Resources](#resources)  ## Authentication  Authenticate requests by including an [OAuth](https://developer.bigcommerce.com/api-docs/getting-started/authentication) `access_token` in the request header.  ```http GET https://api.bigcommerce.com/stores/{{STORE_HASH}}/v3/channels Content-Type: application/json X-Auth-Token: {{ACCESS_TOKEN}} ```  ### [OAuth Scopes](https://developer.bigcommerce.com/api-docs/getting-started/authentication/rest-api-authentication#oauth-scopes)  | UI Name                                      | Permission | Parameter                                     | |----------------------------------------------|------------|-----------------------------------------------| | Channel Listings                             | modify     | `store_channel_listings`                      | | Channel Listings                             | read-only  | `store_channel_listings_read_only`            | | Channel Settings                             | modify     | `store_channel_settings`                      | | Channel Settings                             | read-only  | `store_channel_settings_read_only`            |  ## Channels  A [channel](https://developer.bigcommerce.com/api-reference/cart-checkout/channels-listings-api/channels) is anywhere a merchant sells their products. This encompasses headless storefronts, marketplaces, POS systems, and marketing platforms.  ### Platform  A channel\'s `type` and `platform` combination must be a valid pair as indicated in the table below.  | Platform          | Accepted Type             | |-------------------|---------------------------| | `square`          | `pos`                     | | `stripe`          | `pos`                     | | `vend`            | `pos`                     | | `clover`          | `pos`                     | | `talech`          | `pos`                     | | `facebook`        | `marketplace`,`marketing` | | `instagram`       | `marketplace`,`marketing` | | `amazon`          | `marketplace`             | | `ebay`            | `marketplace`             | | `pinterest`       | `marketplace`             | | `wayfair`         | `marketplace`             | | `overstock`       | `marketplace`             | | `etsy`            | `marketplace`             | | `wish`            | `marketplace`             | | `walmart`         | `marketplace`             | | `gatsby`          | `storefront`              | | `wordpress`       | `storefront`              | | `drupal`          | `storefront`              | | `acquia`          | `storefront`              | | `bloomreach`      | `storefront`              | | `deity`           | `storefront`              | | `next`            | `storefront`              | | `vue`             | `storefront`              | | `google_shopping` | `marketing`               | | `custom`          | `storefront`, `pos`, `marketing`, `marketplace` |  ### Status  Allowed values for a channel\'s `status` vary by channel `type` and `platform`.  |Type|Platform|Allowed Statuses| |--|--|--| |`storefront`|`bigcommerce`|`prelaunch`, `active`, `inactive`, `archived`, `deleted`| |`storefront`|**Is not** `bigcommerce` |`active`, `inactive`, `archived`, `deleted` |`marketing`, `marketplace`, `pos`|N/A|`connected`, `disconnected`, `archived`, `deleted`|  <div class=\"HubBlock--callout\"> <div class=\"CalloutBlock--warning\"> <div class=\"HubBlock-content\">  > ### Note > * A Channel with `deleted` status can be restored within 90 days after deleting by contacting BigCommerce support team. Once the 90 days grace period is over, the Channel `status` will become `terminated`. > * The `terminated` status is read-only. `terminated` channels cannot be restored. > * As of April 2020, `status`  should be used in place of `is_enabled` -- `is_enabled` is deprecated.  </div> </div> </div>  ## Channel listings  [Channel listings](https://developer.bigcommerce.com/api-reference/store-management/channels/channel-listings) allow you to manage catalog differences among different storefronts or marketplaces.  ## Channel site  A [Channel site](https://developer.bigcommerce.com/api-reference/store-management/channels/channel-site) refers to the domain associated with a channel.  ## Resources  * [Sites and Routes API Reference](https://developer.bigcommerce.com/api-reference/cart-checkout/sites-routes-api) * [Building Channels Overview](https://developer.bigcommerce.com/api-docs/channels/overview) * [Building Channel Apps](https://developer.bigcommerce.com/api-docs/channels/building-channel-apps) * [Channels Toolkit Reference](https://developer.bigcommerce.com/api-docs/channels/channels-toolkit-reference)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ChannelConfigMeta,
    ChannelConfigMetaFromJSON,
    ChannelConfigMetaFromJSONTyped,
    ChannelConfigMetaToJSON,
    ChannelStatus,
    ChannelStatusFromJSON,
    ChannelStatusFromJSONTyped,
    ChannelStatusToJSON,
    ChannelType,
    ChannelTypeFromJSON,
    ChannelTypeFromJSONTyped,
    ChannelTypeToJSON,
} from './';

/**
 * 
 * @export
 * @interface ChannelWithoutCurrencies
 */
export interface ChannelWithoutCurrencies {
    /**
     * 
     * @type {ChannelConfigMeta}
     * @memberof ChannelWithoutCurrencies
     */
    configMeta?: ChannelConfigMeta;
    /**
     * The ID of the channel.
     * @type {number}
     * @memberof ChannelWithoutCurrencies
     */
    id?: number;
    /**
     * Associated ID within a system / platform outside of BC.
     * @type {string}
     * @memberof ChannelWithoutCurrencies
     */
    externalId?: string;
    /**
     * Indicates if a channel can create listings from the BigCommerce UI. Default value for this field is based on the channel type and platform combination if not specified on create.
     * @type {boolean}
     * @memberof ChannelWithoutCurrencies
     */
    isListableFromUi?: boolean;
    /**
     * Indicates if a channel is visible within the BigCommerce merchant admin UI (control panel). If `false`, the channel will not show in Channel Manager nor in any channels dropdown throughout the UI. Default value for this field is `true` if not specified on create.
     * @type {boolean}
     * @memberof ChannelWithoutCurrencies
     */
    isVisible?: boolean;
    /**
     * This field was originally used to turn on/off a channel but is deprecated. `status` should be used in place of `is_enabled`. Channel with `status` of `prelaunch`, `active`, or `connected` will have `is_enabled` set to `true`. Channel with `status` of `inactive`, `disconnected`, `archived`, `deleted`, or `terminated` will have `is_enabled` set to `false`.
     * @type {boolean}
     * @memberof ChannelWithoutCurrencies
     */
    isEnabled?: boolean;
    /**
     * 
     * @type {ChannelStatus}
     * @memberof ChannelWithoutCurrencies
     */
    status?: ChannelStatus;
    /**
     * Name of the channel as it will appear to merchants in the control panel.
     * @type {string}
     * @memberof ChannelWithoutCurrencies
     */
    name?: string;
    /**
     * 
     * @type {ChannelType}
     * @memberof ChannelWithoutCurrencies
     */
    type?: ChannelType;
    /**
     * The name of the platform for the channel; channel `platform` and `type` must be a [valid combination](https://developer.bigcommerce.com/api-reference/store-management/channels#platform).
     * @type {string}
     * @memberof ChannelWithoutCurrencies
     */
    platform?: string;
    /**
     * Date on which the channel was first created.
     * @type {Date}
     * @memberof ChannelWithoutCurrencies
     */
    dateCreated?: Date;
    /**
     * Date on which the channel was most recently changed.
     * @type {Date}
     * @memberof ChannelWithoutCurrencies
     */
    dateModified?: Date;
    /**
     * Link to the platform icon.
     * @type {string}
     * @memberof ChannelWithoutCurrencies
     */
    iconUrl?: string;
}

export function ChannelWithoutCurrenciesFromJSON(json: any): ChannelWithoutCurrencies {
    return ChannelWithoutCurrenciesFromJSONTyped(json, false);
}

export function ChannelWithoutCurrenciesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelWithoutCurrencies {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'configMeta': !exists(json, 'config_meta') ? undefined : ChannelConfigMetaFromJSON(json['config_meta']),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'externalId': !exists(json, 'external_id') ? undefined : json['external_id'],
        'isListableFromUi': !exists(json, 'is_listable_from_ui') ? undefined : json['is_listable_from_ui'],
        'isVisible': !exists(json, 'is_visible') ? undefined : json['is_visible'],
        'isEnabled': !exists(json, 'is_enabled') ? undefined : json['is_enabled'],
        'status': !exists(json, 'status') ? undefined : ChannelStatusFromJSON(json['status']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'type': !exists(json, 'type') ? undefined : ChannelTypeFromJSON(json['type']),
        'platform': !exists(json, 'platform') ? undefined : json['platform'],
        'dateCreated': !exists(json, 'date_created') ? undefined : (new Date(json['date_created'])),
        'dateModified': !exists(json, 'date_modified') ? undefined : (new Date(json['date_modified'])),
        'iconUrl': !exists(json, 'icon_url') ? undefined : json['icon_url'],
    };
}

export function ChannelWithoutCurrenciesToJSON(value?: ChannelWithoutCurrencies | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'config_meta': ChannelConfigMetaToJSON(value.configMeta),
        'id': value.id,
        'external_id': value.externalId,
        'is_listable_from_ui': value.isListableFromUi,
        'is_visible': value.isVisible,
        'is_enabled': value.isEnabled,
        'status': ChannelStatusToJSON(value.status),
        'name': value.name,
        'type': ChannelTypeToJSON(value.type),
        'platform': value.platform,
        'date_created': value.dateCreated === undefined ? undefined : (value.dateCreated.toISOString()),
        'date_modified': value.dateModified === undefined ? undefined : (value.dateModified.toISOString()),
        'icon_url': value.iconUrl,
    };
}


