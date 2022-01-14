import { STORAGE_KEY_IS_LOGGED_IN } from '@vue-storefront/bigcommerce-api/';

export default async ({ redirect }) => {
  const isLoggedIn = typeof window !== 'undefined' ? sessionStorage.getItem(STORAGE_KEY_IS_LOGGED_IN) : false;
  if (!isLoggedIn) {
    return redirect('/');
  }

  return true;
};
