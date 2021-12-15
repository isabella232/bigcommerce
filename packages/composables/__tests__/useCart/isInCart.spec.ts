import { Product } from '@vue-storefront/bigcommerce-api';
import { isInCart } from '../../src/useCart/actions';
import { mockedCart } from '../../__mocks__/cart.mock';
import { contextMock } from '../../__mocks__/context.mock';
import { mockedProduct } from '../../__mocks__/product.mock';

describe('[BigCommerce - composables] useCart isInCart', () => {
  it('should find product by id when it has no variants', async () => {
    const mockedProductWithoutVariants = {
      ...mockedProduct,
      variants: [],
      option_values: []
    };

    const result = isInCart(contextMock, {
      currentCart: mockedCart,
      product: mockedProductWithoutVariants as Product
    });

    expect(result).toEqual(true);
  });

  it('should find product by variant', async () => {
    const mockedProductWithVariants = {
      ...mockedProduct,
      variants: [
        {
          bin_picking_number: '0',
          calculated_price: 49,
          calculated_weight: 1,
          cost_price: 0,
          depth: null,
          fixed_cost_shipping_price: null,
          gtin: '',
          height: null,
          id: 3,
          image_url: '',
          inventory_level: 0,
          inventory_warning_level: 0,
          is_free_shipping: false,
          map_price: null,
          mpn: '',
          option_values: [
            {
              id: 70,
              label: 'M',
              option_display_name: 'Size',
              option_id: 108
            },
            {
              id: 7,
              label: 'Silver',
              option_display_name: 'Color',
              option_id: 109
            }
          ],
          price: null,
          product_id: 77,
          purchasing_disabled: false,
          purchasing_disabled_message: '',
          retail_price: null,
          sale_price: null,
          sku: 'SLCTBS-08950B35',
          sku_id: 72,
          upc: '',
          weight: null,
          width: null
        }
      ]
    };

    const result = isInCart(contextMock, {
      currentCart: mockedCart,
      product: mockedProductWithVariants as Product
    });

    expect(result).toEqual(true);
  });

  it('should return false when no item is found by id', async () => {
    const mockedProductWithoutVariants = {
      ...mockedProduct,
      id: 10
    };

    const result = isInCart(contextMock, {
      currentCart: mockedCart,
      product: mockedProductWithoutVariants as Product
    });

    expect(result).toEqual(false);
  });
});
