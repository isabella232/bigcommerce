import queryString from 'query-string';
import { getEmbeddedCheckoutUrl } from '../../api/cart/getEmbeddedCheckoutUrl';
import { BigcommerceIntegrationContext, CartResponse } from '../../types';

export async function prepareEmbeddedCheckoutUrlOnResponse(
  context: BigcommerceIntegrationContext,
  response: CartResponse
): Promise<void> {
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

    response.data.redirect_urls.embedded_checkout_url = await getEmbeddedCheckoutUrl(context, {
      defaultEmbeddedCheckoutUrl: embeddedCheckoutUrl
    });
  }
}
