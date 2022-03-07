import { Router } from 'express';

import { searchRentalsMiddleware } from '../middlewares/index.js';

import { getRentals } from '../controllers/index.js';

const rentalsRouter = Router();

rentalsRouter.get('/rentals', searchRentalsMiddleware, getRentals);

export default rentalsRouter;