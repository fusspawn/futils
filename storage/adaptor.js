var db_layer = require("nedb");
var path = require("path");
var storage = {};
storage.dbs = {};
storage.get_database = function(db_name) {
    if(storage.dbs[db_name] !== undefined)
        return storage.dbs[db_name];
    else {
        storage.dbs[db_name] = new db_layer(path.resolve(__dirname, "./data/" + db_name));
        storage.dbs[db_name].loadDatabase(function(err) {
            if(err)
                throw err;
        });
    }
};
module.exports = storage;