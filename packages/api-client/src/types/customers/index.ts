export * from './parameters';
export * from './responses';

/**
 * Possible values of include parameter for customer endpoints.
 */
export enum CustomersIncludeEnum {
  /**
   * Include addresses.
   */
  Addresses = 'addresses',
  /**
   * Include store credit.
   */
  Storecredit = 'storecredit',
  /**
   * Include attributes.
   */
  Attributes = 'attributes',
  /**
   * Include form fields.
   */
  Formfields = 'formfields'
}

/**
 * Possible values of sort parameter for customer endpoints.
 */
export enum CustomersSortEnum {
  /**
   * Include dete created sorted asc.
   */
  DateCreatedasc = 'date_created:asc',
  /**
   * Include dete created sorted desc.
   */
  DateCreateddesc = 'date_created:desc',
  /**
   * Include last name sorted asc.
   */
  LastNameasc = 'last_name:asc',
  /**
   * Include last name sorted asc.
   */
  LastNamedesc = 'last_name:desc',
  /**
   * Include dete modified sorted asc.
   */
  DateModifiedasc = 'date_modified:asc',
  /**
   * Include dete modified sorted asc.
   */
  DateModifieddesc = 'date_modified:desc'
}

/**
 * Customer authentication.
 */
export interface Authentication {
  /**
   * If true, this customer will be forced to change password on next login.
   */
  force_password_reset?: boolean;
  /**
   * New password for customer.
   */
  new_password?: string;
}
