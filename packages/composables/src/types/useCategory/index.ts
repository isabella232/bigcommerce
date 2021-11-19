/**
 * UseCategory search params
 */
export type UseCategorySearchParams = {
  categoryId?: number;
  categorySlug?: string;
};

/**
 * Breadcrumbs for Category
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
 * Category for useCategory
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
  breadcrumbs?: Crumb[];
  items: Category[];
  isCurrent?: boolean;
};

/**
 * CategoryTree for useCategory
 */
export type CategoryTree = {
  id: number;
  parent_id: number;
  name: string;
  is_visible?: boolean;
  url?: string;
  breadcrumbs?: Crumb[];
  isCurrent?: boolean;
  children?: CategoryTree[];
};
