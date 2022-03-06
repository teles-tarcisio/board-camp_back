import { stripHtml } from 'string-strip-html';

export function searchCPFMiddleware(req, res, next) {
  const searchCPFQuery = req.query;
  if (!searchCPFQuery.cpf) {
    next();
  }
  else {
    searchCPFQuery.cpf = stripHtml(searchCPFQuery.cpf).result.trim().replaceAll(' ', '');
    next();
  }
};