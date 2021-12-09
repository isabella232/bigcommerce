import {
  Product,
  ProductVariant
} from '@vue-storefront/bigcommerce-api';

export const getDefaultVariant = (product: Product): ProductVariant => {
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
