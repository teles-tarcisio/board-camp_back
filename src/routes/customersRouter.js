import { Router } from 'express';

import { getCustomers, getCustomerByID, insertNewCustomer } from '../controllers/index.js';

import { searchCPFMiddleware, customerIDMiddleware, newCustomerMiddleware } from '../middlewares/index.js';

const customersRouter = Router();

customersRouter.get('/customers', searchCPFMiddleware, getCustomers);

customersRouter.get('/customers/:id', customerIDMiddleware, getCustomerByID);

customersRouter.post('/customers', newCustomerMiddleware, insertNewCustomer);

export default customersRouter;