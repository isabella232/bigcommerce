import { mockedProduct } from './product.mock';

export const contextMock = {
  $bigcommerce: {
    config: {
      axios: {
        baseUrl: '',
        headers: {}
      }
    },
    client: {},
    api: {
      getProducts: jest.fn(() => Promise.resolve({ data: [mockedProduct] })),
      createCustomer: jest.fn()
    }
  }
};
