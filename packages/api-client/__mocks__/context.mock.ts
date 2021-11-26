export const sdkSettings = {
  logLevel: '',
  clientId: '',
  secret: '',
  callback: '',
  responseType: '',
  storeHash: '',
  accessToken: '',
  headers: { 'Accept-Encoding': '' },
  apiVersion: '',
  devtoolsAppClientId: '',
  devtoolsAppSecret: '',
  storeUrl: '',
  guestToken: ''
};

export const contextMock = {
  client: {} as any,
  api: {} as any,
  config: {
    sdkSettings,
    secureCookies: true,
    currency: '',
    lang: '',
    mediaHost: '',
    jwtTokenExpirationDays: 2
  },
  res: {} as any
};
