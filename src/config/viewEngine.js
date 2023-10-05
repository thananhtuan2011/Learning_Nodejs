import expres from "express"

let config = (app) => {
    app.use(expres.static("../public"))
    app.set("view engine", "ejs"); //jps,blade
    app.set("view", "../view")
}
module.exports = config;