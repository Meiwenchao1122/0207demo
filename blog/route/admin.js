const express = require('express')

const home = express.Router()

home.get('/',(req,res) =>{
  res.send('欢迎来到 后台管理')
})
module.exports = home