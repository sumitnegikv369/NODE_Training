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

const post = (req, res) => {
  res.json({ message: `user ${req.params.id} validated` });
};

const profile = (req, res) => {
  res.json({ message: "authenticated successfully" });
};

const seedData = async (req, res) => {
  try {
    const seededData = await data.getData();
    res.json(seededData);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Internal Server Error");
  }
};

const validate = (req, res) => {
  res.json({ message: "user validated!" });
};

module.exports = {user, post, profile, seedData, validate}