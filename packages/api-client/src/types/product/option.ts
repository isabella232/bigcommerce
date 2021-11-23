enum ProductOptionTypeEnum {
  RadioButtons = 'radio_buttons',
  Rectangles = 'rectangles',
  Dropdown = 'dropdown',
  ProductList = 'product_list',
  ProductListWithImages = 'product_list_with_images',
  Swatch = 'swatch'
}

/**
 * Product Option `option_value`.
 */
type ProductOptionValue = {
  /**
   * The flag for preselecting a value as the default on the storefront. This field is not supported for swatch options/modifiers.
   */
  is_default?: boolean;
  /**
   * The text display identifying the value on the storefront. Required in a /POST.
   */
  label: string;
  /**
   * The order in which the value will be displayed on the product page. Required in a /POST.
   */
  sort_order: number;
  /**
   * The unique numeric ID of the value; increments sequentially.
   */
  id?: number;
  /**
   * Extra data describing the value, based on the type of option or modifier with which the value is associated. The `swatch` type option can accept an array of `colors`, with up to three hexidecimal color keys; or an `image_url`, which is a full image URL path including protocol. The `product list` type option requires a `product_id`. The `checkbox` type option requires a boolean flag, called `checked_value`, to determine which value is considered to be the checked state.
   */
  value_data: Record<string, unknown>;
};

/**
 * Definition of product options
 */
export type ProductOption = {
  /**
   * The unique numerical ID of the option, increments sequentially.
   */
  id?: number | null;
  /**
   * The unique numerical ID of the product to which the option belongs.
   */
  product_id?: number;
  /**
   * The name of the option shown on the storefront.
   */
  display_name?: string;
  /**
   * The type of option, which determines how it will display on the storefront. Acceptable values: `radio_buttons`, `rectangles`, `dropdown`, `product_list`, `product_list_with_images`, `swatch`. For reference, the former v2 API values are: RB = radio_buttons, RT = rectangles, S = dropdown, P = product_list, PI = product_list_with_images, CS = swatch.
   */
  type?: ProductOptionTypeEnum;
  config?: any[];
  /**
   * Order in which the option is displayed on the storefront.
   */
  sort_order?: number;
  /**
   * Array of the possible values for the option
   */
  option_values?: ProductOptionValue[];
  /**
   * The unique option name, auto-generated from the display name, a timestamp, and the product ID.
   * @type {string}
   * @memberof ProductOptionFull
   */
  name?: string;
};
