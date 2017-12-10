const userModel = require('../models/user.js')


const getUserInfo = async function (ctx) {
    const id = ctx.params.id
    const result = await userModel.getUserById(id)
    ctx.body = result
}

module.exports = {
    getUserInfo
}


