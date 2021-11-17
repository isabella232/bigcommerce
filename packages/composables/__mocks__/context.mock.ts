const bigcommerceIntegrationContextMock = {
  client: {} as any,
  api: {} as any,
  config: {
    axios: {
      baseURL: '',
      headers: {}
    }
  }
};

export const contextMock = {
  $bigcommerce: bigcommerceIntegrationContextMock
};
