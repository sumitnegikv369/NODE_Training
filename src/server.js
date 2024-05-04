const express = require("express");
const userRouter = require("./router/userRouter");
const userRouter2 = require("./router/userRouter2");
const app = express();

const server = () => {
    app.use(express.json());
    app.use("/api",userRouter);
    app.use("/api",userRouter2);
    return app;
}

module.exports = server;