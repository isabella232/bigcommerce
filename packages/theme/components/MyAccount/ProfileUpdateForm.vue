<template>
  <ValidationObserver v-slot="{ handleSubmit, reset }">
    <form class="form" @submit.prevent="handleSubmit(submitForm(reset))">
      <div class="form__horizontal">
        <ValidationProvider
          v-slot="{ errors }"
          rules="required|min:2"
          class="form__element"
        >
          <SfInput
            v-model="form.firstName"
            name="firstName"
            label="First Name"
            required
            :valid="!errors[0]"
            :error-message="errors[0]"
          />
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          rules="required|min:2"
          class="form__element"
        >
          <SfInput
            v-model="form.lastName"
            name="lastName"
            label="Last Name"
            required
            :valid="!errors[0]"
            :error-message="errors[0]"
          />
        </ValidationProvider>
      </div>
      <ValidationProvider
        v-slot="{ errors }"
        rules="required|email"
        class="form__element"
      >
        <SfInput
          v-model="form.email"
          type="email"
          name="email"
          label="Your e-mail"
          required
          :valid="!errors[0]"
          :error-message="errors[0]"
        />
      </ValidationProvider>
      <SfModal
        :visible="requirePassword"
        :title="$t('Attention!')"
        cross
        persistent
        @close="requirePassword = false"
      >
        {{
          $t(
            'Please type your current password to change your personal details.'
          )
        }}
        <SfInput
          v-model="currentPassword"
          type="password"
          name="currentPassword"
          label="Current Password"
          required
          class="form__element"
          style="margin-top: 10px"
          @keypress.enter="handleSubmit(submitForm(reset))"
        />
        <div v-if="error.authentication">
          {{ error.authentication }}
        </div>
        <SfButton
          class="form__button form__button-inline form__button-width-auto"
          :disabled="loading"
        >
          <SfLoader :class="{ loader: loading }" :loading="loading">
            <div>
              {{ $t('Update personal data') }}
            </div>
          </SfLoader>
        </SfButton>
      </SfModal>
      <SfButton
        class="form__button form__button-inline form__button-width-auto"
        :disabled="loading"
      >
        <SfLoader :class="{ loader: loading }" :loading="loading">
          <div>
            {{ $t('Update personal data') }}
          </div>
        </SfLoader>
      </SfButton>
      <SfButton
        @click="cancel()"
        type="button"
        class="form__button form__button-inline form__button-width-auto"
      >
        {{ $t('Cancel') }}
      </SfButton>
    </form>
  </ValidationObserver>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  reactive,
  ref
} from '@nuxtjs/composition-api';
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { useUser } from '@vue-storefront/bigcommerce';
import { useUserData } from '../../composables/useUserData';
import { SfInput, SfButton, SfModal, SfLoader } from '@storefront-ui/vue';
export default defineComponent({
  name: 'ProfileUpdateForm',
  components: {
    SfInput,
    SfButton,
    SfModal,
    SfLoader,
    ValidationProvider,
    ValidationObserver
  },
  props: {
    cancel: {
      type: Function as PropType<() => void>,
      required: true
    }
  },
  emits: ['submit'],
  setup(props, { emit }) {
    const userData = useUserData();
    const { user, login, error: userError, loading } = useUser();
    const currentPassword = ref('');
    const requirePassword = ref(false);
    const error = reactive({
      authentication: null
    });
    const resetForm = () => ({
      firstName: userData.getFirstName(user.value),
      lastName: userData.getLastName(user.value),
      email: userData.getEmailAddress(user.value)
    });
    const form = ref<{
      firstName: string;
      lastName: string;
      email: string;
      password?: string;
    }>(resetForm());
    const submitForm = (resetValidationFn) => () => {
      requirePassword.value = true;
      const onComplete = () => {
        requirePassword.value = false;
        currentPassword.value = '';
        resetValidationFn();
      };

      const onError = () => {
        form.value = resetForm();
        requirePassword.value = false;
        currentPassword.value = '';
      };

      if (currentPassword.value) {
        form.value.password = currentPassword.value;
        const logInForm = {
          username: userData.getEmailAddress(user.value),
          password: currentPassword.value
        };

        login({
          user: logInForm
        }).then(() => {
          const authenticationError = userError.value.login;

          if (authenticationError) {
            error.authentication = authenticationError;
          } else {
            emit('submit', { form, onComplete, onError });
          }
        });
      }
    };

    return {
      requirePassword,
      currentPassword,
      form,
      error,
      submitForm,
      loading
    };
  }
});
</script>
<style lang="scss" scoped>
.form {
  &__element {
    display: block;
    margin: 0 0 var(--spacer-lg) 0;
  }
  &__button {
    display: block;
    width: 100%;
    margin-right: 1rem;
    @include for-desktop {
      width: 17.5rem;
    }
    &-inline {
      display: inline-block;
      margin-bottom: 1rem;
    }
  }
  &__horizontal {
    @include for-desktop {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .form__element {
      @include for-desktop {
        flex: 1;
        margin-right: var(--spacer-2xl);
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
