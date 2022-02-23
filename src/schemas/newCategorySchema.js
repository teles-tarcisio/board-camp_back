import Joi from 'joi';

const newCategorySchema = Joi.object({
  name: Joi.string().trim().min(3).max(17).required()
});

export default newCategorySchema;