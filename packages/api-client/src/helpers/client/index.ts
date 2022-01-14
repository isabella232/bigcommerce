import { NodeBigcommerceSDK, MiddlewareSDKSettingsConfig } from '../../types';
const BigCommerce = require('node-bigcommerce');

export function client(
  settings: MiddlewareSDKSettingsConfig
): NodeBigcommerceSDK {
  return new BigCommerce(settings);
}
