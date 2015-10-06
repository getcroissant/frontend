var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Application started listening at http://%s:%s', host, port);
});