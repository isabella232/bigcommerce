import { CartCurrency } from '.';
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

export enum CartIncludeEnum {
  RedirectUrls = 'redirect_urls',
  LineItemsPhysicalItemsOptions = 'line_items.physical_items.options',
  LineItemsDigitalItemsOptions = 'line_items.digital_items.options'
}

/**
 * Definition of create cart request parameters
 */
export type CreateCartParameters = {
  include?: CartIncludeEnum;
  data: {
    customer_id?: number;
    line_items: LineItem[];
    gift_certificates?: GiftCertificateRequest[];
    custom_items?: CustomItem[];
    channel_id?: number;
    currency?: CartCurrency;
    locale?: string;
  };
};

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
  include?: CartIncludeEnum;
  /**
   * Description of items which will be added to the cart
   */
  data: {
    line_items?: LineItem[];
    gift_certificates?: GiftCertificateRequest[];
    custom_items?: CustomItem[];
  };
};
