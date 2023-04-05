import { MongoClient } from 'mongodb';
var url = "mongodb://0.0.0.0:27017/testDatabase";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});