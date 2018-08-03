'use strict';

var fs = require('fs');
// 将example.txt的内容写入copied.txt
var rs = fs.createReadStream(__dirname + '/file/sample.txt');
var ws = fs.createWriteStream(__dirname + '/file/copied.txt');

rs.pipe(ws);