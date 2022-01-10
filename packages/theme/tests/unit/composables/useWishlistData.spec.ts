import { expect } from '@jest/globals';
import { Wishlist } from '@vue-storefront/bigcommerce';
import { wishlistMock } from '../../__mocks__/wishlist.mock';
import { mockedProduct } from '../../__mocks__/product.mock';
import { useWishlistData } from '../../../composables/useWishlistData';

describe('[bigcommerce-theme] useProductData', () => {
  const wishlistData = useWishlistData();
  const wishlistItem = { id: '77_1', product_id: 77, variant_id: 1 };

  describe('[bigcommerce-theme] useProductData getItems', () => {
    it('should return array of items', () => {
      expect(wishlistData.getItems(wishlistMock as Wishlist)).toStrictEqual(
        wishlistMock.items
      );
    });
  });

  describe('[bigcommerce-theme] useProductData getTotals', () => {
    it('should return totals', () => {
      const expectedTotals = { subtotal: 49, total: 49 };
      expect(wishlistData.getTotals(wishlistMock as Wishlist)).toStrictEqual(
        expectedTotals
      );
    });
  });

  describe('[bigcommerce-theme] useProductData getItemName', () => {
    it('should return product name', () => {
      expect(
        wishlistData.getItemName(wishlistMock as Wishlist, wishlistItem)
      ).toBe(mockedProduct.name);
    });
  });

  describe('[bigcommerce-theme] useProductData getItemImage', () => {
    it('should return product cover image', () => {
      const expectedImage =
        'https://cdn11.bigcommerce.com/s-moq5tdn0k6/products/77/images/266/foglinenbeigestripetowel1b.1633499289.386.513.jpg?c=1';
      expect(
        wishlistData.getItemImage(wishlistMock as Wishlist, wishlistItem)
      ).toBe(expectedImage);
    });
  });

  describe('[bigcommerce-theme] useProductData getItemPrice', () => {
    it('should return product price', () => {
      const expectedPrice = { regular: 49, special: 0 };
      expect(
        wishlistData.getItemPrice(wishlistMock as Wishlist, wishlistItem)
      ).toStrictEqual(expectedPrice);
    });
  });

  describe('[bigcommerce-theme] useProductData getItemSku', () => {
    it('should return product sku', () => {
      expect(
        wishlistData.getItemSku(wishlistMock as Wishlist, wishlistItem)
      ).toBe(mockedProduct.sku);
    });
  });

  describe('[bigcommerce-theme] useProductData getShippingPrice', () => {
    it('should return shipping price for the wishlist', () => {
      expect(wishlistData.getShippingPrice(wishlistMock as Wishlist)).toBe(0);
    });
  });

  describe('[bigcommerce-theme] useProductData getTotalItems', () => {
    it('should return total amount of the items', () => {
      expect(wishlistData.getTotalItems(wishlistMock as Wishlist)).toBe(
        wishlistMock.items.length
      );
    });
  });

  describe('[bigcommerce-theme] useProductData getItemQty', () => {
    it('should return item qty', () => {
      const expectedQty = 5;
      expect(
        wishlistData.getItemQty(wishlistMock as Wishlist, wishlistItem)
      ).toBe(expectedQty);
    });
  });
});
