"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./router/userRoutes"));
const logger_1 = __importDefault(require("./middlewares/logger"));
const app = (0, express_1.default)();
const server = () => {
    app.use(express_1.default.json());
    app.use(logger_1.default);
    app.use("/api", userRoutes_1.default);
    return app;
};
exports.default = server;
