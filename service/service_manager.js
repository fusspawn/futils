var futils = require("../loader/loader.js");
var fs = require("fs");
var path = require("path");

var Services = {
    _loaded_services: {}
    _service_definitions: require("defs.json");
};

Services.load_service = function(key) {
    if(_loaded_services[key] !== undefined)
        return _loaded_services[key];
    else 
        return load_service_and_store(key);
}; 

Services.load_service_and_store = function(key) 
{
    if(_service_definitions[key] === undefined) 
    {
        throw "invalid service defs: no def for: ", key);
    }
    else
    {
        var def = _service_definitions[key];
        for(var i in def.dependencys)  {
            futils.load_mod(def.dependencys[i]);
        }
        var serv = require(path.resolve(__dirname, def.path));
        if(def.autostart)
            serv.start();
        
        _service_definitions[key] = serv;
    }
};


