import { AgnosticMediaGalleryItem, AgnosticPrice } from '@vue-storefront/core';
import { Product, ProductVariant } from '@vue-storefront/bigcommerce-api';
import { AgnosticPagination } from '@vue-storefront/core';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useProductData = () => {
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

  const getGallery = (product: Product): AgnosticMediaGalleryItem[] => {
    return (
      product?.images
        ?.sort((first, second) => first.sort_order - second.sort_order)
        .map((image) => ({
          small: image.url_thumbnail,
          normal: image.url_standard,
          big: image.url_standard
        })) ?? []
    );
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

  // TODO: will implement pagination on a separated ticket
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getPagination = (product?: Product): AgnosticPagination => {
    return {
      currentPage: 1,
      totalPages: 1,
      totalItems: 1,
      itemsPerPage: 10,
      pageOptions: []
    };
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
    getPagination
  };
};
