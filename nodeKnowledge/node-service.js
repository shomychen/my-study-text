//server.js
/**
 * 用NodeJS写一个web应用*/
const http = require('http'),
  //  方法1：
  /*server = http.createServer();
  server.on('request',(request,response)=>{
      response.writeHead(200,{'Content-Type':'text/plain'});
      response.write('Hello world');
      response.end();
  });*/
//  方法2
  /* server = http.createServer((request, response) => {
      response.writeHead(200, {'Content-type': 'text/plain'});
      response.write('Hello World');
      response.end();
  })*/
//  方法3
  makerServer = function (request, response) {
    // 设置返回报文头部字段，比如状态码和内容类型。
    response.writeHead(200, {'Content-type': 'text/plain'});
    // 是对web页面进行写入操作
    response.write('Hello World');
    // 来结束这个响应
    response.end();
  }
  server = http.createServer(makerServer);

  server.listen(3000, () = > {
    console.log('Node server created at port 3000');
  });