<template>
  <div v-click-outside="closeSearch">
    <SfHeader
      class="sf-header--has-mobile-search"
      :class="{ 'header-on-top': isSearchOpen }"
      :isNavVisible="isMobileMenuOpen"
    >
      <!-- TODO: add mobile view buttons after SFUI team PR -->
      <template #logo>
        <nuxt-link :to="localePath({ name: 'home' })" class="sf-header__logo">
          <SfImage
            src="/icons/logo.svg"
            alt="Vue Storefront Next"
            class="sf-header__logo-image"
            :width="34"
            :height="34"
            @click="closeSearch"
          />
        </nuxt-link>
      </template>
      <template #navigation>
        <div @click="closeSearch">
          <HeaderNavigation :categories="navigation" :isMobile="isMobile" />
        </div>
      </template>
      <template #aside>
        <div @click="closeSearch">
          <LocaleSelector class="smartphone-only" />
        </div>
      </template>
      <template #header-icons>
        <div
          v-e2e="'header-icons'"
          class="sf-header__icons"
          @click="closeSearch"
        >
          <SfButton
            class="sf-button--pure sf-header__action"
            aria-label="Open account button"
            @click="handleAccountClick"
          >
            <SfIcon
              class="sf-header__icon"
              :icon="accountIcon"
              size="1.25rem"
            />
          </SfButton>
          <SfButton
            v-if="!isCheckoutPage"
            class="sf-button--pure sf-header__action"
            aria-label="Toggle wishlist sidebar"
            @click="toggleWishlistSidebar"
          >
            <SfIcon
              class="sf-header__icon"
              :icon="wishlistTotalItems ? 'heart_fill' : 'heart'"
              size="1.25rem"
            />
            <SfBadge v-if="wishlistTotalItems" class="sf-badge--number badge">
              {{ wishlistTotalItems }}
            </SfBadge>
          </SfButton>
          <SfButton
            v-if="!isCheckoutPage"
            class="sf-button--pure sf-header__action"
            aria-label="Toggle cart sidebar"
            @click="toggleCartSidebar"
          >
            <SfIcon class="sf-header__icon" icon="empty_cart" size="1.25rem" />
            <SfBadge
              :style="{ display: cartTotalItems ? 'block' : 'none' }"
              class="sf-badge--number badge"
              >{{ cartTotalItems }}</SfBadge
            >
          </SfButton>
        </div>
      </template>
      <template #search>
        <SfSearchBar
          ref="searchBarRef"
          :placeholder="$t('Search for items')"
          aria-label="Search"
          class="sf-header__search"
          :class="{ 'search-hidden': isCheckoutPage }"
          :value="term"
          @input="handleSearch"
          @keydown.enter="handleSearch($event)"
          @focus="isSearchOpen = true"
          @keydown.esc="closeSearch"
          :icon="searchBarIcon"
          @click:icon="onSearchBarIconClick"
        />
      </template>
    </SfHeader>
    <SearchResults
      v-if="!isCheckoutPage"
      :visible="isSearchOpen"
      :result="result"
      :loading="loading"
      :search-input="term"
      @close="closeSearch"
    />
    <SfOverlay :visible="isSearchOpen" @click="closeSearch" />
  </div>
</template>

<script>
import {
  SfHeader,
  SfImage,
  SfIcon,
  SfButton,
  SfBadge,
  SfSearchBar,
  SfOverlay
} from '@storefront-ui/vue';
import { useUiState } from '~/composables';
import { useCart, useUser, useWishlist } from '@vue-storefront/bigcommerce';
import { useProduct } from '@vue-storefront/bigcommerce';
import {
  computed,
  defineComponent,
  ref,
  onBeforeUnmount,
  watch,
  useRoute,
  useRouter,
  useContext
} from '@nuxtjs/composition-api';
import { useUiHelpers } from '~/composables';
import LocaleSelector from './LocaleSelector';
import SearchResults from '~/components/SearchResults';
import HeaderNavigation from './HeaderNavigation';
import { clickOutside } from '@storefront-ui/vue/src/utilities/directives/click-outside/click-outside-directive.js';
import {
  mapMobileObserver,
  unMapMobileObserver
} from '@storefront-ui/vue/src/utilities/mobile-observer.js';
import { useCategory } from '@vue-storefront/bigcommerce';
import { onSSR } from '@vue-storefront/core';
import { buildCategoryNavigation } from '../composables/useCategoryData/buildCategoryNavigation';
import { buildSearchCategories } from '../composables/useCategoryData/buildSearchCategories';
import debounce from 'lodash.debounce';
import { useCartData } from '../composables/useCartData';
import { useWishlistData } from '../composables/useWishlistData';

