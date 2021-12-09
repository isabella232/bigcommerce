import { COOKIE_KEY_CUSTOMER_DATA } from '@vue-storefront/bigcommerce-api/';

export default async ({redirect, $cookies}) => {
  const customerData = $cookies.get(COOKIE_KEY_CUSTOMER_DATA);
  if (!customerData) {
    return redirect('/');
  }

  return true;
};
