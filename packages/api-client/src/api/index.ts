import { Endpoints } from '../types/api';

import * as customers from './customers';

const endpoints = {
  ...customers
};

export default endpoints as Endpoints;
