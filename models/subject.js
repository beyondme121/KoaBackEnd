const db = require('../config/msdb.js')
const sql = require('../sql/sql-subject.js')

const getSubject = async function () {
    const SubjectInfo = await db.query(sql.getSubject,
        {
            type: db.QueryTypes.SELECT  
        }
    )
    .then(data => {
        console.log(data)
        return data
    })
    return SubjectInfo
}

module.exports = {
    getSubject
}