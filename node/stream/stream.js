'use strict';
var fs = require('fs');

// 打开一个流
 var rs = fs.createReadStream(__dirname + '/file/sample.txt', 'utf-8');
 // data 事件表示流的数据已经可以读取了
 rs.on('data', function (chunk) {
   console.log('DATA:');
   console.log(chunk);
 })
// end 事件表示这个流已经到末尾了

rs.on('end', function () {
  console.log('END');
})
// error事件表示出错了
rs.on('error', function (err) {
  console.log('Print ERROR:' + err)
})