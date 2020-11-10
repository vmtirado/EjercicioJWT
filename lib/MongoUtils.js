const {MongoClient} =require('mongodb') // Require de mongo devuelve un objeto
const url="mongodb://localhost:27017";
const conn = MongoClient.connect(url,{useUnifiedTopology: true});
console.log(conn)

module.exports =conn;