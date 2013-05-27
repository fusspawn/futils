var path = require("path");
var utils = require("util");

fUtils = {};
fUtils.mod_paths = {
    storage: path.resolve(__dirname, "../storage/adaptor.js"),
    events: path.resolve(__dirname, "../events/manager.js"),
    procedural: path.resolve(__dirname, "../procedural/proc.js"),
    webserver: path.resolve(__dirname, "../webserver/server.js"),
    socketserver: path.resolve(__dirname, "../socketserver/server.js"),
    rpcserver: path.resolve(__dirname, "../rpc/server.js"),
};
fUtils.load_mod = function(mod) {
    if(fUtils[mod]) {
        console.log("mod: ", mod, " requested but already loaded.");
        return;
    } else {
        console.log("loading module: ", mod);
        fUtils[mod] = require(fUtils.mod_paths[mod]);
    }    
};
module.exports = fUtils;