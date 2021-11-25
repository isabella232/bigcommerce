import { Ref, computed } from '@vue/composition-api';
import { sharedRef, UseReviewErrors } from '@vue-storefront/core';
import { GuestWishlist } from '../types';

/**
 *  Returns guest wishlist data and actions.
 *
 *  @remarks
 *  The `useGuestWishlist` composable has build in actions for loading, adding and removing items and veryfing if item is in the guest wishlist:
 *  - `{ load }` - Function for loading the guest wishlist.
 *  - `{ addItem }` - Function for adding product to the guest wishlist.
 *  - `{ removeItem }` - Function for removing product from the guest wishlist.
 *  - `{ clear }` - Function for removing all products from the guest wishlist.
 *  - `{ isInWishlist }` - Function for veryfing if product is in the guest wishlist.
 *
 *  @example
 *  Example of usage:
 *  ```vue
 *  <script>
 *  import { useGuestWishlist } from '@vue-storefront/bigcommerce';
 *
 *  setup (props) {
 *    const {
 *      wishlist,
 *      loading,
 *      error,
 *      load
 *    } = useGuestWishlist('wishlist');
 *
 *    onBeforeMount(() => {
 *      load()
 *    });
 *
 *    return {
 *      wishlist,
 *      loading
 *    }
 *  }
 *  </script>
 *  ```
 */
const useGuestWishlist = (id: string): any => {
  const wishlist: Ref<GuestWishlist> = sharedRef([], `useGuestWishlist-guestWishlist-${id}`);
  const loading: Ref<boolean> = sharedRef(false, `useGuestWishlist-loading-${id}`);
  const error: Ref<UseReviewErrors> = sharedRef({
    load: null,
    addItem: null,
    removeItem: null,
    clear: null,
    isInWishlist: null
  }, `useGuestWishlist-error-${id}`);

  const load = () => {

  };

  const addItem = () => {

  };

  const removeItem = () => {

  };

  const clear = () => {

  };

  const isInWishlist = () => {

  };

  return {
    wishlist: computed(() => wishlist.value),
    loading: computed(() => loading.value),
    error: computed(() => error.value),
    load,
    addItem,
    removeItem,
    clear,
    isInWishlist
  };
};

export default useGuestWishlist;
