const bigcommerceIntegrationContextMock = {
  client: {} as any,
  api: {} as any,
  config: {
    axios: {
      baseURL: '',
      headers: {}
    },
    app: {
      $cookies: {} as any,
      $config: {} as any
    }
  }
};

export const contextMock = {
  $bigcommerce: bigcommerceIntegrationContextMock,
  cart: {} as any
};
