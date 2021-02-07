const http = require('http')
const path= require('path')
const template = require('art-template')
const serveStatic = require('serve-static')
const querystring = require('querystring')
const dateformat = require('dateformat')
//路由接口
const router = require('router')()

//启动静态资源 css 部署
const serve = serveStatic(path.join(__dirname,'public')) 
//导入模板
template.defaults.root = (path.join(__dirname,'views'))
template.defaults.imports.dateformat = dateformat
router.get('/list',async (req,res)=>{
  let students = await Student.find()
  let html = template('list.art',{
    students:students
  })
  res.end(html)
})
router.get('/add',(req,res)=>{
  let html  = template('index.art',{})
  res.end(html)
})
router.post('/add',(req,res)=>{
    let formdata = ''
    req.on('data',param =>{
      formdata += param
    })
    req.on('end', async ()=>{
      await Student.create(querystring.parse(formdata))
      //重定向
      res.writeHead(301,{
        Location:'/list'
      })
      res.end("123")
    })

})
//服务器 服务
const app = http.createServer();
require('./model/connect')
const Student = require('./model/user')
app.on('request',(req,res)=>{
  //允许在所有请求之后 再去做其他事情
  router(req,res,()=>{
  })
  serve(req,res,()=>{
  })
})

app.listen(8081)
console.log('服务器启动成功')