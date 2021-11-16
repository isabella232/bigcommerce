/**
 * Definition of products request parameters
 */
export type GetProductsParameters = {
  id?: number;
  'id:in'?: number[];
  'id:not_in'?: number[];
  'id:min'?: number[];
  'id:max'?: number[];
  'id:greater'?: number[];
  'id:less'?: number[];
  name?: string;
  upc?: string;
  price?: number;
  weight?: number;
  condition?: 'new' | 'used' | 'refurbished';
  brand_id?: number;
  date_modified?: string;
  'date_modified:max'?: string;
  'date_modified:min'?: string;
  date_last_imported?: string;
  'date_last_imported:max'?: string;
  'date_last_imported:min'?: string;
  is_visible?: boolean;
  is_featured?: 0 | 1;
  is_free_shipping?: 0 | 1;
  inventory_level?: number;
  'inventory_level:in'?: number;
  'intentory_level:not_in'?: number;
  'inventory_level:min'?: number;
  'inventory_level:max'?: number;
  'inventory_level:greater'?: number;
  'inventory_level:less'?: number;
  inventory_low?: 0 | 1;
  out_of_stock?: 1;
  total_sold?: number;
  type?: 'digital' | 'physical';
  categories?: number;
  'categories:in'?: number;
  keyword?: string;
  keyword_context?: 'shopper' | 'merchant';
  status?: number;
  include?: string;
  include_fields?: string;
  exclude_fields?: string;
  availability?: 'available' | 'disabled' | 'preorder';
  page?: number;
  limit?: number;
  direction?: 'asc' | 'desc';
  sort?:
    | 'id'
    | 'name'
    | 'sku'
    | 'price'
    | 'date_modified'
    | 'date_last_imported'
    | 'inventory_level'
    | 'is_visible'
    | 'total_sold';
  sku?: string;
  'sku:in'?: string[];
};
