<template>
  <div>
    <div v-if="isSuccess" class="thank-you">
      <SfCallToAction
        :title="$t('Thank you for your order!')"
        :button-text="$t('Continue shopping')"
        v-e2e="'thank-you-banner'"
        class="banner"
        :image="{
          mobile: '/thankyou/bannerM.png',
          desktop: '/thankyou/bannerD.png'
        }"
        @click="continueShopping"
      >
        <template #description>
          <div v-if="order" class="banner__order-number">
            <span>{{ $t('Order No.') }}</span>
            <strong>&nbsp;{{ order.id }}</strong>
          </div>
        </template>
      </SfCallToAction>

      <SfLoader :loading="isOrderLoading">
        <order-summary v-if="order" :order="order" />
      </SfLoader>
    </div>

    <div v-else-if="isError" class="error message">
      <SfHeading
        :title="$t('An error occured during the checkout.')"
        :level="1"
        :description="errorMessage"
        class="thank-you__error-heading"
      />

      <SfButton class="form__button" @click="tryAgain">
        {{ $t('Try again') }}
      </SfButton>
    </div>

    <div id="checkout" v-if="!isSuccess"></div>
  </div>
</template>
<script>
import {
  SfButton,
  SfCallToAction,
  SfHeading,
  SfLoader
} from '@storefront-ui/vue';
import {
  computed,
  defineComponent,
  onMounted,
  ref
} from '@vue/composition-api';
import { embedCheckout } from '@bigcommerce/checkout-sdk';
import {
  useCart,
  useUser,
  useUserOrderByCart
} from '@vue-storefront/bigcommerce';
import OrderSummary from '../components/OrderSummary.vue';

export default defineComponent({
  name: 'Checkout',
  components: {
    SfButton,
    SfCallToAction,
    SfHeading,
    SfLoader,
    OrderSummary
  },
  setup(props, context) {
    const { cart, load: loadCart, setCart } = useCart();
    const { logout, load: loadUser, user } = useUser();
    const {
      order,
      load: loadUserOrder,
      loading: isOrderLoading
    } = useUserOrderByCart('orderSummary');

    const isSuccess = ref(false);
    const isError = ref(false);
    const errorMessage = ref('');

    const onError = () => {
      document.querySelector('#checkout').innerHTML = '';
      isError.value = true;
    };

    onMounted(async () => {
      if (process.client) {
        await loadUser();

        const embeddedCheckoutUrl =
          cart.value?.redirect_urls?.embedded_checkout_url;

        const service = embedCheckout({
          containerId: 'checkout',
          url: embeddedCheckoutUrl,
          onComplete: async () => {
            document.querySelector('#checkout').innerHTML = '';
            isSuccess.value = true;

            if (cart.value) {
              await loadUserOrder({ cartId: cart.value.id });
            }

            setCart(undefined);
            await loadCart({
              customQuery: {
                customerId: user?.id,
                forceNew: true
              }
            });
          },
          onError,
          onFrameError: onError,
          onSignOut: async () => {
            await logout();
            context.root.$router.replace(
              context.root.localePath({ name: 'home' })
            );
          }
        });

        service.catch((err) => {
          isError.value = true;
          errorMessage.value = err.message;
        });
      }
    });

    const continueShopping = async () => {
      context.root.$router.replace(context.root.localePath({ name: 'home' }));
    };

    const tryAgain = async () => {
      window.location.reload();
    };

    return {
      continueShopping,
      tryAgain,
      isSuccess,
      isError,
      errorMessage,
      order: computed(() => order.value),
      isOrderLoading
    };
  }
});
</script>

<style lang="scss" scoped>
.thank-you {
  width: 100%;

  &__error-heading {
    margin: var(--spacer-xl) 0;
  }
}

.banner {
  --call-to-action-color: var(--c-text);
  --call-to-action-title-font-size: var(--h2-font-size);
  --call-to-action-title-font-weight: var(--font-weight--semibold);
  --call-to-action-text-container-width: 50%;
  @include for-desktop {
    margin: 0 0 var(--spacer-xl) 0;
  }
  &__order-number {
    display: flex;
    flex-direction: column;
    margin-bottom: var(--spacer-base);
    font: var(--font-weight--light) var(--font-size--sm) / 1.4
      var(--font-family--primary);
    @include for-desktop {
      flex-direction: row;
      margin-bottom: 0;
      font-size: var(--font-size--normal);
    }
  }
}

#checkout {
  box-sizing: border-box;
  font-size: 1.5rem;
  text-align: center;
  @include for-desktop {
    max-width: 1240px;
    min-height: 600px;
    margin: 0 auto;
  }
}

.message {
  align-items: center;
  display: flex;
  flex-direction: column;
}
</style>
