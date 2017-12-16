const menu = require('../controllers/menuController')
const router = require('koa-router')()


router.get('/MenuList/header', menu.getAppNavigationHeader)

module.exports = router