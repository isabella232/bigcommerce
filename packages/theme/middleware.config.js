module.exports = {
  integrations: {
    bigcommerce: {
      location: '@vue-storefront/bigcommerce-api/server',
      configuration: {
        sdkSettings: {
          logLevel: 'info',
          clientId: process.env.BIGCOMMERCE_API_CLIENT_ID,
          secret: process.env.BIGCOMMERCE_API_CLIENT_SECRET,
          callback: process.env.BIGCOMMERCE_API_URL,
          responseType: 'json',
          headers: { 'Accept-Encoding': '*' },
          apiVersion: 'v3'
        }
      }
    }
  }
};
