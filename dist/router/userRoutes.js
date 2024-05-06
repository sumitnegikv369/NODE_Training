"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateRequest = require("../middlewares/validateRequest");
const locationValidation = require("../middlewares/locationValidation");
const queryValidation = require("../middlewares/queryValidaton");
const router = (0, express_1.Router)();
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("Hello, world!");
}));
router.post("/validate", validateRequest, (req, res) => {
    res.json({ message: "user validated!" });
});
router.get("/profile", locationValidation, (req, res) => {
    res.json({ message: "user profile access" });
});
router.post("/post/:id", queryValidation, (req, res) => {
    res.json({ message: `user ${req.params.id} validated` });
});
module.exports = router;
