import { Endpoints } from '../types';
import * as cart from './cart';
import * as categories from './category';
import * as customers from './customers';
import { getProducts } from './product';
import * as review from './review';

const endpoints = {
  ...cart,
  ...categories,
  ...customers,
  getProducts,
  ...review
};

export default endpoints as Endpoints;
