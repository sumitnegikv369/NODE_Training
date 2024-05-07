import { Request, Response } from "express";

interface UserController {
    home(req: Request, res: Response): void;
    validate(req: Request, res: Response): void;
    profile(req: Request, res: Response): void;
    post(req: Request, res: Response): void;
  }
  


class UserController{
    home = (req: Request, res: Response) => {
        res.json({message: "Hello, world!"});
    }
    validate = (req: Request, res: Response) => {
        res.json({message: "user validated!"})
    }
    profile = (req: Request, res: Response) => {
        res.json({message: "user profile access"})
    }
    post = (req: Request, res: Response) => {
        res.json({message: `user ${req.params.id} validated`})
    }
}

const user: UserController = new UserController();

export default user;