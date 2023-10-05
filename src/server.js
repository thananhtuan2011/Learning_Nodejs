import express from "express"
import viewConfig from "./config/viewEngine"
import bodyParser from "body-parser"
import initRouter from "./router/web"

require("dotenv").config();

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
viewConfig(app);
initRouter(app)


let port = process.env.PORT || 6969;
// if port ===undefind => port 6969


app.listen(port, () => {
    console.log("listen port " + port)
});