let sqlUser = "select * from user where id=?"
let Top5customerlist = "SELECT top 100 CustomerName,CustomerId FROM dbo.CPERPCustomerList"

let TopNCustomerRevenue = `
    SELECT TOP 5 a.CustomerName,SUM(b.ActualRevenue) ActualRevenue
    FROM dbo.CPERPCustomerList a INNER JOIN dbo.CPERPCustomerRevenue b ON b.GroupCode = a.GroupCode
    AND b.CustomerId = a.CustomerId
    WHERE b.SaleDate BETWEEN 20170101 AND 20171231
    GROUP BY a.CustomerName
    ORDER BY 2 desc
`

let TopNCustomerRevenueByNumber = `
SELECT TOP ? a.CustomerName,SUM(b.ActualRevenue) ActualRevenue
FROM dbo.CPERPCustomerList a INNER JOIN dbo.CPERPCustomerRevenue b ON b.GroupCode = a.GroupCode
AND b.CustomerId = a.CustomerId
WHERE b.SaleDate BETWEEN 20170101 AND 20171231
GROUP BY a.CustomerName
ORDER BY 2 desc
`

let getCustomerByRegionIndustry = `
        SELECT  TOP :number
                a.CustomerName ,
                a.CustomerRegionEN ,
                a.CustomerIndustryNameCN ,
                SUM(b.ActualRevenue)
        FROM    dbo.CPERPCustomerList a
        INNER JOIN dbo.CPERPCustomerRevenue b ON b.GroupCode = a.GroupCode
                                                AND b.CustomerId = a.CustomerId
        WHERE   b.SaleDate BETWEEN 20170101 AND 20171231
          AND a.CustomerRegionEN IN (:CustomerRegionEN)
          AND a.CustomerIndustryNameCN IN (:CustomerIndustryNameCN)
        GROUP BY a.CustomerName ,
                 a.CustomerRegionEN ,
                 a.CustomerIndustryNameCN
        ORDER BY 4 DESC
`

let getCPPerformance = `
    SELECT a.CustomerName,a.GroupName,a.CustomerRegionEN,SUM(b.ActualRevenue) ActualRevenue
    FROM dbo.CPERPCustomerList a INNER JOIN dbo.CPERPCustomerRevenue b ON b.GroupCode = a.GroupCode
    AND b.CustomerId = a.CustomerId
    WHERE b.SaleDate BETWEEN 20170101 AND 20171231
    GROUP BY a.CustomerName,a.GroupName,a.CustomerRegionEN
`

///////////////////菜单///////////////////////////
let getAppNavigationHeader = `
    SELECT * FROM dbo.DimMenu
`



module.exports = {
    sqlUser,
    Top5customerlist,
    TopNCustomerRevenue,
    TopNCustomerRevenueByNumber,
    getCustomerByRegionIndustry,
    getCPPerformance,
    getAppNavigationHeader
}