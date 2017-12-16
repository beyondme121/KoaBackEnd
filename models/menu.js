const db = require('../config/db')
const sql = require('../sql/sql')

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