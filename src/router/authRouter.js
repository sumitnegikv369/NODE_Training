const express = require("express");
const {register, adminRegister, page, login, dashboard} = require("../controllers/authController");
const verifyToken = require("../middlewares/jwtAuth");
const authorize = require("../middlewares/authorize");
const router = express.Router()

router.post("/signup", register);
router.post("/admin/signup", adminRegister);
router.post("/signin", login);
router.get("/page1", verifyToken, authorize, page);
router.get("/dashboard", verifyToken, authorize, dashboard); // specific to admin

module.exports = router