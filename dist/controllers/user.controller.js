"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserController {
    constructor() {
        this.home = (req, res) => {
            res.json({ message: "Hello, world!" });
        };
        this.validate = (req, res) => {
            res.json({ message: "user validated!" });
        };
        this.profile = (req, res) => {
            res.json({ message: "user profile access" });
        };
        this.post = (req, res) => {
            res.json({ message: `user ${req.params.id} validated` });
        };
    }
}
const user = new UserController();
exports.default = user;
