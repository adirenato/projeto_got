dbconnection =  async function(){
 
var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://root:adir9588@cluster0-shard-00-00-d4wbe.gcp.mongodb.net:27017/admin?ssl=true";
var db;
  
  	var test = await MongoClient.connect(uri, {useNewUrlParser : true}, function(err, client){
    if(err) throw console.log("*******" + err);   
       return  client;
      //collection = client.db("got").collection("usuarios");
      //collection.insertOne({usuario : "Adir",  msg: "teste de conexão"}) ;
    });
  console.log("db " +test);
  return db;      
         
}

module.exports = function(){
	dbconnection();
}