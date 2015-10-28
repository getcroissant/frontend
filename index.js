var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

//Redirect for front end routes
app.get('*', function(req, res) {
  return res.redirect('/#!' + req.originalUrl);
});

var port = process.env.PORT || 3000;

var server = app.listen(port, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Application started listening at http://%s:%s', host, port);
});