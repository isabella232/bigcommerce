module.exports = {
  integrations: {
    bigcommerce: {
      location: '@vue-storefront/bigcommerce-api/server',
      configuration: {
        sdkSettings: {
          logLevel: 'info',
          clientId: process.env.BIGCOMMERCE_API_CLIENT_ID,
          secret: process.env.BIGCOMMERCE_API_CLIENT_SECRET,
          devtoolsAppClientId: process.env.BIGCOMMERCE_DEVTOOLS_APP_CLIENT_ID,
          devtoolsAppSecret: process.env.BIGCOMMERCE_DEVTOOLS_APP_CLIENT_SECRET,
          callback: process.env.BIGCOMMERCE_API_URL,
          storeHash: process.env.BIGCOMMERCE_STORE_ID,
          storeUrl: process.env.BIGCOMMERCE_STORE_URL,
          accessToken: process.env.BIGCOMMERCE_API_ACCESS_TOKEN,
          guestToken: process.env.BIGCOMMERCE_STORE_GUEST_TOKEN,
          responseType: 'json',
          headers: { 'Accept-Encoding': '*' },
          apiVersion: 'v3'
        },
        jwtTokenExpirationDays: 2,
        secureCookies: process.env.NODE_ENV === 'production'
      }
    }
  }
};
