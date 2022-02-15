<template>
  <div id="home">
    <LazyHydrate when-idle>
      <SfHero class="hero">
        <SfHeroItem
          v-for="(hero, i) in heroes"
          :key="i"
          :title="hero.title"
          :subtitle="hero.subtitle"
          :background="hero.background"
          :image="hero.image"
          :class="hero.className"
        />
      </SfHero>
    </LazyHydrate>

    <LazyHydrate when-visible>
      <SfBannerGrid :banner-grid="1" class="banner-grid">
        <template v-for="item in banners" #[item.slot]>
          <SfBanner
            :key="item.slot"
            :title="item.title"
            :subtitle="item.subtitle"
            :description="item.description"
            :button-text="item.buttonText"
            :link="localePath(item.link)"
            :image="item.image"
            :class="item.class"
          />
        </template>
      </SfBannerGrid>
    </LazyHydrate>

    <LazyHydrate when-visible>
      <RelatedProducts
        v-if="products && products.length"
        :products="products"
        :loading="loading"
        :title="$t('Discover our new products')"
      />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <SfCallToAction
        :title="$t('Subscribe to Newsletters')"
        :button-text="$t('Subscribe')"
        :description="
          $t(
            'Be aware of upcoming sales and events. Receive gifts and special offers!'
          )
        "
        :image="addBasePath('/homepage/newsletter.jpg')"
        class="call-to-action"
      >
        <template #button>
          <SfButton
            class="sf-call-to-action__button"
            data-testid="cta-button"
            @click="toggleNewsletterModal"
            >{{ $t('Subscribe') }}</SfButton
          >
        </template>
      </SfCallToAction>
    </LazyHydrate>

    <LazyHydrate when-visible>
      <NewsletterModal @email-submitted="onSubscribe" />
    </LazyHydrate>
  </div>
</template>

<script>
import {
  SfHero,
  SfBanner,
  SfCallToAction,
  SfCarousel,
  SfProductCard,
  SfBannerGrid,
  SfHeading,
  SfArrow,
  SfButton
} from '@storefront-ui/vue';
import {
  computed,
  defineComponent,
  useContext,
  useFetch
} from '@nuxtjs/composition-api';
import NewsletterModal from '~/components/NewsletterModal.vue';
import LazyHydrate from 'vue-lazy-hydration';
import { useUiState } from '../composables';
import cacheControl from './../helpers/cacheControl';
import { addBasePath } from '@vue-storefront/core';
import { mapMobileObserver } from '@storefront-ui/vue/src/utilities/mobile-observer.js';
import { useProduct } from '@vue-storefront/bigcommerce';
import RelatedProducts from '../components/RelatedProducts.vue';

