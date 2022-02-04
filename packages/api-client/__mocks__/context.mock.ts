import { MiddlewareSDKSettingsConfig } from '../src/types';

export const sdkSettings: MiddlewareSDKSettingsConfig = {
  logLevel: '',
  clientId: '',
  secret: '',
  callback: '',
  responseType: '',
  storeHash: '',
  accessToken: '',
  headers: { 'Accept-Encoding': '' },
  apiVersion: 'v3',
  devtoolsAppClientId: '',
  devtoolsAppSecret: '',
  storeUrl: '',
  guestToken: ''
};

export const contextMock = {
  client: {
    v2: {} as any,
    v3: {} as any
  },
  api: {} as any,
  config: {
    sdkSettings,
    secureCookies: true,
    jwtTokenExpirationDays: 2
  },
  res: {} as any,
  req: {} as any
};
