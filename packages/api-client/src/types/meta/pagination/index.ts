import { PaginationLinks } from './links';

/**
 * Pagination model including all necessary information for pagination.
 * @export
 * @interface Pagination
 */
export interface Pagination {

    /**
     * Total number of items in the result set.
     * @type {number}
     * @memberof Pagination
     */
    total?: number;

    /**
     * Total number of items in the collection response.
     * @type {number}
     * @memberof Pagination
     */
    count?: number;

    /**
     * The amount of items returned in the collection per page, controlled by the limit parameter.
     * @type {number}
     * @memberof Pagination
     */
    'per_page'?: number;

    /**
     * The page you are currently on within the collection.
     * @type {number}
     * @memberof Pagination
     */
    'current_page'?: number;

    /**
     * The total number of pages in the collection.
     * @type {number}
     * @memberof Pagination
     */
    'total_pages'?: number;

    /**
     * Pagination links for the previous and next parts of the whole collection.
     * @type {PaginationLinks}
     * @memberof PaginationFull
     */
    links?: PaginationLinks;
}

export * from './links';
