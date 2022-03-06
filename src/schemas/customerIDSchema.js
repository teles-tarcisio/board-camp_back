import Joi from 'joi';

const customerIDSchema = Joi.object({
  id: Joi.number().min(1)
});

export default customerIDSchema;