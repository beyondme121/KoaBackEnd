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
    }
}
module.exports = config