import dbConnection from '../database/database.js';

export async function getCustomers(req, res) {
  try {
    const searchCPF = req.query.cpf;
    if (!searchCPF) {
      const customersPromise =  await dbConnection.query(`
      SELECT * FROM customers;
      `);
      res.status(200).send(customersPromise.rows);
    }
    //else -> use search by CPF query
    
  } catch (error) {
    console.log(error, '!erro! obtendo clientes do servidor');
    res.status(500);
    return;    
  }
}