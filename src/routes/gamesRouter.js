import { Router } from 'express';

import { getGames, insertGame } from '../controllers/index.js';

import { gameValidationMiddleware, searchGameMiddleware } from '../middlewares/index.js';

const gamesRouter = Router();

gamesRouter.get('/games', searchGameMiddleware, getGames);

gamesRouter.post('/games', gameValidationMiddleware, insertGame);

export default gamesRouter;