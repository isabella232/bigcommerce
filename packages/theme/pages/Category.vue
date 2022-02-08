<template>
  <div id="category">
    <SfBreadcrumbs
      class="breadcrumbs desktop-only"
      :breadcrumbs="breadcrumbs"
    />
    <div class="navbar section">
      <div class="navbar__aside desktop-only">
        <LazyHydrate never>
          <SfHeading
            :level="3"
            :title="$t('Categories')"
            class="navbar__title"
          />
        </LazyHydrate>
      </div>
      <CategoryPageHeader :pagination="pagination" />
    </div>

    <div class="main section">
      <div class="sidebar desktop-only">
        <LazyHydrate when-idle>
          <SfLoader
            :class="{ 'loading--categories': isProductsLoading }"
            :loading="isProductsLoading"
          >
            <SfAccordion
              v-e2e="'categories-accordion'"
              :open="activeCategory"
              :show-chevron="true"
            >
              <SfAccordionItem
                v-for="(cat, i) in categoryTree && categoryTree.items"
                :key="i"
                :header="cat.name"
              >
                <SfList class="list">
                  <SfListItem class="list__item">
                    <SfMenuItem :label="cat.name">
                      <template #label>
                        <nuxt-link :to="localePath(th.getCatLink(cat))">
                          All
                        </nuxt-link>
                      </template>
                    </SfMenuItem>
                  </SfListItem>
                  <SfListItem
                    class="list__item"
                    v-for="(subCat, j) in cat.children"
                    :key="j"
                  >
                    <SfMenuItem :label="subCat.name">
                      <template #label="{ label }">
                        <nuxt-link :to="localePath(th.getCatLink(subCat))">
                          {{ label }}
                        </nuxt-link>
                      </template>
                    </SfMenuItem>
                  </SfListItem>
                </SfList>
              </SfAccordionItem>
            </SfAccordion>
          </SfLoader>
        </LazyHydrate>
      </div>
      <SfLoader
        :class="{ loading: isProductsLoading }"
        :loading="isProductsLoading"
      >
        <div class="products" v-if="!isProductsLoading">
          <div
            v-if="Array.isArray(products) && !products.length"
            class="no-products-message"
          >
            {{
              $t('We have no available products matching your search criteria.')
            }}
          </div>
          <transition-group
            v-if="isCategoryGridView"
            appear
            name="products__slide"
            tag="div"
            class="products__grid"
          >
            <SfProductCard
              v-e2e="'category-product-card'"
              v-for="(product, i) in products"
              :key="productData.getSlug(product)"
              :style="{ '--index': i }"
              :title="productData.getName(product)"
              :image="productData.getCoverImage(product)"
              :regular-price="
                $n(
                  productData.getPrice(
                    product,
                    getPurchasableDefaultVariant(product)
                  ).regular,
                  'currency'
                )
              "
              :special-price="
                productData.getPrice(
                  product,
                  getPurchasableDefaultVariant(product)
                ).special &&
                $n(
                  productData.getPrice(
                    product,
                    getPurchasableDefaultVariant(product)
                  ).special,
                  'currency'
                )
              "
              :max-rating="5"
              :score-rating="productData.getAverageRating(product)"
              :show-add-to-cart-button="true"
              wishlistIcon="heart"
              isInWishlistIcon="heart_fill"
              :isInWishlist="isInWishlist({ product })"
              :addToCartDisabled="!productData.canBeAddedToCart(product)"
              :isAddedToCart="isInCart({ product })"
              :link="
                localePath(
                  `/p/${productData.getId(product)}/${productData.getSlug(
                    product
                  )}`
                )
              "
              class="products__product-card"
              @click:wishlist="
                isInWishlist({ product })
                  ? removeItemFromWishlist({
                      product: wishlistHelpers.getItem(wishlist, {
                        productId: product.id,
                        variantId: getPurchasableDefaultVariant(product).id
                      })
                    })
                  : addItemToWishlist({ product })
              "
              @click:add-to-cart="addItemToCart({ product, quantity: 1 })"
              imageTag="img"
              :imageWidth="isMobile ? 150 : 216"
              :imageHeight="isMobile ? 150 : 216"
            />
          </transition-group>
          <transition-group
            v-else
            appear
            name="products__slide"
            tag="div"
            class="products__list"
          >
            <SfProductCardHorizontal
              v-e2e="'category-product-card'"
              v-for="(product, i) in products"
              :key="product.id"
              :style="{ '--index': i }"
              :title="productData.getName(product)"
              :description="product.description"
              :image="productData.getCoverImage(product)"
              :regular-price="
                $n(
                  productData.getPrice(
                    product,
                    getPurchasableDefaultVariant(product)
                  ).regular,
                  'currency'
                )
              "
              :special-price="
                productData.getPrice(
                  product,
                  getPurchasableDefaultVariant(product)
                ).special &&
                $n(
                  productData.getPrice(
                    product,
                    getPurchasableDefaultVariant(product)
                  ).special,
                  'currency'
                )
              "
              :max-rating="5"
              :score-rating="productData.getAverageRating(product)"
              :isInWishlist="isInWishlist({ product })"
              class="products__product-card-horizontal"
              @click:wishlist="
                isInWishlist({ product })
                  ? removeItemFromWishlist({
                      product: wishlistHelpers.getItem(wishlist, {
                        productId: product.id,
                        variantId: getPurchasableDefaultVariant(product).id
                      })
                    })
                  : addItemToWishlist({ product })
              "
              :link="
                localePath(
                  `/p/${productData.getId(product)}/${productData.getSlug(
                    product
                  )}`
                )
              "
              imageTag="img"
              :imageWidth="isMobile ? 85 : 140"
              :imageHeight="isMobile ? 113 : 200"
            >
              <template #description>
                <div v-html="productData.getDescription(product)" />
              </template>
              <template #actions>
                <SfButton
                  class="sf-button--text desktop-only"
                  style="margin: 0 0 1rem auto; display: block"
                  @click="
                    isInWishlist({ product })
                      ? removeItemFromWishlist({
                          product: wishlistHelpers.getItem(wishlist, {
                            productId: product.id,
                            variantId: getPurchasableDefaultVariant(product).id
                          })
                        })
                      : addItemToWishlist({ product })
                  "
                >
                  {{
                    !isInWishlist({ product })
                      ? $t('Add to Wishlist')
                      : $t('Remove from Wishlist')
                  }}
                </SfButton>
              </template>
              <template #add-to-cart>
                <SfAddToCart
                  v-model="productsQuantity[product.id]"
                  :disabled="!productData.canBeAddedToCart(product)"
                  class="sf-product-card-horizontal__add-to-cart desktop-only"
                  @click="
                    addItemToCart({
                      product,
                      quantity: Number(
                        productsQuantity[productData.getId(product)] || 1
                      )
                    })
                  "
                />
              </template>
            </SfProductCardHorizontal>
          </transition-group>

          <LazyHydrate on-interaction>
            <SfPagination
              v-if="!isProductsLoading"
              class="products__pagination"
              v-show="pagination.totalPages > 1"
              :current="pagination.currentPage"
              :total="pagination.totalPages"
              :visible="5"
            />
          </LazyHydrate>
          <div
            v-show="pagination.totalPages > 1"
            class="products__show-on-page"
          >
            <span class="products__show-on-page__label">
              {{ $t('Show on page') }}
            </span>
            <LazyHydrate on-interaction>
              <SfSelect
                :value="
                  pagination && pagination.itemsPerPage
                    ? pagination.itemsPerPage.toString()
                    : ''
                "
                class="products__items-per-page"
                @input="th.changeItemsPerPage"
              >
                <SfSelectOption
                  v-for="option in pagination.pageOptions"
                  :key="option"
                  :value="option"
                  class="products__items-per-page__option"
                  >{{ option }}</SfSelectOption
                >
              </SfSelect>
            </LazyHydrate>
          </div>
        </div>
      </SfLoader>
    </div>
  </div>
