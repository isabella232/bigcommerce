<template>
  <div id="product">
    <SfBreadcrumbs
      class="breadcrumbs desktop-only"
      :breadcrumbs="breadcrumbs"
    />
    <div class="product">
      <LazyHydrate when-idle>
        <SfGallery
          :key="productGallery.length"
          :images="productGallery"
          class="product__gallery"
          :imageWidth="422"
          :imageHeight="644"
          :thumbWidth="160"
          :thumbHeight="160"
        />
      </LazyHydrate>

      <div class="product__info">
        <div class="product__header">
          <SfHeading
            :title="productData.getName(product)"
            :level="3"
            class="sf-heading--no-underline sf-heading--left"
          />
          <SfIcon
            icon="drag"
            size="xxl"
            color="var(--c-text-disabled)"
            class="product__drag-icon smartphone-only"
          />
        </div>
        <div class="product__price-and-rating">
          <SfPrice
            :regular="
              $n(
                productData.getPrice(product, activeVariant).regular,
                'currency'
              )
            "
            :special="
              productData.getPrice(product, activeVariant).special &&
              $n(
                productData.getPrice(product, activeVariant).special,
                'currency'
              )
            "
          />
          <div>
            <div class="product__rating">
              <SfRating :score="averageRating" :max="5" />
              <span
                v-if="!!totalReviews"
                class="product__count reviews-count"
                @click="showReviews"
              >
                ({{ totalReviews }})
              </span>
            </div>
            <SfButton class="sf-button--text" @click="showReviews">{{
              $t('Read all reviews')
            }}</SfButton>
          </div>
        </div>
        <div>
          <SfButton class="sf-button--text desktop-only product__guide">
            {{ $t('Size guide') }}
          </SfButton>

          <template v-for="option in options">
            <SfSelect
              :key="`dropdown_${option.id}`"
              v-e2e="'size-select'"
              v-if="option.type === 'dropdown'"
              :value="
                configuration
                  ? configuration[option.display_name]
                  : option.option_values[0].label
              "
              @input="(value) => updateFilter({ [option.display_name]: value })"
              :label="option.display_name"
              class="sf-select--underlined product__select-size"
              :required="true"
            >
              <SfSelectOption
                v-for="optionValue in option.option_values"
                :key="optionValue.id"
                :value="optionValue.label"
              >
                {{ optionValue.label }}
              </SfSelectOption>
            </SfSelect>
            <div
              :key="`swatch_${option.id}`"
              v-else-if="option.type === 'swatch'"
              class="product__colors"
            >
              <p class="product__color-label">{{ option.display_name }}:</p>
              <SfColor
                v-for="color in option.option_values"
                :key="color.id"
                :color="color.value_data.colors[0]"
                :selected="
                  configuration
                    ? color.label === configuration[option.display_name]
                    : false
                "
                class="product__color"
                @click="updateFilter({ [option.display_name]: color.label })"
              />
            </div>
          </template>

          <SfAddToCart
            v-if="!activeVariant || !activeVariant.purchasing_disabled"
            v-e2e="'product_add-to-cart'"
            v-model="qty"
            :disabled="loading || (stock.enabled && stock.current <= 0)"
            class="product__add-to-cart"
          >
            <template #add-to-cart-btn>
              <SfButton
                class="sf-add-to-cart__button"
                :disabled="
                  loading ||
                  (stock.enabled && (stock.current <= 0 || stock.current < qty))
                "
                @click="
                  addItem({
                    product,
                    quantity: parseInt(qty),
                    customQuery: {
                      variant_id: activeVariant && activeVariant.id
                    }
                  })
                "
              >
                {{ $t('Add to cart') }}
              </SfButton>
            </template>
          </SfAddToCart>

          <SfAlert
            v-else
            :message="
              activeVariant.purchasing_disabled_message ||
              $t('Currently unavailable')
            "
            type="warning"
          />

          <SfAlert
            v-if="stock.enabled && stock.current <= 0"
            :message="$t('Out of stock')"
            type="danger"
          />

          <SfAlert
            v-if="stock.enabled && qty > 1 && stock.current < qty"
            :message="$t('The selected quantity exceeds available stock.')"
            type="warning"
          />
        </div>

        <LazyHydrate when-idle>
          <SfTabs
            ref="tabsRef"
            :open-tab="openTab"
            class="product__tabs"
            @click:tab="(tab) => (openTab = tab)"
          >
            <SfTab title="Description">
              <div
                class="product__description"
                v-html="productData.getDescription(product)"
              />
            </SfTab>
            <SfTab title="Read reviews">
              <SfReview
                v-for="review in reviews"
                :key="review.id"
                :author="reviewHelpers.getReviewTitle(review)"
                :date="reviewHelpers.getReviewDate(review)"
                :message="review.text"
                :max-rating="5"
                :rating="review.rating"
                :char-limit="250"
                read-more-text="Read more"
                hide-full-text="Read less"
                class="product__review"
              />
              <AddReview :product-id="Number(productData.getId(product))" />
            </SfTab>
            <SfTab
              title="Additional Information"
              class="product__additional-info"
            >
              <div class="product__additional-info">
                <p class="product__additional-info__title">
                  {{ $t('Instruction1') }}
                </p>
                <p class="product__additional-info__paragraph">
                  {{ $t('Instruction2') }}
                </p>
                <p class="product__additional-info__paragraph">
                  {{ $t('Instruction3') }}
                </p>
              </div>
            </SfTab>
          </SfTabs>
        </LazyHydrate>
      </div>
    </div>

    <LazyHydrate when-visible>
      <RelatedProducts
        v-if="relatedProducts.length"
        :products="relatedProducts"
        :loading="relatedLoading"
        title="Match it with"
      />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <InstagramFeed />
    </LazyHydrate>
  </div>
