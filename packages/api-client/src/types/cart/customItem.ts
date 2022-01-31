/**
 * Custom item model.
 */
export interface CustomItem {
  /**
   * Id of the custom item
   */
  id?: string;
  /**
   * Custom item sku
   */
  sku?: string;
  /**
   * Item name
   */
  name?: string;
  /**
   * Quantity of the custom item in the cart.
   */
  quantity?: string;
  /**
   * Price of the item. With or without tax, depending on your store's setup. Optional price override.
   */
  list_price?: string;
}
