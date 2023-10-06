var { conn, sql } = require("../Database/connect")

let getDSProduct = async (req, res) => {
    var pool = await conn;
    var sqlstring = "select * from  Product"
    return await pool.request().query(sqlstring, (err, data) => {
        if (data.recordset.length > 0) {
            res.send({ result: data.recordset })

        }
        else {
            res.send({ result: "không có dữ liệu" })
        }



    })
}

module.exports =
{
    getDSProduct: getDSProduct
}