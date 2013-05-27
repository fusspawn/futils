var futils = require("../loader/loader.js");
var fs = require("fs");
var path = require("path");

var Services = {
    _loaded_services: {},
    _service_definitions: require(path.resolve(__dirname, "./defs.json"))
};

Services.load_service = function(key) {
    console.log("attempting to load service ", key);
    if(Services._loaded_services[key] !== undefined)
        return Services._loaded_services[key];
    else 
        return Services.load_service_and_store(key);
}; 

Services.init = function() {
    
    for(var i in Services._service_definitions) {
        if(Services._service_definitions[i].autostart)
            Services.load_service(i);
    }
}

Services.load_service_and_store = function(key) 
{
    if(Services._service_definitions[key] === undefined) 
    {
        throw "invalid service defs: no def for: " + key;
    }
    else
    {
        var def = Services._service_definitions[key];
        for(var i in def.dependencys)  {
            futils.load_mod(def.dependencys[i]);
        }
        console.log("loaded deps");
            
        var serv = require(path.resolve(__dirname, def.path));
        if(def.autostart) {
            console.log("auto starting");
            serv.start();
        }
        Services._service_definitions[key] = serv;
    }
};

module.exports = Services;
