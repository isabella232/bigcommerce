import {
  InventoryType,
  Product,
  ProductVariant
} from '@vue-storefront/bigcommerce-api';

/**
 * Return default variant for the product or undefined in case it's not found.
 * @param {Product} product Configurable product.
 * @returns {ProductVariant | undefined} Product variant or undefined.
 */
export const getDefaultVariant = (
  product: Product
): ProductVariant | undefined => {
  const configuration = product.options?.reduce((acc, option) => {
    const newValue =
      option.option_values.find((optionValue) => optionValue.is_default)
        ?.label ?? option.option_values[0].label;

    acc[option.display_name] = newValue;

    return acc;
  }, {});

  return product.variants?.find((variant) => {
    return Object.entries(configuration).every(([optionKey, optionValue]) => {
      return variant.option_values.some(
        (variantOption) =>
          variantOption.option_display_name === optionKey &&
          variantOption.label === optionValue
      );
    });
  });
};

/**
 * Returns a purchasable variant for the product or undefined if no variant is found. The default variant has higher priority.
 * @param {Product} product Configurable product.
 * @returns {ProductVariant | undefined} Product variant or undefined.
 */
export const getPurchasableDefaultVariant = (
  product: Product
): ProductVariant | undefined => {
  const defaultVariant = getDefaultVariant(product);

  if (defaultVariant && !defaultVariant.purchasing_disabled) {
    switch (product?.inventory_tracking) {
      case InventoryType.none:
        return defaultVariant;
      case InventoryType.product:
        if (product.inventory_level >= 1) {
          return defaultVariant;
        }

        break;
      case InventoryType.variant:
        if (defaultVariant.inventory_level >= 1) {
          return defaultVariant;
        }

        break;
      default:
        return defaultVariant;
    }
  }

  return product.variants?.find((variant) => {
    if (variant.purchasing_disabled) {
      return false;
    }

    switch (product?.inventory_tracking) {
      case InventoryType.none:
        return true;
      case InventoryType.product:
        return product.inventory_level >= 1;
      case InventoryType.variant:
        return variant.inventory_level >= 1;
      default:
        return true;
    }
  });
};
