/**
 * Possible values of product option type.
 */
export enum ProductOptionTypeEnum {
  /**
   * Radio buttons type.
   */
  RadioButtons = 'radio_buttons',
  /**
   * Rectangles type.
   */
  Rectangles = 'rectangles',
  /**
   * Dropdown type.
   */
  Dropdown = 'dropdown',
  /**
   * Product list type.
   */
  ProductList = 'product_list',
  /**
   * Product list with images type.
   */
  ProductListWithImages = 'product_list_with_images',
  /**
   * Swatch type.
   */
  Swatch = 'swatch'
}

/**
 * Possible values of date limit modes.
 */
export enum DateLimitModeEnum {
  /**
   * Earliest mode.
   */
  Earliest = 'earliest',
  /**
   * Range mode.
   */
  Range = 'range',
  /**
   * Latest mode.
   */
  Latest = 'latest'
}

/**
 * Possible values of file type modes.
 */
export enum FileTypesModeEnum {
  /**
   * Specific mode.
   */
  Specific = 'specific',
  /**
   * All mode.
   */
  All = 'all'
}

/**
 * Possible values of number limit modes.
 */
export enum NumberLimitModeEnum {
  /**
   * Lowest mode.
   */
  Lowest = 'lowest',
  /**
   * Highest mode.
   */
  Highest = 'highest',
  /**
   * Range mode.
   */
  Range = 'range'
}

/**
 * Possible values of product list shipping calcs.
 */
export enum ProductListShippingCalcEnum {
  /**
   * None.
   */
  None = 'none',
  /**
   * Weight.
   */
  Weight = 'weight',
  /**
   * Packages.
   */
  Package = 'package'
}

/**
 * Product Option value.
 */
export interface ProductOptionValue {
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
}

/**
 * Product option config.
 */
export interface ProductOptionConfig {
  /**
   * The default value. Shown on a date option as an ISO-8601–formatted string, or on a text option as a string.
   */
  defaultValue?: string;
  /**
   * Flag for setting the checkbox to be checked by default.
   */
  checkedByDefault?: boolean;
  /**
   * Label displayed for the checkbox option.
   */
  checkboxLabel?: string;
  /**
   * Flag to limit the dates allowed to be entered on a date option.
   */
  dateLimited?: boolean;
  /**
   * The type of limit that is allowed to be entered on a date option.
   */
  dateLimitMode?: DateLimitModeEnum;
  /**
   * The earliest date allowed to be entered on the date option, as an ISO-8601 formatted string.
   */
  dateEarliestValue?: Date;
  /**
   * The latest date allowed to be entered on the date option, as an ISO-8601 formatted string.
   */
  dateLatestValue?: Date;
  /**
   * The kind of restriction on the file types that can be uploaded with a file upload option. Values: `specific` - restricts uploads to particular file types; `all` - allows all file types.
   */
  fileTypesMode?: FileTypesModeEnum;
  /**
   * The type of files allowed to be uploaded if the `file_type_option` is set to `specific`. Values:
   *  - `images` - Allows upload of image MIME types (`bmp`, `gif`, `jpg`, `jpeg`, `jpe`, `jif`, `jfif`, `jfi`, `png`, `wbmp`, `xbm`, `tiff`). `documents` - Allows upload of document MIME types (`txt`, `pdf`, `rtf`, `doc`, `docx`, `xls`, `xlsx`, `accdb`, `mdb`, `one`, `pps`, `ppsx`, `ppt`, `pptx`, `pub`, `odt`, `ods`, `odp`, `odg`, `odf`).
   *  - `other` - Allows file types defined in the `file_types_other` array.
   */
  fileTypesSupported?: Array<string>;
  /**
   * A list of other file types allowed with the file upload option.
   */
  fileTypesOther?: Array<string>;
  /**
   * The maximum size for a file that can be used with the file upload option. This will still be limited by the server.
   */
  fileMaxSize?: number;
  /**
   * Flag to validate the length of a text or multi-line text input.
   */
  textCharactersLimited?: boolean;
  /**
   * The minimum length allowed for a text or multi-line text option.
   */
  textMinLength?: number;
  /**
   * The maximum length allowed for a text or multi line text option.
   */
  textMaxLength?: number;
  /**
   * Flag to validate the maximum number of lines allowed on a multi-line text input.
   */
  textLinesLimited?: boolean;
  /**
   * The maximum number of lines allowed on a multi-line text input.
   */
  textMaxLines?: number;
  /**
   * Flag to limit the value of a number option.
   */
  numberLimited?: boolean;
  /**
   * The type of limit on values entered for a number option.
   */
  numberLimitMode?: NumberLimitModeEnum;
  /**
   * The lowest allowed value for a number option if `number_limited` is true.
   */
  numberLowestValue?: number;
  /**
   * The highest allowed value for a number option if `number_limited` is true.
   */
  numberHighestValue?: number;
  /**
   * Flag to limit the input on a number option to whole numbers only.
   */
  numberIntegersOnly?: boolean;
  /**
   * Flag for automatically adjusting inventory on a product included in the list.
   */
  productListAdjustsInventory?: boolean;
  /**
   * Flag to add the optional product's price to the main product's price.
   */
  productListAdjustsPricing?: boolean;
  /**
   * How to factor the optional product's weight and package dimensions into the shipping quote. Values: `none` - don't adjust; `weight` - use shipping weight only; `package` - use weight and dimensions.
   */
  productListShippingCalc?: ProductListShippingCalcEnum;
}

/**
 * Definition of product options
 */
export interface ProductOption {
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
  /**
   * Product option config.
   */
  config?: ProductOptionConfig[];
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
   */
  name?: string;
}
