import queryString from 'query-string';
import { CartIncludeEnum } from '../../../src';
import { updateCartItem } from '../../../src/api/cart';
import { contextMock } from '../../../__mocks__/context.mock';
import BigCommerceEndpoints from '../../../src/helpers/endpointPaths';
import { mockedCart } from '../../../../composables/__mocks__/cart.mock';

describe('[bigcommerce-api-client] update a cart item', () => {
  const product = mockedCart.line_items.physical_items[0];

  const params = {
    cartId: mockedCart.id,
    itemId: product.id,
    data: {
      line_item: {
        product_id: product.product_id,
        quantity: 2
      }
    }
  };

  it('should update a cart item', async () => {
    const expectedResponse = {
      data: mockedCart,
      meta: {}
    };

    contextMock.client.v3.put = jest.fn(
      (url: string, data: Record<string, unknown>) => {
        expect(url).toEqual(
          BigCommerceEndpoints.cartItems(mockedCart.id, product.id)
        );

        expect(data).toEqual(params.data);

        return expectedResponse;
      }
    );

    const response = await updateCartItem(contextMock, params);

    expect(contextMock.client.v3.put).toHaveBeenCalledTimes(1);
    expect(response).toBe(expectedResponse);
  });

  it('should pass include as a query parameter', async () => {
    const include = CartIncludeEnum.LineItemsPhysicalItemsOptions;

    contextMock.client.v3.put = jest.fn((url: string) => {
      const [, query] = url.split('?');

      const params = queryString.parse(query);

      expect(params.include).toEqual(include);
    });

    await updateCartItem(contextMock, { ...params, include });

    expect(contextMock.client.v3.put).toHaveBeenCalledTimes(1);
  });
});
