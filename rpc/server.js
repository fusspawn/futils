var futils = require("../loader/loader.js");
futils.load_mod("socketserver");

var RPC = {};
RPC.method_cache = {};

RPC.register_command = function(key, func) {
    RPC.method_cache[key] = func;
    console.log("RPC: command \"", key, "\"");
};

RPC.incoming_remote_call = function(data, sender) {
    sender.emit("rpc",  {rpc_index: data.rpc_index, response: RPC.method_cache[data.key].call(this, data, sender)});
} 

futils.socketserver.on("connection", function(socket){
    socket.on("rpc", function(data) { RPC.incoming_remote_call(data, socket) });
});


module.exports=RPC;