let db = require('../db/index')

// exports.all = (req, res) => {        //获取info表全部数据
//     var sql = 'select * from resign'
//     db.body(sql, (err, data) => {
//         if(err) {
//             return res.send('错误：' + err.message)
//         }
//         res.send(data)
//     })
// }
exports.get = (req, res) => {        //通过id查询数据
    var sql = 'select * from resign where name = ?'    //？用于占位
    db.body(sql, [req.body.name], (err, data) => {
        if(err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}

// exports.del = (req, res) => {        //通过id删除数据
//     var sql = 'delete from info where id = ?'
//     db.body(sql, [req.body.id], (err, data) => {
//         if(err) {
//             return res.send('错误：' + err.message)
//         }
//         if(data.affectedRows > 0) {
//             res.send({
//               status: 200,
//               message: '删除成功'
//             })
//         }else{
//             res.send({
//               status: 202,
//               message: '删除失败'
//             })
//         }
//     })
// }

exports.add = (req, res) => {        //向info表添加数据
    console.log(req.body)
    var sql = 'insert into message (number,Firmname,area,peoplename,academy,time,remark,img_src) values (?,?,?,?,?,?,?,?)'
    db.query(sql, [req.body.number, req.body.Firmname,req.body.area,req.body.peoplename,req.body.academy,req.body.time,req.body.remark,req.body.img_src], (err, data) => {
        if(err) {
            console.log(err.message);
            return res.send('错误：' + err.message)
        }
        if(data.affectedRows > 0) {
            res.send({
              status: 200,
              message: 'success'
            })
        }else{
            res.send({
              status: 202,
              message: 'error'
            })
        }
    })
}

// exports.update = (req, res) => {        //通过id更新数据
//     var sql = 'update resign set key = ? where name = ?'
//     db.body(sql, [req.body.name, req.body.key], (err, data) => {
//         if(err) {
//             return res.send('错误：' + err.message)
//         }
//         if(data.changedRows > 0) {
//           res.send({
//             status: 200,
//             message: 'success'
//           })
//         }else{
//           res.send({
//             status: 202,
//             message: 'error'
//           })
//         }
//     })
// }
