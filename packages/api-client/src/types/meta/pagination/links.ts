/**
 * Pagination links for the previous and next parts of the whole collection.
 * @export
 * @interface PaginationLinks
 */
export interface PaginationLinks {

    /**
     * Link to the previous page returned in the response.
     * @type {string}
     * @memberof PaginationLinks
     */
    previous?: string;

    /**
     * Link to the current page returned in the response.
     * @type {string}
     * @memberof PaginationLinks
     */
    current?: string;

    /**
     * Link to the next page returned in the response.
     * @type {string}
     * @memberof PaginationLinks
     */
    next?: string;
}
