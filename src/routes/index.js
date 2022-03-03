import { Router } from 'express';

import categoriesRouter from './categoriesRouter.js';

import gamesRouter from './gamesRouter.js';

const mainRouter = Router();
mainRouter.use(categoriesRouter);
mainRouter.use(gamesRouter);

export default mainRouter;