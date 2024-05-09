const Joi = require("joi");

const queryValidation = (req, res, next) => {
    const { id } = req.params;
    const {error} = Joi.number().validate(id)
    if (error) {
        next(error);
    }
    next();
}
module.exports = queryValidation