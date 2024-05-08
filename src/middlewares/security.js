class SecurityHeaders {
    constructor(options = {}) {
    }
  
    middleware= (req, res, next) => {
      res.setHeader("X-Content-Type-Options", "nosniff"); 
      next();
    }
  }
  
  const security = new SecurityHeaders();
  module.exports = security;