</template>

<script>
import {
  SfButton,
  SfList,
  SfHeading,
  SfMenuItem,
  SfProductCard,
  SfProductCardHorizontal,
  SfPagination,
  SfAccordion,
  SfSelect,
  SfBreadcrumbs,
  SfLoader,
  SfAddToCart
} from '@storefront-ui/vue';
import {
  computed,
  defineComponent,
  onBeforeUnmount,
  ref,
  useContext
} from '@nuxtjs/composition-api';
import {
  mapMobileObserver,
  unMapMobileObserver
} from '@storefront-ui/vue/src/utilities/mobile-observer.js';
import {
  useCart,
  useWishlist,
  useProduct,
  useCategory,
  getPurchasableDefaultVariant
} from '@vue-storefront/bigcommerce';
import { useUiHelpers, useUiState } from '~/composables';
import {
  getBreadcrumbs,
  getCategoryBySlug
} from '~/composables/useCategoryData';
import { onSSR } from '@vue-storefront/core';
import LazyHydrate from 'vue-lazy-hydration';
import cacheControl from './../helpers/cacheControl';
import CategoryPageHeader from '~/components/CategoryPageHeader';
import { useProductData } from '../composables/useProductData';
import { useWishlistData } from '../composables/useWishlistData';
import { ProductsSortEnum } from '@vue-storefront/bigcommerce-api';

