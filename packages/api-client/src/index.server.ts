import { apiClientFactory } from '@vue-storefront/core';
import type { MiddlewareSettingsConfig, Endpoints } from './types';
const BigCommerce = require('node-bigcommerce');

function onCreate(settings: MiddlewareSettingsConfig) {
  const bigCommerceClient = new BigCommerce(settings.sdkSettings);
  return {
    config: settings,
    client: bigCommerceClient
  };
}

const { createApiClient } = apiClientFactory<MiddlewareSettingsConfig, Endpoints>({
  onCreate,
  api: {
  }
});

export {
  createApiClient
};
