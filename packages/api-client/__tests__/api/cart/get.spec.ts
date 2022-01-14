import queryString from 'query-string';
import { getCart } from '../../../src/api/cart';
import { contextMock } from '../../../__mocks__/context.mock';
import BigCommerceEndpoints from '../../../src/helpers/endpointPaths';
import { CartIncludeEnum } from '../../../src';
import { mockedCart } from '../../../../composables/__mocks__/cart.mock';

describe('[bigcommerce-api-client] getCart', () => {
  const params = {
    id: '13fc44e8-d5c1-435d-a101-e9f76b7ef0f9'
  };

  it('should get a cart', async () => {
    const expectedResponse = {
      data: mockedCart,
      meta: {}
    };

    contextMock.client.get = (url: string) => {
      expect(url).toEqual(BigCommerceEndpoints.cart(params.id));

      return expectedResponse;
    };

    const response = await getCart(contextMock, params);

    expect(response).toBe(expectedResponse);
  });

  it('should pass include as a query parameter', async () => {
    const include = CartIncludeEnum.LineItemsPhysicalItemsOptions;

    contextMock.client.get = (url: string) => {
      const [, query] = url.split('?');

      const params = queryString.parse(query);

      expect(params.include).toEqual(include);
    };

    await getCart(contextMock, { ...params, include });
  });
});
