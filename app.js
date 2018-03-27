var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req,res){
    fs.readFile('./index.html',function(error,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data,'utf-8');
    });
}).listen(8000,"192.168.147.131");
console.log('Server running at http://192.168.147.131:8000/');

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
 
// 向客户端发送信息
    socket.emit('test_news', { hello:'world' });

// 接收客户端信息并广播出去
    socket.on('broadcast', function(data){
        socket.emit('broadnews', data);
        socket.broadcast.emit('broadnews', data);
    });
});


    
