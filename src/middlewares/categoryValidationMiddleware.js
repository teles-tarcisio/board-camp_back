import dbConnection from '../database/database.js';

import { stripHtml } from 'string-strip-html';

import { newCategorySchema } from '../schemas/index.js';


export default async function categoryValidationMiddleware(req, res, next) {
  const newCategoryData = req.body;
  newCategoryData.name = stripHtml(newCategoryData.name).result.trim();

  //non-empty, length 3-17:
  const categoryValidation = newCategorySchema.validate(newCategoryData);
  if (categoryValidation.error) {
    console.log(categoryValidation.error.details[0].message);
    res.sendStatus(400);
    return;
  }

  //pre-existent  
  try {
    const allCategoriesPromise = await dbConnection.query('SELECT * FROM categories WHERE unaccent(name) ILIKE $1;', [newCategoryData.name]);
    if (allCategoriesPromise.rows.length !== 0) {
      res.status(409).send('Já existe categoria cadastrada com este nome');
      return;
    }

    next();
    
  } catch (error) {
    console.log(error, '!erro! obtendo categorias do servidor');
    return res.status(500);
  }
}