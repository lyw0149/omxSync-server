var server = require('http').createServer();
var io = require('socket.io')(server);

var targetCount =1; //change this
var count =0;
var endCount =0;
io.on('connection', function(client){
  console.log(client.handshake.address,' connected');
  count = io.sockets.clients().server.eio.clientsCount;  
  console.log('Total count: ',count);
  
  if(count == targetCount){
    io.sockets.emit('play');
  }
    
  client.on('end', function(data){
    endCount ++;
    if(endCount == targetCount){
      io.sockets.emit('play');
      endCount = 0; 
    }
  });
  
  client.on('disconnect', function(client){
    count = io.sockets.clients().server.eio.clientsCount;
    console.log('Total count: ',count)
  });
});

server.listen(3000);
