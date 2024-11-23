import { Express, Router } from "express";
import { Routes } from "@/interfaces/route.interface";
import UserController from "@/controllers/user.controller";

export default class UserRoutes implements Routes {
    public routes = Router();
    public path = '/user';
    private userController = new UserController()

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.routes.get(
            `${this.path}/list`,
            this.userController.getUserList
        )
    }

}