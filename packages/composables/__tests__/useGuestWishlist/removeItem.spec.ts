import { removeItem } from '../../src/useGuestWishlist/actions';
import { guestWishlistMock } from '../../__mocks__/useGuestWishlist/guestWishlist.mock';
import { contextMock } from '../../__mocks__/context.mock';
import { GuestWishlist, GuestWishlistItem } from '../../src/types';

describe('[BigCommerce - composables] useGuestWishlist removeItem', () => {
  let getProductsMock: jest.Mock<any, any>;
  let wishlistMock: GuestWishlist;

  beforeEach(() => {
    jest.clearAllMocks();

    jest.spyOn(window.localStorage.__proto__, 'setItem');
    jest.spyOn(window.localStorage.__proto__, 'getItem');

    window.localStorage.__proto__.setItem = jest.fn();

    getProductsMock = jest.fn();
    contextMock.$bigcommerce.api.getProducts = getProductsMock;

    wishlistMock = JSON.parse(JSON.stringify(guestWishlistMock));
  });

  it('should remove item from the items array', async () => {
    const wishlistItem: GuestWishlistItem = { id: '1_1', product_id: 1, variant_id: 1 };
    wishlistMock.items.push(wishlistItem);
    window.localStorage.__proto__.getItem = jest.fn(() => JSON.stringify(wishlistMock));

    const expectedLength = 0;

    const res = await removeItem(contextMock, wishlistItem);

    expect(res.items).toHaveLength(expectedLength);
    expect(getProductsMock).toHaveBeenCalledTimes(1);
  });

  it('should return null if wishlist is not in local storage', async () => {
    window.localStorage.__proto__.getItem = jest.fn(() => null);

    const wishlistItem: GuestWishlistItem = { id: '1_1', product_id: 1, variant_id: 1 };

    const res = await removeItem(contextMock, wishlistItem);

    expect(getProductsMock).toHaveBeenCalledTimes(0);
    expect(res).toBe(null);
  });

  it('should call api to get products from guest wishlists', async () => {
    const wishlistItems: GuestWishlistItem[] = [
      { id: '1_1', product_id: 1, variant_id: 1 },
      { id: '2_2', product_id: 2, variant_id: 2 }
    ];
    wishlistMock.items.push(...wishlistItems);
    window.localStorage.__proto__.getItem = jest.fn(() => JSON.stringify(wishlistMock));

    const expectedParams = { 'id:in': [2], include: 'variants' };

    await removeItem(contextMock, wishlistItems[0]);

    expect(getProductsMock).toHaveBeenCalledTimes(1);
    expect(getProductsMock).toHaveBeenCalledWith(expectedParams);
  });

  it('should set new guest wishlist in the localstorage', async () => {
    const wishlistItem: GuestWishlistItem = { id: '1_1', product_id: 1, variant_id: 1 };
    wishlistMock.items.push(wishlistItem);

    window.localStorage.__proto__.getItem = jest.fn(() => JSON.stringify(wishlistMock));

    await removeItem(contextMock, wishlistItem);

    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });
});
