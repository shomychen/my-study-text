'use strict';
var fs = require('fs'),
  url = require('url'),
  http = require('http'),
  path = require('path');

// 从命令行参数获取root目录，默认是当前目录:
var root = path.resolve(process.argv[2] || '.');
console.log('Static root dir: ' + root);

var sever = http.createServer(function (request, response) {
  var pathname = url.parse(request.url).pathname;
  var filepath = path.join(root, pathname);

  fs.stat(filepath, function (err, stat) {
    if (!err && stat.isFile()) {
      console.log('200') + request.url;
      response.writeHead(200);
      fs.createReadStream(filepath).pipe(response);
    } else {
      console.log('404' + request.url);
      response.writeHead(404);
      response.end('404 Not Found');
    }
  })
  
})

sever.listen(8080);

console.log('Sever is running at http://127.0.0.1:8080/');

// 在命令行运行node file_server.js /path/to/dir，
// 把/path/to/dir改成你本地的一个有效的目录（如： node/static），
// 然后在浏览器中输入http://localhost:8080/index.html：