// TODO(addToCart qty, horizontal): https://github.com/vuestorefront/storefront-ui/issues/1606
export default defineComponent({
  components: {
    CategoryPageHeader,
    SfButton,
    SfList,
    SfProductCard,
    SfProductCardHorizontal,
    SfPagination,
    SfMenuItem,
    SfAccordion,
    SfSelect,
    SfBreadcrumbs,
    SfLoader,
    SfHeading,
    LazyHydrate,
    SfAddToCart
  },
  middleware: cacheControl({
    'max-age': 60,
    'stale-when-revalidate': 5
  }),
  transition: 'fade',
  setup() {
    const isMobile = ref(mapMobileObserver().isMobile.get());
    const th = useUiHelpers();
    const { isCategoryGridView } = useUiState();
    const { addItem: addItemToCart, isInCart } = useCart();
    const {
      wishlist,
      addItem: addItemToWishlist,
      isInWishlist,
      removeItem: removeItemFromWishlist
    } = useWishlist();
    const wishlistHelpers = useWishlistData();
    const {
      products: productsResult,
      search,
      error
    } = useProduct('category-products');
    const { categories, search: categorySearch } = useCategory('category-tree');
    const productData = useProductData();
    const { categorySlug } = th.getFacetsFromURL();
    const { localePath, i18n, error: nuxtError } = useContext();
    const productsQuantity = ref({});
    const products = computed(() => productsResult.value?.data);
    const categoryTree = computed(() => {
      let categoriesData = categories.value;
      const category = getCategoryBySlug(categorySlug, categories.value);
      const breadcrumbs = getBreadcrumbs(
        category?.id,
        categories.value,
        localePath,
        i18n
      );
      const rootSlug =
        breadcrumbs && breadcrumbs[1] ? breadcrumbs[1]?.link?.substring(2) : '';
      const rootCategory = getCategoryBySlug(rootSlug, categoriesData);
      if (rootCategory) {
        categoriesData = rootCategory.children;
      }

      return {
        items: categoriesData
      };
    });
    const pagination = computed(() =>
      productData.getPagination(productsResult.value?.meta)
    );

    const activeCategory = computed(() => {
      const categoriesArr = categoryTree.value.items;
      if (!categoriesArr || !categoriesArr.length) {
        return '';
      }

      const category = categoriesArr.find(
        ({ url, children }) =>
          url === categorySlug ||
          children.find(({ url }) => url === categorySlug)
      );
      return category?.name;
    });
    const breadcrumbs = computed(() => {
      if (!categories.value || !categories.value?.length) {
        return '';
      }

      const category = getCategoryBySlug(categorySlug, categories.value);
      const breadcrumbs = getBreadcrumbs(
        category?.id,
        categories.value,
        localePath,
        i18n
      );
      return breadcrumbs;
    });
    const isProductsLoading = ref(false);

    onSSR(async () => {
      isProductsLoading.value = true;
      await categorySearch({});
      const { categorySlug, page, itemsPerPage, sort, direction } =
        th.getFacetsFromURL();
      const category = getCategoryBySlug(categorySlug, categories.value);
      const isSortValid =
        [
          ProductsSortEnum.Id,
          ProductsSortEnum.Name,
          ProductsSortEnum.Price
        ].includes(sort) &&
        (!direction || direction === 'desc' || direction === 'asc');
      let productSearchParams = {
        sort: isSortValid ? sort : undefined,
        direction: isSortValid ? direction : undefined,
        page,
        limit: itemsPerPage,
        include: 'options,variants'
      };

      if (category) {
        productSearchParams = {
          ...productSearchParams,
          'categories:in': category?.id
        };
      }

      await search(productSearchParams);
      if (error?.value?.search) nuxtError({ statusCode: 404 });
      isProductsLoading.value = false;
    });

    onBeforeUnmount(() => {
      unMapMobileObserver();
    });

    return {
      isCategoryGridView,
      th,
      products,
      categoryTree,
      isProductsLoading,
      pagination,
      activeCategory,
      breadcrumbs,
      wishlist,
      addItemToWishlist,
      removeItemFromWishlist,
      isInWishlist,
      wishlistHelpers,
      addItemToCart,
      isInCart,
      productsQuantity,
      productData,
      getPurchasableDefaultVariant,
      isMobile
    };
  }
});
</script>

