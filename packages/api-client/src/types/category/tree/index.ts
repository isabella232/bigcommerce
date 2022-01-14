export * from './get';

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
