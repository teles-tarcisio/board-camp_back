import { Router } from 'express';

import { getGames, insertGame } from '../controllers/index.js';

import { gameValidationMiddleware } from '../middlewares/index.js';

const gamesRouter = Router();

gamesRouter.get('/games', getGames);

gamesRouter.post('/games', gameValidationMiddleware, insertGame);

export default gamesRouter;