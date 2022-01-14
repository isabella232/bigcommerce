import { Pagination } from './pagination';

/**
 * Data about the response, including pagination and collection totals.Pagination links for the previous and next parts of the whole collection.
 * @export
 * @interface MetaCollection
 */
export interface MetaCollection {
  /**
   * Pagination model including all necessary information for pagination.
   * @type {Pagination}
   * @memberof MetaCollection
   */
  pagination?: Pagination;
}

export * from './pagination';
