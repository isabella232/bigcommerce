import { STORAGE_KEY_IS_LOGGED_IN } from '@vue-storefront/bigcommerce-api/';

export default async ({ redirect }) => {
  const isLoggedIn = sessionStorage.getItem(STORAGE_KEY_IS_LOGGED_IN);
  if (!isLoggedIn) {
    return redirect('/');
  }

  return true;
};
