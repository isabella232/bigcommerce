import { User } from '@vue-storefront/bigcommerce-api';

export const mockedUser: User = {
  addresses: {
    resource: '/customers/11/addresses',
    url:
      'https://api.bigcommerce.com/stores/moq5tdn0k6/v2/customers/11/addresses'
  },
  company: '',
  customer_group_id: 0,
  date_created: 'Mon, 29 Nov 2021 16:16:50 +0000',
  date_modified: 'Mon, 29 Nov 2021 16:29:29 +0000',
  email: 'stan@che.com',
  first_name: 'Stan',
  form_fields: [
    {
      name: 'Cart ID',
      value: '7d26b524-1db8-4919-bf2c-e74ea6c508bf'
    }
  ],
  id: 11,
  last_name: 'Che',
  notes: '',
  phone: '',
  registration_ip_address: '',
  tax_exempt_category: ''
};
