import { clear } from '../../src/useGuestWishlist/actions';
import { guestWishlistMock } from '../../__mocks__/useGuestWishlist/guestWishlist.mock';
import { contextMock } from '../../__mocks__/context.mock';
import { Wishlist, WishlistItem } from '../../src/types';

describe('[BigCommerce - composables] useGuestWishlist clear', () => {
  let getProductsMock: jest.Mock<any, any>;
  let wishlistMock: Wishlist;

  beforeEach(() => {
    jest.clearAllMocks();

    jest.spyOn(window.localStorage.__proto__, 'setItem');
    jest.spyOn(window.localStorage.__proto__, 'getItem');

    window.localStorage.__proto__.setItem = jest.fn();

    getProductsMock = jest.fn();
    contextMock.$bigcommerce.api.getProducts = getProductsMock;

    wishlistMock = JSON.parse(JSON.stringify(guestWishlistMock));
  });

  it('should remove all items from the items array', async () => {
    const wishlistItems: WishlistItem[] = [
      { id: '1_1', product_id: 1, variant_id: 1 },
      { id: '2_2', product_id: 2, variant_id: 2 }
    ];
    wishlistMock.items.push(...wishlistItems);

    const expectedLength = 0;

    const res = await clear(contextMock, wishlistMock);

    expect(res.items).toHaveLength(expectedLength);
  });

  it('should not call api to refresh the guest wishlists', async () => {
    const wishlistItems: WishlistItem[] = [
      { id: '1_1', product_id: 1, variant_id: 1 },
      { id: '2_2', product_id: 2, variant_id: 2 }
    ];
    wishlistMock.items.push(...wishlistItems);
    window.localStorage.__proto__.getItem = jest.fn(() => JSON.stringify(wishlistMock));

    await clear(contextMock, wishlistMock);

    expect(getProductsMock).toHaveBeenCalledTimes(0);
  });

  it('should set cleared guest wishlist in the localstorage', async () => {
    const wishlistItem: WishlistItem = { id: '1_1', product_id: 1, variant_id: 1 };
    wishlistMock.items.push(wishlistItem);

    window.localStorage.__proto__.getItem = jest.fn(() => JSON.stringify(wishlistMock));

    await clear(contextMock, wishlistMock);

    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });
});
