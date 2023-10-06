import express from "express"
import homerouter from "../controller/AcountController";
let router = express.Router();

let initAcountRoutes = (app) => {
    router.get('/getdsAcount', homerouter.getHomePage)

    router.get('/about', homerouter.getAboutPage)
    router.get('/GetAcountByid/:id', homerouter.AcountByid)
    return app.use("/", router)

}



module.exports = initAcountRoutes;