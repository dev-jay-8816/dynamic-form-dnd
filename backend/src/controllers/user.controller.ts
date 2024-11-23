import { Request, Response } from "express";


export default class UserController {

    public getUserList = async (
        req: Request,
        res: Response
    ) => {
        try {
            res.status(200).send("Hello World.");
        } catch (error: any) {
            res.status(500).send(error?.message || 'Somthing went wrong')
        }
    }
}