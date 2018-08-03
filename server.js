// 使用Express进行路由
const express = require('express'),
  // 创建服务变量
  server = express(),
  users = require('./user');
// 设置监听端口,process.env.PORT是程序运行时的环境所设置的
server.set('port', process.env.PORT || 3000);

// Basic routes
server.get('/', (request, response) => {
  // 查找文件并且发送给服务器
  // __dirname 来获取服务器运行的根目录路径
  response.sendFile(__dirname + '/index.html')
})
server.get('/users', (request, response) => {
  // 向网页发送JSON格式内容
  response.json(users)
})

// Express error handling middleware
/*
server.use((request, response) = > {
  response.type('text/plain');
response.status(505);
response.send('Error Page')
})
*/

// Express listen
server.listen(3000, () => {
  console.log('Node server created at port 3000')
})