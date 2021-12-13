import { CreateWishlistResponse, GetAllWishlistResponse, Wishlist as WishlistAPI } from '@vue-storefront/bigcommerce-api';
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
    contextMock.$bigcommerce.api.getProducts = jest.fn();
  });

  it('should get existing customer wishlist', async () => {
    const getAllWishlistResponseMock: GetAllWishlistResponse = {
      data: [wishlistMock],
      meta: {}
    };
    contextMock.$bigcommerce.api.getAllWishlists = jest.fn(() => getAllWishlistResponseMock);

    await load(contextMock, {});

    expect(contextMock.$bigcommerce.api.getAllWishlists).toHaveBeenCalledTimes(1);
  });

  it('should not create new wishlist if there is created one', async () => {
    const getAllWishlistResponseMock: GetAllWishlistResponse = {
      data: [wishlistMock],
      meta: {}
    };
    contextMock.$bigcommerce.api.getAllWishlists = jest.fn(() => getAllWishlistResponseMock);
    contextMock.$bigcommerce.api.createWishlist = jest.fn();

    await load(contextMock, {});

    expect(contextMock.$bigcommerce.api.createWishlist).toHaveBeenCalledTimes(0);
  });

  it('should create new wishlist if it was not created before', async () => {
    const getAllWishlistResponseMock: GetAllWishlistResponse = {
      data: [],
      meta: {}
    };
    const createWishlistResponseMock: CreateWishlistResponse = {
      data: wishlistMock,
      meta: {}
    };
    contextMock.$bigcommerce.api.getAllWishlists = jest.fn(() => getAllWishlistResponseMock);
    contextMock.$bigcommerce.api.createWishlist = jest.fn(() => createWishlistResponseMock);

    await load(contextMock, {});

    expect(contextMock.$bigcommerce.api.createWishlist).toHaveBeenCalledTimes(1);
  });

  it('should call getProducts to refresh product list', async () => {
    const getAllWishlistResponseMock: GetAllWishlistResponse = {
      data: [wishlistMock],
      meta: {}
    };
    contextMock.$bigcommerce.api.getAllWishlists = jest.fn(() => getAllWishlistResponseMock);
    contextMock.$bigcommerce.api.createWishlist = jest.fn();

    await load(contextMock, {});

    expect(contextMock.$bigcommerce.api.getProducts).toHaveBeenCalledTimes(1);
  });
});
