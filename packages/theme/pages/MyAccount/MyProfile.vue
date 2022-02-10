<template>
  <SfTabs :open-tab="1">
    <!-- Personal data update -->
    <SfTab title="Personal data">
      <div v-if="!showEditProfileForm">
        <p class="profile">
          <span class="profile__label">{{ $t('Email') }}</span>
          {{ userData.getEmailAddress(user) }}
        </p>
        <p class="profile">
          <span class="profile__label">{{ $t('First Name') }}</span>
          {{ userData.getFirstName(user) }}
        </p>
        <p class="profile">
          <span class="profile__label">{{ $t('Last Name') }}</span>
          {{ userData.getLastName(user) }}
        </p>

        <SfButton class="form__button" @click="showEditProfileForm = true">
          {{ $t('Edit Personal Data') }}
        </SfButton>
      </div>
      <ProfileUpdateForm
        :cancel="closeEditProfileForm"
        v-if="showEditProfileForm"
        @submit="updatePersonalData"
      />

      <p class="notice">
        {{ $t('Use your personal data') }}
        <a href="">{{ $t('Privacy Policy') }}</a>
      </p>
    </SfTab>

    <!-- Password reset -->
    <SfTab title="Password change">
      <p class="message">
        {{ $t('Change password your account') }}:<br />
        {{ $t('Your current email address is') }}
        <span class="message__label">{{ userData.getEmailAddress(user) }}</span>
      </p>

      <PasswordResetForm @submit="updatePassword" />
    </SfTab>
  </SfTabs>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api';
import { extend } from 'vee-validate';
import { email, required, min, confirmed } from 'vee-validate/dist/rules';
import ProfileUpdateForm from '~/components/MyAccount/ProfileUpdateForm';
import PasswordResetForm from '~/components/MyAccount/PasswordResetForm';
import { SfTabs, SfButton } from '@storefront-ui/vue';
import { useUser } from '@vue-storefront/bigcommerce';
import { useUserData } from '../../composables/useUserData';

extend('email', {
  ...email,
  message: 'Invalid email'
});

extend('required', {
  ...required,
  message: 'This field is required'
});

extend('min', {
  ...min,
  message: 'The field should have at least {length} characters'
});

extend('password', {
  validate: (value) =>
    String(value).length >= 8 &&
    String(value).match(/[A-Za-z]/gi) &&
    String(value).match(/[0-9]/gi),
  message:
    'Password must have at least 8 characters including one letter and a number'
});

extend('confirmed', {
  ...confirmed,
  message: 'Passwords don\'t match'
});

export default defineComponent({
  name: 'PersonalDetails',

  components: {
    SfTabs,
    SfButton,
    ProfileUpdateForm,
    PasswordResetForm
  },
  setup() {
    const { updateUser, changePassword, user } = useUser();
    const userData = useUserData();
    const showEditProfileForm = ref(false);
    const closeEditProfileForm = () => {
      showEditProfileForm.value = false;
    };

    const formHandler = async (fn, onComplete, onError) => {
      try {
        const data = await fn();
        await onComplete(data);
        closeEditProfileForm();
      } catch (error) {
        onError(error);
      }
    };

    const updatePersonalData = ({ form, onComplete, onError }) =>
      formHandler(() => updateUser({ user: form.value }), onComplete, onError);
    const updatePassword = ({ form, onComplete, onError }) =>
      formHandler(
        () =>
          changePassword({
            current: form.value.currentPassword,
            new: form.value.newPassword
          }),
        onComplete,
        onError
      );

    return {
      userData,
      updatePersonalData,
      updatePassword,
      user,
      showEditProfileForm,
      closeEditProfileForm
    };
  }
});
</script>

<style lang="scss" scoped>
.message,
.notice {
  font-family: var(--font-family--primary);
  line-height: 1.6;
}
.message {
  margin: 0 0 var(--spacer-xl) 0;
  font-size: var(--font-size--base);
  &__label {
    font-weight: 400;
  }
}
.notice {
  margin: var(--spacer-lg) 0 0 0;
  font-size: var(--font-size--sm);
}
.profile {
  margin: 0 0 var(--spacer-lg) 0;
  font-size: var(--font-size--base);
  &__label {
    font-weight: 400;
    width: 120px;
    display: inline-flex;
  }
}
</style>
