import queryString from 'query-string';
import { CartIncludeEnum } from '../../../src';
import { removeCartItem } from '../../../src/api/cart';
import { contextMock } from '../../../__mocks__/context.mock';
import BigCommerceEndpoints from '../../../src/helpers/endpointPaths';
import { mockedCart } from '../../../../composables/__mocks__/cart.mock';

describe('[bigcommerce-api-client] remove item from cart', () => {
  const itemId = mockedCart.line_items.physical_items[0].id;

  const params = {
    cartId: mockedCart.id,
    itemId
  };

  it('should remove an item from the cart', async () => {
    const expectedResponse = {
      data: mockedCart,
      meta: {}
    };

    contextMock.client.v3.delete = jest.fn((url: string) => {
      expect(url).toEqual(
        BigCommerceEndpoints.cartItems(mockedCart.id, itemId)
      );

      return expectedResponse;
    });

    const response = await removeCartItem(contextMock, params);

    expect(contextMock.client.v3.delete).toHaveBeenCalledTimes(1);
    expect(response).toBe(expectedResponse);
  });

  it('should pass include as a query parameter', async () => {
    const include = CartIncludeEnum.LineItemsPhysicalItemsOptions;

    contextMock.client.v3.delete = jest.fn((url: string) => {
      const [, query] = url.split('?');

      const params = queryString.parse(query);

      expect(params.include).toEqual(include);
    });

    await removeCartItem(contextMock, { ...params, include });

    expect(contextMock.client.v3.delete).toHaveBeenCalledTimes(1);
  });
});
