import { Router } from "express";
import validateRequest from "../middlewares/validateRequest"
import locationValidation from "../middlewares/locationValidation"
import queryValidation from "../middlewares/queryValidaton"
import user from "../controllers/user.controller"
const router = Router();

router.post("/", user.home);

router.post("/validate", validateRequest, user.validate);

router.get("/profile", locationValidation, user.profile);

router.post("/post/:id", queryValidation, user.post);

export default router;

