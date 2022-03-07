import { Router } from 'express';

import categoriesRouter from './categoriesRouter.js';

import gamesRouter from './gamesRouter.js';

import customersRouter from './customersRouter.js';

import rentalsRouter from './rentalsRouter.js';

const mainRouter = Router();
mainRouter.use(categoriesRouter);
mainRouter.use(gamesRouter);
mainRouter.use(customersRouter);
mainRouter.use(rentalsRouter);

export default mainRouter;