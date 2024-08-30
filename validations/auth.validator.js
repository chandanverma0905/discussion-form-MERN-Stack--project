
const Joi = require("joi");

// schema for login validation schema
const loginBodyValidationSchema = Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required()
  });

module.exports = {loginBodyValidationSchema};