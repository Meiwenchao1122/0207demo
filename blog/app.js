const express = require('express')
const app = express()

//导入路由
const home = require('./route/home')
const admin = require('./route/admin')

app.use('/home',home)
app.use('/admin',admin)

app.listen(8081)
console.log('网站服务器创建成功')