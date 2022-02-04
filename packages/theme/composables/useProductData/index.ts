import { AgnosticMediaGalleryItem, AgnosticPrice } from '@vue-storefront/core';
import {
  InventoryType,
  Product,
  ProductVariant
} from '@vue-storefront/bigcommerce-api';
import { getPurchasableDefaultVariant } from '@vue-storefront/bigcommerce';
import { AgnosticPagination } from '@vue-storefront/core';
import { useContext } from '@nuxtjs/composition-api';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useProductData = () => {
  const { $config } = useContext();

  const getName = (product: Product): string => {
    return product?.name || '';
  };

  const getSlug = (product: Product): string => {
    return product?.custom_url?.url.replace(/^\/|\/$/g, '') ?? '';
  };

  const getPrice = (
    product?: Product,
    activeVariant?: ProductVariant
  ): AgnosticPrice => {
    if (product?.is_price_hidden) {
      return {
        regular: 0,
        special: 0
      };
    }

    return {
      regular: activeVariant?.price ?? product?.price ?? 0,
      special: activeVariant?.sale_price ?? product?.sale_price ?? 0
    };
  };

  const getGallery = (
    product: Product,
    activeVariant?: ProductVariant
  ): AgnosticMediaGalleryItem[] => {
    const variantImage = activeVariant?.image_url;

    const productImages =
      product?.images
        ?.sort((first, second) => first.sort_order - second.sort_order)
        .map((image) => ({
          small: image.url_thumbnail,
          normal: image.url_standard,
          big: image.url_standard
        })) ?? [];

    if (variantImage) {
      productImages.unshift({
        small: variantImage,
        normal: variantImage,
        big: variantImage
      });
    }

    return productImages;
  };

  const getCoverImage = (product: Product): string => {
    if (product?.images?.length) {
      return (
        product.images.find((image) => image.is_thumbnail)?.url_standard ??
        product.images[0].url_standard
      );
    }

    return '';
  };

  const getDescription = (product: Product): string => {
    return product?.description ?? '';
  };

  const getCategoryIds = (product: Product): string[] => {
    return product?.categories.map((categoryId) => categoryId.toString()) ?? [];
  };

  const getId = (product: Product): string => {
    return product?.id?.toString() ?? '';
  };

  const getTotalReviews = (product: Product): number => {
    return product?.reviews_count ?? 0;
  };

  const getAverageRating = (product: Product): number => {
    return product?.reviews_rating_sum && product?.reviews_count
      ? product.reviews_rating_sum / product.reviews_count
      : 0;
  };

  const getRelatedProducts = (product: Product): number[] => {
    return product?.related_products ?? [];
  };

  const getOptions = (product: Product, filterByOptionName?: string[]) => {
    return (
      product?.options?.filter(
        (productOption) =>
          !filterByOptionName ||
          filterByOptionName.includes(productOption.display_name)
      ) ?? []
    );
  };

  const getActiveVariant = (
    product: Product,
    configuration: Record<string, unknown>
  ) => {
    if (!product || !configuration) {
      return undefined;
    }

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

  const getVariant = (product: Product, variantId: number): ProductVariant => {
    return product?.variants?.find((variant) => variant.id === variantId);
  };

  const getPagination = (meta): AgnosticPagination => {
    if (!meta?.pagination) {
      return {
        currentPage: 1,
        totalPages: 1,
        totalItems: 1,
        itemsPerPage: $config.theme?.itemsPerPage?.[0],
        pageOptions: $config.theme?.itemsPerPage
      };
    }

    return {
      currentPage: meta?.pagination?.current_page,
      totalPages: meta?.pagination?.total_pages,
      totalItems: meta?.pagination?.total,
      itemsPerPage: meta?.pagination?.per_page,
      pageOptions: $config.theme?.itemsPerPage
    };
  };

  const getInventory = (product: Product, activeVariant?: ProductVariant) => {
    switch (product?.inventory_tracking) {
      case InventoryType.none:
        return {
          enabled: false
        };
      case InventoryType.product:
        return {
          enabled: true,
          current: product.inventory_level,
          warningLevel: product.inventory_warning_level
        };
      case InventoryType.variant:
        return {
          enabled: true,
          current: activeVariant?.inventory_level,
          warningLevel: activeVariant?.inventory_warning_level
        };
      default:
        return {
          enabled: false
        };
    }
  };

  const canBeAddedToCart = (product: Product) => {
    if (!product) {
      return false;
    }

    if (!product.variants?.length) {
      switch (product.inventory_tracking) {
        case InventoryType.none:
          return true;
        case InventoryType.product:
          return product.inventory_level >= 1;
        case InventoryType.variant:
          return false;
      }
    }

    return Boolean(getPurchasableDefaultVariant(product));
  };

  return {
    getName,
    getSlug,
    getPrice,
    getGallery,
    getCoverImage,
    getDescription,
    getCategoryIds,
    getId,
    getTotalReviews,
    getAverageRating,
    getRelatedProducts,
    getOptions,
    getActiveVariant,
    getPagination,
    getVariant,
    getInventory,
    canBeAddedToCart
  };
};
