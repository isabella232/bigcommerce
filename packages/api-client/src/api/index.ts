import { Endpoints } from '../types';
import * as cart from './cart';
import * as categories from './category';
import * as customers from './customers';
import { getProducts } from './product';
import * as review from './review';
import * as wishlist from './wishlist';

const endpoints = {
  ...cart,
  ...categories,
  ...customers,
  getProducts,
  ...review,
  ...wishlist
};

export default endpoints as Endpoints;
