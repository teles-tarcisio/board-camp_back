import { Router } from 'express';

import { getCategories, createCategory } from '../controllers/categoriesController.js';

import { categoryValidationMiddleware } from '../middlewares/index.js';

const categoriesRouter = Router();

categoriesRouter.get('/categories', getCategories );

categoriesRouter.post('/categories', categoryValidationMiddleware, createCategory);

categoriesRouter.get('/rentals', (req, res) => {
  const testRent = [{
    id: 1,
    customerId: 1,
    gameId: 1,
    rentDate: '2021-06-20',
    daysRented: 3,
    returnDate: null,
    originalPrice: 4500,
    delayFee: null
  }];
  console.log('called rentals');
  res.send(testRent);
});

export default categoriesRouter;