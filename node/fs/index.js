'use strict';

var fs = require('fs');
// 异步读取文件
fs.readFile(__dirname + '/file/sample.txt', function (err, data) {
  if (err) {
    console.log(err);
    console.log(__dirname);
  } else {
    // data参数返回一个Buffer对象
    console.log(data);
    // Buffer对象转换成String;
    var text = data.toString('utf-8');
    console.log(text);
    // 把一个String转换成Buffer：
    var buf = Buffer.from(text,'utf-8');
    console.log(buf);
    console.log(__dirname); // 全局变量，存储的是文件所在的文件目录
    console.log(__filename); // 全局变量，存储的是文件名
  }
});
