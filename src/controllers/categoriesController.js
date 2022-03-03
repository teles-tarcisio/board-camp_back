import dbConnection from '../database/database.js';

export async function getCategories(req, res) {
  try {
    const categoriesPromise = await dbConnection.query('SELECT * FROM categories;');
    res.status(200).send(categoriesPromise.rows);

  } catch (error) {
    console.log(error, '!erro! obtendo categorias do servidor');
    res.status(500);
    return;
  }
}

export async function createCategory(req, res) {
  try {
    const newCategoryName = req.body.name;
    await dbConnection.query(`INSERT INTO categories (name) VALUES ($1);`, [newCategoryName]);
    res.sendStatus(201);
    
  } catch (error) {
    console.log(error, '!erro! criando categoria no servidor');
    res.status(500);
    return;
  }
}