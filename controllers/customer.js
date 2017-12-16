const customer = require('../models/customer.js')

const getTop5CustomerList = async function (ctx) {
    const result = await customer.getTop5CustomerList()
    ctx.body = result
}


const getTop5CustomerRevenue = async function (ctx) {
    const result = await customer.getTopNCustomerRevenue()
    ctx.body = result
}

const getTopNCustomerRevenueByNumber = async function (ctx) {
    let number = ctx.params.number
    number = parseInt(number)
    const result = await customer.getTopNCustomerRevenueByNumber(number)
    ctx.body = result
}

const getTopNCustomerRevenueByRegionIndustryNumber = async function (ctx) {
    let number = parseInt(ctx.params.number)
    let region = ctx.params.region
    let industry = ctx.params.industry
    const result = await customer.getTopNCustomerRevenueByRegionIndustryNumber(region, industry, number)
    ctx.body = result
}

const getCPPerformance = async function (ctx) {
    const result = await customer.getCPPerformance()
    ctx.body = result
}


module.exports = {
    getTop5CustomerList,
    getTop5CustomerRevenue,
    getTopNCustomerRevenueByNumber,
    getTopNCustomerRevenueByRegionIndustryNumber,
    getCPPerformance
}