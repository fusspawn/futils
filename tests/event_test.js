var util = require("util");
var futils = require("../loader/loader.js");
futils.load_mod("events");



var event_fired = false;
futils.events.register_event_pool("test");
futils.events.register_event_handler("test",  function(event, data) {
    if(event == "test")
        event_fired = true;
});


futils.events.throw_event("test", "test", {}, this);
setTimeout(function() {
    if(!event_fired)
        throw "event test failed";
}, 500);


var context = {context_test: 123};
var context_event_okay = false;
futils.events.register_event_pool("context-test");
futils.events.register_event_handler("context-test", function(event, data) {
    if(event == "context" && this.context_test == 123)
        context_event_okay = true;
});
futils.events.throw_event("context-test", "context", {}, context);
setTimeout(function() {
    if(!context_event_okay)
        throw "event test context failed";
}, 500);