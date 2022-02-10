import { apiClientFactory } from '@vue-storefront/core';
import { client } from './helpers/client';
import { MiddlewareSettingsConfig, Endpoints } from './types';
import api from './api';

const onCreate = (settings: MiddlewareSettingsConfig) => {
  settings.sdkSettings.storeUrl = settings.sdkSettings.storeUrl.replace(
    /\/$/,
    ''
  );

  return {
    config: settings,
    client: {
      v2: client({
        ...settings.sdkSettings,
        apiVersion: 'v2'
      }),
      v3: client({
        ...settings.sdkSettings,
        apiVersion: 'v3'
      })
    }
  };
};

const { createApiClient } = apiClientFactory<
  MiddlewareSettingsConfig,
  Endpoints
>({
  onCreate,
  api
});

export { createApiClient };
