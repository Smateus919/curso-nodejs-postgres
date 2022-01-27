const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(5)
const userId = Joi.number().integer()
const email = Joi.string().email()
const password = Joi.string()

const createCustomerSchema = Joi.object({
  name: name.required(),
  user: Joi.object({
    email: email.required(),
    password: password.required()
  })
});

const updateCustomerSchema = Joi.object({
  name: name,
  userId
});

const getCustomerSchema = Joi.object({
  id: id.required(),
});

module.exports = { createCustomerSchema, updateCustomerSchema, getCustomerSchema }
