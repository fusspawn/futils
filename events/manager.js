eManager = {};
eManager.event_pools = {};

eManager.register_event_pool = function(pool) {
    if(eManager.event_pools[pool] !== undefined)
        return;
    else
        eManager.event_pools[pool] = [];
};

eManager.register_event_handler = function(pool, handler) {
    eManager.register_event_pool(pool);
    eManager.event_pools[pool].push(handler);
};

eManager.throw_event = function(pool, event, data, context) { 
    eManager.register_event_pool(pool);
    for(var i in eManager.event_pools[pool]) {
        var handler_func = eManager.event_pools[pool][i];
            handler_func.call(context, event, data);
    }
}

module.exports = eManager;