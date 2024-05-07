"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const serverSetup_1 = __importDefault(require("./serverSetup"));
const PORT = process.env.PORT || 4001;
(0, serverSetup_1.default)().listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
});
