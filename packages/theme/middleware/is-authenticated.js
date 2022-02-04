import {
  BIGCOMMERCE_USER_AUTHENTICATED
} from '@vue-storefront/bigcommerce';

export default async ({ redirect, $cookies }) => {
  const isLoggedIn = Boolean($cookies.get(BIGCOMMERCE_USER_AUTHENTICATED));
  if (!isLoggedIn) {
    return redirect('/');
  }

  return true;
};
