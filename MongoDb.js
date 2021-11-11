var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb4";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb4");
    dbo.createCollection("student4", function (err, res) {
        if (err) throw err;
        var myobj = [{ name: "Anshul", company: "DELL" }, { name: "Prince", company: "HP" }, { name: "Deepak", company: "Asus" }, { name: "Sagar", company: "Lenovo" }, { name: "Gurjeet", company: "Apple" }];
        dbo.collection("student4").insertMany(myobj, function (err, res) {
            if (err) throw err;
            console.log("Database created!!😄");
            db.close();
        })
    });
});

