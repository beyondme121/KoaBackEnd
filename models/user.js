const db = require('../config/db.js')
const sql = require('../sql/sql.js')

const getUserById = async function (id) {
    const userInfo = 
        await db.query(sql.sqlUser, { replacements: [id], type: db.QueryTypes.SELECT })
                .then((results) => {
                    console.log("--->",results)
                    return results
                })
    return userInfo
}


// getUserById(2).then((data) => {
//     console.log(data)
// })
// 通过用户id查找用户信息
// const getUserById = function (id) {
//     db.query("select * from user where id=?",
//         { replacements: [id], type: db.QueryTypes.SELECT }
//     )
//         .then((users) => {
//             console.log(users)
//         })
// }

// let sql = "select * from list where user_id=? and id=?"
// const getList = function (user_id, id) {
//     db.query(sql, 
//             {replacements: [user_id, id], type: db.QueryTypes.select })
//     .then((lists) => {
//         console.log(lists)
//     })
// }

// const getLists = function (user_id, id) {
//     db.query(sql,
//             { replacements: [user_id, id], type: db.QueryTypes.select }        
//     ).then((lists) => {
//         console.log(lists)
//     })
// }
// getLists(2,1)
// getUserById(2)


module.exports = {
    getUserById
}
