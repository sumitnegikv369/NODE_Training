import { NextFunction, Request, Response } from "express";

const Joi = require("joi");

const queryValidation = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const {error} = Joi.number().validate(id)
    if (error) {
        next(error);
    }
    next();
}
export default queryValidation
