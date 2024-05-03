"use strict";
const express = require("express");
const userRouter = require("./routes/userRoutes");
const loggerMiddleware = require("./middlewares/logger");
const app = express();
const server = () => {
    app.use(express.json());
    app.use(loggerMiddleware);
    app.use("/api", userRouter);
    return app;
};
module.exports = server;
