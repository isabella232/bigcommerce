import type { User } from '@vue-storefront/bigcommerce-api';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useUserData = () => {

  const getFirstName = (user: User): string => {
    return user?.first_name;
  };

  const getLastName = (user: User): string => {
    return user?.last_name;
  };

  const getFullName = (user: User): string => {
    return user?.first_name && user?.last_name ? `${user.first_name} ${user.last_name}` : '';
  };

  const getEmailAddress = (user: User): string => {
    return user?.email;
  };

  return {
    getFirstName,
    getLastName,
    getFullName,
    getEmailAddress
  };
};
