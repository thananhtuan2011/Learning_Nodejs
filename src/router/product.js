import express from "express"
import prorouter from "../controller/productController";
let router = express.Router();

let initProductRoutes = (app) => {
    router.get('/getDSProduct', prorouter.getDSProduct)

    return app.use("/", router)

}



module.exports = initProductRoutes;