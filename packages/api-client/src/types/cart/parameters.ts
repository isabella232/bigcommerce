import { CustomItem } from './customItem';
import { GiftCertificate } from './giftCertificate';

/**
 * Schema of the gift certificate for adding it to the cart.
 */
type GiftCertificateRequest = Omit<GiftCertificate, 'id' | 'isTaxable'> & {
  name: string;
  quantity: number;
};

/**
 * Definition of product option to identify the proper product variant.
 */
type ProductOptionSelection = {
  /**
   * ID of the option.
   */
  option_id: number;
  option_value: string;
};

/**
 * Base properties of the line item.
 */
type LineItemBase = {
  /**
   * Quantity of items added to cart.
   */
  quantity: number;
  /**
   * ID of the product
   */
  product_id: number;
  /**
   * Optional price override
   */
  list_price?: number;
  /**
   * Optionally, provide a value to override the product name.
   */
  name?: string;
};

/**
 * Schema of the line item for adding it to the cart.
 */
type LineItem =
  | (LineItemBase & {
      variant_id?: number;
    })
  | (LineItemBase & { option_selections: ProductOptionSelection[] });

/**
 * Definition of add line items to cart request parameters
 */
export type AddLineItemsParameters = {
  /**
   * ID of the cart
   */
  cartId: string;
  /**
   * Add more information to the response
   */
  include?:
    | 'redirect_urls'
    | 'line_items.physical_items.options'
    | 'line_items.digital_items.options';
  /**
   * Description of items which will be added to the cart
   */
  data: {
    line_items?: LineItem[];
    gift_certificates?: GiftCertificateRequest[];
    custom_items?: CustomItem[];
  };
};
