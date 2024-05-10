const express = require("express");
const validateRequest = require("../middlewares/validateRequest");
const { user } = require("../controllers/UserController");
const router = express.Router();

router.post('/user', validateRequest, user);


module.exports = router;