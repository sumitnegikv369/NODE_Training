const express = require("express");
const userRouter = require("./router/userRouter");
const app = express();

const serverSetup = () => {
    app.use(express.json());
    app.use("/api",userRouter);
    return app;
}

module.exports = serverSetup;