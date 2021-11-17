import { Product } from '@vue-storefront/bigcommerce-api';
import { useProductData } from '../../../composables/useProductData';
import { mockedProduct } from '../../__mocks__/product.mock';
import { expect } from '@jest/globals';

describe('[bigcommerce-theme] useProductData', () => {
  const productData = useProductData();

  it('getName should return the name of the product', async () => {
    expect(productData.getName(mockedProduct as Product)).toEqual(
      mockedProduct.name
    );
  });

  it('getName should return empty string when product is not defined', async () => {
    expect(productData.getName(undefined)).toEqual('');
  });

  it('getSlug should return customUrl from product without slashes', async () => {
    expect(productData.getSlug(mockedProduct as Product)).toEqual(
      'fog-linen-chambray-towel-beige-stripe'
    );
  });

  it('getSlug should return empty string when product is not defined', async () => {
    expect(productData.getSlug(undefined)).toEqual('');
  });

  it('getPrice should return price object', async () => {
    const priceData = productData.getPrice(mockedProduct as Product);

    expect(priceData.regular).toEqual(49);
    expect(priceData.special).toEqual(0);
  });

  it('getPrice should return 0 values when price is hidden', async () => {
    const priceData = productData.getPrice({
      ...mockedProduct,
      is_price_hidden: true
    } as Product);

    expect(priceData.regular).toEqual(0);
    expect(priceData.special).toEqual(0);
  });

  it('getPrice should return 0 values when product is not defined', async () => {
    const priceData = productData.getPrice(undefined);

    expect(priceData.regular).toEqual(0);
    expect(priceData.special).toEqual(0);
  });

  it('getGallery should sort and map product images', async () => {
    expect(productData.getGallery(mockedProduct as Product)).toEqual([
      {
        big:
          'https://cdn11.bigcommerce.com/s-moq5tdn0k6/products/77/images/266/foglinenbeigestripetowel1b.1633499289.386.513.jpg?c=1',
        normal:
          'https://cdn11.bigcommerce.com/s-moq5tdn0k6/products/77/images/266/foglinenbeigestripetowel1b.1633499289.386.513.jpg?c=1',
        small:
          'https://cdn11.bigcommerce.com/s-moq5tdn0k6/products/77/images/266/foglinenbeigestripetowel1b.1633499289.220.290.jpg?c=1'
      },
      {
        big:
          'https://cdn11.bigcommerce.com/s-moq5tdn0k6/products/77/images/267/foglinenbeigestripetowel2b.1633499289.386.513.jpg?c=1',
        normal:
          'https://cdn11.bigcommerce.com/s-moq5tdn0k6/products/77/images/267/foglinenbeigestripetowel2b.1633499289.386.513.jpg?c=1',
        small:
          'https://cdn11.bigcommerce.com/s-moq5tdn0k6/products/77/images/267/foglinenbeigestripetowel2b.1633499289.220.290.jpg?c=1'
      },
      {
        big:
          'https://cdn11.bigcommerce.com/s-moq5tdn0k6/products/77/images/265/foglinenbeigestripetowel3b.1633499289.386.513.jpg?c=1',
        normal:
          'https://cdn11.bigcommerce.com/s-moq5tdn0k6/products/77/images/265/foglinenbeigestripetowel3b.1633499289.386.513.jpg?c=1',
        small:
          'https://cdn11.bigcommerce.com/s-moq5tdn0k6/products/77/images/265/foglinenbeigestripetowel3b.1633499289.220.290.jpg?c=1'
      }
    ]);
  });

  it('getGallery should return empty array when product is not defined', async () => {
    expect(productData.getGallery(undefined)).toEqual([]);
  });

  it('getCoverImage should return the url of the standard version of thumbnail image', async () => {
    expect(productData.getCoverImage(mockedProduct as Product)).toEqual(
      'https://cdn11.bigcommerce.com/s-moq5tdn0k6/products/77/images/266/foglinenbeigestripetowel1b.1633499289.386.513.jpg?c=1'
    );
  });

  it('getCoverImage should return empty string when product is not defined', async () => {
    expect(productData.getCoverImage(undefined)).toEqual('');
  });

  it('getId should return the id of the product as string', async () => {
    expect(productData.getId(mockedProduct as Product)).toEqual(
      mockedProduct.id.toString()
    );
  });

  it('getId should return empty string when product is not defined', async () => {
    expect(productData.getId(undefined)).toEqual('');
  });

  it('getTotalReviews should return the total number of reviews the product has', async () => {
    expect(productData.getTotalReviews(mockedProduct as Product)).toEqual(
      mockedProduct.reviews_count
    );
  });

  it('getTotalReviews should return 0 when product is not defined', async () => {
    expect(productData.getTotalReviews(undefined)).toEqual(0);
  });

  it('getAverageRating should return the average rating of product review', async () => {
    expect(
      productData.getAverageRating({
        ...mockedProduct,
        reviews_count: 3,
        reviews_rating_sum: 12
      } as Product)
    ).toEqual(4);
  });

  it('getAverageRating should return 0 when the product has no reviews', async () => {
    expect(productData.getAverageRating(mockedProduct as Product)).toEqual(0);
  });

  it('getAverageRating should return 0 when the product is not defined', async () => {
    expect(productData.getAverageRating(undefined)).toEqual(0);
  });

  it('getRelatedProducts should return the array of ids of related products', async () => {
    expect(productData.getRelatedProducts(mockedProduct as Product)).toEqual(
      mockedProduct.related_products
    );
  });

  it('getRelatedProducts should return empty array when the product is not defined', async () => {
    expect(productData.getRelatedProducts(undefined)).toEqual([]);
  });
});
