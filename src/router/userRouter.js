const express = require("express");
const validateRequest = require("../middlewares/validateRequest");
const locationValidation = require("../middlewares/locationValidation");
const queryValidation = require("../middlewares/queryValidaton");
const router = express.Router();

router.post("/validate", validateRequest, (req, res) => {
    res.json({message: "user validated!"})
});

router.get("/profile", locationValidation, (req, res) => {
    res.json({message: "user profile access"})
});

router.post("/post/:id", queryValidation, (req, res) => {
    res.json({message: `user ${req.params.id} validated`})
});

module.exports = router;