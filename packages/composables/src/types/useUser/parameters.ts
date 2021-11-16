import { TODO } from '../..';

/**
 * Format of parameters to use when calling `register` method of `useUser` composable.
 */
export type UseUserRegisterParams = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  acceptsMarketingEmails: boolean;
  customFields: Array<{
    fieldId: string;
    fieldValue: string;
  }>;
};

export type UseUserUpdateParams = TODO;
