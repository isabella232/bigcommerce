export * from './get';

/**
 * Category tree model.
 */
export interface CategoryTree {
  /**
   * Unique ID of the category.
   */
  id: number;
  /**
   * The unique numeric ID of the category's parent. This field controls where the category sits in the tree of categories that organize the catalog.
   * Required in a POST if creating a child category.
   */
  parent_id: number;
  /**
   * The name displayed for the category.
   * Name is unique with respect to the category’s siblings.
   */
  name: string;
  /**
   * Flag to determine whether the product should be displayed to customers browsing the store.
   * If true, the category will be displayed.
   * If false, the category will be hidden from view.
   */
  is_visible?: boolean;
  /**
   * The custom URL for the category on the storefront.
   */
  url?: string;
  /**
   * The list of children of the category.
   */
  children?: CategoryTree[];
}
