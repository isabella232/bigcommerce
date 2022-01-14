import { apiClientFactory } from '@vue-storefront/core';
import { client } from './helpers/client';
import { MiddlewareSettingsConfig, Endpoints } from './types';
import api from './api';

const onCreate = (settings: MiddlewareSettingsConfig) => ({
  config: settings,
  client: client(settings.sdkSettings)
});

const { createApiClient } = apiClientFactory<
  MiddlewareSettingsConfig,
  Endpoints
>({
  onCreate,
  api
});

export { createApiClient };
