import {
  Crumb,
  Category as CategoryAPI,
  CategoryTree as CategoryTreeAPI
} from '@vue-storefront/bigcommerce-api';

/**
 * Search params for useCategory composable.
 */
export interface UseCategorySearchParams {
  /**
   * ID of the category.
   */
  categoryId?: number;

  /**
   * Slug of the category.
   */
  categorySlug?: string;
}

/**
 * Category model used in useCategory composable.
 */
export interface Category extends CategoryAPI {
  /**
   * Category breadcrumbs.
   */
  breadcrumbs?: Crumb[];

  /**
   * Nested categories.
   */
  items: Category[];

  /**
   * Flag if category is current.
   */
  isCurrent?: boolean;
}

/**
 * Category tree model used in useCategory composable.
 */
export interface CategoryTree extends CategoryTreeAPI {
  /**
   * Category tree breadcrumbs.
   */
  breadcrumbs?: Crumb[];

  /**
   * Flag if category tree is current.
   */
  isCurrent?: boolean;

  /**
   * Nested category trees.
   */
  children?: CategoryTree[];
}

/**
 * Search result navigation item model.
 */
export interface SearchResultNavigationItem {
  /**
   * Search result item slug.
   */
  slug: string;

  /**
   * Search result item label.
   */
  label: string;

  /**
   * Search result item key.
   */
  key: string;
}
