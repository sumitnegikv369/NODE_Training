const express = require("express");
const validateRequest = require("../middlewares/validateRequest");
// const locationValidation = require("../middlewares/locationValidation");
const queryValidation = require("../middlewares/queryValidaton");
const data = require('../data');
const {authenticateJWT, generateDummyToken} = require('../middlewares/authenticate');
const { user, post, profile, seedData, validate } = require("../controllers/UserController");
const router = express.Router();

router.post('/user', validateRequest,user);
router.post("/validate", validateRequest, validate);

// router.get("/profile", locationValidation, (req, res) => {
//     res.json({message: "user profile access"})
// });

router.post("/post/:id", queryValidation, post);
router.get('/profile', generateDummyToken, authenticateJWT, profile);
router.post('/data', generateDummyToken, authenticateJWT, seedData);

module.exports = router;