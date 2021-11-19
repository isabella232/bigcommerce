import { Endpoints } from '../types';
import * as categories from './category';
import * as customers from './customers';
import { getProducts } from './product';
import * as review from './review';

const endpoints = {
  ...categories,
  ...customers,
  getProducts,
  ...review
};

export default endpoints as Endpoints;
