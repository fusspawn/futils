var express = require('express'),
    app     = new express(),
    server  = require('http').createServer(app),
    io      = require('socket.io').listen(server),
    settings = require("./settings.js");

app.configure(function(){
  app.use(express.static(__dirname + '/public', {maxAge: 86400000}));
  app.use(express.compress());
});

app.__io_sockets_handle = io;
server.listen(settings.port);
module.exports = app;
