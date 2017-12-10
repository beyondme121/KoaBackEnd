const Sequelize = require('sequelize')
const config = require('./default.js')

module.exports = new Sequelize(config.db.database, config.db.username,config.db.password, {
    host: config.db.host,
    dialect: config.db.dialect,
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

