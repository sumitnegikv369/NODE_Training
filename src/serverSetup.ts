import express from "express"
import userRouter from "./router/userRoutes"
import loggerMiddleware from "./middlewares/logger"

const app = express();

const server = () => {
    app.use(express.json());
    app.use(loggerMiddleware);
    app.use("/api",userRouter);
    return app;
}

export default server;
