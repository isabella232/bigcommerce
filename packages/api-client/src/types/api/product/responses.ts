import { CollectionMeta, Product } from '../../';

/**
 * Definition of the response to the products request.
 */
export type ProductsResponse = {
  data: Product[];
  meta: CollectionMeta;
};
