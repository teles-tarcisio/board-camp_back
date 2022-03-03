import dbConnection from '../database/database.js';

import { stripHtml } from 'string-strip-html';

//import { newGameSchema } from '../schemas/index.js';


export default async function gameValidationMiddleware(req, res, next) {
  const newGameData = req.body;
  newGameData.name = stripHtml(newGameData.name).result.trim();
  console.log('aqui');

  //non-empty, stockTotal/pricePerDay to 'number' gt 0, categoryId needs to exist:
  /*
  const categoryValidation = newCategorySchema.validate(newCategoryData);
  if (categoryValidation.error) {
    console.log(categoryValidation.error.details[0].message);
    res.sendStatus(400);
    return;
  }
  */

  //pre-existent
  /*
  try {
    const allCategoriesPromise = await dbConnection.query('SELECT * FROM categories WHERE name=$1;', [newCategoryData.name]);
    if (allCategoriesPromise.rows.length !== 0) {
      res.status(409).send('Já existe categoria cadastrada com este nome');
      return;
    }

    next();
    
  } catch (error) {
    console.log(error, '!erro! obtendo categorias do servidor');
    return res.status(500);
  }
  */
  next();
}