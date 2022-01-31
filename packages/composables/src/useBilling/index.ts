import {
  Context,
  useBillingFactory,
  UseBillingParams
} from '@vue-storefront/core';
import type {
  UseBillingAddParams as AddParams
} from '../types';

const params: UseBillingParams<any, AddParams> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context, { customQuery }) => {
    console.log('Mocked: useBilling.load');
    return {};
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  save: async (context: Context, { params, billingDetails, customQuery }) => {
    console.log('Mocked: useBilling.save');
    return {};
  }
};

export const useBilling = useBillingFactory<any, AddParams>(params);
