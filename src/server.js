const express = require("express");
const userRouter = require("./router/userRouter");
const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/ErrorHandler");
const rateLimter = require("./middlewares/rateLimter");
const app = express();

const server = () => {
    app.use(express.json());
    app.use(logger);
    app.use(rateLimter(3));
    app.use("/user",userRouter);
    app.use(errorHandler);
    return app;
}

module.exports = server;