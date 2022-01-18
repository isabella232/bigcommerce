import queryString from 'query-string';
import { updateCart } from '../../../src/api/cart';
import { contextMock } from '../../../__mocks__/context.mock';
import BigCommerceEndpoints from '../../../src/helpers/endpointPaths';
import { CartIncludeEnum } from '../../../src';
import { mockedCart } from '../../../../composables/__mocks__/cart.mock';

describe('[bigcommerce-api-client] update cart', () => {
  const cartId = '11e712f0-1972-41a9-9dba-f042a650b282';

  const params = {
    id: cartId,
    data: {
      customer_id: 10
    }
  };

  it('should update the customer_id of the cart', async () => {
    const expectedResponse = {
      data: mockedCart,
      meta: {}
    };

    contextMock.client.v3.put = (url: string, data: Record<string, unknown>) => {
      expect(url).toEqual(BigCommerceEndpoints.cart(cartId));

      expect(data).toEqual(params.data);

      return expectedResponse;
    };

    const response = await updateCart(contextMock, params);

    expect(response).toBe(expectedResponse);
  });

  it('should pass include as a query parameter', async () => {
    const include = CartIncludeEnum.LineItemsPhysicalItemsOptions;

    contextMock.client.v3.put = (url: string) => {
      const [, query] = url.split('?');

      const params = queryString.parse(query);

      expect(params.include).toEqual(include);
    };

    await updateCart(contextMock, { ...params, include });
  });
});
