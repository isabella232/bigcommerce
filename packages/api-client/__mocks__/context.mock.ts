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
  client: {
    v2: {} as any,
    v3: {} as any
  },
  api: {} as any,
  config: {
    sdkSettings,
    secureCookies: true,
    currency: '',
    lang: '',
    mediaHost: '',
    jwtTokenExpirationDays: 2
  },
  res: {} as any,
  req: {} as any
};
