// additional security practices using separate classes
class InputValidation {
    static validateInput(req, res, next) {
        const { email, password } = req.body;
            if (!email || !password) {
            return res.status(400).json({ message: 'Invalid input data' });
        }
        next();
    }
}

module.exports = InputValidation;