</template>

<script>
import {
  SfHeading,
  SfPrice,
  SfRating,
  SfSelect,
  SfAddToCart,
  SfTabs,
  SfGallery,
  SfIcon,
  SfAlert,
  SfReview,
  SfBreadcrumbs,
  SfButton,
  SfColor
} from '@storefront-ui/vue';
import InstagramFeed from '~/components/InstagramFeed.vue';
import RelatedProducts from '~/components/RelatedProducts.vue';
import AddReview from '~/components/AddReview.vue';
import {
  ref,
  computed,
  defineComponent,
  onMounted,
  useContext,
  useRouter,
  useRoute
} from '@nuxtjs/composition-api';
import { useProduct, useCart, useReview } from '@vue-storefront/bigcommerce';
import { onSSR } from '@vue-storefront/core';
import LazyHydrate from 'vue-lazy-hydration';
import { useProductData } from '../composables/useProductData';
import cacheControl from './../helpers/cacheControl';
import useReviewData from '~/composables/useReviewData';
import { getBreadcrumbs } from '~/composables/useCategoryData';
import { useCategory } from '@vue-storefront/bigcommerce';

export default defineComponent({
  name: 'Product',
  components: {
    SfAlert,
    SfColor,
    SfHeading,
    SfPrice,
    SfRating,
    SfSelect,
    SfAddToCart,
    SfTabs,
    SfGallery,
    SfIcon,
    SfReview,
    SfBreadcrumbs,
    SfButton,
    InstagramFeed,
    RelatedProducts,
    LazyHydrate,
    AddReview
  },
  middleware: cacheControl({
    'max-age': 60,
    'stale-when-revalidate': 5
  }),
  transition: 'fade',
  setup() {
    const { error } = useContext();
    const router = useRouter();
    const route = useRoute();
    const { categories, search: categorySearch } = useCategory('category-tree');
    const qty = ref(1);
    const id = computed(() => route.value.params.id);
    const { query } = route.value;
    const configuration = ref(query);
    const reviewsTab = 2;
    const openTab = ref(1);
    const tabsRef = ref(null);
    const { products, search } = useProduct('products');
    const { localePath, i18n } = useContext();
    const {
      products: relatedProducts,
      search: searchRelatedProducts,
      loading: relatedLoading
    } = useProduct('relatedProducts');
    const { addItem, loading } = useCart();
    const productData = useProductData();
    const { reviews: productReviews, search: searchReviews } =
      useReview('productReviews');
    const product = computed(() => products.value?.data?.[0]);
    const options = computed(() => productData.getOptions(product.value));
    const activeVariant = ref();
    const reviewHelpers = useReviewData();
    const stock = computed(() =>
      productData.getInventory(product.value, activeVariant.value)
    );
    const productGallery = computed(() =>
      productData
        .getGallery(product.value, activeVariant.value)
        .map((image) => ({
          mobile: { url: image.small },
          desktop: { url: image.normal },
          big: { url: image.big },
          alt: productData.getName(product.value)
        }))
    );
    const breadcrumbs = computed(() => {
      if (
        !categories.value ||
        !categories.value?.length ||
        !product.value ||
        !product.value.categories
      ) {
        return [];
      }

      const categoryId = product.value.categories[0];
      const breadcrumbs = getBreadcrumbs(
        categoryId,
        categories.value,
        localePath,
        i18n
      );
      breadcrumbs.push({ text: product.value.name, link: '#' });
      return breadcrumbs;
    });
    const calculateOptions = () => {
      configuration.value = product.value.options.reduce((acc, option) => {
        const newValue =
          query[option.display_name] ??
          option.option_values.find((optionValue) => optionValue.is_default)
            ?.label ??
          option.option_values[0].label;

        acc[option.display_name] = newValue;

        return acc;
      }, {});

      activeVariant.value = productData.getActiveVariant(
        product.value,
        configuration.value
      );
    };

    onMounted(() => {
      if (product.value) {
        calculateOptions();
      }
    });

    onSSR(async () => {
      await search({ id: id.value, include: 'options,variants' });
      await categorySearch();

      if (!products.value?.data?.length) {
        error({ statusCode: 404 });
      }

      if (product.value) {
        calculateOptions();

        const relatedProductIds = productData.getRelatedProducts(product.value);
        if (relatedProductIds.length) {
          await searchRelatedProducts({
            'id:in': relatedProductIds,
            include: 'options,variants',
            limit: 8
          });
        }
      }
    });

    searchReviews({ productId: Number(id.value), query: { status: 1 } });

    const updateFilter = (filter) => {
      router.push({
        path: route.path,
        query: {
          ...configuration.value,
          ...filter
        }
      });
    };

    const showReviews = () => {
      openTab.value = reviewsTab;
      const tabsElement = tabsRef.value?.$el;
      if (tabsElement && typeof window !== undefined) {
        window.scrollTo(0, tabsElement.offsetTop);
      }
    };

    return {
      activeVariant,
      updateFilter,
      configuration,
      openTab,
      product,
      breadcrumbs,
      reviews: computed(() => productReviews.value?.data),
      averageRating: computed(() =>
        productData.getAverageRating(product.value)
      ),
      totalReviews: computed(() => productData.getTotalReviews(product.value)),
      relatedProducts: computed(() => relatedProducts.value?.data ?? []),
      relatedLoading,
      options,
      qty,
      addItem,
      loading,
      productData,
      productGallery,
      stock,
      reviewHelpers,
      showReviews,
      tabsRef
    };
  }
});
</script>

