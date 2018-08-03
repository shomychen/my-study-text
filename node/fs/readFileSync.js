'use strict';

var fs = require('fs');
// 同步读取文件
// var data = fs.readFileSync('sample.txt', 'utf-8');
// console.log(data);
// 同步读取文件发生错误，需要使用try..catch捕获该错误：
try {
  var data = fs.readFileSync(__dirname + '/file/sample.txt', 'utf-8');
  console.log(data);
} catch (err) {
  // 出错了
}