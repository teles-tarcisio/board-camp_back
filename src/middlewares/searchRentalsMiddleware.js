import { stripHtml } from 'string-strip-html';

export function searchRentalsMiddleware(req, res, next) {
  const searchRentalsQuery = req.query;
  if (!searchRentalsQuery.customerId) {
    next();
  }
  else {
    searchRentalsQuery.customerId = parseInt(stripHtml(searchRentalsQuery.customerId).result.trim().replaceAll(' ', ''));
    next();    
  }
};