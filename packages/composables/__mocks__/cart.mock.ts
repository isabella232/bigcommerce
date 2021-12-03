import { Cart } from '@vue-storefront/bigcommerce-api';

export const mockedCart: Cart = {
  id: 'd52c12ca-e548-4794-97ed-4374843074b5',
  customer_id: 0,
  channel_id: 1,
  email: '',
  currency: { code: 'PLN' },
  tax_included: false,
  base_amount: 309,
  discount_amount: 0,
  cart_amount: 309,
  coupons: [],
  line_items: {
    physical_items: [
      {
        id: '4a8d2d6e-02ca-48d7-9424-bc30ef49ba30',
        parent_id: null,
        variant_id: 64,
        product_id: 80,
        sku: 'OTL',
        name: '[Sample] Orbit Terrarium - Large',
        url: 'https://vuestorefront.mybigcommerce.com/orbit-terrarium-large/',
        quantity: 2,
        taxable: true,
        image_url:
          'https://cdn11.bigcommerce.com/s-moq5tdn0k6/products/80/images/272/roundterrariumlarge.1633499289.220.290.jpg?c=1',
        discounts: [],
        coupons: [],
        discount_amount: 0,
        coupon_amount: 0,
        list_price: 109,
        sale_price: 109,
        extended_list_price: 218,
        extended_sale_price: 218,
        is_require_shipping: true,
        options: []
      },
      {
        id: '678d5cca-93ac-4e8e-90ae-c11fae197446',
        parent_id: null,
        variant_id: 18,
        product_id: 77,
        sku: 'SLCTBS-7113955F',
        name: '[Sample] Fog Linen Chambray Towel - Beige Stripe',
        url:
          'https://vuestorefront.mybigcommerce.com/fog-linen-chambray-towel-beige-stripe/',
        quantity: 1,
        taxable: true,
        image_url:
          'https://cdn11.bigcommerce.com/s-moq5tdn0k6/products/77/images/266/foglinenbeigestripetowel1b.1633499289.220.290.jpg?c=1',
        discounts: [],
        coupons: [],
        discount_amount: 0,
        coupon_amount: 0,
        list_price: 49,
        sale_price: 49,
        extended_list_price: 49,
        extended_sale_price: 49,
        is_require_shipping: true,
        options: [
          { name: 'Size', nameId: 108, value: 'M', valueId: 70 },
          { name: 'Color', nameId: 109, value: 'Blue', valueId: 10 }
        ]
      },
      {
        id: '70a670c3-6705-4aea-8325-836dead791dc',
        parent_id: null,
        variant_id: 48,
        product_id: 93,
        sku: 'SLLPJ-0BAF36BA',
        name: '[Sample] 1 L Le Parfait Jar',
        url: 'https://vuestorefront.mybigcommerce.com/1-l-le-parfait-jar/',
        quantity: 5,
        taxable: true,
        image_url:
          'https://cdn11.bigcommerce.com/s-moq5tdn0k6/products/93/images/311/leparfaitmedium3.1633499290.220.290.jpg?c=1',
        discounts: [],
        coupons: [],
        discount_amount: 0,
        coupon_amount: 0,
        list_price: 7,
        sale_price: 7,
        extended_list_price: 35,
        extended_sale_price: 35,
        is_require_shipping: true,
        options: [
          { name: 'Color', nameId: 111, value: 'Blue', valueId: 10 },
          { name: 'Size', nameId: 112, value: 'Small', valueId: 95 }
        ]
      },
      {
        id: '71c374d5-c4d4-429d-aa0d-446a7f45bb4e',
        parent_id: null,
        variant_id: 49,
        product_id: 93,
        sku: 'SLLPJ-CD28D4F0',
        name: '[Sample] 1 L Le Parfait Jar',
        url: 'https://vuestorefront.mybigcommerce.com/1-l-le-parfait-jar/',
        quantity: 1,
        taxable: true,
        image_url:
          'https://cdn11.bigcommerce.com/s-moq5tdn0k6/products/93/images/311/leparfaitmedium3.1633499290.220.290.jpg?c=1',
        discounts: [],
        coupons: [],
        discount_amount: 0,
        coupon_amount: 0,
        list_price: 7,
        sale_price: 7,
        extended_list_price: 7,
        extended_sale_price: 7,
        is_require_shipping: true,
        options: [
          { name: 'Color', nameId: 111, value: 'Orange', valueId: 13 },
          { name: 'Size', nameId: 112, value: 'Small', valueId: 95 }
        ]
      }
    ],
    digital_items: [],
    gift_certificates: [],
    custom_items: []
  },
  created_time: '2021-11-30T13:06:50+00:00',
  updated_time: '2021-12-01T09:59:33+00:00',
  locale: 'en'
};
