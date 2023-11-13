let mysql = require('mysql')

let db = mysql.createPool({
    host: '101.201.56.171',     //数据库IP地址
    port:3306,
    user: 'root',          //数据库登录账号
    password: '20170101Lingeo',      //数据库登录密码
    database: 'test'       //要操作的数据库
})

module.exports = db
