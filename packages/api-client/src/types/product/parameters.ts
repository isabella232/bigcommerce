/**
 * 	Possible values of sort parameter for product endpoints.
 */
export enum ProductsSortEnum {
  /**
   * Product ID.
   */
  Id = 'id',
  /**
   * Product name.
   */
  Name = 'name',
  /**
   * Product sku.
   */
  Sku = 'sku',
  /**
   * Product price.
   */
  Price = 'price',
  /**
   * Product date modified.
   */
  DateModified = 'date_modified',
  /**
   * Product date last imported.
   */
  DateLastImported = 'date_last_imported',
  /**
   * Product inventory level.
   */
  InventoryLevel = 'inventory_level',
  /**
   * Product is visible.
   */
  IsVisible = 'is_visible',
  /**
   * Product total sold.
   */
  TotalSold = 'total_sold'
}

/**
 * Definition of products request parameters.
 */
export interface GetProductsParameters {
  /**
   * Filter items by id.
   */
  id?: number;
  /**
   * Filter items by list of ids.
   */
  'id:in'?: number[];
  /**
   * Filter items by list of excluded ids.
   */
  'id:not_in'?: number[];
  /**
   * Filter items by list of min ids.
   */
  'id:min'?: number[];
  /**
   * Filter items by list of max ids.
   */
  'id:max'?: number[];
  /**
   * Filter items by list of ids greater then passed to filter.
   */
  'id:greater'?: number[];
  /**
   * Filter items by list of ids less then passed to filter.
   */
  'id:less'?: number[];
  /**
   * Filter items by name.
   */
  name?: string;
  /**
   * Filter items by upc.
   */
  upc?: string;
  /**
   * Filter items by price.
   */
  price?: number;
  /**
   * Filter items by weight.
   */
  weight?: number;
  /**
   * Filter items by condition.
   */
  condition?: 'new' | 'used' | 'refurbished';
  /**
   * Filter items by brand_id.
   */
  brand_id?: number;
  /**
   * Filter items by date_modified.
   */
  date_modified?: string;
  /**
   * Filter items by date_modified.
   * For example, `date_modified:max=2020-06-15`.
   */
  'date_modified:max'?: string;
  /**
   * Filter items by date_modified.
   * For example, `date_modified:min=2018-06-15`.
   */
  'date_modified:min'?: string;
  /**
   * Filter items by date_last_imported.
   */
  date_last_imported?: string;
  /**
   * Filter items by date_last_imported.
   * For example, date_last_imported:max=2018-06-15.
   */
  'date_last_imported:max'?: string;
  /**
   * Filter items by date_last_imported.
   * For example, `date_last_imported:min=2020-06-15`.
   */
  'date_last_imported:min'?: string;
  /**
   * Filter items based on whether the product is currently visible on the storefront.
   */
  is_visible?: boolean;
  /**
   * Filter items by is_featured. 1 for true, 0 for false.
   */
  is_featured?: 0 | 1;
  /**
   * Filter items by is_free_shipping. 1 for true, 0 for false.
   */
  is_free_shipping?: 0 | 1;
  /**
   * Filter items by inventory_level.
   */
  inventory_level?: number;
  /**
   * Filter items by inventory_level.
   */
  'inventory_level:in'?: number;
  /**
   * Filter items by inventory_level.
   */
  'intentory_level:not_in'?: number;
  /**
   * Filter items by min inventory_level.
   */
  'inventory_level:min'?: number;
  /**
   * Filter items by max inventory_level.
   */
  'inventory_level:max'?: number;
  /**
   * Filter items by inventory_level greater than passed to param.
   */
  'inventory_level:greater'?: number;
  /**
   * Filter items by inventory_level less than passed to param.
   */
  'inventory_level:less'?: number;
  /**
   * Filter items by inventory_low. Values: 1, 0.
   */
  inventory_low?: 0 | 1;
  /**
   * Filter items by out_of_stock. To enable the filter, pass out_of_stock=1.
   */
  out_of_stock?: 1;
  /**
   * Filter items by total_sold.
   */
  total_sold?: number;
  /**
   * Filter items by type.
   */
  type?: 'digital' | 'physical';
  /**
   * Filter items by categories.
   * If a product is in more than one category, using this query will not return the product.
   * Instead use categories:in=12.
   */
  categories?: number;
  /**
   * Filter items by categories.
   * Use for products in multiple categories.
   * For example, categories:in=12.
   */
  'categories:in'?: number;
  /**
   * Filter items by keywords found in the name, description, or sku fields, or in the brand name.
   */
  keyword?: string;
  /**
   * Set context used by the search algorithm to return results targeted towards the specified group.
   * Use merchant to help merchants search their own catalog.
   * Use shopper to return shopper-facing search results.
   */
  keyword_context?: 'shopper' | 'merchant';
  /**
   * Filter items by status.
   */
  status?: number;
  /**
   * Sub-resources to include on a product, in a comma-separated list.
   * If options or modifiers is used, results are limited to 10 per page.
   */
  include?: string;
  /**
   * Fields to include, in a comma-separated list.
   * The ID and the specified fields will be returned.
   */
  include_fields?: string;
  /**
   * Fields to exclude, in a comma-separated list.
   * The specified fields will be excluded from a response. The ID cannot be excluded.
   */
  exclude_fields?: string;
  /**
   * Filter items by availability. Values are: available, disabled, preorder.
   */
  availability?: 'available' | 'disabled' | 'preorder';
  /**
   * Specifies the page number in a limited (paginated) list of products.
   */
  page?: number;
  /**
   * Controls the number of items per page in a limited (paginated) list of products.
   */
  limit?: number;
  /**
   * Sort direction. Acceptable values are: asc, desc.
   */
  direction?: 'asc' | 'desc';
  /**
   * Field name to sort by.
   * Note: Since id increments when new products are added, you can use that field to sort by product create date.
   */
  sort?: ProductsSortEnum;
  /**
   * Filter items by main SKU. To filter by variant SKU, see [Get All Variants](https://developer.bigcommerce.com/api-reference/store-management/catalog/variants/getvariants).
   */
  sku?: string;
  /**
   * Filter items by SKU.
   */
  'sku:in'?: string[];
}
