/* eslint-disable global-require */
import { Wishlist, WishlistItem } from '../../src/types';
import { removeItem } from '../../src/useWishlist/actions';
import { contextMock } from '../../__mocks__/context.mock';
import { wishlistMock } from '../../__mocks__/wishlist.mock';
import jwt from 'jsonwebtoken';

const customerId = 1;
const decode = jest.spyOn(jwt, 'decode');
decode.mockImplementation(() => ({ customer: { id: customerId } }));

describe('[BigCommerce - composables] useWishlist removeItem', () => {
  contextMock.$bigcommerce.config.app.$cookies.get = jest.fn(() => 'mocked_token');

  const wishlistItem: WishlistItem = { id: 1, product_id: 1, variant_id: 1 };
  (wishlistMock as Wishlist).items.push(wishlistItem);

  beforeEach(() => {
    jest.resetModules();

    contextMock.$bigcommerce.api.removeWishlistItem = jest.fn(() => ({
      data: wishlistMock,
      meta: {}
    }));
    contextMock.$bigcommerce.api.getProducts = jest.fn();
    contextMock.user = { user: { value: { id: customerId } } };
  });

  it('should call api with expected params', async () => {
    const expectedParams = {
      wishlistId: wishlistMock.id,
      itemId: wishlistItem.id
    };

    await removeItem(contextMock, {
      currentWishlist: wishlistMock as Wishlist,
      product: wishlistItem
    });

    expect(contextMock.$bigcommerce.api.removeWishlistItem)
      .toHaveBeenCalledWith(expectedParams);
  });

  it('should refresh product list', async () => {
    await removeItem(contextMock, {
      currentWishlist: wishlistMock as Wishlist,
      product: wishlistItem
    });

    expect(contextMock.$bigcommerce.api.getProducts)
      .toHaveBeenCalledTimes(1);
  });
});
