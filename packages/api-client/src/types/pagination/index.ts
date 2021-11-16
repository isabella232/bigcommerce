export type Pagination = {
  /**
   * Total number of items in the result set.
   */
  total?: number;
  /**
   * Total number of items in the collection response.
   */
  count?: number;
  /**
   * The amount of items returned in the collection per page, controlled by the limit parameter.
   */
  perPage?: number;
  /**
   * The page you are currently on within the collection.
   */
  currentPage?: number;
  /**
   * The total number of pages in the collection.
   */
  totalPages?: number;
  /**
   *
   */
  links?: {
    /**
     * Link to the previous page returned in the response.
     */
    previous?: string;
    /**
     * Link to the current page returned in the response.
     */
    current?: string;
    /**
     * Link to the next page returned in the response.
     */
    next?: string;
  };
};
