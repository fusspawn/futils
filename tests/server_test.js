var futils = require("../loader/loader.js");
var path = require("path");

futils.load_mod("webserver");
futils.load_mod("socketserver");
futils.load_mod("rpcserver");

futils.webserver.get("/test", function(req, res) { 
    res.sendfile(path.resolve(__dirname, "../webserver/public/testclient.html"));
});
                     
futils.socketserver.on('connection', function (socket) {
  socket.on('echo', function (data) {
    socket.emit('echo', data);
  });
});


futils.rpcserver.register_command("add", function(data) {
    console.log(data);
    return data.arguments.a + data.arguments.b;
});