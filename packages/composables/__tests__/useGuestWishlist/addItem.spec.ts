import { addItem } from '../../src/useGuestWishlist/actions';
import { guestWishlistMock } from '../../__mocks__/useGuestWishlist/guestWishlist.mock';
import { contextMock } from '../../__mocks__/context.mock';
import { GuestWishlist, GuestWishlistItem } from '../../src/types';

describe('[BigCommerce - composables] useGuestWishlist load', () => {
  let getProductsMock: jest.Mock<any, any>;

  beforeEach(() => {
    jest.clearAllMocks();

    jest.spyOn(window.localStorage.__proto__, 'setItem');
    jest.spyOn(window.localStorage.__proto__, 'getItem');

    window.localStorage.__proto__.setItem = jest.fn();

    getProductsMock = jest.fn();
    contextMock.$bigcommerce.api.getProducts = getProductsMock;
  });

  it('should add item to the items array', async () => {
    window.localStorage.__proto__.getItem = jest.fn(() => JSON.stringify(guestWishlistMock));

    const wishlistItem: GuestWishlistItem = { id: '1_1', product_id: 1, variant_id: 1 };
    const expectedItems: GuestWishlist['items'] = [wishlistItem];

    const res = await addItem(contextMock, wishlistItem);

    expect(getProductsMock).toHaveBeenCalledTimes(1);
    expect(res.items).toStrictEqual(expectedItems);
  });

  it('should return null if wishlist is not in local storage', async () => {
    window.localStorage.__proto__.getItem = jest.fn(() => null);

    const wishlistItem: GuestWishlistItem = { id: '1_1', product_id: 1, variant_id: 1 };

    const res = await addItem(contextMock, wishlistItem);

    expect(getProductsMock).toHaveBeenCalledTimes(0);
    expect(res).toBe(null);
  });

  it('should call api to get products from guest wishlists', async () => {
    window.localStorage.__proto__.getItem = jest.fn(() => JSON.stringify(guestWishlistMock));

    const wishlistItem: GuestWishlistItem = { id: '1_1', product_id: 1, variant_id: 1 };
    const expectedParams = { 'id:in': [1], include: 'variants' };

    await addItem(contextMock, wishlistItem);

    expect(getProductsMock).toHaveBeenCalledTimes(1);
    expect(getProductsMock).toHaveBeenCalledWith(expectedParams);
  });

  it('should not add item to items array if it is there', async () => {
    const wishlistItem: GuestWishlistItem = { id: '1_1', product_id: 1, variant_id: 1 };
    const wishlistMock: GuestWishlist = JSON.parse(JSON.stringify(guestWishlistMock));
    wishlistMock.items.push(wishlistItem);
    const expectedLength = 1;

    window.localStorage.__proto__.getItem = jest.fn(() => JSON.stringify(wishlistMock));

    const res = await addItem(contextMock, wishlistItem);

    expect(getProductsMock).toHaveBeenCalledTimes(0);
    expect(res.items).toHaveLength(expectedLength);
  });
});
