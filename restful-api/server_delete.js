var express = require('express');
var app = express();
var fs = require('fs');


//删除用户数据
app.get('/deleteUser', function (req, res) {

  // First read existing users.
  fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
    data = JSON.parse( data );
    delete data["user" + 2];

    console.log( data );
    res.end( JSON.stringify(data));
  });
})
var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('应用实例，访问实例为 http://%s:%s', host ,port)
})