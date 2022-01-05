export * from './parameters';
export * from './responses';

/**
 * Format of address in the BigCommerce API responses.
 * See at {@link UpdateCustomerResponse}
 */
export type UserAddress = {
  first_name: string;
  last_name: string;
  company: string;
  address1: string;
  address2?: string;
  city: string;
  state_or_province: string;
  postal_code: string;
  country_code: string;
  phone: string;
  address_type?: string;
  customer_id: number;
  id: number;
  country: string;
  form_fields?: Array<
    | {
        name: string;
        value: number | string | string[];
        customer_id: number;
      }
    | {
        name: string;
        value: number | string | string[];
        address_id: number;
      }
  >;
};
