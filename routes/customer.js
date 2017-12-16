const customer = require('../controllers/customer.js')
const router = require('koa-router')()

router.get('/customer', customer.getTop5CustomerList)
// router.get('/customer/topN', customer.getTop5CustomerRevenue)
router.get('/customer/topN/:number', customer.getTopNCustomerRevenueByNumber)
router.get('/customer/:region/:industry/:number', customer.getTopNCustomerRevenueByRegionIndustryNumber)
router.get('/customer/getCPPerformance',customer.getCPPerformance)


module.exports = router
