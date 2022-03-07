import dbConnection from '../database/database.js';

import { stripHtml } from 'string-strip-html';

import { newCustomerSchema } from '../schemas/index.js';


function handleNewCustomerData(newCustomer) {
  //strips HTML
  newCustomer.name = stripHtml(newCustomer.name).result.trim();
  newCustomer.phone = stripHtml(newCustomer.phone).result.trim();
  newCustomer.cpf = stripHtml(newCustomer.cpf).result.trim();
  newCustomer.birthday = stripHtml(newCustomer.birthday).result.trim();
}

export async function newCustomerMiddleware(req, res, next) {
  const newCustomerData = req.body;
  handleNewCustomerData(newCustomerData);

  //cpf string11, phone string10-11, name non-empty, birthday valid date:
  const newCustomerValidation = newCustomerSchema.validate(newCustomerData);
  if (newCustomerValidation.error) {
    console.log(newCustomerValidation.error.details[0].message);
    res.sendStatus(400);
    return;
  }
  try {
    //cpf must be non-existent
    const preExistentCPF = await dbConnection.query(`
      SELECT * FROM customers WHERE cpf LIKE $1
    `, [newCustomerData.cpf]);
    if (preExistentCPF.rows.length !== 0) {
      res.status(409).send("Já existe cliente cadastrado com este CPF");
      return;
    }

    next();   
      
  } catch (error) {
    console.log(error, '!erro! obtendo clientes do servidor');
    return res.status(500);   
  }
};