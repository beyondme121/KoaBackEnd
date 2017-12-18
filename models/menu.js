const db = require('../config/msdb.js')
const sql = require('../sql/sql.js')

const getAppNavigationHeader = async function () {
    const MenuInfo = await db.query(sql.getAppNavigationHeader,
        {
            type: db.QueryTypes.SELECT  
        }
    )
    .then(data => {
        console.log(data)
        return data
    })
    return MenuInfo
}

module.exports = {
    getAppNavigationHeader
}