export * from './get';
export * from './tree';

/**
 * Breadcrumbs
 */
export type Crumb = {
  text: string;
  link: string;
};

/**
 * CustomUrl for Category
 */
export type CustomUrl = {
  url: string;
  is_customized?: string;
};
/**
 * Bigcommerce Category
 */
export type Category = {
  id: number;
  parent_id: number;
  name: string;
  description?: string;
  views?: number;
  sort_order?: number;
  page_title?: string;
  meta_keywords?: string[];
  meta_description?: string;
  layout_file?: string;
  image_url?: string;
  is_visible?: boolean;
  search_keywords?: string;
  default_product_sort?: string;
  custom_url?: CustomUrl;
};
