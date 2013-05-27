var futils = require("../loader/loader.js");
futils.load_mod("storage");
futils.load_mod("events");
futils.load_mod("webserver");
futils.load_mod("socketserver");
console.log("preloading done");



var t1 = require("./storage_test.js");
var t2 = require("./loader_test.js");
var t3 = require("./event_test.js");