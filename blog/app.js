const express = require('express')
const path = require('path')
const app = express()

//配置模板引擎
//1.指定模板位置
app.set('views',path.join(__dirname, 'views'))
//2.固定的模板后缀
app.set('view engine', 'art')
//3.指定使用什么引擎
app.engine('art',require('express-art-template'))
//开放静态资源 文件
app.use(express.static(path.join(__dirname,'public')))
//导入路由
const home = require('./route/home')
const admin = require('./route/admin')

app.use('/home',home)
//服务器端存储的css 文件是相对浏览器的, 不是当前的文件
app.use('/admin',admin)

app.listen(8081)
console.log('网站服务器创建成功')