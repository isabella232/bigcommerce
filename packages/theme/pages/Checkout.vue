<template>
  <div id="checkout"></div>
</template>
<script>
import { onMounted } from '@vue/composition-api';
import { embedCheckout } from '@bigcommerce/checkout-sdk';
import { COOKIE_KEY_EMBEDDED_CHECKOUT_URL } from '@vue-storefront/bigcommerce-api';
import { useCart } from '@vue-storefront/bigcommerce';

export default {
  name: 'Checkout',
  setup(props, context) {
    const { clear: clearCart } = useCart();
    onMounted(() => {
      if (process.client) {
        const embeddedCheckoutUrl = context.root.context.$cookies.get(
          COOKIE_KEY_EMBEDDED_CHECKOUT_URL
        );
        embedCheckout({
          containerId: 'checkout',
          url: embeddedCheckoutUrl,
          onComplete: async (event) => {
            await clearCart();
            console.log('checkout is done', event);
            document.querySelector('#checkout').innerHTML =
              'Thank you for your order!';
          },
          onError: (event) => {
            console.error('Checkout error', event);
          },
          onFrameError: (event) => {
            console.error('Checkout frame error', event);
          }
        });
      }
    });

    return {};
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
</style>
