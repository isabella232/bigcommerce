import { CartItemBase } from './base';

export type DigitalCartItem = CartItemBase & {
  /**
   * URLs to download all product files.
   */
  download_file_urls?: Array<string>;
  /**
   * The URL for the combined downloads page.
   */
  download_page_url?: string;
  /**
   * Combined download size, in human-readable style. E.g.: `30MB`.
   */
  download_size?: string;
};
