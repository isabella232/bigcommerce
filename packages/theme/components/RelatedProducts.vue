<template>
  <SfSection :title-heading="title" class="section">
    <SfLoader :class="{ loading }" :loading="loading">
      <SfCarousel
        :settings="{ peek: 16, breakpoints: { 1023: { peek: 0, perView: 2 } } }"
        class="carousel"
      >
        <SfCarouselItem
          class="carousel__item"
          v-for="(product, i) in products"
          :key="i"
        >
          <SfProductCard
            :title="productData.getName(product)"
            :image="productData.getCoverImage(product)"
            :regular-price="
              $n(productData.getPrice(product).regular, 'currency')
            "
            :special-price="
              productData.getPrice(product).special &&
                $n(productData.getPrice(product).special, 'currency')
            "
            :isInWishlist="
              isInWishlist({
                product
              })
            "
            :isAddedToCart="isInCart({ product })"
            :link="
              localePath(
                `/p/${productData.getId(product)}/${productData.getSlug(
                  product
                )}`
              )
            "
            @click:wishlist="
              isInWishlist({
                product
              })
                ? removeItemFromWishlist({
                    product: wishlistHelpers.getItem(wishlist, {
                      productId: product.id,
                      variantId: getDefaultVariant(product).id
                    })
                  })
                : addItemToWishlist({
                    product
                  })
            "
            @click:add-to-cart="addItemToCart({ product, quantity: 1 })"
          />
        </SfCarouselItem>
      </SfCarousel>
    </SfLoader>
  </SfSection>
</template>

<script lang="ts">
import {
  SfCarousel,
  SfProductCard,
  SfSection,
  SfLoader
} from '@storefront-ui/vue';
import {
  getDefaultVariant,
  useCart,
  useGuestWishlist,
  useUser,
  useWishlist
} from '@vue-storefront/bigcommerce';
import { Product } from '@vue-storefront/bigcommerce-api';
import { defineComponent, PropType } from '@vue/composition-api';
import { useProductData } from '../composables/useProductData';
import { useWishlistData } from '../composables/useWishlistData';

export default defineComponent({
  name: 'RelatedProducts',
  setup() {
    const { isAuthenticated } = useUser();
    const productData = useProductData();
    const { addItem: addItemToCart, isInCart } = useCart();
    const {
      wishlist,
      addItem: addItemToWishlist,
      isInWishlist,
      removeItem: removeItemFromWishlist
    } = isAuthenticated.value ? useWishlist() : useGuestWishlist();
    const wishlistHelpers = useWishlistData();

    return {
      productData,
      wishlistHelpers,
      wishlist,
      isInWishlist,
      addItemToWishlist,
      removeItemFromWishlist,
      isInCart,
      addItemToCart,
      getDefaultVariant
    };
  },
  components: {
    SfCarousel,
    SfProductCard,
    SfSection,
    SfLoader
  },
  props: {
    title: String,
    products: Array as PropType<Array<Product>>,
    loading: Boolean
  }
});
</script>

<style lang="scss" scoped>
.section {
  margin-top: var(--spacer-base);
}

.carousel {
  margin: 0 calc(0 - var(--spacer-sm)) 0 0;
  @include for-desktop {
    margin: 0;
  }
  &__item {
    margin: 1.9375rem 0 2.4375rem 0;
  }
}
</style>
