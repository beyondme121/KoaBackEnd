const menu = require('../models/menu.js')

const getAppNavigationHeader = async function (ctx) {
    const result = await menu.getAppNavigationHeader()
    ctx.body = result
}

module.exports = {
    getAppNavigationHeader
}