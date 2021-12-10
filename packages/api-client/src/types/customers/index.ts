export * from './parameters';
export * from './responses';

/**
 * Possible values of include parameter for Customer
 */
export enum CustomersIncludeEnum {
  Addresses = 'addresses',
  Storecredit = 'storecredit',
  Attributes = 'attributes',
  Formfields = 'formfields'
}

/**
 * Possible values of sort parameter for Customer
 */
export enum CustomersSortEnum {
  DateCreatedasc = 'date_created:asc',
  DateCreateddesc = 'date_created:desc',
  LastNameasc = 'last_name:asc',
  LastNamedesc = 'last_name:desc',
  DateModifiedasc = 'date_modified:asc',
  DateModifieddesc = 'date_modified:desc'
}

/**
 * Base type for possible variants of form field value
 */
type FormFieldBase = {
  /**
   * The form field name.
   */
  name: string;
  /**
   * The value of the form field
   */
  value: string | number | string[];
};

/**
 * Definition of a form field value
 */
export type FormField =
  | (FormFieldBase & { customer_id?: number })
  | (FormFieldBase & { address_id: number });
