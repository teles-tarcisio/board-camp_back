import { Router } from 'express';

import { getCategories, createCategory } from '../controllers/categoriesController.js';

import { categoryValidationMiddleware } from '../middlewares/index.js';

const categoriesRouter = Router();

categoriesRouter.get('/categories', getCategories );

categoriesRouter.post('/categories', createCategory);


export default categoriesRouter;