const express = require("express");
const validateRequest = require("../middlewares/validateRequest");
const { user } = require("../controllers/UserController");
const router = express.Router();

router.post('/', validateRequest,user);


module.exports = router;