export default defineComponent({
  components: {
    SfHeader,
    SfImage,
    LocaleSelector,
    SfIcon,
    SfButton,
    SfBadge,
    SfSearchBar,
    SearchResults,
    SfOverlay,
    HeaderNavigation
  },
  directives: { clickOutside },
  setup() {
    const { localePath } = useContext();
    const { products, search, loading } = useProduct('search-products');
    const router = useRouter();
    const route = useRoute();
    const routeName = computed(() => route.value.name);
    const {
      toggleCartSidebar,
      toggleWishlistSidebar,
      toggleLoginModal,
      isMobileMenuOpen
    } = useUiState();
    const { getFacetsFromURL } = useUiHelpers();
    const { isAuthenticated } = useUser();
    const { cart } = useCart();
    const { wishlist } = useWishlist();
    const wishlistHelpers = useWishlistData();
    const { getTotalItems } = useCartData();
    const term = ref(getFacetsFromURL().phrase);
    const isSearchOpen = ref(false);
    const searchBarRef = ref(null);
    const result = ref({});
    const isMobile = ref(mapMobileObserver().isMobile.get());
    const { categories: categoryResults, search: categorySearch } =
      useCategory('category-tree');
    const navigation = computed(() =>
      buildCategoryNavigation(categoryResults.value)
    );
    const isCheckoutPage = computed(() => {
      return Boolean(routeName.value) && routeName.value.includes('checkout');
    });
    const wishlistTotalItems = computed(() =>
      wishlistHelpers.getTotalItems(wishlist.value)
    );

    onSSR(async () => {
      await categorySearch();
    });

    const cartTotalItems = computed(() => {
      const count = getTotalItems(cart.value);
      return count ? count.toString() : null;
    });

    const accountIcon = computed(() =>
      isAuthenticated.value ? 'profile_fill' : 'profile'
    );

    // TODO: https://github.com/vuestorefront/vue-storefront/issues/4927
    const handleAccountClick = async () => {
      if (isAuthenticated.value) {
        const localeAccountPath = localePath({ name: 'my-account' });
        return router.push(localeAccountPath);
      }

      toggleLoginModal();
    };

    const closeSearch = () => {
      if (!isSearchOpen.value) return;
      term.value = '';
      isSearchOpen.value = false;
    };

    const handleSearch = debounce(async (paramValue) => {
      if (!paramValue.target) {
        term.value = paramValue;
      } else {
        term.value = paramValue.target.value;
      }

      await search({
        'keyword:like:': term.value,
        include: 'options,variants'
      });
      const categories = buildSearchCategories(
        products.value.data,
        categoryResults.value
      );
      result.value = { products: products.value.data, categories };
    }, 1000);

    const closeOrFocusSearchBar = () => {
      if (isMobile.value) {
        return closeSearch();
      } else {
        term.value = '';
        return searchBarRef.value.$el.children[0].focus();
      }
    };

    const searchBarIcon = computed(() =>
      term.value
        ? { icon: 'cross', color: 'var(--c-text)', size: '18px' }
        : { icon: 'search', color: 'var(--c-text)', size: '20px' }
    );

    const onSearchBarIconClick = computed(() =>
      term.value
        ? closeOrFocusSearchBar
        : () => {
          isSearchOpen.value
            ? (isSearchOpen.value = false)
            : (isSearchOpen.value = true);
        }
    );

    watch(
      () => term.value,
      (newVal, oldVal) => {
        const shouldSearchBeOpened =
          !isMobile.value &&
          term.value.length > 0 &&
          ((!oldVal && newVal) ||
            (newVal.length !== oldVal.length && isSearchOpen.value === false));
        if (shouldSearchBeOpened) {
          isSearchOpen.value = true;
        }
      }
    );

    onBeforeUnmount(() => {
      unMapMobileObserver();
    });

    return {
      accountIcon,
      cartTotalItems,
      handleAccountClick,
      toggleCartSidebar,
      toggleWishlistSidebar,
      term,
      isSearchOpen,
      isCheckoutPage,
      closeSearch,
      handleSearch,
      loading,
      result,
      closeOrFocusSearchBar,
      searchBarRef,
      isMobile,
      isMobileMenuOpen,
      products,
      navigation,
      wishlistTotalItems,
      searchBarIcon,
      onSearchBarIconClick
    };
  }
});
</script>

<style lang="scss" scoped>
.sf-header {
  --header-padding: var(--spacer-sm);
  @include for-desktop {
    --header-padding: 0;
  }
  &__logo-image {
    height: 100%;
  }
}
.header-on-top {
  z-index: 2;
}
.nav-item {
  --header-navigation-item-margin: 0 var(--spacer-base);
  .sf-header-navigation-item__item--mobile {
    display: none;
  }
}

.badge {
  position: absolute;
  bottom: 40%;
  left: 40%;
}

.search-hidden {
  display: none;
}

.sf-search-bar {
  flex-grow: 0;
}
</style>
