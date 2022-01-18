import queryString from 'query-string';
import { CartIncludeEnum } from '../../../src';
import { addCartItems } from '../../../src/api/cart';
import { contextMock } from '../../../__mocks__/context.mock';
import BigCommerceEndpoints from '../../../src/helpers/endpointPaths';
import { mockedCart } from '../../../../composables/__mocks__/cart.mock';

describe('[bigcommerce-api-client] add items to cart', () => {
  const cartId = '1095e7e1-2f2b-463d-9e39-bfc070b8e7e4';

  const params = {
    cartId,
    data: {
      line_items: [
        {
          quantity: 2,
          product_id: 80
        }
      ]
    }
  };

  it('should add an item to the cart', async () => {
    const expectedResponse = {
      data: mockedCart,
      meta: {}
    };

    contextMock.client.v3.post = (url: string, data: Record<string, unknown>) => {
      expect(url).toEqual(BigCommerceEndpoints.cartItems(cartId));

      expect(data).toEqual(params.data);

      return expectedResponse;
    };

    const response = await addCartItems(contextMock, params);

    expect(response).toBe(expectedResponse);
  });

  it('should pass include as a query parameter', async () => {
    const include = CartIncludeEnum.LineItemsPhysicalItemsOptions;

    contextMock.client.v3.post = (url: string) => {
      const [, query] = url.split('?');

      const params = queryString.parse(query);

      expect(params.include).toEqual(include);
    };

    await addCartItems(contextMock, { ...params, include });
  });
});
