import queryString from 'query-string';
import { BigcommerceIntegrationContext, CartResponse } from '../../types';

export function prepareEmbeddedCheckoutUrlOnResponse(
  context: BigcommerceIntegrationContext,
  response: CartResponse
): void {
  const {
    config: {
      sdkSettings: { guestToken }
    }
  } = context;
  let embeddedCheckoutUrl =
    response?.data?.redirect_urls?.embedded_checkout_url;

  if (embeddedCheckoutUrl) {
    embeddedCheckoutUrl = queryString.stringifyUrl({
      url: embeddedCheckoutUrl,
      query: {
        ...(guestToken ? { guestTkn: guestToken } : {})
      }
    });

    response.data.redirect_urls.embedded_checkout_url = embeddedCheckoutUrl;
  }
}
