var futils = require("../loader/loader.js");
futils.load_mod("storage");
futils.storage.get_database("test");


futils.storage.dbs.test.insert({name: "test", value: 123}, function(err, newDoc) {
        futils.storage.dbs.test.find({name: "test"}, function(err, docs) {
            if(docs.length > 0)
                console.log(docs);
                console.log("storage test passed");
            else
                console.log("failed!?!");
        });
});