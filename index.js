const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
  });

  io.on('connection', function(socket){
    socket.on('chatMsg', function(msg){
      io.emit('chatMsg', msg);
    });
  });

http.listen(3000, function(){
  console.log('listening on *:3000');
});