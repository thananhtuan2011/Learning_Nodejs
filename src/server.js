import express from "express"
import viewConfig from "./config/viewEngine"
// import bodyParser from "body-parser"
const bodyParser = require("body-parser");
import initProductRoutes from "./router/product"
const initRouterAcount = require("./router/acount")

require("dotenv").config();

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
viewConfig(app);
initRouterAcount(app)
initProductRoutes(app)

// config port
let port = process.env.PORT || 6969;
// if port ===undefind => port 6969


app.listen(port, () => {
    console.log("listen port " + port)
});