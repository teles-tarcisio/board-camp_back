import { Router } from 'express';

import { getCustomers } from '../controllers/index.js';

import { searchCPFMiddleware } from '../middlewares/index.js';

const customersRouter = Router();

customersRouter.get('/customers', searchCPFMiddleware, getCustomers);

export default customersRouter;