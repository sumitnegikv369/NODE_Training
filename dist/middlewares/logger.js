"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger = (req, res, next) => {
    const method = req.method;
    const URL = req.url;
    const timestamp = new Date().toISOString();
    console.log(`method: ${method} \nURL: ${URL} \ntimestamp: ${timestamp}`);
    next();
};
module.exports = logger;
