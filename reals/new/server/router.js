let express = require('express')
let router = express.Router()
let user = require('./API/user')
let info = require('./API/list')
let pho = require('./API/pho')

router.get('/user', user.get)
router.get('/list/get',info.get)
router.post('/list/add',info.add)
router.post('/pho/post',pho.post)

module.exports = router
    