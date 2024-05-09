const express = require("express");
const userRouter = require("./router/userRouter");
const userRouter2 = require("./router/userRouter2");
const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/ErrorHandler");
const rateLimter = require("./middlewares/rateLimter");
const app = express();

const server = () => {
    app.use(express.json());
    app.use(logger);
    app.use(rateLimter(3));
    app.use(errorHandler);
    app.use("/api",userRouter);
    app.use("/api",userRouter2);
    return app;
}

module.exports = server;