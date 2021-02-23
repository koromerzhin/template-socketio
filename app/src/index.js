var io = require('socket.io').listen(80);

io.sockets.on('connection', function (socket) {
  socket.on('ping', function (data) {
    socket.emit("pong", 'pong');
  });
});