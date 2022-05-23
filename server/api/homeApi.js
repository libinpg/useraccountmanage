// homeApi.js
var models = require('../db') // 引入db配置
var express = require('express') // express框架
var router = express.Router()
var mysql = require('mysql')
var $sql = require('../sqlMap') // sql语句
var sha1 = require('sha1');
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
  var array = [parms.useremail,parms.username,]
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

var createNonceStr = function () {//生成随机字符串
  return Math.random().toString(36).substr(2, 15);
}

var createTimestamp = function () {//生成时间戳
   return parseInt(new Date().getTime() / 1000) + '';
}

var row = function(obj){//处理数据格式的函数
   var keys = Object.keys(obj);
   keys = keys.sort();
   var newObj = {};
   keys.forEach(function(key) {
       newObj[key.toLowerCase()] = obj[key];
   });
   var string = '';
   for(var k in newObj){
       string += '&' + k + '=' + newObj[k];
   }
   string = string.substr(1);
   return string;
}


var sign = async function(username,userpassword){//生成signature签名等信息的方法
  var obj = {
      username,
      userpassword,
      nonceStr: createNonceStr(),
      timestamp: createTimestamp(),
  }
  var str = row(obj);
  console.log('str:',str);
  var token = sha1(str); //生成签名
  return token
}

router.post('/authenticate', async (req, res) => {
  var sql = $sql.home.authenticate
  var parms = req.body
  console.log(parms)
  var token = await sign(parms.username,parms.userpassword)
  var tokensql = $sql.home.inserttoken
  conn.query(tokensql, [token], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      console.log("保存token成功");
    }
  })
  console.log(token)
  conn.query(sql, [parms.username,parms.userpassword], function (err, result) {
    if (err) {
      res.send({status: 'failed'})
    }
    if (result) {
      res.send({status: 'success',token:token})
    }
  })
})


module.exports = router

