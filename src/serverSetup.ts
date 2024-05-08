import express from "express"
import userRouter from "./router/userRoutes"
import loggerMiddleware from "./middlewares/logger"
import HealthCheck from "./utils/healthCheck";

const healthCheck = new HealthCheck();
const app = express();

const server = () => {
    app.use(express.json());
    app.use(loggerMiddleware);
    app.get('/health', async (req, res) => {
        const response = await healthCheck.checkHealth();
        res.status(response.status).send(response.health);
      });
    app.use("/api",userRouter);
    return app;
}

export default server;
