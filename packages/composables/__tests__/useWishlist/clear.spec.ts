import { WishlistResponse, Wishlist as WishlistAPI } from '@vue-storefront/bigcommerce-api';
import { Wishlist } from '../../src/types';
import { clear } from '../../src/useWishlist/actions';
import { wishlistMock } from '../../__mocks__/wishlist.mock';
import { contextMock } from '../../__mocks__/context.mock';
import jwt from 'jsonwebtoken';

const customerId = 1;
const decode = jest.spyOn(jwt, 'decode');
decode.mockImplementation(() => ({ customer: { id: customerId } }));

describe('[BigCommerce - composables] useWishlist clear', () => {
  const wishlistName = 'Mocked wishlist';
  const isPublic = true;
  contextMock.$bigcommerce.config.app.$config.theme = {
    wishlist: {
      name: wishlistName,
      isPublic
    }
  };
  contextMock.$bigcommerce.config.app.$cookies.get = jest.fn(() => 'mocked_token');

  beforeEach(() => {
    jest.clearAllMocks();

    const newWishlist: WishlistAPI = {
      id: 1,
      customer_id: customerId,
      is_public: isPublic,
      items: [],
      name: wishlistName,
      token: 'mocked_token'
    };

    contextMock.$bigcommerce.api.deleteWishlist = jest.fn();
    contextMock.$bigcommerce.api.createWishlist = jest.fn(
      (): Promise<WishlistResponse> => Promise.resolve({
        data: newWishlist,
        meta: {}
      })
    );
    contextMock.user = { user: { value: { id: customerId } } };
  });

  it('should call deleteWishlist with expected params', async () => {
    const expectedWishlistId = wishlistMock.id;

    await clear(contextMock, { currentWishlist: wishlistMock as Wishlist });

    expect(contextMock.$bigcommerce.api.deleteWishlist).toHaveBeenCalledWith(expectedWishlistId);
  });

  it('should create new wishlist after deleting old one', async () => {
    const expectedParams = {
      customer_id: customerId,
      name: wishlistName,
      is_public: isPublic,
      items: []
    };

    await clear(contextMock, { currentWishlist: wishlistMock as Wishlist });

    expect(contextMock.$bigcommerce.api.deleteWishlist).toHaveBeenCalledTimes(1);
    expect(contextMock.$bigcommerce.api.createWishlist).toHaveBeenCalledWith(expectedParams);
  });
});
