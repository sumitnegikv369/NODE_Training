const User = require("../models/user");
const bcrypt = require('bcrypt');

const authorize = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        if(user.role === 'admin'){
            next();
        }else{
            return res.status(401).json({ message: 'Unauthorize' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server'});
    }
}

module.exports = authorize;