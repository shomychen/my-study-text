// 使用Express进行路由
const express = require('express'),
      server  = express();
// 设置监听端口,process.env.PORT是程序运行时的环境所设置的
server.set('port', process.env.PORT || 3000);

// Basic routes
server.get('/', (request, response) => {
  response.send('Home page')
})
server.get('/about', (request, response) => {
  response.send('Sbout page')
})

// Express error handling middleware
server.use((request, response) => {
  response.type('text/plain');
  response.status(505);
  response.send('Error Page')
})

// Express listen
server.listen(3000, () => {
  console.log('Node server created at port 3000')
});