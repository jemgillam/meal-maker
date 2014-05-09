var express = require('express');
var app = express();
var serveStatic = require('serve-static');

app.get('/hello.txt', function(req, res){
  res.send('Hello World');
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});


app.use(serveStatic('public', {'index':['index.html']}));
app.listen();