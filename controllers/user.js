const conn = require("../lib/MongoUtils")

const getUser =(username,callback)=>{
    conn.then((client)=>{
        client
        .db("usersdb")
        .collection("users")
        .findOne({username})
        .then((result)=>{
            callback(result);
        });
    });
}

module.exports=getUser