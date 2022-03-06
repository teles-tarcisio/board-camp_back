import { Router } from 'express';

import categoriesRouter from './categoriesRouter.js';

import gamesRouter from './gamesRouter.js';

import customersRouter from './customersRouter.js';

const mainRouter = Router();
mainRouter.use(categoriesRouter);
mainRouter.use(gamesRouter);
mainRouter.use(customersRouter);

export default mainRouter;