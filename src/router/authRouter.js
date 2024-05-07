const express = require("express");
const {register, page, login, dashboard} = require("../controllers/authController");
const verifyToken = require("../middlewares/jwtAuth");
const authorize = require("../middlewares/authorize");
const router = express.Router()

router.post("/signup", register);
router.post("/signin", login);
router.get("/page1", verifyToken, authorize, page);
router.get("/dashboard", verifyToken, authorize, dashboard); // specific to admin

module.exports = router