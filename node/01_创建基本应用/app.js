// 创建http模块
const http = require('http')
const server = http.createServer()

// 开启8000端口为node服务
server.listen(8000,() =>{
    console.log('端口正在监听')
})

server.on('request',(req,res)=>{
    // 设置请求头防止乱码
    res.setHeader('Content-type','text/plain;charset=utf-8')
    // 书写内容
    res.write('欢迎访问coderWorld的简易服务器')
    // 断开连接
    res.end()
})