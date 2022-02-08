<template>
  <div class="sf-header__navigation desktop" v-if="!isMobile">
    <SfHeaderNavigationItem
      v-for="(category, key) in categories"
      :key="key"
      class="nav-item"
      v-e2e="`app-header-url_${category.slug}`"
      :label="category.label"
      :link="localePath(`/c${category.slug}`)"
    />
  </div>
  <SfModal v-else :visible="isMobileMenuOpen">
    <SfHeaderNavigationItem
      v-for="(category, key) in categories"
      :key="key"
      class="nav-item"
      v-e2e="`app-header-url_${category.slug}`"
    >
      <template #desktop-navigation-item>
        <SfMenuItem
          :label="category.label"
          class="sf-header-navigation-item__menu-item"
          @click="navigate(`/c${category.slug}`)"
        />
      </template>

      <template #mobile-navigation-item>
        <SfMenuItem
          :label="category.label"
          class="sf-header-navigation-item__menu-item"
          @click="navigate(`/c${category.slug}`)"
        />
      </template>
    </SfHeaderNavigationItem>
  </SfModal>
</template>

<script lang="ts">
import { defineComponent, PropType, useRouter } from '@nuxtjs/composition-api';
import { SearchResultNavigationItem } from '@vue-storefront/bigcommerce';
import { SfMenuItem, SfModal } from '@storefront-ui/vue';
import useUiState from '../composables/useUiState';

export default defineComponent({
  name: 'HeaderNavigation',
  components: {
    SfMenuItem,
    SfModal
  },
  props: {
    isMobile: {
      type: Boolean,
      default: false
    },
    categories: {
      type: Array as PropType<Array<SearchResultNavigationItem>>,
      default: () => []
    }
  },
  setup() {
    const router = useRouter();
    const { isMobileMenuOpen, toggleMobileMenu } = useUiState();

    const navigate = (path) => {
      toggleMobileMenu();
      router.push(path);
    };

    return {
      isMobileMenuOpen,
      toggleMobileMenu,
      navigate
    };
  }
});
</script>

<style lang="scss" scoped>
.sf-header-navigation-item {
  ::v-deep &__item--mobile {
    display: block;
  }
}
.sf-modal {
  ::v-deep &__bar {
    display: none;
  }
  ::v-deep &__content {
    padding: var(--modal-content-padding, var(--spacer-base) 0);
  }
}
</style>
