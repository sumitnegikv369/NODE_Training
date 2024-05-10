const User = require("../models/user");

const user = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {user}