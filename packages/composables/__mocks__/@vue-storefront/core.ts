import vsfCore from '@vue-storefront/core';

const vsfCoreMock = jest.createMockFromModule<typeof vsfCore>(
  '@vue-storefront/core'
);

vsfCoreMock.useProductFactory = (params) => () => params as any;

module.exports = vsfCoreMock;
