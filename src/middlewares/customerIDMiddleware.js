import { stripHtml } from "string-strip-html";

import { customerIDSchema } from '../schemas/index.js';

export function customerIDMiddleware(req, res, next) {
  const searchIDQuery = req.params;
  if (!searchIDQuery.id) {
    next();
  }
  else {
    searchIDQuery.id = parseInt(stripHtml(searchIDQuery.id).result.trim().replaceAll(' ', ''));

    const idValidation = customerIDSchema.validate(searchIDQuery);
    if (idValidation.error) {
      console.log(idValidation.error.details[0].message);
      res.sendStatus(422);
      return;
    }
    next();
  }
}