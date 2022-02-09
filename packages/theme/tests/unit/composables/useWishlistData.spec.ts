import { expect } from '@jest/globals';
import { Wishlist } from '@vue-storefront/bigcommerce';
import { InventoryType, Product } from '@vue-storefront/bigcommerce-api';
import { wishlistMock } from '../../__mocks__/wishlist.mock';
import { mockedProduct } from '../../__mocks__/product.mock';
import { useWishlistData } from '../../../composables/useWishlistData';
import { themeConfigMock } from '../../__mocks__/themeConfig.mock';

jest.mock('@nuxtjs/composition-api', () => ({
  useContext: () => ({
    $config: {
      theme: themeConfigMock
    }
  })
}));

describe('[bigcommerce-theme] useWishlistData', () => {
  const wishlistData = useWishlistData();
  const wishlistItem = { id: '77_1', product_id: 77, variant_id: 1 };

  describe('[bigcommerce-theme] useWishlistData getItems', () => {
    it('should return array of items', () => {
      expect(wishlistData.getItems(wishlistMock as Wishlist)).toStrictEqual(
        wishlistMock.items
      );
    });
  });

  describe('[bigcommerce-theme] useWishlistData getTotals', () => {
    it('should return totals', () => {
      const expectedTotals = { subtotal: 49, total: 49 };
      expect(wishlistData.getTotals(wishlistMock as Wishlist)).toStrictEqual(
        expectedTotals
      );
    });
  });

  describe('[bigcommerce-theme] useWishlistData getItemName', () => {
    it('should return product name', () => {
      expect(
        wishlistData.getItemName(wishlistMock as Wishlist, wishlistItem)
      ).toBe(mockedProduct.name);
    });
  });

  describe('[bigcommerce-theme] useWishlistData getItemImage', () => {
    it('should return product cover image', () => {
      const expectedImage =
        'https://cdn11.bigcommerce.com/s-moq5tdn0k6/products/77/images/266/foglinenbeigestripetowel1b.1633499289.386.513.jpg?c=1';
      expect(
        wishlistData.getItemImage(wishlistMock as Wishlist, wishlistItem)
      ).toBe(expectedImage);
    });
  });

  describe('[bigcommerce-theme] useWishlistData getItemPrice', () => {
    it('should return product price', () => {
      const expectedPrice = { regular: 49, special: 0 };
      expect(
        wishlistData.getItemPrice(wishlistMock as Wishlist, wishlistItem)
      ).toStrictEqual(expectedPrice);
    });
  });

  describe('[bigcommerce-theme] useWishlistData getItemSku', () => {
    it('should return product sku', () => {
      expect(
        wishlistData.getItemSku(wishlistMock as Wishlist, wishlistItem)
      ).toBe(mockedProduct.sku);
    });
  });

  describe('[bigcommerce-theme] useWishlistData getShippingPrice', () => {
    it('should return shipping price for the wishlist', () => {
      expect(wishlistData.getShippingPrice(wishlistMock as Wishlist)).toBe(0);
    });
  });

  describe('[bigcommerce-theme] useWishlistData getTotalItems', () => {
    it('should return total amount of the items', () => {
      expect(wishlistData.getTotalItems(wishlistMock as Wishlist)).toBe(
        wishlistMock.items.length
      );
    });
  });

  describe('[bigcommerce-theme] useWishlistData getItemQty', () => {
    it('should return item qty', () => {
      const expectedQty = 5;
      expect(
        wishlistData.getItemQty(wishlistMock as Wishlist, wishlistItem)
      ).toBe(expectedQty);
    });
  });

  describe('[bigcommerce-theme] useWishlistData isItemPurchasable', () => {
    it('isItemPurchasable should return true if inventory tracking is disabled', () => {
      const isItemPurchasable = wishlistData.isItemPurchasable(
        wishlistMock as Wishlist,
        wishlistItem
      );

      expect(isItemPurchasable).toEqual(true);
    });

    it('isItemPurchasable should return true if inventory tracking is set to product and there is available stock', () => {
      const wishlist = {
        ...wishlistMock,
        wishlist_product_data: {
          data: [
            {
              ...mockedProduct,
              inventory_tracking: InventoryType.product
            } as Product
          ],
          meta: {}
        }
      };

      const isItemPurchasable = wishlistData.isItemPurchasable(
        wishlist,
        wishlistItem
      );

      expect(isItemPurchasable).toEqual(true);
    });

    it('isItemPurchasable should return false if inventory tracking is set to product and stock is empty', () => {
      const wishlist = {
        ...wishlistMock,
        wishlist_product_data: {
          data: [
            {
              ...mockedProduct,
              inventory_tracking: InventoryType.product,
              inventory_level: 0
            } as Product
          ],
          meta: {}
        }
      };

      const isItemPurchasable = wishlistData.isItemPurchasable(
        wishlist,
        wishlistItem
      );

      expect(isItemPurchasable).toEqual(false);
    });

    it('isItemPurchasable should return true if inventory tracking is set to variant and there is available stock for the default variant', () => {
      const wishlist = {
        ...wishlistMock,
        wishlist_product_data: {
          data: [
            {
              ...mockedProduct,
              inventory_tracking: InventoryType.variant,
              variants: mockedProduct.variants.map((variant) => {
                if (variant.id === 1) {
                  return { ...variant, inventory_level: 3 };
                }

                return variant;
              })
            } as Product
          ],
          meta: {}
        }
      };

      const isItemPurchasable = wishlistData.isItemPurchasable(
        wishlist,
        wishlistItem
      );

      expect(isItemPurchasable).toEqual(true);
    });

    it('isItemPurchasable should return false if inventory tracking is set to variant and there is no available stock for the variant', () => {
      const wishlist = {
        ...wishlistMock,
        wishlist_product_data: {
          data: [
            {
              ...mockedProduct,
              inventory_tracking: InventoryType.variant
            } as Product
          ],
          meta: {}
        }
      };

      const isItemPurchasable = wishlistData.isItemPurchasable(
        wishlist,
        wishlistItem
      );

      expect(isItemPurchasable).toEqual(false);
    });
  });
});
