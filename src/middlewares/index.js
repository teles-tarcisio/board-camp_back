import categoryValidationMiddleware from './categoryValidationMiddleware.js';

import { gameValidationMiddleware, searchGameMiddleware } from './gameValidationMiddleware.js';

import { searchCPFMiddleware } from './searchCPFMiddleware.js';

import { customerIDMiddleware } from './customerIDMiddleware.js';

import { newCustomerMiddleware } from './newCustomerMiddleware.js';

import { searchRentalsMiddleware } from './searchRentalsMiddleware.js';


export {
  categoryValidationMiddleware,
  gameValidationMiddleware,
  searchGameMiddleware,
  searchCPFMiddleware, 
  customerIDMiddleware,
  newCustomerMiddleware,
  searchRentalsMiddleware
};