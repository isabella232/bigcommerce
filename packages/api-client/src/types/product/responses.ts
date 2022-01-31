import { MetaCollection, Product } from '../..';

/**
 * Product collection response.
 */
export interface ProductsResponse {
  /**
   * Collection of products.
   */
  data: Product[];
  /**
   * Data about the response, including pagination and collection totals.
   */
  meta: MetaCollection;
}
