import { Router } from "express";
import {UserController } from "./controllers/UserController";
import { body } from "express-validator";

export default class Routes {
    public router: Router;

    

    constructor() {
        this.router = Router();
        this.initRoutes();
    }

    private initRoutes() {
        this.router.get("/users/all", UserController.getUsers);
        this.router.get("/users/id", UserController.getUserById);
        this.router.get("/users/name", UserController.getUsersByName);
        this.router.post("/users",[
            body('name')
            .exists().withMessage('Name field is required')
            .isString().withMessage('Name should be a string'),
            body('active')
            .exists().withMessage('Active is required')
            .isBoolean().withMessage('Must be true or false')
        ], UserController.addUser);
        this.router.put("/users/id", UserController.updateUserById);
        this.router.delete("/users/id", UserController.deleteUserById)
    };
}

export const routes = new Routes();


