var express = require('express'),
    app     = new express(),
    server  = require('http').createServer(app),
    io      = require('socket.io').listen(server)

app.configure(function(){
  app.use(express.static(__dirname + '/public', {maxAge: 86400000}));
  app.use(express.compress());
});

app.__io_sockets_handle = io;
server.listen(80);
module.exports = app;
