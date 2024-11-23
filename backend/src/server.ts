// import App from "./app";
import App from "@/app";
import UserRoutes from "./routes/user.routes";

const appServer = new App([
    new UserRoutes()
]);
appServer.server();