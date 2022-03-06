import dbConnection from '../database/database.js';

export async function getCustomers(req, res) {
  try {
    const searchByCPF = req.query.cpf;
    if (!searchByCPF) {
      const customersPromise = await dbConnection.query(`
      SELECT * FROM customers;
      `);
      res.status(200).send(customersPromise.rows);
      return;
    }
    else {
      const searchCustomerPromise = await dbConnection.query(`
        SELECT * FROM customers
        WHERE customers.cpf ILIKE $1;     
      `, [searchByCPF + '%']);
      res.status(200).send(searchCustomerPromise.rows);
      return;
    }

  } catch (error) {
    console.log(error, '!erro! obtendo clientes do servidor');
    res.status(500);
    return;
  }
}

export async function getCustomerByID(req, res) {
  try {
    const targetID = req.params.id;
    const searchCustomerID = await dbConnection.query(`
        SELECT * FROM customers
        WHERE customers.id = $1;     
      `, [targetID]);

    if (searchCustomerID.rows.length === 0) {
      res.sendStatus(404);
      return;
    }

    res.status(200).send(searchCustomerID.rows[0]);
    return;
  } catch (error) {
  console.log(error, '!erro! obtendo clientes do servidor');
  res.status(500);
  return;
}
}