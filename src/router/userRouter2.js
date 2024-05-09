const express = require("express");
const createError = require("http-errors");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello");
});

router.get("/error-500", (req, res, next) => {
  next(createError(500, "Internal Server Error"));
});

router.get("/error-401", (req, res, next) => {
  next(createError(401, "Unauthorized"));
});

router.get("/async-error", async (req, res, next) => {
  try {
    throw new Error("Async Error");
  } catch (err) {
    next(createError(500, "Internal Server Error"));
  }
});

router.get("/validate", (req, res, next) => {
  const { param1 } = req.query;
  if (!param1) {
    return next(createError(400, "Missing Parameters"));
  }
  res.json({ message: "Validation Successful", data: { param1 } });
});

module.exports = router;