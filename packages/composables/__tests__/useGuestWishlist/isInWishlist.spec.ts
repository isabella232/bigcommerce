import { isInWishlist } from '../../src/useGuestWishlist/actions';
import { guestWishlistMock } from '../../__mocks__/useGuestWishlist/guestWishlist.mock';

describe('[BigCommerce - composables] useGuestWishlist isInWishlist', () => {
  const existingItem = {
    id: '1_1',
    product_id: 1,
    variant_id: 1
  };
  const nonExistingItem = {
    id: '2_2',
    product_id: 2,
    variant_id: 2
  };
  guestWishlistMock.items.push(existingItem);

  beforeEach(() => {
    jest.clearAllMocks();

    jest.spyOn(window.localStorage.__proto__, 'setItem');
    jest.spyOn(window.localStorage.__proto__, 'getItem');

    window.localStorage.__proto__.setItem = jest.fn();
  });

  it('should return true if item is in the wishlist', async () => {
    const res = await isInWishlist(guestWishlistMock, existingItem);

    expect(res).toBe(true);
  });

  it('should return false if there product is not in the wishlist', async () => {
    const res = await isInWishlist(guestWishlistMock, nonExistingItem);

    expect(res).toBe(false);
  });

  it('should return false if there is no wishlist', async () => {
    const res = await isInWishlist(null, nonExistingItem);

    expect(res).toBe(false);
  });
});
