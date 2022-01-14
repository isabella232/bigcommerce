import { Product } from '@vue-storefront/bigcommerce-api';
import { isInWishlist } from '../../src/useWishlist/actions';
import { wishlistMock } from '../../__mocks__/wishlist.mock';
import { contextMock } from '../../__mocks__/context.mock';
import { mockedProduct } from '../../__mocks__/product.mock';
import { Wishlist } from '../../src/types';

describe('[BigCommerce - composables] useWishlist isInWishlist', () => {
  const existingItem = {
    id: 'test',
    product_id: mockedProduct.id,
    variant_id: undefined
  };
  wishlistMock.items.push(existingItem);

  it('should return true if item is in the wishlist', () => {
    const res = isInWishlist(contextMock, {
      currentWishlist: wishlistMock as Wishlist,
      product: mockedProduct as Product
    });

    expect(res).toBe(true);
  });

  it('should return false if there product is not in the wishlist', () => {
    const otherProduct = {
      ...mockedProduct,
      id: 1
    };
    const res = isInWishlist(contextMock, {
      currentWishlist: wishlistMock as Wishlist,
      product: otherProduct as Product
    });

    expect(res).toBe(false);
  });

  it('should return false if there is no wishlist', () => {
    const res = isInWishlist(contextMock, {
      currentWishlist: undefined,
      product: mockedProduct as Product
    });

    expect(res).toBe(false);
  });
});
