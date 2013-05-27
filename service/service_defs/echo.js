var futils = require("../../loader/loader.js");


var s = {
    start: function() {
        futils.webserver.get("/echo", function(req, res) {
            res.send(req.body);
        });
        
        futils.socketserver.on('connection', function(socket) {
            socket.on("echo", function(data) { 
                socket.emit("echo", data);
            });
        });
        
        futils.rpcserver.register_command("echo", function(data, sender) {
             return data;
        });
        
        console.log("Echo Service Installed");
    },
};

module.exports = s;
console.log("echo_server: initialize");