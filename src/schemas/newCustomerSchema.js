import Joi from 'joi';

const newCustomerSchema = Joi.object({
  name: Joi.string().trim().min(3),
  phone: Joi.string().trim().pattern(/^[0-9]+$/).min(10).max(11),
  cpf: Joi.string().pattern(/^[0-9]+$/).length(11),
  birthday: Joi.string().isoDate().required()
});

export default newCustomerSchema;