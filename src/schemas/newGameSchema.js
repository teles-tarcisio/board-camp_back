import Joi from 'joi';

const newGameSchema = Joi.object({
  name: Joi.string().trim().min(3).max(17).required(),
  image: Joi.string().trim(),
  stockTotal: Joi.number().integer().min(1),
  categoryId: Joi.number().integer().min(1),
  pricePerDay: Joi.number().integer().min(1)
});

export default newGameSchema;