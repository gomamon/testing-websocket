
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
//initalize a new instance of socket.io by passing http object

app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.html');
});

io.on('connection',function(socket){
	socket.on('chat message',function(msg){
		io.emit('chat message', msg);
	});

});
//listen on the connection event for incoming sockets, and I log it to the console.

http.listen(3000, function(){
	console.log('listening on *:3000');
});


