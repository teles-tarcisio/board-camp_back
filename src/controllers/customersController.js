import dbConnection from '../database/database.js';

export async function getCustomers(req, res) {
  try {
    const searchByCPF = req.query.cpf;
    if (!searchByCPF) {
      const customersPromise =  await dbConnection.query(`
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