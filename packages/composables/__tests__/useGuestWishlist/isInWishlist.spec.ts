import { isInWishlist } from '../../src/helpers';
import { guestWishlistMock } from '../../__mocks__/useGuestWishlist/guestWishlist.mock';

describe('[BigCommerce - composables] useGuestWishlist isInWishlist', () => {
  const existingItem = {
    id: '1_1',
    product_id: 1,
    variant_id: 1
  };
  const existingItemParams = {
    productId: 1,
    variantId: 1
  };
  const nonExistingItemParams = {
    productId: 2,
    variantId: 2
  };
  guestWishlistMock.items.push(existingItem);

  it('should return true if item is in the wishlist', () => {
    const res = isInWishlist(guestWishlistMock, existingItemParams);

    expect(res).toBe(true);
  });

  it('should return false if there product is not in the wishlist', () => {
    const res = isInWishlist(guestWishlistMock, nonExistingItemParams);

    expect(res).toBe(false);
  });

  it('should return false if there is no wishlist', () => {
    const res = isInWishlist(null, nonExistingItemParams);

    expect(res).toBe(false);
  });
});
