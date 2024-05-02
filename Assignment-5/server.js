const express = require("express");
const createError = require('http-errors');
const userRouter = require("./routes/userRouter");
const app = express();

const server = () => {
    app.use(express.json());
    app.use("/api",userRouter);
    return app;
}

module.exports = server;