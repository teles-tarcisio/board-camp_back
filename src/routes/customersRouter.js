import { Router } from 'express';

import { getCustomers, getCustomerByID } from '../controllers/index.js';

import { searchCPFMiddleware, customerIDMiddleware } from '../middlewares/index.js';

const customersRouter = Router();

customersRouter.get('/customers', searchCPFMiddleware, getCustomers);
customersRouter.get('/customers/:id', customerIDMiddleware, getCustomerByID)

export default customersRouter;