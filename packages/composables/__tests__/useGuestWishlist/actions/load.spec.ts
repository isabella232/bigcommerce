import { load } from '../../../src/useGuestWishlist/actions';
import { guestWishlistMock } from '../../../__mocks__/useGuestWishlist/guestWishlist.mock';
import { contextMock } from '../../../__mocks__/context.mock';

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

    const expectedWishlist = {
      name: wishlistName,
      items: [],
      wishlist_product_data: { data: [], meta: {} },
      is_public: true
    };

    await load(contextMock, wishlistName);

    expect(getProductsMock).toHaveBeenCalledTimes(0);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith('bigcommerce-wishlist', JSON.stringify(expectedWishlist));
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
