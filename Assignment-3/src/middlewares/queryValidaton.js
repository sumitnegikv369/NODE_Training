const Joi = require("joi");

const queryValidation = (req, res, next) => {
    const { id } = req.params;
    const {error} = Joi.number().validate(id)
    console.log(error)
    // const { error } = querySchema.validate({id});
    // if (error) {
    //     next(error);
    // }
    // next();
}
module.exports = queryValidation
