import { Endpoints } from '../types';
import * as cart from './cart';
import * as categories from './category';
import * as customers from './customers';
import { getProducts } from './product';
import * as review from './review';
import * as wishlist from './wishlist';
import * as address from './address';
import * as order from './order';

const endpoints = {
  ...cart,
  ...categories,
  ...customers,
  getProducts,
  ...review,
  ...wishlist,
  ...address,
  ...order
};

export default endpoints as Endpoints;
