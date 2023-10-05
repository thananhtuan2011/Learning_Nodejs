import express from "express"
import homerouter from "../controller/homeController";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homerouter.getHomePage)

    router.get('/about', homerouter.getAboutPage)
    return app.use("/", router)

}


module.exports = initWebRoutes;