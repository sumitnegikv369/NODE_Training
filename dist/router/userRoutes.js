"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../middlewares/validateRequest"));
const locationValidation_1 = __importDefault(require("../middlewares/locationValidation"));
const queryValidaton_1 = __importDefault(require("../middlewares/queryValidaton"));
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const router = (0, express_1.Router)();
router.post("/", user_controller_1.default.home);
router.post("/validate", validateRequest_1.default, user_controller_1.default.validate);
router.get("/profile", locationValidation_1.default, user_controller_1.default.profile);
router.post("/post/:id", queryValidaton_1.default, user_controller_1.default.post);
exports.default = router;
