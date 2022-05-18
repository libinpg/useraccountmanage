// homeApi.js
var models = require('../db') // 引入db配置
var express = require('express') // express框架
var router = express.Router()
var mysql = require('mysql')
var $sql = require('../sqlMap') // sql语句

// 连接数据库
var conn = mysql.createConnection(models.mysql)
conn.connect()

var jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    })
  } else {
    res.json(ret)
  }
}

// 查询列表接口，
// get接口，这里配置的/getlist,使用的时候就是 /home/getlist
// 回看index.js 中 app.use('/home', homeApi) ，就懂了

router.get('/getlist', (req, res) => {
  var sql = $sql.home.search
  var parms = req.query
  console.log(parms)
  conn.query(sql, function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      console.log(result)
      res.send(result)
    }
  })
})


//请求任务列表
router.get('/gettasks', (req, res) => {
  var sql = $sql.home.gettasks
  var parms = req.query
  console.log(parms)
  conn.query(sql, function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      console.log(result)
      res.send(result)
    }
  })
})
//insertpolygoncollection

router.post('/insertpolygoncollection', (req, res) => {
  var sql = $sql.home.insertpolygoncollection
  var parms = req.body
  console.log(parms)
  conn.query(sql, [parms.username, parms.polygonarray], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

router.post('/getpolygoncollection', (req, res) => {
  var sql = $sql.home.getpolygoncollection
  var parms = req.body
  console.log(parms)
  conn.query(sql, [parms.username], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

router.post('/insertpolygoncollection', (req, res) => {
  var sql = $sql.home.insertpolygoncollection
  var parms = req.body
  console.log(parms)
  conn.query(sql, [parms.username,parms.polygonarray], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})
//更新用户名
router.post('/updatename', (req, res) => {
  var sql = $sql.home.updateusername
  var parms = req.body
  console.log(parms)
  conn.query(sql, [parms.newusername,parms.username], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})
//更新用户邮箱
router.post('/updateemail', (req, res) => {
  var sql = $sql.home.updateuseremail
  var parms = req.body
  console.log(parms)
  conn.query(sql, [parms.useremail,parms.username], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})
//更新用户密码
router.post('/updatepassword', (req, res) => {
  var sql = $sql.home.updateuserpassword
  var parms = req.body
  console.log(parms)
  conn.query(sql, [parms.userpassword,parms.username], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})
//更新用户微信ID
router.post('/updatewechatid', (req, res) => {
  var sql = $sql.home.updateuserwechatid
  var parms = req.body
  console.log(parms)
  conn.query(sql, [parms.userwechatid,parms.username], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})
router.post('/getidprogress', (req, res) => {
  var sql = $sql.home.searchidprogress
  var parms = req.body
  console.log(parms)
  conn.query(sql, [parms.id], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

router.get('/getprogress', (req, res) => {
  var sql = $sql.home.searchprogress
  var parms = req.query
  console.log(parms)
  conn.query(sql, function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      console.log(result)
      res.send(result)
    }
  })
})

router.post('/getidfeature', (req, res) => {
  var sql = $sql.home.searchidfeature
  var parms = req.body
  console.log(parms)
  conn.query(sql, [parms.id], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

router.post('/adduser', (req, res) => {
  var sql = $sql.home.adduser
  var parms = req.body
  console.log(parms)
  conn.query(sql, [parms.username,parms.userpassword], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

router.post('/authenticate', (req, res) => {
  var sql = $sql.home.authenticate
  var parms = req.body
  console.log(parms)
  conn.query(sql, [parms.username,parms.userpassword], function (err, result) {
    if (err) {
      res.send({status: 'failed'})
    }
    if (result) {
      res.send({status: 'success'})
    }
  })
})
module.exports = router

