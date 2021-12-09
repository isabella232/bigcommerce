import { removeItem } from '../../src/useGuestWishlist/actions';
import { guestWishlistMock } from '../../__mocks__/useGuestWishlist/guestWishlist.mock';
import { contextMock } from '../../__mocks__/context.mock';
import { Wishlist, WishlistItem } from '../../src/types';

describe('[BigCommerce - composables] useGuestWishlist removeItem', () => {
  let getProductsMock: jest.Mock<any, any>;
  let wishlistMock: Wishlist;

  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(window.localStorage.__proto__, 'setItem');
    window.localStorage.__proto__.setItem = jest.fn();

    getProductsMock = jest.fn();
    contextMock.$bigcommerce.api.getProducts = getProductsMock;

    wishlistMock = JSON.parse(JSON.stringify(guestWishlistMock));
  });

  it('should remove item from the items array', async () => {
    const wishlistItem: WishlistItem = { id: '1_1', product_id: 1, variant_id: 1 };
    wishlistMock.items.push(wishlistItem);

    const expectedLength = 0;

    const res = await removeItem(contextMock, wishlistMock, wishlistItem);

    expect(res.items).toHaveLength(expectedLength);
  });

  it('should call api to get products from guest wishlists', async () => {
    const wishlistItems: WishlistItem[] = [
      { id: '1_1', product_id: 1, variant_id: 1 },
      { id: '2_2', product_id: 2, variant_id: 2 }
    ];
    wishlistMock.items.push(...wishlistItems);

    const expectedParams = { 'id:in': [2], include: 'variants' };

    await removeItem(contextMock, wishlistMock, wishlistItems[0]);

    expect(getProductsMock).toHaveBeenCalledTimes(1);
    expect(getProductsMock).toHaveBeenCalledWith(expectedParams);
  });

  it('should set new guest wishlist in the localstorage', async () => {
    const wishlistItem: WishlistItem = { id: '1_1', product_id: 1, variant_id: 1 };
    wishlistMock.items.push(wishlistItem);

    await removeItem(contextMock, wishlistMock, wishlistItem);

    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });
});
