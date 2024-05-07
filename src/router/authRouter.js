const express = require("express");
const {register, page, login} = require("../controllers/authController");
const verifyToken = require("../middlewares/jwtAuth");
const router = express.Router()

router.post("/signup", register);
router.post("/signin", login);
router.get("/page1", verifyToken, page);

module.exports = router