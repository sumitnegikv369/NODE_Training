const express = require("express");
const userRouter = require("./router/userRouter");
const app = express();

const server = () => {
    app.use(express.json());
    app.use("/api",userRouter);
    return app;
}

module.exports = server;