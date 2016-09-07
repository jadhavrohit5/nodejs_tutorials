var mongoClient = require('mongodb').MongoClient;

mongoClient.connect('mongodb://localhost:27017/users',function(err, db){
    
    if(err)
    {
        console.log('Cannot connect db',err );
    }
    else
    {
        console.log('connection establish');
        var collection = db.collection('users');

    //Create some users
    var user1 = { index: 1, username: 'rohit', name: 'Rohit',password: 'rohit', createdAt: new Date()  };
    var user2 = { index: 2, username: 'admin', name: 'Admin',password: 'admin', createdAt: new Date()  };


    // Insert some users
    collection.insert([user1, user2], function (err, result) {
        if (err) {
            console.log(err);

            // Close connection
            db.close();
        } else {
            console.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:', result.result.n, result);

    }
    db.close();
    });
   }
});