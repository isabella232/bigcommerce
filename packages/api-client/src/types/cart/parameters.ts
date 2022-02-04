import { CartCurrency } from '.';
import { CustomItem } from './customItem';
import { GiftCertificate } from './giftCertificate';

/**
 * Schema of the gift certificate for adding it to the cart.
 */
interface GiftCertificateRequest extends Omit<GiftCertificate, 'id' | 'isTaxable'> {
  /**
   * Gift name.
   */
  name: string;
  /**
   * Gift quantity.
   */
  quantity: number;
}

/**
 * Definition of product option to identify the proper product variant.
 */
interface ProductOptionSelection {
  /**
   * ID of the option.
   */
  option_id: number;
  /**
   * Option value.
   */
  option_value: string;
}

/**
 * Base properties of the line item.
 */
interface LineItemBase {
  /**
   * Quantity of items added to cart.
   */
  quantity: number;
  /**
   * ID of the product.
   */
  product_id: number;
  /**
   * Optional price override.
   */
  list_price?: number;
  /**
   * Optionally, provide a value to override the product name.
   */
  name?: string;
}

/**
 * Type alias for line item for adding it to the cart.
 */
type LineItem =
  | (LineItemBase & {
      variant_id?: number;
    })
  | (LineItemBase & { option_selections: ProductOptionSelection[] });

/**
 * Possible values of include parameter for cart endpoints.
 */
export enum CartIncludeEnum {
  /**
   * Include redirect urls.
   */
  RedirectUrls = 'redirect_urls',
  /**
   * Include physical line items options.
   */
  LineItemsPhysicalItemsOptions = 'line_items.physical_items.options',
  /**
   * Include digital line items options.
   */
  LineItemsDigitalItemsOptions = 'line_items.digital_items.options'
}

/**
 * Parameters of create cart request.
 */
export interface CreateCartParameters {
  /**
   * Indicates whether to include cart sub-resources.
   */
  include?: CartIncludeEnum;
  /**
   * Cart information.
   */
  data: {
    /**
     * Customer ID.
     */
    customer_id?: number;
    /**
     * Line items.
     */
    line_items: LineItem[];
    /**
     * Gift certificates.
     */
    gift_certificates?: GiftCertificateRequest[];
    /**
     * Custom items.
     */
    custom_items?: CustomItem[];
    /**
     * Channel ID.
     */
    channel_id?: number;
    /**
     * Cart currency.
     */
    currency?: CartCurrency;
    /**
     * Locale.
     */
    locale?: string;
  };
}

/**
 * Necessary parameter for delete cart request.
 */
export interface DeleteCartParameters {
  /**
   * ID of the cart.
   */
  id: string;
}

/**
 * Necesary parameter for get cart request.
 */
export interface GetCartParameters {
  /**
   * ID of the cart.
   */
  id: string;
  /**
   * Indicates whether to include cart sub-resources.
   */
  include?: CartIncludeEnum;
}

/**
 * Definition of update cart request parameters.
 */
export interface UpdateCartParameters {
  /**
   * ID of the cart.
   */
  id: string;
  /**
   * Indicates whether to include cart sub-resources.
   */
  include?: CartIncludeEnum;
  /**
   * The updated value for customer_id.
   */
  data: {
    /**
     * Customer ID.
     */
    customer_id: number;
  };
}

/**
 * Definition of add line items to cart request parameters
 */
type AddLineItemsParametersData = {
  /**
   * Line items.
   */
  line_items?: LineItem[];
  /**
   * Gift certificates.
   */
  gift_certificates?: GiftCertificateRequest[];
  /**
   * Custom items.
   */
  custom_items?: CustomItem[];
}

/**
 * Base line item parameters.
 */
 interface BaseLineItemParameters {
  /**
   * ID of the cart.
   */
  cartId: string;
  /**
   * Add more information to the response.
   */
  include?: CartIncludeEnum;
}

/**
 * Definition of add line items to cart request parameters
 */
export interface AddLineItemsParameters extends BaseLineItemParameters {
  /**
   * Description of items which will be added to the cart.
   */
  data: AddLineItemsParametersData;
}

/**
 * Definition of remove line item from cart request parameters.
 */
export interface RemoveLineItemParameters extends BaseLineItemParameters {
  /**
   * ID of the cart item.
   */
  itemId: string;
}

/**
 * Parameters to modify line item.
 */
interface ModifyLineItemParams {
  /**
   * Line item details.
   */
  line_item: {
    /**
     * Product ID.
     */
    product_id: number;
    /**
     * Item quantity.
     */
    quantity?: number;
    /**
     * Item last price.
     */
    list_price?: number;
  }
}

/**
 * Necessary parameters to update line item.
 */
export interface UpdateLineItemParameters extends BaseLineItemParameters {
  /**
   * ID of the cart item.
   */
   itemId: string;
  /**
   * Describes the details of the modified cart item.
   */
  data: ModifyLineItemParams;
}
