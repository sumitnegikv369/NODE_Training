const validationRule = require('../config/validationRules.js');

const validateRequest = (req, res, next) => {
    const route = req.originalUrl; 
    console.log(route)

    console.log(validationRule[route])
  
    if (!validationRule[route]) {
      return next(); 
    }
    const { error } = validationRule[route].validate(req.body);
  
    if (error) {
      return res.status(400).json({ message: error.details[0].message }); 
    }

    console.log(error)
  
    // next(); 
  }
  
  module.exports = validateRequest;