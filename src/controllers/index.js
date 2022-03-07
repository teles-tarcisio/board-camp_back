import { getCategories, createCategory } from './categoriesController.js';

import { getGames, insertGame } from './gamesController.js';

import { getCustomers, getCustomerByID, insertNewCustomer, updateCustomer } from './customersController.js';

import { getRentals } from './rentalsController.js';

export {
  getCategories,
  createCategory,
  getGames,
  insertGame,
  getCustomers,
  getCustomerByID,
  insertNewCustomer,
  updateCustomer,
  getRentals
};