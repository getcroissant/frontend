var express = require('express');
var app = express();

app.use(express.static('public'));

//Redirect for front end routes
app.get('*', function(req, res) {
  return res.redirect('/#!' + req.originalUrl);
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Application started listening at http://%s:%s', host, port);
});