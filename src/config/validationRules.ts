import Joi from "joi"

const validationRule = {
  "/api/validate": Joi.object({

    username: Joi.string().alphanum().min(3).max(30).required(),

    email: Joi.string().email().required(),

    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),

  }),
  "/api/user": Joi.object({

    username: Joi.string().alphanum().min(3).max(30).required(),

    email: Joi.string().email().required(),

    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),

  })
}
export default validationRule;
