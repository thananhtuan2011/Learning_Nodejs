const sql = require('mssql')

// const conn = async () => {
//     try {
//         // make sure that any items are correctly URL encoded in the connection string
//         return await sql.connect('Server=localhost,1433;Database=ClothesShop;User Id=sa;Password=sa2012;Encrypt=true')
//         // const result = await sql.query`select * from mytable where id = ${value}`
//         // console.dir(result)
//     } catch (err) {
//         // ... error checks
//     }
// }
const config = {
    user: 'sa',
    password: 'sa2012',
    server: 'T460S\\SQLEXPRESS',
    database: 'ClothesShop',
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true,
        useUTC: true
    }
}

const conn = new sql.ConnectionPool(config).connect().then(pool => {
    return pool;
})
module.exports =
{
    conn: conn,
    sql: sql
}