<style lang="scss" scoped>
#category {
  box-sizing: border-box;
  @include for-desktop {
    max-width: 1240px;
    margin: 0 auto;
  }
}
.main {
  &.section {
    padding: var(--spacer-xs);
    @include for-desktop {
      padding: 0;
    }
  }
}
.breadcrumbs {
  margin: var(--spacer-base) auto var(--spacer-lg);
}
.navbar {
  position: relative;
  display: flex;
  border: 1px solid var(--c-light);
  border-width: 0 0 1px 0;
  @include for-desktop {
    border-width: 1px 0 1px 0;
  }
  &.section {
    padding: var(--spacer-sm);
    @include for-desktop {
      padding: 0;
    }
  }
  &__aside {
    display: flex;
    align-items: center;
    padding: var(--spacer-sm) 0;
  }
  &__aside {
    flex: 0 0 15%;
    padding: var(--spacer-sm) var(--spacer-sm);
    border: 1px solid var(--c-light);
    border-width: 0 1px 0 0;
  }
  &__title {
    --heading-title-font-weight: var(--font-weight--semibold);
    --heading-title-font-size: var(--font-size--xl);
  }
}
.main {
  display: flex;
}
.list {
  --menu-item-font-size: var(--font-size--sm);
  &__item {
    &:not(:last-of-type) {
      --list-item-margin: 0 0 var(--spacer-sm) 0;
    }
    .nuxt-link-exact-active {
      text-decoration: underline;
    }
  }
}
.products {
  box-sizing: border-box;
  flex: 1;
  margin: 0;
  &__grid {
    justify-content: center;
    @include for-desktop {
      justify-content: flex-start;
    }
  }
  &__grid,
  &__list {
    display: flex;
    flex-wrap: wrap;
  }
  &__product-card {
    --product-card-title-margin: var(--spacer-base) 0 0 0;
    --product-card-title-font-weight: var(--font-weight--medium);
    --product-card-title-margin: var(--spacer-xs) 0 0 0;
    flex: 1 1 50%;
    @include for-desktop {
      --product-card-title-font-weight: var(--font-weight--normal);
      --product-card-add-button-bottom: var(--spacer-base);
      --product-card-title-margin: var(--spacer-sm) 0 0 0;
    }
  }
  &__product-card-horizontal {
    flex: 0 0 100%;
    @include for-mobile {
      ::v-deep .sf-image {
        --image-width: 5.3125rem;
        --image-height: 7.0625rem;
      }
    }
  }
  &__slide-enter {
    opacity: 0;
    transform: scale(0.5);
  }
  &__slide-enter-active {
    transition: all 0.2s ease;
    transition-delay: calc(0.1s * var(--index));
  }
  &__pagination {
    margin: var(--spacer-lg) 0 0 0;
    justify-content: center;
  }

  @include for-desktop {
    &__grid {
      margin: var(--spacer-sm) 0 0 var(--spacer-sm);
    }
    &__pagination {
      display: flex;
      justify-content: flex-start;
      margin: var(--spacer-xl) 0 0 0;
    }
    &__product-card-horizontal {
      margin: var(--spacer-lg) 0;
    }
    &__product-card {
      flex: 1 1 25%;
    }
    &__list {
      margin: 0 0 0 var(--spacer-sm);
    }
  }
  &__show-on-page {
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
    &__label {
      font-family: var(--font-family--secondary);
      font-size: var(--font-size--sm);
    }
  }
}
.sidebar {
  flex: 0 0 15%;
  padding: var(--spacer-sm);
  border: 1px solid var(--c-light);
  border-width: 0 1px 0 0;
}
.loading {
  margin: var(--spacer-3xl) auto;
  @include for-desktop {
    margin-top: 6.25rem;
  }
  &--categories {
    @include for-desktop {
      margin-top: 3.75rem;
    }
  }
}
.no-products-message {
  padding: 2rem;
  font-family: var(--font-family--secondary);
  font-size: var(--font-size--md);
}
.sf-menu-item {
  text-align: left;
}
</style>
