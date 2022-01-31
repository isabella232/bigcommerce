import { CategoryTree, MetaCollection } from '../../..';

/**
 * Category tree collection response.
 */
export interface CategoryTreeResponse {
  /**
   * Collection of category tree.
   */
  data: CategoryTree[];
  /**
   * Meta collection.
   */
  meta: MetaCollection;
}
