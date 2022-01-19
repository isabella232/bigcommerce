<template>
  <div>
    <div v-if="isSuccess" class="success message">
      <h1>{{ $t('Thank you for your order!') }}</h1>
      <SfButton class="form__button" @click="continueShopping">
        {{ $t('Continue shopping') }}
      </SfButton>
    </div>

    <div v-else-if="isError" class="error message">
      <h1>{{ $t('An error occured during the checkout.') }}</h1>
      <SfButton class="form__button" @click="tryAgain">
        {{ $t('Try again') }}
      </SfButton>
    </div>

    <div id="checkout"></div>
  </div>
</template>
<script>
import { SfButton } from '@storefront-ui/vue';
import { onMounted, ref } from '@vue/composition-api';
import { embedCheckout } from '@bigcommerce/checkout-sdk';
import { useCart, useUser } from '@vue-storefront/bigcommerce';

export default {
  name: 'Checkout',
  components: {
    SfButton
  },
  setup(props, context) {
    const { cart, load: loadCart, setCart } = useCart();
    const { logout, load: loadUser, user } = useUser();
    const isSuccess = ref(false);
    const isError = ref(false);
    const onError = () => {
      document.querySelector('#checkout').innerHTML = '';
      isError.value = true;
    };

    onMounted(async () => {
      if (process.client) {
        await loadUser();

        const embeddedCheckoutUrl =
          cart.value?.redirect_urls?.embedded_checkout_url;
        embedCheckout({
          containerId: 'checkout',
          url: embeddedCheckoutUrl,
          onComplete: async () => {
            document.querySelector('#checkout').innerHTML = '';
            isSuccess.value = true;

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
      }
    });

    const continueShopping = async () => {
      context.root.$router.replace(context.root.localePath({ name: 'home' }));
    };

    const tryAgain = async () => {
      window.location.reload();
    };

    return { continueShopping, tryAgain, isSuccess, isError };
  }
};
</script>

<style lang="scss" scoped>
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
