const express = require('express')

const admin= express.Router()

admin.get('/',(req,res) =>{
  res.send('欢迎来到 首页')
})

module.exports = admin