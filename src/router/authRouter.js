const express = require("express");
const {
  register,
  page,
  login,
  dashboard,
} = require("../controllers/authController");
const verifyToken = require("../middlewares/jwtAuth");
const authorize = require("../middlewares/authorize");
const SecurityHeaders = require("../middlewares/security");
const InputValidation = require("../middlewares/inputValidation");
const router = express.Router();

router.use(SecurityHeaders.setHeaders);
router.post("/signup", InputValidation.validateInput, register);
router.post("/signin", InputValidation.validateInput, login);
router.get("/page1", verifyToken, authorize, page);
router.get("/dashboard", verifyToken, authorize, dashboard); // specific to admin

module.exports = router;
