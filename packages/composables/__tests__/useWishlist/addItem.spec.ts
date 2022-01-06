import { Product } from '@vue-storefront/bigcommerce-api';
import { Wishlist } from '../../src/types';
import { addItem } from '../../src/useWishlist/actions';
import { wishlistMock } from '../../__mocks__/wishlist.mock';
import { mockedProduct } from '../../__mocks__/product.mock';
import { contextMock } from '../../__mocks__/context.mock';
import jwt from 'jsonwebtoken';

const customerId = 1;
const decode = jest.spyOn(jwt, 'decode');
decode.mockImplementation(() => ({ customer: { id: customerId } }));

describe('[BigCommerce - composables] useWishlist addItem', () => {
  contextMock.$bigcommerce.config.app.$cookies.get = jest.fn(() => 'mocked_token');

  beforeEach(() => {
    contextMock.$bigcommerce.api.addWishlistItems = jest.fn(() => ({
      data: wishlistMock,
      meta: {}
    }));
    contextMock.$bigcommerce.api.getProducts = jest.fn();
    contextMock.user = { user: { value: { id: customerId } } };
  });

  it('should call api with wishlist id and array of items', async () => {
    const expectedParams = {
      wishlistId: wishlistMock.id,
      items: [{
        product_id: mockedProduct.id,
        variant_id: undefined
      }]
    };

    await addItem(contextMock, {
      currentWishlist: wishlistMock as Wishlist,
      product: mockedProduct as Product
    });

    expect(contextMock.$bigcommerce.api.addWishlistItems)
      .toHaveBeenCalledWith(expectedParams);
  });

  it('should refresh product list', async () => {
    contextMock.$bigcommerce.api.addWishlistItems = jest.fn(() => ({
      data: {
        ...wishlistMock,
        items: [{ id: 1, product_id: mockedProduct.id, variant_id: undefined }]
      },
      meta: {}
    }));

    await addItem(contextMock, {
      currentWishlist: wishlistMock as Wishlist,
      product: mockedProduct as Product
    });

    expect(contextMock.$bigcommerce.api.getProducts).toHaveBeenCalledTimes(1);
  });
});
