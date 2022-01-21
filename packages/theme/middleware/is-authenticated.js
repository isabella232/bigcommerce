import {
  STORAGE_KEY_IS_LOGGED_IN,
  COOKIE_KEY_CUSTOMER_DATA
} from '@vue-storefront/bigcommerce-api/';

export default async ({ redirect, $cookies }) => {
  const isLoggedIn =
    typeof window === 'undefined'
      ? Boolean($cookies.get(COOKIE_KEY_CUSTOMER_DATA))
      : Boolean(sessionStorage.getItem(STORAGE_KEY_IS_LOGGED_IN));
  if (!isLoggedIn) {
    return redirect('/');
  }

  return true;
};
