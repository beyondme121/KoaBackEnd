const db = require('../config/msdb.js')
const sql = require('../sql/sql.js')

const getTop5CustomerList = async function () {
    const data = await db.query(sql.Top5customerlist, { type: db.QueryTypes.SELECT })
        .then(data => {
            console.log(data)
            return data   // return 返回结果给data
        })
    return data
}

const getTopNCustomerRevenue = async function () {
    const data = await db.query(sql.TopNCustomerRevenue, { type: db.QueryTypes.SELECT })
        .then(data => {
            console.log(data)
            return data
        })
    return data
}

const getTopNCustomerRevenueByNumber = async function (number) {
    const data = await db.query(sql.TopNCustomerRevenueByNumber,
        {
            replacements: [number],
            type: db.QueryTypes.SELECT
        })
        .then(data => {
            console.log(data)
            return data
        })
    return data
}

// 通过查询 区域,行业,获取Top N的客户
const getTopNCustomerRevenueByRegionIndustryNumber = async function (region, industry, number) {
    const data = await db.query(sql.getCustomerByRegionIndustry,
        {
            replacements: {
                CustomerRegionEN: ['North', 'South'],
                CustomerIndustryNameCN: ['水---1', '水---2'],
                number: number
            },
            type: db.QueryTypes.SELECT
        })
        .then(data => {
            console.log(data)
            return data
        })
    return data
}
// 获取客户业绩
const getCPPerformance = async function () {
    const data = await db.query(sql.getCPPerformance,
        {
            type: db.QueryTypes.SELECT  
        }
    )
    .then( data => {
        // console.log(data)
        return data
    })
    return data
}

module.exports = {
    getTop5CustomerList,
    getTopNCustomerRevenue,
    getTopNCustomerRevenueByNumber,
    getTopNCustomerRevenueByRegionIndustryNumber,
    getCPPerformance
}
