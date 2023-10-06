
var { conn, sql } = require("../Database/connect")
let getHomePage = async (req, res) => {
    var pool = await conn;
    var sqlstring = "select * from  Account"
    return await pool.request().query(sqlstring, (err, data) => {

        res.send({ result: data.recordset })


    })
    // return res.render('home/homepage.ejs');
}
let AcountByid = async (req, res) => {
    // console.log("tttt", req)
    const id = req.params.id;
    var pool = await conn;
    var sqlstring = "select * from  Account where account_id=@account_id"
    return await pool.request().input("account_id", id).query(sqlstring, (err, data) => {
        if (data.recordset.length > 0) {
            res.send({ result: data.recordset })

        }
        else {
            res.send({ result: "Không có dữ liệu" })
        }

    })
    // return res.render('home/homepage.ejs');
}
let getAboutPage = (req, res) => {
    return res.render('about/aboutpage.ejs');
}
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    AcountByid: AcountByid
}