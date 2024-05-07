import { NextFunction, Request, Response } from "express";

const validationRule = require('../config/validationRules.js');

const validateRequest = (req: Request, res: Response, next: NextFunction) => {
    const route = req.originalUrl; 

    if (!validationRule[route]) {
      return next(); 
    }
    
    const { error } = validationRule[route].validate(req.body);
  
    if (error) {
      return res.status(400).json({ message: error.details[0].message }); 
    }
  
    next(); 
  }
  
  export default validateRequest;