export default defineComponent({
  name: 'Home',
  components: {
    SfHero,
    SfBanner,
    SfCallToAction,
    SfCarousel,
    SfProductCard,
    SfBannerGrid,
    SfHeading,
    SfArrow,
    SfButton,
    NewsletterModal,
    LazyHydrate,
    RelatedProducts
  },
  middleware: cacheControl({
    'max-age': 60,
    'stale-when-revalidate': 5
  }),
  setup() {
    const { localePath, i18n } = useContext();
    const { toggleNewsletterModal } = useUiState();
    const isMobile = computed(() => mapMobileObserver().isMobile.get());

    const {
      products: productsResult,
      search,
      loading
    } = useProduct('home-products');

    useFetch(async () => {
      await search({
        limit: 5,
        include: 'options,variants'
      });
    });

    const products = computed(() => productsResult.value?.data);

    const heroes = [
      {
        title: i18n.t('A good vibe starts at home.'),
        subtitle: '#lifestyle',
        background: '#eceff1',
        image: addBasePath(
          isMobile.value
            ? '/homepage/bannerA_mobile.webp'
            : '/homepage/bannerA.webp'
        ),
        className: isMobile.value
          ? ''
          : 'sf-hero-item--position-bg-top-left sf-hero-item--align-right'
      },
      {
        title: i18n.t('Inspire yourself.'),
        subtitle: '#inspire',
        background: '#efebe9',
        image: addBasePath(
          isMobile.value
            ? '/homepage/bannerB_mobile.webp'
            : '/homepage/bannerB.webp'
        ),
        className: isMobile.value
          ? 'sf-hero-item--position-bg-top-left sf-hero-item--align-right'
          : ''
      },
      {
        title: i18n.t('Modern design in your home.'),
        subtitle: '#design',
        background: '#fce4ec',
        image: addBasePath(
          isMobile.value
            ? '/homepage/bannerC_mobile.webp'
            : '/homepage/bannerC.webp'
        ),
        className: isMobile.value
          ? ''
          : 'sf-hero-item--position-bg-top-left sf-hero-item--align-right'
      }
    ];

    const banners = [
      {
        slot: 'banner-A',
        subtitle: i18n.t('Household items'),
        title: i18n.t('Decorate your home with carefully crafted accessories'),
        description: i18n.t(
          'As spring arrives, choose beautiful ornaments made of more sustainable materials that reduce our environmental impact.'
        ),
        buttonText: i18n.t('Shop now'),
        image: {
          mobile: addBasePath('/homepage/banner_slim_mobile.webp'),
          desktop: addBasePath('/homepage/banner_slim.webp')
        },
        class: 'sf-banner--slim',
        link: localePath('/c/household-items')
      },
      {
        slot: 'banner-B',
        subtitle: i18n.t('Household items'),
        title: i18n.t('Invite joyful design into your home'),
        description: i18n.t(
          'The arrival of spring is the perfect opportunity to refresh your home decor with beautiful accessories and interesting designs.'
        ),
        buttonText: i18n.t('Shop now'),
        image: {
          mobile: addBasePath('/homepage/banner_center_mobile.webp'),
          desktop: addBasePath('/homepage/banner_center.webp')
        },
        class: 'sf-banner--slim banner-central',
        link: localePath('/c/household-items')
      },
      {
        slot: 'banner-C',
        subtitle: i18n.t('Utility'),
        title: i18n.t('Simple changes for more sustainable living'),
        image: addBasePath('/homepage/banner_simple.webp'),
        class: 'sf-banner--slim banner__tshirt',
        link: localePath('/c/utility')
      },
      {
        slot: 'banner-D',
        subtitle: i18n.t('Utility'),
        title: i18n.t('Outstanding simplicity'),
        image: addBasePath('/homepage/banner_outstanding.webp'),
        class: 'sf-banner--slim',
        link: localePath('/c/utility')
      }
    ];

    const onSubscribe = (emailAddress) => {
      console.log(`Email ${emailAddress} was added to newsletter.`);
      toggleNewsletterModal();
    };

    return {
      toggleNewsletterModal,
      onSubscribe,
      addBasePath,
      banners,
      heroes,
      products,
      loading
    };
  }
});
</script>

<style lang="scss" scoped>
#home {
  box-sizing: border-box;
  padding: 0 var(--spacer-sm);
  @include for-desktop {
    max-width: 1240px;
    padding: 0;
    margin: 0 auto;
  }
}

.hero {
  margin: var(--spacer-xl) auto var(--spacer-lg);
  --hero-item-background-position: center;
  @include for-desktop {
    margin: var(--spacer-xl) auto var(--spacer-2xl);
  }
  .sf-hero-item {
    &:nth-child(even) {
      --hero-item-background-position: left;
      @include for-mobile {
        --hero-item-background-position: 30%;
        ::v-deep .sf-hero-item__subtitle,
        ::v-deep .sf-hero-item__title {
          text-align: right;
          width: 100%;
          padding-left: var(--spacer-sm);
        }
      }
    }
  }
  ::v-deep .sf-hero__control {
    &--right,
    &--left {
      display: none;
    }
  }
}

.banner-grid {
  --banner-container-width: 50%;
  margin: var(--spacer-xl) 0;
  ::v-deep .sf-link:hover {
    color: var(--c-white);
  }
  @include for-desktop {
    margin: var(--spacer-2xl) 0;
    ::v-deep .sf-link {
      --button-width: auto;
      text-decoration: none;
    }
  }
}

.banner {
  &__tshirt {
    background-position: left;
  }
  &-central {
    @include for-desktop {
      --banner-container-flex: 0 0 70%;
    }
  }
}

.similar-products {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: var(--spacer-2xs);
  --heading-padding: 0;
  border-bottom: 1px var(--c-light) solid;
  @include for-desktop {
    border-bottom: 0;
    justify-content: center;
    padding-bottom: 0;
  }
}

.call-to-action {
  background-position: right;
  margin: var(--spacer-xs) 0;
  @include for-desktop {
    margin: var(--spacer-xl) 0 var(--spacer-2xl) 0;
  }
}

.carousel {
  margin: 0 calc(0 - var(--spacer-sm)) 0 0;
  @include for-desktop {
    margin: 0;
  }
  &__item {
    margin: 1.375rem 0 2.5rem 0;
    @include for-desktop {
      margin: var(--spacer-xl) 0 var(--spacer-xl) 0;
    }
    &__product {
      --product-card-add-button-transform: translate3d(0, 30%, 0);
    }
  }
  ::v-deep .sf-arrow--long .sf-arrow--right {
    --arrow-icon-transform: rotate(180deg);
    -webkit-transform-origin: center;
    transform-origin: center;
  }
}
</style>
