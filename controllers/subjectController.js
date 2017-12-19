const subject = require('../models/subject.js')

const getSubject = async function (ctx) {
    const result = await subject.getSubject()
    ctx.body = result
}

module.exports = {
    getSubject
}