const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).send('Authorization header is missing');
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRETKEY);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(403).send('Invalid or expired token');
    }
};

const generateDummyToken = (req, res, next) => {
    const payload = {
        userId: 2,
        username: 'sumit',
        roles: 'admin',
    };

    const options = {
        expiresIn: '1h',
    };
    const token = jwt.sign(payload, process.env.JWT_SECRETKEY, options)
    req.headers.authorization = 'Bearer' + " " + token;
    next();
}

module.exports = {
    authenticateJWT,
    generateDummyToken
};

// 6. Develop an authentication middleware using a JWT dummy token.
// 12.Build middleware that adds a custom header to every response. Allow the header value to be configurable.