<style lang="scss">
.product {
  .sf-select__label {
    padding-left: 0;
  }
}
</style>
<style lang="scss" scoped>
.sf-select.is-selected {
  --select-label-font-size: var(--font-size--lg);
}
#product {
  box-sizing: border-box;
  @include for-desktop {
    max-width: 1272px;
    margin: 0 auto;
  }
}
.product {
  @include for-desktop {
    display: flex;
  }
  &__info {
    margin: var(--spacer-sm) auto;
    @include for-desktop {
      max-width: 32.625rem;
      margin: 0 0 0 7.5rem;
    }
  }
  &__header {
    --heading-title-color: var(--c-link);
    --heading-title-font-weight: var(--font-weight--bold);
    --heading-padding: 0;
    margin: 0 var(--spacer-sm);
    display: flex;
    justify-content: space-between;
    @include for-desktop {
      --heading-title-font-weight: var(--font-weight--semibold);
      margin: 0 auto;
    }
  }
  &__drag-icon {
    animation: moveicon 1s ease-in-out infinite;
  }
  &__price-and-rating {
    margin: 0 var(--spacer-sm) var(--spacer-base);
    align-items: center;
    @include for-desktop {
      display: flex;
      justify-content: space-between;
      margin: var(--spacer-sm) 0 var(--spacer-lg) 0;
    }
  }
  &__rating {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: var(--spacer-xs) 0 var(--spacer-xs);

    .reviews-count {
      cursor: pointer;
    }
  }
  &__count {
    @include font(
      --count-font,
      var(--font-weight--normal),
      var(--font-size--sm),
      1.4,
      var(--font-family--secondary)
    );
    color: var(--c-text);
    text-decoration: none;
    margin: 0 0 0 var(--spacer-xs);
  }
  &__description {
    @include font(
      --product-description-font,
      var(--font-weight--light),
      var(--font-size--base),
      1.6,
      var(--font-family--primary)
    );
  }
  &__select-size {
    margin: 0 var(--spacer-sm);
    @include for-desktop {
      margin: 0;
    }
  }
  &__colors {
    @include font(
      --product-color-font,
      var(--font-weight--normal),
      var(--font-size--lg),
      1.6,
      var(--font-family--secondary)
    );
    display: flex;
    align-items: center;
    margin: var(--spacer-sm);
    @include for-desktop {
      margin: var(--spacer-xl) 0 var(--spacer-sm);
    }
  }
  &__color-label {
    margin: 0 var(--spacer-lg) 0 0;
  }
  &__color {
    margin: 0 var(--spacer-2xs);
  }
  &__add-to-cart {
    margin: var(--spacer-base) var(--spacer-sm) var(--spacer-xs);
    @include for-desktop {
      margin-top: var(--spacer-2xl);
    }
  }
  &__guide,
  &__compare,
  &__save {
    display: block;
    margin: var(--spacer-xl) 0 var(--spacer-base) auto;
  }
  &__compare {
    margin-top: 0;
  }
  &__tabs {
    --tabs-title-z-index: 0;
    margin: var(--spacer-lg) auto var(--spacer-2xl);
    --tabs-title-font-size: var(--font-size--lg);
    @include for-desktop {
      margin-top: var(--spacer-2xl);
    }
  }
  &__property {
    margin: var(--spacer-base) 0;
    &__button {
      --button-font-size: var(--font-size--base);
    }
  }
  &__review {
    padding-bottom: 24px;
    border-bottom: var(--c-light) solid 1px;
    margin-bottom: var(--spacer-base);
  }
  &__additional-info {
    color: var(--c-link);
    @include font(
      --additional-info-font,
      var(--font-weight--light),
      var(--font-size--sm),
      1.6,
      var(--font-family--primary)
    );
    &__title {
      font-weight: var(--font-weight--normal);
      font-size: var(--font-size--base);
      margin: 0 0 var(--spacer-sm);
      &:not(:first-child) {
        margin-top: 3.5rem;
      }
    }
    &__paragraph {
      margin: 0;
    }
  }
  &__gallery {
    flex: 1;
  }
}
.breadcrumbs {
  margin: var(--spacer-base) auto var(--spacer-lg);
}
@keyframes moveicon {
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, 30%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
</style>
