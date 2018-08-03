'user strict';
var fs = require('fs');

var data = 'Hello, Hello, Hello, Hello, Node.js';
// 异步写文件
fs.writeFile(__dirname + '/file/output.txt', data, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Write Ok');
  }
});
// 同步写文件
// fs.writeFileSync(__dirname + '/file/output.txt', data); // 同步的不需要callback
