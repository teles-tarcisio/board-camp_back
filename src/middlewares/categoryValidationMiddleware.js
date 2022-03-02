import { getCategories } from '../controllers/categoriesController.js';
import { stripHtml } from 'string-strip-html';
import newCategorySchema from '../schemas/newCategorySchema.js';

export default function categoryValidationMiddleware(req, res, next) {
  const newCategoryData = req.body;
  newCategoryData.name = stripHtml(newCategoryData.name).result.trim();

  const allCategoriesPromise = getCategories;
  console.log(allCategoriesPromise);

  const categoryValidation = newCategorySchema.validate(newCategoryData);
  if (categoryValidation.error) {
    console.log(categoryValidation.error.details[0].message);
    return res.sendStatus(400);
  }

  next();
}