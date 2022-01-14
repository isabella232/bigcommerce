import { useCartData } from '../../../composables/useCartData';
import { mockedCart } from '../../__mocks__/cart.mock';
import { expect } from '@jest/globals';

describe('[bigcommerce-theme] useCartData', () => {
  const cartData = useCartData();

  const mockedCartItem = mockedCart.line_items.physical_items[0];

  it('getItems should return the union of the physical and digital items', async () => {
    expect(cartData.getItems(mockedCart)).toEqual([mockedCartItem]);
  });

  it('getItems should return empty array when cart is not defined', async () => {
    expect(cartData.getItems(undefined)).toEqual([]);
  });

  it('getItemName should return the name of the item', async () => {
    expect(cartData.getItemName(mockedCartItem)).toEqual(mockedCartItem.name);
  });

  it('getItemName should return empty string when item is not defined', async () => {
    expect(cartData.getItemName(undefined)).toEqual('');
  });

  it('getItemImage should return the default image of the product', async () => {
    expect(cartData.getItemImage(mockedCartItem)).toEqual(
      mockedCartItem.image_url
    );
  });

  it('getItemImage should return empty string when item is not defined', async () => {
    expect(cartData.getItemImage(undefined)).toEqual('');
  });

  it('getItemPrice should return only the regular price when sale price and list price are equal', async () => {
    expect(cartData.getItemPrice(mockedCartItem)).toEqual({
      regular: mockedCartItem.sale_price
    });
  });

  it('getItemPrice should return regular and special prices when sale price and list price are not equal', async () => {
    const modifiedCartItem = {
      ...mockedCartItem,
      sale_price: 5
    };
    expect(cartData.getItemPrice(modifiedCartItem)).toEqual({
      regular: modifiedCartItem.list_price,
      special: modifiedCartItem.sale_price
    });
  });

  it('getItemSku should return the sku of the item', async () => {
    expect(cartData.getItemSku(mockedCartItem)).toEqual(mockedCartItem.sku);
  });

  it('getItemSku should return empty string when item is not defined', async () => {
    expect(cartData.getItemSku(undefined)).toEqual('');
  });

  it('getItemQty should return the quanity of the item', async () => {
    expect(cartData.getItemQty(mockedCartItem)).toEqual(
      mockedCartItem.quantity
    );
  });

  it('getItemQty should return 0 when item is not defined', async () => {
    expect(cartData.getItemQty(undefined)).toEqual(0);
  });

  it('getItemAttributes should return the attribues of the selected product variant', async () => {
    expect(cartData.getItemAttributes(mockedCartItem)).toEqual({
      Color: 'Orange',
      Size: 'Small'
    });
  });

  it('getItemAttributes should be able to filter attributes by name', async () => {
    expect(cartData.getItemAttributes(mockedCartItem, ['Size'])).toEqual({
      Size: 'Small'
    });
  });

  it('getItemAttributes should return empty object when item is not defined', async () => {
    expect(cartData.getItemAttributes(undefined)).toEqual({});
  });

  it('getTotals should return the total price of cart', async () => {
    expect(cartData.getTotals(mockedCart)).toEqual({
      total: mockedCart.base_amount,
      subtotal: mockedCart.base_amount,
      special: mockedCart.cart_amount
    });
  });

  it('getTotals should return object with 0 values when cart is not defined', async () => {
    expect(cartData.getTotals(undefined)).toEqual({
      total: 0,
      subtotal: 0,
      special: 0
    });
  });

  it('getTotalItems should return the number of items in the cart', async () => {
    expect(cartData.getTotalItems(mockedCart)).toEqual(1);
  });

  it('getTotalItems should return 0 when cart is not defined', async () => {
    expect(cartData.getTotalItems(undefined)).toEqual(0);
  });
});
