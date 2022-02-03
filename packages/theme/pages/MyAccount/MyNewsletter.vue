<template>
  <SfTabs :open-tab="1" class="tab-orphan">
    <SfTab title="My newsletter">
      <p class="message">
        {{ $t('Set up newsletter') }}
      </p>
      <form class="form" v-on:submit.prevent="submitNewsletterPreferences">
        <p class="form__title">
          {{ $t('I would like to receive marketing newsletters') }}
        </p>
        <div class="form__checkbox-group">
          <SfCheckbox
            v-model="newsletter"
            label="Yes"
            value="true"
            class="form__element"
          />
        </div>
        <SfButton class="form__button" :disabled="loading">
          <SfLoader :class="{ loader: loading }" :loading="loading">
            <div>{{ $t('Save changes') }}</div>
          </SfLoader>
        </SfButton>
      </form>
      <p class="notice">
        {{ $t('Read and understand') }}
        <SfLink class="notice__link" link="#">{{ $t('Privacy') }}</SfLink> and
        <SfLink class="notice__link" link="#">{{
          $t('Cookies Policy')
        }}</SfLink>
        {{ $t('Commercial information') }}
      </p>
    </SfTab>
  </SfTabs>
</template>

<script>
import { defineComponent, onMounted, ref } from '@nuxtjs/composition-api';
import {
  SfTabs,
  SfCheckbox,
  SfButton,
  SfLoader,
  SfLink
} from '@storefront-ui/vue';
import { useUser } from '@vue-storefront/bigcommerce';
import { useUserData } from '../../composables/useUserData';

export default defineComponent({
  name: 'MyNewsletter',
  components: {
    SfTabs,
    SfCheckbox,
    SfButton,
    SfLoader,
    SfLink
  },
  setup() {
    const { updateUser, user, loading } = useUser();
    const userData = useUserData();
    const newsletter = ref(false);

    const submitNewsletterPreferences = async () => {
      try {
        await updateUser({
          user: {
            acceptsMarketingEmails: newsletter.value
          }
        });
      } catch (error) {
        throw new Error(error);
      }
    };

    onMounted(async () => {
      if (user.value) {
        newsletter.value =
          user.value.accepts_product_review_abandoned_cart_emails;
      }
    });

    return {
      newsletter,
      user,
      userData,
      loading,
      submitNewsletterPreferences
    };
  }
});
</script>

<style lang="scss" scoped>
.tab-orphan {
  @include for-mobile {
    --tabs-title-display: none;
    --tabs-content-padding: 0;
    --tabs-conent-border-width: 0;
  }
}
.form {
  &__element {
    margin: 0 0 var(--spacer-base) 0;
    &:last-child {
      margin: 0;
    }
  }
  &__checkbox-group {
    margin: 0 0 var(--spacer-xl) 0;
  }
  &__title {
    margin: 0 0 var(--spacer-base) 0;
  }
  &__button {
    --button-width: 100%;
    @include for-desktop {
      --button-width: 17.5rem;
    }
  }
}
.message {
  margin: 0 0 var(--spacer-xl) 0;
  color: var(--c-dark-variant);
}
.notice {
  margin: var(--spacer-base) 0 0 0;
  font-size: var(--font-size--xs);
  &__link {
    color: var(--c-primary);
    text-decoration: none;
    &:hover {
      color: var(--c-text);
    }
  }
}
</style>
