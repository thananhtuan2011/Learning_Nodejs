import expres from "express"

let config = (app) => {
    app.use(expres.static("./src/public"))
    app.set("view engine", "ejs"); //jps,blade
    app.set("views", 'src/views')
}
module.exports = config; 