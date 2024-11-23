import express, { Express } from "express";
import { Routes } from "./interfaces/route.interface";
import db from '@/models'

export default class App {
    private app: Express;
    private port: number

    constructor(routes: Routes[]){
        this.app = express();
        this.port = 8000;
        this.connectDatabase();
        this.initializeRoutes(routes);
    };

    private initializeRoutes(routes: Routes[]){
        routes?.forEach(route => this.app.use(route.routes));
    }

    private connectDatabase(){
        db?.authenticate().then(() => {
            console.log('The Database connected successfully!')
        }).catch(err => console.log("Function connectDatabase: ", err))
    }

    public server(){
        this.app.listen(this.port, ()=> {
            console.log(`The server is running on the port: ${this.port}`)
        })
    }
}