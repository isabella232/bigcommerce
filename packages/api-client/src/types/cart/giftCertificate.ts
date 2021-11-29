import { ContactEntity } from './contactEntity';

export type GiftCertificate = {
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
  is_taxable?: boolean;
  sender: ContactEntity;
  recipient: ContactEntity;
  /**
   * Message shown to recipient, as provided by sender.
   */
  message?: string;
};
