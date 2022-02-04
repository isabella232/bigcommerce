import {
  AgnosticMediaGalleryItem,
  AgnosticAttribute,
  AgnosticPrice,
  ProductGetters
} from '@vue-storefront/core';
import type { Product, ProductFilter } from '@vue-storefront/bigcommerce-api';

function getName(product: Product): string {
  return product?.name || '';
}

function getSlug(product: Product): string {
  return product?.custom_url?.url.replace(/^\/|\/$/g, '') ?? '';
}

function getPrice(product: Product): AgnosticPrice {
  if (product?.is_price_hidden) {
    return {
      regular: 0,
      special: 0
    };
  }

  return {
    regular: product?.price ?? 0,
    special: product?.sale_price ?? 0
  };
}

function getGallery(product: Product): AgnosticMediaGalleryItem[] {
  return product?.images.sort((first, second) => first.sort_order - second.sort_order).map((image) => ({
    small: image.url_thumbnail,
    normal: image.url_standard,
    big: image.url_standard
  })) ?? [];
}

function getCoverImage(product: Product): string {
  if (product?.images?.length) {
    return product.images.find(image => image.is_thumbnail)?.url_standard ?? product.images[0].url_standard;
  }

  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFiltered(products: Product[], filters: ProductFilter): Product[] {
  // TODO: implement this function during the development of product variations
  return products ?? [];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAttributes(products: Product[] | Product, filterByAttributeName?: string[]): Record<string, AgnosticAttribute | string> {
  return {};
}

function getDescription(product: Product): string {
  return product?.description ?? '';
}

function getCategoryIds(product: Product): string[] {
  return product?.categories.map(categoryId => categoryId.toString()) ?? [];
}

function getId(product: Product): string {
  return product?.id?.toString() ?? '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFormattedPrice(price: number): string {
  return '';
}

function getTotalReviews(product: Product): number {
  return product?.reviews_count ?? 0;
}

function getAverageRating(product: Product): number {
  return product?.reviews_rating_sum && product?.reviews_count ? product.reviews_rating_sum / product.reviews_count : 0;
}

export const productGetters: ProductGetters<Product, ProductFilter> = {
  getName,
  getSlug,
  getPrice,
  getGallery,
  getCoverImage,
  getFiltered,
  getAttributes,
  getDescription,
  getCategoryIds,
  getId,
  getFormattedPrice,
  getTotalReviews,
  getAverageRating
};
