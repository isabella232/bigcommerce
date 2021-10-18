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
/**
 * Details about the Channel's relationship to Themes.
 * @export
 * @interface ActiveTheme
 */
export interface ActiveTheme {
    /**
     * The UUID of the currently active Theme on the Channel.
     * @type {string}
     * @memberof ActiveTheme
     */
    activeThemeUuid?: string;
    /**
     * The UUID of the currently active Theme Configuration on the Channel.
     * @type {string}
     * @memberof ActiveTheme
     */
    activeThemeConfigurationUuid?: string;
    /**
     * The UUID of the currently active Theme Version on the Channel. Needed to look up the available Custom Templates for the Theme.
     * @type {string}
     * @memberof ActiveTheme
     */
    activeThemeVersionUuid?: string;
    /**
     * The UUID of the most recently saved Theme Configuration. If this is different from the active Theme Configuration UUID, this indicates that some changes have been saved in the control panel Theme Editor that have not yet been published.
     * @type {string}
     * @memberof ActiveTheme
     */
    savedThemeConfigurationUuid?: string;
}

export function ActiveThemeFromJSON(json: any): ActiveTheme {
    return ActiveThemeFromJSONTyped(json, false);
}

export function ActiveThemeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActiveTheme {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'activeThemeUuid': !exists(json, 'active_theme_uuid') ? undefined : json['active_theme_uuid'],
        'activeThemeConfigurationUuid': !exists(json, 'active_theme_configuration_uuid') ? undefined : json['active_theme_configuration_uuid'],
        'activeThemeVersionUuid': !exists(json, 'active_theme_version_uuid') ? undefined : json['active_theme_version_uuid'],
        'savedThemeConfigurationUuid': !exists(json, 'saved_theme_configuration_uuid') ? undefined : json['saved_theme_configuration_uuid'],
    };
}

export function ActiveThemeToJSON(value?: ActiveTheme | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'active_theme_uuid': value.activeThemeUuid,
        'active_theme_configuration_uuid': value.activeThemeConfigurationUuid,
        'active_theme_version_uuid': value.activeThemeVersionUuid,
        'saved_theme_configuration_uuid': value.savedThemeConfigurationUuid,
    };
}


