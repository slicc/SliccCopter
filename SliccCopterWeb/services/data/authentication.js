(function(authentication) {
	
	var mongodb = require("mongodb");
	var mongoUrl = "mongodb://localhost:27017/theBorad";
	var theDb = null;
	
	authentication.getDb = function (next) {
        if (!theDb) {
          //connect to db
          mongodb.MongoClient.connect(mongoUrl, function (err, db){
              if (err) {
                  next (err, null);
              } else {
                  theDb = {
                      db: db,
                      users: db.collection("users")
                  };
                  next(null, theDb);
              }
          });
        }else {
            next(null, theDb);
        }
	};
	
	authentication.authenticateUser = function (next) {
        authentication.getDb(function (err, db) {
           if (err) {
               console.log("Fail to get database: " + err);
               next(err, null);
           } else {
               //authenticate user
               db.users.count(function(err, count){
                   if (err) {
                        next(err, null);
                        console.log("Failed to retrieve users count: " + err);
                   }else {
                        db.users.find( { userName: "bob" } ).toArray(function (err, results) {
                           if (err) {
                                console.log("Failed to retrieve users: " + err);
                           }  else {
                                next(null, results);
                           }
                        });
                   }
               });
           }
        });
	};

})(module.exports);