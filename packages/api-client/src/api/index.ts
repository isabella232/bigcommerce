import { Endpoints } from '../types/api';

import * as customers from './customers';
import * as review from './review';

const endpoints = {
  ...customers,
  ...review
};

export default endpoints as Endpoints;
