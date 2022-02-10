/**
 * Base fields for form fields model.
 */
export interface BaseFormField {
  /**
   * Form field name.
   */
  name: string;

  /**
   * Form field value.
   */
  value: number | string | string[];
}

/**
 * Form field containing customer id.
 */
export interface CustomerIdFormField extends BaseFormField {
  /**
   * Form field customer id.
   */
  customer_id: number;
}

/**
 * Form field containing address id.
 */
export interface AdressIdFormField extends BaseFormField {
  address_id: number;
}

/**
 * Form field model.
 */
export type FormField = CustomerIdFormField | AdressIdFormField;

