const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
    
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
          return res.status(400).json({ message: 'Email already exists' });
        }
    
        const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS));
        const hashedPassword = await bcrypt.hash(password, salt);
    
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
    
        const token = jwt.sign({ userId: newUser._id }, "secret");
    
        res.status(201).json({ token });
      } catch (error) {
        res.status(500).json({ message: 'Server Error' });
      }
}

const isAdmin = async (req) => {
  const {adminPassword, adminEmail} = req.body;
  const user = await User.findOne({ email: adminEmail });
  if (!user) {
      return false
  }

  const isMatch = await bcrypt.compare(adminPassword, user.password);
  if (!isMatch) {
      return false
  }

  return true;
}


const adminRegister = async (req, res) => {
  try {

    if (!isAdmin(req.body)) {
      return res.status(403).send('Unauthorized');
  }

    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Please provide all fields' });
    }

    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS));
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ username, email, password: hashedPassword, role: 'admin' });
    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, "secret");

    res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

const login = async (req, res) => {
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
        
        const token = jwt.sign({ userId: user._id });
        
        res.json({ token });
      } catch (error) {
        res.status(500).json({ message: 'Server'});
      }
}

const page = (req, res) => {
    res.json({message: "page data"})
}

const dashboard = (req, res) => {
    res.json({message: "dashbard content"})
}
module.exports = {
    register,
    adminRegister,
    login,
    page,
    dashboard
};