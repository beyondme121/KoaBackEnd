const Sequelize = require('sequelize')
const db = require('../config/db.js')

let Artical = db.define('artical', {
    articalId: {
        type: Sequelize.INTEGER,
        field: 'articalId'
    },
    articalTitle: {
        type: Sequelize.STRING,
        field: 'title'
    }
}, {
        // freezeTabelName 为 true 时不会在库中映射表时增加复数表名
        // 该选项为 true 时，user 在映射时映射成 user，而为 false 时会映射成users 
        freezeTableName: true
    })


let artical = Artical.sync({ force: false })

const addArtical = function (id, title) {
    return Artical.create({
        articalId: id,
        articalTitle: title
    })
}

addArtical(1,'hello')

module.exports = {
    addArtical
}