import { BigcommerceIntegrationContext } from '../../../types';
import { getCustomerId } from '../../customers/get';
import { generateSsoLoginLink } from '../../customers/login';

export function getEmbeddedCheckoutUrl(
  context: BigcommerceIntegrationContext,
  params: {
    defaultEmbeddedCheckoutUrl: string;
  }
): string {
  try {
    const customerId = getCustomerId(context);
    if (customerId) {
      return generateSsoLoginLink(
        context,
        customerId,
        params.defaultEmbeddedCheckoutUrl
      );
    }

    return params.defaultEmbeddedCheckoutUrl;
  } catch (error) {
    return params.defaultEmbeddedCheckoutUrl;
  }
}
