const express = require("express");
const validateRequest = require("../middlewares/validateRequest");
const locationValidation = require("../middlewares/locationValidation");
const router = express.Router();

router.post("/validate", validateRequest);
router.get("/profile", locationValidation);
router.post("/post/:id", validateRequest);

module.exports = router;