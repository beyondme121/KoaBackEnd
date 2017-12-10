const user = require('../controllers/userController.js')
const router = require('koa-router')()

router.get('/user/:id', user.getUserInfo)


module.exports = router
