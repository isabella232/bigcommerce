<template>
  <transition name="sf-fade">
    <div class="form">
      <SfInput
        v-model="firstName"
        name="firstName"
        :label="$t('First Name')"
        required
        class="form__element form__element--half"
        :valid="firstNameBlur || validFirstName(firstName)"
        :error-message="$t('Please enter your first name.')"
        @blur="firstNameBlur = false"
      />
      <SfInput
        v-model="lastName"
        name="lastName"
        :label="$t('Last Name')"
        required
        class="form__element form__element--half form__element--half-even"
        :valid="lastNameBlur || validLastName(lastName)"
        :error-message="$t('Please enter your last name.')"
        @blur="lastNameBlur = false"
      />
      <SfInput
        v-model="company"
        name="company"
        :label="$t('Company Name')"
        class="form__element form__element--half"
      />
      <SfInput
        v-model="phoneNumber"
        name="phone"
        :label="$t('Phone number')"
        class="form__element form__element--half form__element--half-even"
      />
      <SfInput
        v-model="address1"
        name="address1"
        :label="$t('Address')"
        required
        class="form__element"
        :valid="addressBlur || validAddress(address1)"
        :error-message="$t('Please type your address')"
        @blur="addressBlur = false"
      />
      <SfInput
        v-model="apartment"
        name="apartment"
        :label="$t('Apartment/Suite/Building')"
        class="form__element"
      />
      <SfInput
        v-model="city"
        name="city"
        :label="$t('City')"
        required
        class="form__element form__element--half"
        :valid="cityBlur || validCity(city)"
        :error-message="$t('Please type your city.')"
        @blur="cityBlur = false"
      />
      <SfInput
        v-model="state"
        name="state"
        :label="$t('State/Province')"
        class="form__element form__element--half form__element--half-even"
      />
      <SfInput
        v-model="postCode"
        name="postCode"
        :label="$t('Post code')"
        required
        class="form__element form__element--half"
        :valid="postCodeBlur || validPostCode(postCode)"
        :error-message="$t('Please type your post code.')"
        @blur="postCodeBlur = false"
      />
      <SfComponentSelect
        v-model="country"
        name="country"
        :label="$t('Country')"
        required
        class="sf-component-select--underlined form__select form__element form__element--half form__element--half-even"
        data-testid="country"
        :valid="countryBlur || validCountry(country)"
        :error-message="$t('Please select your country.')"
        @blur="countryBlur = false"
      >
        <SfComponentSelectOption
          v-for="countryCode in Object.keys(countries)"
          :key="countryCode"
          :value="countryCode"
        >
          {{ countries[countryCode] }}
        </SfComponentSelectOption>
      </SfComponentSelect>
      <SfButton class="action-button" @click="saveAddress" v-if="!isNew">{{
        $t('Update address')
      }}</SfButton>
      <SfButton class="action-button" @click="saveAddress" v-else>{{
        $t('Save address')
      }}</SfButton>
      <SfButton @click="cancel()" class="action-button">
        {{ $t('Cancel') }}
      </SfButton>
    </div>
  </transition>
</template>

<script>
import { SfInput, SfButton, SfComponentSelect } from '@storefront-ui/vue';
import { countries } from '../../helpers/countries';

