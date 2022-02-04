import { ContactEntity } from './contactEntity';

/**
 * Gift certificate model.
 */
export interface GiftCertificate {
  /**
   * ID of the gift certificate
   */
  id?: string;
  /**
   * GiftCertificate-provided name that will appear in the control panel.
   */
  name?: string;
  /**
   * Currently supports `Birthday`, `Boy`, `Celebration`, `Christmas`, `General`, and `Girl`.
   */
  theme: string;
  /**
   * Value must be between 1.00 and 1,000.00 in the store's default currency.
   */
  amount: number;
  /**
   * Information if gift certificate is taxable.
   */
  is_taxable?: boolean;
  /**
   * Gift sender.
   */
  sender: ContactEntity;
  /**
   * Gift recipent.
   */
  recipient: ContactEntity;
  /**
   * Message shown to recipient, as provided by sender.
   */
  message?: string;
}
