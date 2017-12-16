const Sequelize = require('sequelize')
const config = require('./default.js')

module.exports = new Sequelize(config.msdb.database,
                               config.msdb.username, 
                               config.msdb.password,
    {
        host: config.msdb.host,
        dialect: config.msdb.dialect,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        define: {
            timestamps: false // 取消Sequelzie自动给数据表加入时间戳（createdAt以及updatedAt）
        }
    })

// db.authenticate().then( () => {
//     console.log('good')
// })  
// .catch((err) => {
//     console.log('bad')
// })