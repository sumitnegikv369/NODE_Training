const Joi = require('joi');
const express = require('express');

const app = express();

const userSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
})

const validateRegistration = (req, res, next) => {
    const {error} = userSchema.validate(req.body);

    if(error){
        const messages = error.details.map(detail => detail.message);
        return res.status(400).json({errors: messages})
    }

    next();
}

app.post('/register', validateRegistration, (req, res)=>{
    res.json({message: 'Registration successful'})
})

const validateNumericQueryParam = (paramName) => {
    return (req, res, next) => {
      const value = req.query[paramName];
  
      if (isNaN(value)) {
        return res.status(400).json({ error: `"${paramName}" must be a number` });
      }
  
      next();
    };
  };
  
  app.get('/products/:id', validateNumericQueryParam('id'), (req, res) => {
    // Handle request with validated numeric ID
  });

app.listen(4000, ()=>{

})