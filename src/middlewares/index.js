import categoryValidationMiddleware from './categoryValidationMiddleware.js';

import { gameValidationMiddleware, searchGameMiddleware } from './gameValidationMiddleware.js';

import { searchCPFMiddleware } from './searchCPFMiddleware.js';

import { customerIDMiddleware } from './customerIDMiddleware.js';


export {
  categoryValidationMiddleware,
  gameValidationMiddleware,
  searchGameMiddleware,
  searchCPFMiddleware, 
  customerIDMiddleware
};