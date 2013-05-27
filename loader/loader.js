var path = require("path");
var utils = require("util");

fUtils = {};
fUtils.mod_paths = {
    storage: {path: path.resolve(__dirname, "../storage/adaptor.js")},
    events: {path: path.resolve(__dirname, "../events/manager.js")},
    procedural: {path: path.resolve(__dirname, "../procedural/proc.js")},
    webserver: {path: path.resolve(__dirname, "../webserver/server.js")},
    socketserver: {path: path.resolve(__dirname, "../socketserver/server.js")},
    rpcserver: {path: path.resolve(__dirname, "../rpc/server.js")},
    _: {path: path.resolve(__dirname, "../underscore/shim.js")},
    service: {path: path.resolve(__dirname, "../service/service_manager.js"), call_init: true}
};

fUtils.load_mod = function(mod) {
    if(fUtils[mod]) {
        console.log("mod: ", mod, " requested but already loaded.");
        return;
    } else {
        console.log("loading module: ", mod);
        fUtils[mod] = require(fUtils.mod_paths[mod].path);
        if(fUtils.mod_paths[mod].call_init == true) {
            fUtils[mod].init();
        }
    }    
};

module.exports = fUtils;