
var { conn, sql } = require("../Database/connect")
let getHomePage = async (req, res) => {
    var pool = await conn;
    var sqlstring = "select * from  Account"
    return await pool.request().query(sqlstring, (err, data) => {
        console.log("err", err)
        console.log("dtdtdt", data)
    })
    return res.render('home/homepage.ejs');
}
let getAboutPage = (req, res) => {
    return res.render('about/aboutpage.ejs');
}
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage
}