import { WishlistResponse, WishlistCollectionResponse, Wishlist as WishlistAPI } from '@vue-storefront/bigcommerce-api';
import { load } from '../../src/useWishlist/actions';
import { contextMock } from '../../__mocks__/context.mock';
import jwt from 'jsonwebtoken';

const customerId = 1;
const decode = jest.spyOn(jwt, 'decode');
decode.mockImplementation(() => ({ customer: { id: customerId } }));

describe('[BigCommerce - composables] useGuestWishlist load', () => {
  const wishlistName = 'Mocked wishlist';
  const wishlistMock: WishlistAPI = {
    id: 1,
    customer_id: customerId,
    is_public: true,
    items: [{ id: 1, product_id: 1, variant_id: 1 }],
    name: wishlistName,
    token: 'mocked_token'
  };
  contextMock.$bigcommerce.config.app.$config = {
    wishlist: {
      authenticatedName: wishlistName
    }
  };
  contextMock.$bigcommerce.config.app.$cookies.get = jest.fn(() => 'mocked_token');

  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(window.localStorage.__proto__, 'getItem');
    jest.spyOn(window.localStorage.__proto__, 'removeItem');

    contextMock.$bigcommerce.api.getProducts = jest.fn();
    contextMock.$bigcommerce.api.createWishlist = jest.fn();
  });

  it('should get existing customer wishlist', async () => {
    const getAllWishlistResponseMock: WishlistCollectionResponse = {
      data: [wishlistMock],
      meta: {}
    };
    contextMock.$bigcommerce.api.getAllWishlists = jest.fn(() => getAllWishlistResponseMock);

    await load(contextMock, {});

    expect(contextMock.$bigcommerce.api.getAllWishlists).toHaveBeenCalledTimes(1);
  });

  it('should not create new wishlist if there is created one', async () => {
    const getAllWishlistResponseMock: WishlistCollectionResponse = {
      data: [wishlistMock],
      meta: {}
    };
    contextMock.$bigcommerce.api.getAllWishlists = jest.fn(() => getAllWishlistResponseMock);

    await load(contextMock, {});

    expect(contextMock.$bigcommerce.api.createWishlist).toHaveBeenCalledTimes(0);
  });

  it('should create new wishlist if it was not created before', async () => {
    const getAllWishlistResponseMock: WishlistCollectionResponse = {
      data: [],
      meta: {}
    };
    const createWishlistResponseMock: WishlistResponse = {
      data: wishlistMock,
      meta: {}
    };
    contextMock.$bigcommerce.api.getAllWishlists = jest.fn(() => getAllWishlistResponseMock);
    contextMock.$bigcommerce.api.createWishlist = jest.fn(() => createWishlistResponseMock);

    await load(contextMock, {});

    expect(contextMock.$bigcommerce.api.createWishlist).toHaveBeenCalledTimes(1);
  });

  it('should call getProducts to refresh product list', async () => {
    const getAllWishlistResponseMock: WishlistCollectionResponse = {
      data: [wishlistMock],
      meta: {}
    };
    contextMock.$bigcommerce.api.getAllWishlists = jest.fn(() => getAllWishlistResponseMock);

    await load(contextMock, {});

    expect(contextMock.$bigcommerce.api.getProducts).toHaveBeenCalledTimes(1);
  });

  it('should merge wishlists if there is guest wishlist', async () => {
    window.localStorage.__proto__.getItem = jest.fn(() => JSON.stringify(wishlistMock));
    window.localStorage.__proto__.removeItem = jest.fn();

    const getAllWishlistResponseMock: WishlistCollectionResponse = {
      data: [wishlistMock],
      meta: {}
    };
    const addItemsResponseMock: WishlistResponse = {
      data: wishlistMock,
      meta: {}
    };
    contextMock.$bigcommerce.api.addWishlistItems = jest.fn(() => addItemsResponseMock);
    contextMock.$bigcommerce.api.getAllWishlists = jest.fn(() => getAllWishlistResponseMock);

    await load(contextMock, {});

    expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
    expect(contextMock.$bigcommerce.api.addWishlistItems).toHaveBeenCalledTimes(1);
    expect(window.localStorage.removeItem).toHaveBeenCalledTimes(1);
  });

  it('should not merge wishlist if there is no guest wishlist', async () => {
    window.localStorage.__proto__.getItem = jest.fn(() => null);
    window.localStorage.__proto__.removeItem = jest.fn();

    const getAllWishlistResponseMock: WishlistCollectionResponse = {
      data: [wishlistMock],
      meta: {}
    };
    contextMock.$bigcommerce.api.addWishlistItems = jest.fn();
    contextMock.$bigcommerce.api.getAllWishlists = jest.fn(() => getAllWishlistResponseMock);

    await load(contextMock, {});

    expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
    expect(contextMock.$bigcommerce.api.addWishlistItems).toHaveBeenCalledTimes(0);
    expect(window.localStorage.removeItem).toHaveBeenCalledTimes(0);
  });
});
