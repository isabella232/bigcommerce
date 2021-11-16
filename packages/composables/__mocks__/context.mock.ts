import { Context, BigcommerceIntegrationContext } from '../src/types';

export const contextMock = {
  $bigcommerce: {
    api: {} as any
  } as BigcommerceIntegrationContext
} as Context;
