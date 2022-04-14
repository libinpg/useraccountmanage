// node后端服务器
const homeApi = require('./api/homeApi') // 上面说的后台接口文件

const bodyParser = require('body-parser') 
// body-parser是非常常用的一个express中间件，作用是对http请求体进行解析

const express = require('express') // express框架
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// 后端api路由
app.use('/home', homeApi) // 使用homeapi文件中的接口

// 监听端口
app.listen(3000) // 监听server3000端口
console.log('success listen at port:3000')
