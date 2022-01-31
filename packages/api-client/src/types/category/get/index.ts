import { Category, MetaCollection } from '../..';
/**
 * Category collection response.
 */
export interface CategoryResponse {
  /**
   * Collection of categories.
   */
  data: Category[];
  /**
   * Meta collection
   */
  meta: MetaCollection;
}

/**
 * Necessary parameters to get categories.
 */
export interface CategoryParameters {
  /**
   * Unique ID of the category.
   */
  categoryId?: number;
}
