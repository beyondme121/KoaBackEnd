const config = {
    // 应用启动端口
    port: 3000,
    // 数据库配置
    db: {
        database: 'todolist_new',
        username: 'root',
        password: '123456',
        host: 'localhost',
        port: 3306,
        dialect: 'mysql'
    },
    msdb: {
        database: 'Report',
        username: 'sa',
        password: '1234QWERasdfZXCV',
        host: 'localhost',
        // port: 3306,
        dialect: 'mssql'
    }
}
module.exports = config