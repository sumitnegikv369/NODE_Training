import { NextFunction, Request, Response } from "express";

const logger = (req: Request, res: Response, next: NextFunction) => {
    const method = req.method;
    const URL = req.url;
    const timestamp = new Date().toISOString();
    console.log(`method: ${method} \nURL: ${URL} \ntimestamp: ${timestamp}`);
    next();
}
module.exports = logger;

