var express = require('express');
//var path = require('path')


var app = express();

app.get('/', function(req, res) {	
   res.send('Hello World @\n' + req.connection.remoteAddress);
});
var port = process.env.PORT || 8080;

app.listen(port);
console.log('Server listening at port: ' + port);

/*
app.use("/css",  express.static(__dirname + '/css'));
app.use("/js", express.static(__dirname + '/js'));


app.set('port', process.env.PORT || 8080);

app.get('/', function(req, res) {	
   res.send('Hello World @\n' + req.connection.remoteAddress);
});

app.get('/index', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/hello.txt', function(req, res){
    var body = 'Hello World. It\'s me';
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', body.length);
    res.end(body);
});

var listener = app.listen(app.get('port'), function() {
  console.log( listener.address().port );
});

*/