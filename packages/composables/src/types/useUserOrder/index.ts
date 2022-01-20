import type { Order } from '@vue-storefront/bigcommerce-api';

export type OrderResults = {
  results: Order[];
  total: number;
};
