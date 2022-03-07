import dbConnection from '../database/database.js';

export async function getRentals(req, res) {
  try {
    const customerIDRentals = req.query.customerId;
    //all rentals
    if (!customerIDRentals) {
      const rentalsPromise = await dbConnection.query(`
        SELECT
          rentals.*,
          customers.id as "customerId", customers.name as "customerName",
          games.id as "gameId", games.name as "gameName",
          categories.id as "categoryId", categories.name as "categoryName"
        FROM rentals
          JOIN customers ON rentals."customerId" = customers.id
          JOIN games ON rentals."gameId" = games.id
          JOIN categories ON games."categoryId"=categories.id;
      `);

      res.status(200).send(rentalsPromise.rows);
      /*
      res.status(200).send(rentalsPromise.rows.map( row => {
        const [ customerId, gameId,.... ]
      }));
      */

      return;
    }

    //customerID rentals
   
    //gameID rentals

  } catch (error) {
    console.log(error, '!erro! obtendo jogos do servidor');
    res.status(500);
    return;
  }
}