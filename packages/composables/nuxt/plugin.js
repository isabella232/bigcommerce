import { integrationPlugin } from '@vue-storefront/core';

const moduleOptions = <%= serialize(options) %>;

export default integrationPlugin(({ app, integration }) => {
  integration.configure('bigcommerce', {
    ...moduleOptions,
    app
    // other options
  });
});
