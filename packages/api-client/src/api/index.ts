import { Endpoints } from '../types/api';

import * as customers from './customers';
import { getProducts } from './product';
import * as review from './review';

const endpoints = {
  getProducts,
  ...customers,
  ...review
};

export default endpoints as Endpoints;
