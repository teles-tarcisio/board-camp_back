import dbConnection from '../database/database.js';

export async function getGames(req, res) {
  try {
    const gamesPromise = await dbConnection.query('SELECT games.*, categories.name as "categoryName" FROM games JOIN categories ON games."categoryId"=categories.id;');
    res.status(200).send(gamesPromise.rows);

  } catch (error) {
    console.log(error, '!erro! obtendo jogos do servidor');
    res.status(500);
    return;
  }
}

export async function insertGame(req, res) {
  try {
    const { name, image, stockTotal, categoryId, pricePerDay } = req.body;
  await dbConnection.query(`INSERT INTO games (name, image, "stockTotal", "categoryId", "pricePerDay") VALUES ($1, $2, $3, $4, $5);`, [name, image, stockTotal, categoryId, pricePerDay]);
    res.sendStatus(501);
    
  } catch (error) {
    console.log(error, '!erro! criando jogo no servidor');
    res.status(500);
    return;
  }
}