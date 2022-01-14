import { Product } from '@vue-storefront/bigcommerce-api';
import { addItem } from '../../src/useCart/actions';
import { mockedCart } from '../../__mocks__/cart.mock';
import { contextMock } from '../../__mocks__/context.mock';
import { mockedProduct } from '../../__mocks__/product.mock';

describe('[BigCommerce - composables] useCart addItem', () => {
  it('should add item to the cart', async () => {
    const addCartItemsMock = jest.fn(() =>
      Promise.resolve({ data: mockedCart })
    );
    contextMock.$bigcommerce.api.addCartItems = addCartItemsMock;

    const cart = await addItem(contextMock, {
      currentCart: mockedCart,
      product: mockedProduct as Product,
      quantity: 2
    });

    expect(addCartItemsMock).toHaveBeenCalledTimes(1);
    expect(cart).toEqual(mockedCart);
  });
});
