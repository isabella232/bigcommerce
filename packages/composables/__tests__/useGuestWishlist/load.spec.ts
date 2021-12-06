import { load } from '../../src/useGuestWishlist/actions';
import { guestWishlistMock } from '../../__mocks__/useGuestWishlist/guestWishlist.mock';
import { contextMock } from '../../__mocks__/context.mock';
import {
  BIGCOMMERCE_GUEST_WISHLIST_ID,
  BIGCOMMERCE_GUEST_CUSTOMER_ID,
  BIGCOMMERCE_GUEST_WISHLIST_KEY,
  BIGCOMMERCE_GUEST_WISHLIST_TOKEN
} from '../../src/helpers/consts';
import { Wishlist } from '../../src/types';

describe('[BigCommerce - composables] useGuestWishlist load', () => {
  let getProductsMock: jest.Mock<any, any>;
  const wishlistName = 'Guest wishlist';

  beforeEach(() => {
    jest.clearAllMocks();

    jest.spyOn(window.localStorage.__proto__, 'setItem');
    jest.spyOn(window.localStorage.__proto__, 'getItem');

    getProductsMock = jest.fn();
    contextMock.$bigcommerce.api.getProducts = getProductsMock;
  });

  it('should store new guest wishlist in localStorage if it does not exists', async () => {
    window.localStorage.__proto__.setItem = jest.fn();
    window.localStorage.__proto__.getItem = jest.fn(() => null);

    const expectedWishlist: Wishlist = {
      id: BIGCOMMERCE_GUEST_WISHLIST_ID,
      name: wishlistName,
      customer_id: BIGCOMMERCE_GUEST_CUSTOMER_ID,
      items: [],
      wishlist_product_data: { data: [], meta: {} },
      is_public: true,
      token: BIGCOMMERCE_GUEST_WISHLIST_TOKEN
    };

    await load(contextMock, wishlistName);

    expect(getProductsMock).toHaveBeenCalledTimes(0);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith(BIGCOMMERCE_GUEST_WISHLIST_KEY, JSON.stringify(expectedWishlist));
  });

  it('should get guest wishlist from localStorage if it exists', async () => {
    window.localStorage.__proto__.setItem = jest.fn();
    window.localStorage.__proto__.getItem = jest.fn(() => JSON.stringify(guestWishlistMock));

    getProductsMock = jest.fn(() => guestWishlistMock.wishlist_product_data);
    contextMock.$bigcommerce.api.getProducts = getProductsMock;

    const expectedWishlist = guestWishlistMock;

    const res = await load(contextMock, wishlistName);

    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
    expect(res).toStrictEqual(expectedWishlist);
  });

  it('should call api to get products from guest wishlists', async () => {
    window.localStorage.__proto__.setItem = jest.fn();
    window.localStorage.__proto__.getItem = jest.fn(() => JSON.stringify(guestWishlistMock));

    await load(contextMock, wishlistName);

    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
    expect(getProductsMock).toHaveBeenCalledTimes(1);
  });
});
