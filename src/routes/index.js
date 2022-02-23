import { Router } from 'express';
import categoriesRouter from './categoriesRouter.js';

const mainRouter = Router();
mainRouter.use(categoriesRouter);

export default mainRouter;