export default {
  name: 'ShippingAddressForm',
  components: {
    SfInput,
    SfButton,
    SfComponentSelect
  },
  props: {
    account: {
      type: Object,
      default: () => ({})
    },
    isNew: {
      type: Boolean,
      default: false
    },
    onSubmit: {
      type: Function,
      required: true
    },
    address: {
      type: Object,
      default: () => ({})
    },
    cancel: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      valid: false,
      editingAddress: false,
      editedAddress: -1,
      name: this.address.name || '',
      firstName: this.address.first_name || '',
      firstNameBlur: true,
      lastName: this.address.last_name || '',
      lastNameBlur: true,
      company: this.address.company || '',
      address1: this.address.address1 || '',
      addressBlur: true,
      apartment: this.address.address2 || '',
      city: this.address.city || '',
      cityBlur: true,
      state: this.address.state_or_province || '',
      stateBlur: true,
      postCode: this.address.postal_code || '',
      postCodeBlur: true,
      country: this.address.country_code || '',
      countryBlur: true,
      phoneNumber: this.address.phone || '',
      countries
    };
  },
  methods: {
    saveAddress() {
      this.validate();
      if (this.valid) {
        const shipping = {
          ...(this.address.id ? { id: this.address.id } : {}),
          first_name: this.firstName,
          last_name: this.lastName,
          company: this.company,
          address1: this.address1,
          address2: this.apartment,
          city: this.city,
          state_or_province: this.state,
          postal_code: this.postCode,
          country_code: this.country,
          phone: this.phoneNumber
        };
        this.editingAddress = false;
        this.onSubmit({
          form: shipping,
          onComplete: console.log,
          onError: console.error
        });
      }
    },
    validate() {
      this.firstNameBlur = false;
      this.lastNameBlur = false;
      this.addressBlur = false;
      this.cityBlur = false;
      this.postCodeBlur = false;
      this.countryBlur = false;
      if (
        this.validFirstName(this.firstName) &&
        this.validLastName(this.lastName) &&
        this.validAddress(this.address1) &&
        this.validCity(this.city) &&
        this.validPostCode(this.postCode) &&
        this.validCountry(this.country)
      ) {
        this.valid = true;
      }
    },
    validFirstName(firstName) {
      return firstName?.length >= 1 && firstName?.length <= 255;
    },
    validLastName(lastName) {
      return lastName?.length >= 1 && lastName?.length <= 255;
    },
    validAddress(address) {
      return address.length >= 1;
    },
    validCity(city) {
      return city?.length >= 1 && city?.length <= 100;
    },
    validPostCode(postCode) {
      return postCode?.length >= 1 && postCode?.length <= 30;
    },
    validCountry(country) {
      return Boolean(country);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~@storefront-ui/vue/styles';
.shipping-list {
  margin: 0 0 var(--spacer-base) 0;
}
.shipping {
  display: flex;
  padding: var(--spacer-base) 0;
  border: 1px solid var(--c-light);
  border-width: 1px 0 0 0;
  &:last-child {
    border-width: 1px 0 1px 0;
  }
  &__content {
    flex: 1;
    color: var(--c-text);
  }
  &__actions {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    @include for-desktop {
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
    }
  }
  &__button-delete {
    --button-background: var(--c-light);
    --button-color: var(--c-dark-variant);
    &:hover {
      --button-background: var(--_c-light-primary);
    }
    @include for-desktop {
      margin: 0 0 0 var(--spacer-base);
    }
  }
  &__address {
    margin: 0 0 var(--spacer-base) 0;
    &:last-child {
      margin: 0;
    }
  }
}
.tab-orphan {
  @include for-mobile {
    --tabs-content-border-width: 0;
    --tabs-title-display: none;
    --tabs-content-padding: 0;
  }
}
.form {
  @include for-desktop {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  &__element {
    margin: 0 0 var(--spacer-base) 0;
    @include for-desktop {
      flex: 0 0 100%;
    }
    &--half {
      @include for-desktop {
        flex: 1 1 50%;
      }
      &-even {
        @include for-desktop {
          padding: 0 0 0 var(--spacer-lg);
        }
      }
    }
  }
  &__select {
    padding-bottom: calc(var(--font-xs) * 1.2);
  }
  &__button-cancel {
    margin-left: 1rem;
  }
}
.message {
  margin: 0 0 var(--spacer-base) 0;
}
.action-button {
  --button-width: 100%;
  display: inline-block;
  margin-bottom: 1rem;

  @include for-desktop {
    --button-width: auto;
    margin-right: 1rem;
  }
}
</style>
