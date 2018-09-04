/* importar as configurações do servidor */
var app = require('./config/server');

var MongoClient = require('mongodb').MongoClient;
var _uri = "mongodb://root:adir9588@cluster0-shard-00-00-d4wbe.gcp.mongodb.net:27017/admin?ssl=true";

MongoClient.connect(_uri, {useNewUrlParser:true},  
   {poolSize: 10}, async function(err, db) { app.set('mongoDB', await db);});
  
/* parametrizar a porta de escuta */
app.listen(80, function(){
	console.log('Servidor online');
});