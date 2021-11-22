import { Category } from '..';
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
