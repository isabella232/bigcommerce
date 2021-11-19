/**
 * Bigcommerce categoryTree
 */
export type CategoryTree = {
  id: number;
  parent_id: number;
  name: string;
  is_visible?: boolean;
  url?: string;
  children?: CategoryTree[];
};

/**
 * Bigcommerce getCategoryTree response
 */
export type CategoryTreeResponse = {
  data: CategoryTree[];
  meta: unknown;
};

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

/**
 * Bigcommerce getCategory response
 */
export type CategoryResponse = {
  data: Category[];
  meta: unknown;
};

/**
 * Bigcommerce getCategory params
 */
export type CategoryParameters = {
  categoryId?: number;
};
