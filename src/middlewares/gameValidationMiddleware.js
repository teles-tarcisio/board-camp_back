import dbConnection from '../database/database.js';

import { stripHtml } from 'string-strip-html';

import { newGameSchema } from '../schemas/index.js';


function handleNewGameData(newGame) {
  //strips HTML
  newGame.name = stripHtml(newGame.name).result.trim();
  newGame.image = stripHtml(newGame.image).result.trim();
  newGame.stockTotal = stripHtml(newGame.stockTotal).result.trim();
  newGame.pricePerDay = stripHtml(newGame.pricePerDay).result.trim();

  //strings to number
  newGame.stockTotal = parseInt(newGame.stockTotal);
  newGame.pricePerDay = parseInt(newGame.pricePerDay);
}

export default async function gameValidationMiddleware(req, res, next) {
  const newGameData = req.body;
  handleNewGameData(newGameData);

  //non-empty, stockTotal/pricePerDay to 'number' gt 0:
  const gameValidation = newGameSchema.validate(newGameData);
  if (gameValidation.error) {
    console.log(gameValidation.error.details[0].message);
    res.sendStatus(400);
    return;
  }
  
  try {
    //categoryId needs to exist
    const allCategoryIDs = await dbConnection.query('SELECT id FROM categories');
    const actualCategoryIds = allCategoryIDs.rows.map( category => category.id);
    if (!actualCategoryIds.includes(newGameData.categoryId)) {
      console.log('não existe categoria cadastrada com este id');
      res.sendStatus(400);
      return;
    }
    //pre-existent
    const allGameNames = await dbConnection.query('SELECT name FROM games');
    const actualGameNames = allGameNames.rows.map( game => game.name);
    if (actualGameNames.includes(newGameData.name)) {
      res.status(409).send('Já existe jogo cadastrado com este nome');
      return;
    }

    next();
      
  } catch (error) {
    console.log(error, '!erro! obtendo categorias do servidor');
    return res.status(500);   
  }
}