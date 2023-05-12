// 首先 npm install express -g 否则以下代码则没有意义

// 引入express定义其实例
const express = require('express')
const app = new express()

// 页面显示内容
app.get('/',(req,res) => {
    res.send('欢迎访问coderWorld的简易express服务器')
})

// 监听端口
app.listen(3000,()=>{
    console.log('欢迎访问~')
})