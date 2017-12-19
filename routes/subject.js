const subject = require('../controllers/subjectController.js')
const router = require('koa-router')()


router.post('/home/subject', subject.getSubject)

module.exports = router