import { Request, Response } from "express";
import { Router } from "express";
const validateRequest = require("../middlewares/validateRequest");
const locationValidation = require("../middlewares/locationValidation");
const queryValidation = require("../middlewares/queryValidaton");
const router = Router();

router.post("/", async (req: Request, res: Response) => {
    res.send("Hello, world!");
});

router.post("/validate", validateRequest, (req: Request, res: Response) => {
    res.json({message: "user validated!"})
});

router.get("/profile", locationValidation, (req: Request, res: Response) => {
    res.json({message: "user profile access"})
});

router.post("/post/:id", queryValidation, (req: Request, res: Response) => {
    res.json({message: `user ${req.params.id} validated`})
});

module.exports = router;

