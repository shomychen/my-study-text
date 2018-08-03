/**
 * NodeJS路由
 * 参考：https://mp.weixin.qq.com/s/OR9VZpW_9psMtCPnGZtoRw
 * 一个服务器会存储大量的文件。当浏览器发送请求时，会告知服务器他们需要的文件，而服务器会将相应的文件返回给客户端。这就叫做路由。
 * */
  const http = require('http'),
         url = require('url');
  makerServer = function (request, response) {
    // 为parse()方法传入一个url字符串参数，这个方法会将url拆分成 protocol、 host、 path和 querystring等部分。
    // 获取当前请求URL的路径名
    let path = url.parse(request.url).pathname;
    console.log(path);
    if (path === '/') {
      response.writeHead(200,{'Content-Type':'text/plain'});
      response.write('Hello world');
    } else if (path === '/about') {
      response.writeHead(200,{'Content-Type':'text/plain'});
      response.write('About page');
    } else if (path === '/blog') {
      response.writeHead(200,{'Content-Type':'text/plain'});
      response.write('Blog page');
    } else {
      response.writeHead(400,{'Content-Type':'text/plain'});
      response.write('Error page,\t\n' +
        '客户端请求错误，请求资源不存在');
    }
    response.end();
  }
  server = http.createServer(makerServer);

  server.listen(3000, () => {
    console.log('Node server created at port 3000');
  });