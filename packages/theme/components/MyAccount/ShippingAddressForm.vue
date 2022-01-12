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
        :error-message="
          $t(
            'Please type your first name. Your name should have at least 2 characters.'
          )
        "
        @blur="firstNameBlur = false"
      />
      <SfInput
        v-model="lastName"
        name="lastName"
        :label="$t('Last Name')"
        required
        class="form__element form__element--half form__element--half-even"
        :valid="lastNameBlur || validLastName(lastName)"
        :error-message="
          $t(
            'Please type your last name. Your name should have at least 2 characters.'
          )
        "
        @blur="lastNameBlur = false"
      />
      <SfInput
        v-model="streetName"
        name="streetName"
        :label="$t('Street Name')"
        required
        class="form__element"
        :valid="streetNameBlur || validStreetName(streetName)"
        :error-message="$t('Please type your street name')"
        @blur="streetNameBlur = false"
      />
      <SfInput
        v-model="apartment"
        name="apartment"
        :label="$t('House/Apartment number')"
        required
        class="form__element"
        :valid="apartmentBlur || validApartment(apartment)"
        :error-message="$t('Please type your house/apartment number.')"
        @blur="apartmentBlur = false"
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
        required
        class="form__element form__element--half form__element--half-even"
        :valid="stateBlur || validState(state)"
        :error-message="$t('Please type your state/province.')"
        @blur="stateBlur = false"
      />
      <SfInput
        v-model="zipCode"
        name="zipCode"
        :label="$t('Zip-code')"
        required
        class="form__element form__element--half"
        :valid="zipCodeBlur || validZipCode(zipCode)"
        :error-message="$t('Please type your zip code.')"
        @blur="zipCodeBlur = false"
      />
      <SfComponentSelect
        v-model="country"
        name="country"
        :label="$t('Country')"
        required
        class="sf-component-select--underlined form__select form__element form__element--half form__element--half-even"
        data-testid="country"
        :valid="countryBlur || validCountry(country)"
        :error-message="$t('Please choose your country.')"
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
      <SfInput
        v-model="phoneNumber"
        name="phone"
        :label="$t('Phone number')"
        required
        class="form__element"
        :valid="phoneNumberBlur || validPhoneNumber(phoneNumber)"
        :error-message="$t('Please type your phone number.')"
        @blur="phoneNumberBlur = false"
      />
      <SfButton class="action-button" @click="saveAddress" v-if="!isNew">{{
        $t('Update address')
      }}</SfButton>
      <SfButton class="action-button" @click="saveAddress" v-else>{{
        $t('Save address')
      }}</SfButton>
      <SfButton
        @click="cancel()"
        class="action-button"
      >
        {{ $t('Cancel') }}
      </SfButton>
    </div>
  </transition>
</template>
<script>
import {
  SfInput,
  SfButton,
  SfComponentSelect,
  SfIcon
} from '@storefront-ui/vue';
import { countries } from '../../helpers/countries';

export default {
  name: 'ShippingAddressForm',
  components: {
    SfInput,
    SfButton,
    SfComponentSelect,
    SfIcon
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
      nameBlur: true,
      firstName: this.address.first_name || '',
      firstNameBlur: true,
      lastName: this.address.last_name || '',
      lastNameBlur: true,
      streetName: this.address.address1 || '',
      streetNameBlur: true,
      apartment: this.address.address2 || '',
      apartmentBlur: true,
      city: this.address.city || '',
      cityBlur: true,
      state: this.address.state_or_province || '',
      stateBlur: true,
      zipCode: this.address.postal_code || '',
      zipCodeBlur: true,
      country: this.address.country_code || '',
      countryBlur: true,
      phoneNumber: this.address.phone || '',
      phoneNumberBlur: true,
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
          address1: this.streetName,
          address2: this.apartment,
          city: this.city,
          state_or_province: this.state,
          postal_code: this.zipCode,
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
      this.nameBlur = false;
      this.firstNameBlur = false;
      this.lastNameBlur = false;
      this.streetNameBlur = false;
      this.apartmentBlur = false;
      this.cityBlur = false;
      this.zipCodeBlur = false;
      this.countryBlur = false;
      this.stateBlur = false;
      this.phoneNumberBlur = false;
      if (
        this.validPhoneNumber(this.phoneNumber) &&
        this.validFirstName(this.firstName) &&
        this.validLastName(this.lastName) &&
        this.validStreetName(this.streetName) &&
        this.validApartment(this.apartment) &&
        this.validCity(this.city) &&
        this.validState(this.state) &&
        this.validZipCode(this.zipCode) &&
        this.validCountry(this.country)
      ) {
        this.valid = true;
      }
    },
    validFirstName(firstName) {
      return firstName.length > 2;
    },
    validLastName(lastName) {
      return lastName.length > 2;
    },
    validStreetName(streetName) {
      return streetName.length > 2;
    },
    validApartment(apartment) {
      return Boolean(apartment);
    },
    validCity(city) {
      return Boolean(city) && city.length > 2;
    },
    validState(state) {
      return Boolean(state) && state.length > 2;
    },
    validZipCode(zipCode) {
      return Boolean(zipCode) && zipCode.length > 2;
    },
    validCountry(country) {
      return Boolean(country);
    },
    validPhoneNumber(phoneNumber) {
      return Boolean(phoneNumber);
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
