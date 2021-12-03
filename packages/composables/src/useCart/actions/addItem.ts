import {
  Cart,
  CartIncludeEnum,
  CartItem,
  Product
} from '@vue-storefront/bigcommerce-api';
import { UseCartFactoryParams } from '@vue-storefront/core';
import { Context } from '../../types';

const getDefaultVariant = (product: Product) => {
  const configuration = product.options.reduce((acc, option) => {
    const newValue =
      option.option_values.find((optionValue) => optionValue.is_default)
        ?.label ?? option.option_values[0].label;

    acc[option.display_name] = newValue;

    return acc;
  }, {});

  return product.variants.find((variant) => {
    return Object.entries(configuration).every(([optionKey, optionValue]) => {
      return variant.option_values.some(
        (variantOption) =>
          variantOption.option_display_name === optionKey &&
          variantOption.label === optionValue
      );
    });
  });
};

export const addItem: UseCartFactoryParams<
  Cart,
  CartItem,
  Product
>['addItem'] = async (
  context: Context,
  { currentCart, product, quantity, customQuery }
) => {
  let variantId = customQuery?.variant_id
    ? Number.parseInt(customQuery.variant_id)
    : undefined;

  if (product.variants?.length && !variantId) {
    variantId = getDefaultVariant(product)?.id;
  }

  const { data } = await context.$bigcommerce.api.addCartItems({
    cartId: currentCart.id,
    include: 'line_items.physical_items.options,line_items.digital_items.options' as CartIncludeEnum,
    data: {
      line_items: [
        {
          product_id: product.id,
          quantity,
          variant_id: variantId
        }
      ]
    }
  });

  return data;
};
